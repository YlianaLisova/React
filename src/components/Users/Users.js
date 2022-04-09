import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";

export const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(()=> {
usersService.getAll().then(({data})=> setUsers(data))
    }, []);
    console.log(users);
    return (
        <div>

        </div>
    );
};
