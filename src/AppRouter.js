/** @format */

import { Route, Routes, useNavigate } from 'react-router-dom'

import React from 'react'
import { privateRoutes, publicRoutes } from './routes'
import { useDispatch, useSelector } from 'react-redux'
import authSlice, { authAction, logOutAction } from './redux/slice/authSlice'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './index'

const AppRouter = () => {
  const { isAuth } = useSelector(state => state.authSlice)

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, Component }, id) => (
        <Route path={path} key={id} element={<Component />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }, id) => (
        <Route path={path} key={id} element={<Component />} />
      ))}
    </Routes>
  )
}

export default AppRouter
