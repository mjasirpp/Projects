import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from './RestaurantSlice'

const store = configureStore({
    reducer:{
        restaurantSlice
    }
})
export default store