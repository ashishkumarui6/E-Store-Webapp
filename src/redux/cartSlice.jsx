import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
  },
});

export const { addTocart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
