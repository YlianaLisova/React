import React from 'react';
import {Button} from "../Button/Button";

export const User = ({user}) => {
    const {id, username} = user;
    return (
        <div>
            {id} - {username} <Button to={id.toString()} state={user}>get details</Button>
        </div>
    );
};

