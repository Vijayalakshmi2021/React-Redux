/* eslint-disable react-refresh/only-export-components */
import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'

export default configureStore({
  reducer: {
    cart :  CartSlice
  },
})