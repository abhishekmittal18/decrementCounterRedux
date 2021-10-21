import { DECREMENT_COUNT } from "./counterTypes";

const initialState = {
    num: 20
}

const countReducer = (state=initialState, action) => {
    switch(action.type){
        case DECREMENT_COUNT: return{
            ...state,
            num: state.num-1
        }
        default: return state
    }
}

export default countReducer;