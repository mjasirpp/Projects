import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


export const store = configureStore({
    reducer:{
        // reducer should be key value pair
        counter : CounterSlice
    }
})