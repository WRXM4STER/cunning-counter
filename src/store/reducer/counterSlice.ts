import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRandom } from "../../utils/random";

interface ICounter {
    counter:number,
    seconds:number,
    array:number[]
}

const initialState:ICounter = {
    counter:0,
    seconds:0,
    array:[]
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers: {
        increment:(state:ICounter) => {
            state.counter++
        },
        updateSeconds:(state, action:PayloadAction<number>) => {
            state.seconds += action.payload
        },
        updateArray:(state) => {
            state.array = [...state.array, getRandom()]
        }
    }
})

export default counterSlice.reducer