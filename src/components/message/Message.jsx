/** @format */

import React from 'react'
import style from './Message.module.scss'
import MessageItem from './MessageItem'

const Message = () => {
  return (
    <div className={style.container}>
      <h2>Message</h2>
      <div>
        <MessageItem />
        <MessageItem />

        <MessageItem />

        <MessageItem />

        <MessageItem />

        <MessageItem />
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  )
}

export default Message
