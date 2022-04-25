import {ADD, DELETE} from "./actions";
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            const dog = action.payload.dog;
            const [lastDog] = state.slice(-1);
            const id = lastDog ? lastDog.id + 1 : 0;

            return [...state, {id, name: dog}]
        case DELETE:
            const {id: dogId} = action.payload;
            const index = state.findIndex(dog=> dog.id === dogId)
            state.splice(index,1)
            return [...state]
        default:
            return state

    }
}
export const useDogReducer = () => useReducer(reducer, [])