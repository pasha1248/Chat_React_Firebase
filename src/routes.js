/** @format */

import Login from './components/Login/Login'
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts'
import messagePage from './page/Messages/massegePage'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
]
export const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: messagePage,
  },
]
