import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems : [],
    totalItemsPrice : 0,
    totalItems : 0,
    totalQuantity : 0
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers:{
        addCartItem : (state,action)=>{
            let item_exist = state.cartItems.find((item) =>item.pImg === action.payload.pImg);
            state.cartItems = [...state.cartItems, action.payload];
            state.totalQuantity = ++state.totalQuantity;
            state.totalItemsPrice = state.totalItemsPrice + action.payload.pPrice;
            
            if(!item_exist)
            {
                state.totalItems = ++state.totalItems;
            }
        }
    }
})

export const {addCartItem} = cartSlice.actions;
export default cartSlice.reducer;