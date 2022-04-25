import React from 'react';
import {DELETE} from "../../reducers";

export const Cat = ({cat,dispatch}) => {
    const deleteCat = () => {
        dispatch({type: DELETE, payload:{id:cat.id}})
    }
    return (
        <div>
            {cat.id} - {cat.name} <button onClick={deleteCat}>DELETE</button>
        </div>
    );
};

