import { createSlice } from "@reduxjs/toolkit";
const cartInitialState = {
  showCart: false,
  items: [],
  totalItem: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    callCart(state) {
      state.showCart = !state.showCart;
      //mutable code but redux-toolkit convert into immutable code
    },

    decrease(state, action) {
      const id = action.payload;
      state.totalItem--;
      const alreadyPresentItem = state.items.find((item) => item.id === id);
      if (alreadyPresentItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        alreadyPresentItem.quantity--;
      }
    },
    addToCart(state, action) {
      const newItem = action.payload;
      state.totalItem++;
      const alreadyPresentItem = state.items.find(
        (item) => item.id === newItem.id
      );

      if (!alreadyPresentItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
        });
      } else {
        alreadyPresentItem.quantity++;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
