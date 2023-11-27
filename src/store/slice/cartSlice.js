import { createSlice } from "@reduxjs/toolkit";
//import CartProduct from "../../types/CartProduct";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    AddToCart: (state=initialState, action) => {
       
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
     
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          itemInCart.quantity++;
        }
      } else {
        console.log("*************",state.cart)
        state.cart.push(action.payload);
      }
    },
  },
});
export const { AddToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;