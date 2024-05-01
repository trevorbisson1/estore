import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../Category/CategorySlice";

export const store = configureStore({
    reducer:{
        categoryReducer : CategorySlice
    }
  
  })
   