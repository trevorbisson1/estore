import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/CategorySlice";
import CartSlice from "../Cart/CartSlice";

export const store = configureStore({
    reducer:{
        categoryReducer : CategorySlice,
        cr : CartSlice
    }
  
  })
   