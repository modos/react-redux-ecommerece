import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    count: 0,
    cost: 0,
    cart: []
  },
  reducers: {
    productAdded(state, action) {
        state.cart.push(action.payload)
        state.count += 1
        state.cost += action.payload.price
    },
    checkout(state, action) {
      state.cart = []
      state.count = 0;
    },
    remove (state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
      state.count -= 1
      state.cost -= action.payload.price
    }
  }
})

export const { productAdded, checkout, remove } = cartSlice.actions
export default cartSlice.reducer