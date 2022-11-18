import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem } from "../../helpers/useLocalStorage";

export interface CartAdd {
  name: string;
  priceFetch: number;
}

export interface CartRemove {
  name: string;
}

const initialState: CartAdd[] = getItem("cart") || [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<CartAdd>) => {
      const { name } = action.payload;
      const itemFind = state.filter((item) => item.name === name);
      if (!state.length || !itemFind.length) {
        state.push(action.payload);
      }
    },
    RemoveToCart: (state, action: PayloadAction<CartRemove>) => {
      const { name } = action.payload;
      if (state.some((item) => item.name === name)) {
        return state.filter((item) => item.name !== name);
      }
    },
  },
});

export const { AddToCart, RemoveToCart } = cartSlice.actions;
