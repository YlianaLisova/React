import React, {useEffect} from 'react';
import {AuthForm} from "../../components";
import {authActions} from "../../redux";
import {useDispatch} from "react-redux";

export const RegisterPage = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(authActions.setError())
    },[])

    return (
        <div>
            <AuthForm/>
        </div>
    );
};

