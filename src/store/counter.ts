import { makeAutoObservable } from "mobx";
import { getRandom } from "../utils/random";

class Counter {

    count:number = 0
    seconds:number = 0
    array:number[] = []

    constructor () {
        makeAutoObservable(this)
    }

    increment () {
        this.count += 1
    }

    updateSeconds (payload:number) {
        this.seconds += payload
    }
    
    updateArray() {
        this.array = [...this.array, getRandom()]
    }

}

export default new Counter()