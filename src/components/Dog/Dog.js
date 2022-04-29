import React from 'react';
import {useDispatch} from "react-redux";
import {dogAction} from "../../redux";

export const Dog = ({dog}) => {
    const {id,name} = dog;
    const dispatch = useDispatch();
    const deleteDog = () => {
      dispatch(dogAction.deleteDogById({id}));
    };
    const setDog = () => {
      dispatch(dogAction.setDogForUpdate({dog}))
    }
    return (
        <div>
            {id} - {name}
            <button onClick={deleteDog}>Delete</button>
            <button onClick={setDog}>Update</button>
        </div>
    );
};

