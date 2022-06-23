import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collection: localStorage.getItem('collection') ? JSON.parse(localStorage.getItem('collection')) : [],
    },
    reducers: {
        setCollection: (state, action) => {
            state.collection.push(action.payload);
            localStorage.setItem('collection', JSON.stringify(state.collection));
        }
    }
})

export const { setCollection } = collectionSlice.actions;
export default collectionSlice.reducer;