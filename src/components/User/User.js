import React from 'react';

export const User = ({user}) => {
    return (
        <div>
            {user.id} - {user.name}
        </div>
    );
};

