import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {dogAction} from "../../redux";

export const DogForm = () => {
    const dogInput = useRef();
    const dispatch = useDispatch();
    const add = () => {
      dispatch(dogAction.addDog({dog: dogInput.current.value}))
        dogInput.current.value = ''
    }
    return (
        <div>
            <input type="text" ref={dogInput} placeholder={'Dog name'}/>
            <button onClick={add}>ADD</button>
        </div>
    );
};

