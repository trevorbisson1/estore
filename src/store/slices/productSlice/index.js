import { createSlice } from "@reduxjs/toolkit";


const initialState = [

    {
        pName:"Jacket",
        pPrice:65,
        pImg: "shop-1.jpg"
    },
    {
        pName:"Purse",
        pPrice:205,
        pImg: "shop-2.jpg"
    },
    {
        pName:"Dress",
        pPrice:85,
        pImg: "shop-3.jpg"
    },
    {
        pName:"Distressed Jeans",
        pPrice:43,
        pImg: "shop-4.jpg"
    },
    {
        pName:"Boots",
        pPrice:315,
        pImg: "shop-5.jpg"
    },
    {
        pName:"Ugly Backpack",
        pPrice:117,
        pImg: "shop-6.jpg"
    },
];

const productSlice = createSlice({
    name:"products",
    initialState
})

export default productSlice;