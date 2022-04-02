import { configureStore } from '@reduxjs/toolkit'
import cartReucder from './features/cartSlice'
export default configureStore({
  reducer: {
      cart: cartReucder
  }
})