// ✨ create your `store` in this module
import { configureStore } from "@reduxjs/toolkit";
import quoteState from "./quotesSlice"

export const store = configureStore({
    reducer: {
        quoteState : quoteState
    }
})
