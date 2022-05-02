import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

export const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    const deleteById = async () => {
       await dispatch(carActions.deleteById({id}))
    }
    const updateCar = () => {
      dispatch(carActions.setCarForUpdate({car}))
    }
    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={deleteById}>Delete</button>
            <button onClick={updateCar}>Update
            </button>
            <hr/>
        </div>
    );
};

