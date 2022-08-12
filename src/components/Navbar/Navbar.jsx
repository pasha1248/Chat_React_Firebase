/** @format */

import React from 'react'
import style from './Navbar.module.scss'
import { BsSearch } from 'react-icons/bs'
import { BiBell } from 'react-icons/bi'
import avatar from '../../assets/nam.jpg'
import Modal from '../modal/Modal'
import { ModalState } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction, setModal } from '../../redux/slice/authSlice'
import { auth } from '../../firebase'
import { signOut } from 'firebase/auth'

const Navbar = () => {
  const { modal, userData } = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(setModal(true))
  }
  const logOut = () => {
    signOut(auth)
    dispatch(logOutAction())
    dispatch(setModal(false))
    window.location.reload()
  }

  React.useEffect(() => {}, [])

  return (
    <div className={style.container}>
      <div className={style.inputSherch}>
        <BsSearch style={{ fontSize: '25px', margin: '10px' }} />
        <input type='text' placeholder='Search from Message' />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BiBell style={{ margin: '20px', fontSize: '25px' }} />
        <div className={style.imageSize} onClick={() => toggleModal()}>
          <img
            src={userData.photoURL}
            alt='avatar'
            height={40}
            style={{ borderRadius: '13px' }}
          />
          {userData.displayName}
        </div>
      </div>
      <Modal>
        <button className={style.modalButton} onClick={logOut}>
          Log Out
        </button>
      </Modal>
    </div>
  )
}

export default Navbar
