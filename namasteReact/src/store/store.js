import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";

const Store = configureStore({
    reducer:{
        cart: cartSlice,
        user: userSlice,
    },
});
export default store;