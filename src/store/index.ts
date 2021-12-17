import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counterSlice";

const rootReducer = combineReducers({
    counterSlice
})

const setupStore = () => {
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
    })
}

export const store = setupStore()


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']