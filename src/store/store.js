import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./todoSlice";
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, cart: cartSlice.reducer },
});

export default store;
