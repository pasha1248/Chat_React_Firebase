/** @format */

import React from 'react'
import style from './Message.module.scss'
import avatar from '../../assets/nam.jpg'

const MessageItem = () => {
  return (
    <div className={style.item}>
      <div>
        <img src={avatar} alt='avatar' height={70} />
      </div>
      <div></div>
    </div>
  )
}

export default MessageItem
