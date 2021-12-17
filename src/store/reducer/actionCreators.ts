import { AppDispatch } from "..";
import { counterSlice } from "./counterSlice";

export const updateArray = () => async (dispatch:AppDispatch) => {
    dispatch(counterSlice.actions.updateArray())
}

export const updateSeconds = (seconds:number) => async(dispatch:AppDispatch) => {
    dispatch(counterSlice.actions.updateSeconds(seconds))
}

export const increment = () => async (dispatch:AppDispatch) => {
    dispatch(counterSlice.actions.increment())
}