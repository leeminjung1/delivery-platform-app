import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import storeReducer from "./slices/storeSlice";

const store = configureStore({
  reducer: { auth: authReducer, store: storeReducer },
});

export default store;
