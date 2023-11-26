import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart(state, action) {
      state.cart.push(action.payload);
    },
  },
});

const { actions, reducer } = cartSlice;
export const { addCart } = actions;
export default reducer;
