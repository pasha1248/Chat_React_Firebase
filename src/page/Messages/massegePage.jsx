/** @format */

import React from 'react'
import Chat from '../../components/Chat/Chat'
import Message from '../../components/message/Message'
import Navbar from '../../components/Navbar/Navbar'
import '../../index.css'
import style from './messagePage.module.scss'

const massagePage = () => {
  return (
    <div className={style.content}>
      <Navbar />

      <div className={style.chat}>
        <Message />
        <Chat />
      </div>
    </div>
  )
}

export default massagePage
