import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import {User} from "../../components";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    const [users, setUsers] = useState(null);

    useEffect(()=> {
        userService.getAll().then(({data})=> setUsers(data))
    })
    return (
        <div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>{users && users.map(user => <User key={user.id} user={user}/>)}</div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

