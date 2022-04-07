import React from 'react';

export const User = ({user}) => {
    return (
        <div>
            <span>{user.id}-</span>
            <span>{user.name}-</span>
            <span>{user.username}-</span>
            <span>{user.email}</span>
            <hr/>
        </div>
    );
};

