/** @format */

import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './redux/Store'
import Login from './components/Login/Login'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { authAction } from './redux/slice/authSlice'
import { auth } from './firebase'
import Loader from './components/loader/Loader'

export const ModalState = React.createContext(null)

function App() {
  const { isAuth } = useSelector(state => state.authSlice)

  const dispatch = useDispatch()
  const [user, loading, error] = useAuthState(auth)

  React.useEffect(() => {
    if (user) {
      const { displayName, email, photoURL } = user

      dispatch(authAction({ displayName, email, photoURL }))
    }
  }, [user])

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        {isAuth ? (
          <div className='App'>
            <Header />
            <AppRouter />
          </div>
        ) : (
          <div className='login'>
            <Login />
          </div>
        )}
      </BrowserRouter>
    </>
  )
}

export default App
