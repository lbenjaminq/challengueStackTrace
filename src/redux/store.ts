import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./Slices/CartSlice";

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
