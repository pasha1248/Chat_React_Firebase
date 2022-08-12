/** @format */

import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './redux/Store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// const auth = firebase.auth()
// const firestore = firebase.firestore()

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider
        value={{
          
        }}
      >
        <App />
      </Context.Provider>
    </Provider>
  </React.StrictMode>
)
