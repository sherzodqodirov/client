import {configureStore} from "@reduxjs/toolkit";
import planeReducer from "./slice/planesSlice.js";
import oneplaneReducer from "./slice/oneplaneSlice.js";
export const store=configureStore({
    reducer:{
        planesdata:planeReducer,
        oneplane:oneplaneReducer,
    }
})