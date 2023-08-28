import { createSlice } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: "idle",
    FAILED: "failed",
    LOADING: "loading",
    SUCCEEDED: "succeeded",
});

const initialState = {
    cartItems: [],
}

const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemInCart = state.cartItems.find((item) => item.id === action.payload.item.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cartItems.push({ ...action.payload.item, quantity: 1 });
            }
        },
        quantityChanged: (state, action) => {
            const { id, quantity } = action.payload
            const item = state.cartItems.find((item) => item.id === id);
            item.quantity = quantity
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
    },
})

export const selectAllCartItems = (state) => state.cart.cartItems
export const selectAllCartItemsCount = (state) => {
    return state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
}
export const selectCartTotal = (state) => {
    return state.cart.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
}
export const { addToCart, removeFromCart, quantityChanged } = cartSlice.actions;

export default cartSlice.reducer