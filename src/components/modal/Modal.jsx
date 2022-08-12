/** @format */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalState } from '../../App'
import { setModal } from '../../redux/slice/authSlice'
import style from './Modal.module.scss'

const Modal = ({ children }) => {
  const { modal } = useSelector(state => state.authSlice)
  const dispatch = useDispatch()

  const toggleModal = () => {
    dispatch(setModal(false))
  }
  return (
    <div
      className={modal ? style.containerActive : style.container}
      onClick={() => toggleModal()}
    >
      <div className={style.popap} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
