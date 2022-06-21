import { createSlice } from "@reduxjs/toolkit";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        id: 0,
    },
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const { setId } = detailSlice.actions;
export default detailSlice.reducer;