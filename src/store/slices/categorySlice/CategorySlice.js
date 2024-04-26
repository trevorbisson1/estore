import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Men's","Women's","Kid's","Best Deals!","All"];

const categorySlice = createSlice({
    name:"Category",
    initialState

});

export default categorySlice;