/** @format */

/** @format */

import React from 'react'
import { firestore, auth, db } from '../../firebase'
import style from './Chat.module.scss'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from '../loader/Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore'

const Chat = () => {
  const [value, setValue] = React.useState('')
  const [message, setMessage] = React.useState([])
  const [user] = useAuthState(auth)

  const sendMessage = async () => {
    if (value.length) {
      const { uid, displayName } = auth.currentUser
      await addDoc(collection(db, 'message'), {
        text: value,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      })
      setValue('')
    }
  }

  React.useEffect(() => {
    const q = query(collection(db, 'message'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let messages = []
      querySnapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id })
      })
      setMessage(messages)
    })
    return () => unsubscribe()
  }, [])

  // if (loading) {
  //   return <Loader />
  // }

  return (
    <div className={style.container}>
      <div className={style.chat}>
        {message.map(el => (
          <div
            key={el.id}
            className={style.message}
            style={{
              background: user.uid === el.uid ? 'blue' : 'gray',
              marginLeft: user.uid === el.uid ? 'auto' : '10px',
            }}
          >
            <div>{el.text}</div>
          </div>
        ))}
      </div>

      <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default Chat
