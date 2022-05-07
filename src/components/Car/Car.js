import React from 'react';
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

export const Car = ({car:{id,model,price,year}}) => {
    const dispatch = useDispatch();

    const deleteCar = () => {
      dispatch(carActions.deleteCarById({id}))
    }

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={deleteCar}>delete</button>
            <button>update</button>
            <hr/>
        </div>
    );
};

