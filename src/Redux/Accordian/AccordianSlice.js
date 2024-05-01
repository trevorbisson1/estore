import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Men's",
        items:["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        category: "Women's",
        items:["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        category: "Kid's",
        items:["Coats","Jackets","Party Wear","Shirts"]
    }
];


const accordianSice = createSlice({
    name: "accordianAlice",
    initialState
})

export default accordianSice;