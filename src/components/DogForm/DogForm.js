import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dogAction} from "../../redux";

export const DogForm = () => {
    const {dogForUpdate} = useSelector(state => state.dog);
    const dogInput = useRef();
    const dispatch = useDispatch();
    const add = () => {
      dispatch(dogAction.addDog({dog: dogInput.current.value}))
        dogInput.current.value = ''
    }
    useEffect(()=> {
        if (dogForUpdate) {
        dogInput.current.value = dogForUpdate.name
        }
    },[dogForUpdate]);
    const saveUpdate = () => {
      if (dogForUpdate) {
          const newDogNameUpdate = dogInput.current.value;
          dispatch(dogAction.updateDogById({id: dogForUpdate.id, updateName: newDogNameUpdate}))
      } else {
          const newDogNameUpdate = dogInput.current.value;
          dispatch(dogAction.addDog({name:newDogNameUpdate}))
      }
        dogInput.current.value = ''
    }
    return (
        <div>
            <input type="text" ref={dogInput} placeholder={'Dog name'}/>
            <button onClick={add}>ADD</button>
            <button onClick={saveUpdate}>saveUpdates</button>
        </div>
    );
};

