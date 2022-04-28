import React from 'react';
import {useDispatch} from "react-redux";
import {userAction} from "../redux";

export const User = ({user:{id,name}}) => {
    const dispatch = useDispatch();
    const deleteUser = () => {
      dispatch(userAction.deleteUser({id}))
    }
    return (
        <div>
            {id} - {name}
            <button onClick={deleteUser}>DELETE</button>
        </div>
    );
};

