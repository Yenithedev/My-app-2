import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./Counterslice"
import todosSlice from "./Todoslice"

export const store = configureStore({
    reducer: {
        counter : counterSlice,
        todos : todosSlice





        
    }
})
