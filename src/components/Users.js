import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/actions.creators";

export const Users = () => {

    const defaultRootState = useSelector(state => state.usersState);
    const dispatch = useDispatch();

    useEffect(()=> {
               dispatch(loadUsers())
    },[])
    return (
        <div>
            {defaultRootState.map(user => <div key={user.id}> {user.id} - {user.name}</div>)}
        </div>
    );
};

