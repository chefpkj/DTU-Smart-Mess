import { configureStore } from "@reduxjs/toolkit";
import triggerSlice from "./dbSlice";

const store=configureStore({
    reducer:{
        cart:triggerSlice

    },

});

export default store;
