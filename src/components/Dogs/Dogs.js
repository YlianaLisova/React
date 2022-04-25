import React, {useRef} from 'react';
import {ADD, useDogReducer} from "../../reducers";
import {Dog} from "../Dog/Dog";

export const Dogs = () => {
    const dogRef = useRef();
    const [state, dispatch] = useDogReducer();

    const addDog = () => {
        const newDog = dogRef.current.value;
        dispatch({type: ADD, payload: {dog: newDog}})
        dogRef.current.value = '';
    }
    return (
        <div>
            <input type="text" ref={dogRef} placeholder={'Dog name'}/>
            <button onClick={addDog}>ADD</button>
            <hr/>
            {state.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};


