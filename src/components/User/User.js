import React from 'react';

export const User = ({user, setUser,setUserIdForPosts}) => {
    const click = () => {
        setUserIdForPosts(false);
        setUser(user)
    }
    return (
        <div>
            {user.id} - {user.name}
            <input type={"button"} value={"info"} onClick={click}/>
        </div>
    );
};

