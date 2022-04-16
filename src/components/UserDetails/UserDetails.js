import React from 'react';

export const UserDetails = ({user}) => {
    const {id,name,userName,email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>userName: {userName}</div>
            <div>email: {email}</div>
        </div>
    );
};

