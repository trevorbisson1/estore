import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initialState = {
    categories:[],
    status:"idle",
    error: ""
}

const categorySlice = createSlice({
    name:"Category",
    initialState,
    reducers:{}

});

export default categorySlice.reducer;