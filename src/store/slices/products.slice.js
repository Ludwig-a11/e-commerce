import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const productSlice = createSlice({
  name: 'products',
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload
  }
})

export const { setProducts } = productSlice.actions

export default productSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/products'
  return axios
    .get(URL)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .catch((err) => console.log(err))
}
