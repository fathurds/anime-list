import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        collection: localStorage.getItem('collection') ? JSON.parse(localStorage.getItem('collection')) : [],
    },
    reducers: {
        setNewCollectionRedux: (state, action) => {

            let temp;
            state.collection.map((el, i) => {
                if (el.name === action.payload.name) {
                    temp = i;
                }
            })
            if (temp >= 0) {
                state.collection.splice(temp, 1);
            }
            state.collection.push(action.payload);
            localStorage.setItem('collection', JSON.stringify(state.collection));
        }
    }
})

export const { setNewCollectionRedux } = collectionSlice.actions;
export default collectionSlice.reducer;