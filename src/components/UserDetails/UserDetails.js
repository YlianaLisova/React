import React from 'react';
import {Button} from "../Button/Button";

export const UserDetails = ({user}) => {
    const {id,name,userName,email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>userName: {userName}</div>
            <div>email: {email}</div>
            <Button to={'posts'}>get posts</Button>
            <hr/>
        </div>
    );
};

