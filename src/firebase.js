/** @format */

import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

//
//
//
//
//
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'chat-react-test-100e6.firebaseapp.com',
  projectId: 'chat-react-test-100e6',
  storageBucket: 'chat-react-test-100e6.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: '1:393439687631:web:b7f90c67f41c5d66cfd8ba',
  measurementId: process.env.REACT_APP_ID,
}

// Import the functions you need from the SDKs you need
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

//
export const firestore = getStorage(app)
export const db = getFirestore(app)
// Initialize Firebase
