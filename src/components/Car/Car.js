import React from 'react';

export const Car = ({car:{id,model,price,year}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <hr/>
        </div>
    );
};

