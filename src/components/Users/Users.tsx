import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {User} from "../User/User";

export const Users: FC = () => {
    let [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data})=> setUsers(data)) //.then(value => value.data).then(users=> setUsers(users)
    }, [])
    return (
        <div>
            {users.map(user=> <User user={user} key={user.id}/>)}
        </div>
    );
};

