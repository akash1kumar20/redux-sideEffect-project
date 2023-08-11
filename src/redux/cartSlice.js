import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = {
  showCart: true,
  quantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    callCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
