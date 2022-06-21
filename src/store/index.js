import { configureStore } from "@reduxjs/toolkit";
import detailReducer from './detail/detail';

export default configureStore({
    reducer: {
        detail: detailReducer
    }
})