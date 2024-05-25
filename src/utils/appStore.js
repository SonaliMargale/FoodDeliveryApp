import { configureStore} from "@reduxjs/toolkit";
import cardReducer from "./CartSlice"

const appStore = configureStore({
    reducer: {
        cart:cardReducer,
    },
})
export default appStore;