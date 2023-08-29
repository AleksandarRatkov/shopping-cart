import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createSelector } from 'reselect';

export const STATUSES = Object.freeze({
    IDLE: "idle",
    FAILED: "failed",
    LOADING: "loading",
    SUCCEEDED: "succeeded",
});

const initialState = {
    products: [],
    filter: '',
    isCartDropdownShown: false,
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
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setIsCartDropdownShown: (state, action) => {
            state.isCartDropdownShown = action.payload;
        }
    },
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
export const { setFilter, setIsCartDropdownShown } = productsSlice.actions
export const selectAllProducts = (state) => state.products.products
export const selectFilter = (state) => state.products.filter
export const selectIsCartDropdownShown = (state) => state.products.isCartDropdownShown

export const selectFilteredProducts = createSelector(
    [selectAllProducts, selectFilter],
    (products, filter) => {
        return products.filter(product =>
            product.title.toLowerCase().includes(filter.toLowerCase())
        );
    }
);

export default productsSlice.reducer