import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './slice';
// import itemReducer from './itemSlice';?
// import productReducer from "../redux/productSlice";

const store = configureStore({
    reducer:{
        // cart:cartReducer,
        // products: productReducer
    }

});
// console.log("reducer",store.getState())

export default store;