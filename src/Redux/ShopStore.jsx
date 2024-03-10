import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Slices/ProductsSlice";
import CartSlice from "./Slices/CartSlice";
import AuthSlice from "./Slices/AuthSlice";
import WishSlice from "./Slices/WishSlice";

const store = configureStore({
  reducer: {
    Products: ProductsSlice,
    cart: CartSlice,
    wish: WishSlice,
    user: AuthSlice,
  },
});
export default store;
