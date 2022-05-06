import React, {useEffect} from 'react';
import {AuthForm} from "../../components";
import {Link, useSearchParams} from "react-router-dom";

export const LoginPage = () => {
    const [query] = useSearchParams();
    localStorage.clear()
    useEffect(()=> {
        console.log('session end', !!query.get('ExpSession'));
    },[query])
    return (
        <div>
            <AuthForm/>
            <Link to={'/register'}>register</Link>
        </div>
    );
};

