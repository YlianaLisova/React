import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogAction} from "../../redux";

export const DogForm = () => {
    const {dogForUpdate} = useSelector(state => state.dog);
    const dogInput = useRef();
    const dispatch = useDispatch();
    const addDog = () => {
      dispatch(dogAction.add({dog: dogInput.current.value}));
      dogInput.current.value = ''
    }
    useEffect(() => {
        if (dogForUpdate) {
            dogInput.current.value = dogForUpdate.name
        }
    }, [dogForUpdate]);
    const updateDog = () => {
        if (dogForUpdate) {
        const newName = dogInput.current.value
        dispatch(dogAction.updateDogById({id: dogForUpdate.id, newName}))
        } else {
            const newName = dogInput.current.value;
            dispatch(dogAction.add({cat: newName}))
        }
        dogInput.current.value = '';
    }
    return (
        <div>
            <input type="text" ref={dogInput} placeholder={'Dog name'}/>
            <button onClick={addDog}>Add</button>
            <button onClick={updateDog}>Save update</button>
        </div>
    );
};

