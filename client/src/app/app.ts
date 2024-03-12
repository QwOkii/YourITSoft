import { configureStore } from "@reduxjs/toolkit"
import {Todo} from './todo'
import {useDispatch} from "react-redux";
export const store = configureStore({
    reducer:{
        Todo
    }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()