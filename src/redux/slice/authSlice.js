/** @format */

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isAuth: false,
  userData: {},
  modal: false,
}

const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    authAction(state, actions) {
      state.isAuth = true
      state.userData = actions.payload
    },
    logOutAction(state) {
      state.isAuth = false
    },
    setModal(state, actions) {
      state.modal = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { authAction, setModal, logOutAction } = authSlice.actions

export default authSlice.reducer
