import React from 'react';
import {useDispatch} from "react-redux";
import {catAction} from "../../redux";

export const Cat = ({cat}) => {
    const {id,name} = cat
    const dispatch = useDispatch();
    const deleteCat = () => {
      dispatch(catAction.deleteCatById({id}))
    }
    const setCatId = () => {
      dispatch(catAction.setCat({cat}))
    }
    return (
        <div>
            {id} - {name}
            <button onClick={setCatId}>updateCat</button>
            <button onClick={deleteCat}>delete</button>
        </div>
    );
};

