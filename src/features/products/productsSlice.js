import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const STATUSES = Object.freeze({
    IDLE: "idle",
    FAILED: "failed",
    LOADING: "loading",
    SUCCEEDED: "succeeded",
});

const initialState = {
    products: [],
    status: STATUSES.IDLE,
    error: null,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://my-json-server.typicode.com/brankostancevic/products/products')
    return response.json()
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = STATUSES.SUCCEEDED
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.FAILED
                state.error = action.error.message
            })
    }
})

export const selectAllProducts = (state) => state.products.products

export default productsSlice.reducer