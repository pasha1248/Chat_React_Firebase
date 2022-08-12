/** @format */

import React from 'react'
import { Context } from '../..'
import style from './Login.module.scss'
import firebase from 'firebase/compat/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { authAction } from '../../redux/slice/authSlice'

const Login = () => {
  const googleSingIn = () => {}
  const dispatch = useDispatch()

  const login = async () => {
    try {
      const provider = new GoogleAuthProvider()
      signInWithRedirect(auth, provider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={style.container}>
      <h1>Login</h1>
      <input type='text' />
      <input type='text' />
      <div className={style.buttonSide}>
        <button>Registration</button>
        <button onClick={login}>GOOGLE</button>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login
