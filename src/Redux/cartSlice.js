import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: [],
    cartAmountTotal: 0
}



const cartSlice = createSlice({

    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload)
        },
        remove: (state, action) => {
            state.cartItems = state.cartItems.filter((c) => c._id !== action.payload._id)
        },
        cartQty: (state, action) => {
            state.cartTotalQuantity= action.payload

        }
    }

})

export const { addToCart, remove, cartQty } = cartSlice.actions

export default cartSlice.reducer
