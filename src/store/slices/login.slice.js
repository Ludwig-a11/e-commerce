import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: false,
  reducers: {
    setLogin: (state, action) => action.payload
  }
})

export const { setLogin } = loginSlice.actions

export default loginSlice.reducer
