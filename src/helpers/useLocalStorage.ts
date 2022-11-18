import { CartAdd } from "../redux/Slices/CartSlice";

export const getItem = (key: string) => {
  return JSON.parse(window.localStorage.getItem(key)!);
};

export const setItem = (key: string, data: CartAdd[]) => {
  return window.localStorage.setItem(key, JSON.stringify(data));
};
