import React from 'react';
import {AuthForm} from "../../components";
import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
        <div>
            <AuthForm/>
            <Link to={'/register'}>register</Link>
        </div>
    );
};

