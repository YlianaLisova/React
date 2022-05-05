import React, {FC} from 'react';
import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    car: ICar
}

export const Car: FC<IProps> = ({car: {id, price, year, model}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <Link to={`${id}`}>
                <button>get details</button>
            </Link>
            <hr/>

        </div>
    );
};

