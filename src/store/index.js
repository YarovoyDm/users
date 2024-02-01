import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersSlice from './reducers/usersReducer';

const rootReducer = combineReducers({
    users: usersSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});