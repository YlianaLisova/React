import {ADD, DELETE} from "./actions";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const cat = action.payload.cat;
            const [lastCat] = state.slice(-1);
            const id = lastCat ? lastCat.id + 1 : 0;

            return [...state, {id, name: cat}];
        case DELETE:
            const {id: catId} = action.payload;
            const index = state.findIndex(cat=> cat.id === catId);
            state.splice(index,1)
            return [...state]
        default:
            return state

    }
}
export const useCatReducer = () => useReducer(reducer, [])