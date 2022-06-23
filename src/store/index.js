import { configureStore } from "@reduxjs/toolkit";
import collectionReducer from './collection/collection';

export default configureStore({
    reducer: {
        collection: collectionReducer
    }
})