import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (data) => data.id === action.payload.id
            );
            if (existingItem) {
                // If the item exists, increase the quantity
                existingItem.quantity += 1;
            } else {
                // If the item doesn't exist, add it with quantity 1
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart : (state, action) => {
            state.cartItems = state.cartItems.filter(
                (data) => data.id !== action.payload.id 
            )
        },
        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (data) => data.id === action.payload.id
            )
            if ( itemIndex >= 0){
                state.cartItems[itemIndex].quantity += 1
            }
        },
        decreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (data) => data.id === action.payload.id
            )
            if ( itemIndex >= 0 && state.cartItems[itemIndex].quantity >1){
                state.cartItems[itemIndex].quantity -= 1
            }else if(state.cartItems[itemIndex].quantity === 1){
                state.cartItems = state.cartItems.filter(
                    (data) => data.id !== action.payload.id
                )
            }
        },
    }
})   

export const {addToCart, removeFromCart, increaseQuantity, decreaseQuantity} =cartSlice.actions
export default cartSlice.reducer