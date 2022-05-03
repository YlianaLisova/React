import React from 'react';
import {Link} from "react-router-dom";

export const Car = ({car, car: {id, model, price, year}}) => {

    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <Link to={id.toString()} state={car}>
            <button>Info</button>
            </Link>
            <hr/>
        </div>
    );
};

