import { DECREMENT_COUNT } from "./counterTypes";

export const decrementCount = ()=> {
    return{
        type: DECREMENT_COUNT
    }
}