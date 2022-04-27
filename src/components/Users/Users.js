import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {User} from "../User/User";
import {loadUsers} from "../../redux/actions.creators";

export const Users = () => {
    const usersRootState = useSelector(state => state.userState);
    const dispatch = useDispatch();
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch(loadUsers(users));
            })
    },[dispatch])

    return (
        <div>
            {
                usersRootState.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

