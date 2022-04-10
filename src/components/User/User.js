import React from 'react';

export const User = ({user, setUser}) => {
    return (
        <div>
            {user.id} - {user.name}
            <input type={"button"} value={"info"} onClick={() => {setUser(user)}}/>
        </div>
    );
};

