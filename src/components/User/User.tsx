import React, {FC} from 'react';
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser
}

export const User: FC<IProps> = ({user: {id, username, name, email}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <hr/>
        </div>
    );
};


