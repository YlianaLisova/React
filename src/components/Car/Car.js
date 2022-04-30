import React from 'react';
import {carActions} from "../../redux";
import {useDispatch} from "react-redux";

export const Car = ({car}) => {
    const {id,model,price,year} = car;
    const dispatch = useDispatch();
    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={deleteCar}>Delete</button>
            <button>update</button>
            <hr/>
        </div>
    );
};

