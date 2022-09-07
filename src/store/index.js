import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products.slice'
import loginSlice from './slices/login.slice'

export default configureStore({
  reducer: {
    products,
    loginSlice
  }
})
