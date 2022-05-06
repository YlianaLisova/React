import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {userService} from "../../services";
import {authActions} from "../../redux";

export const AuthForm = () => {
    const {reset, register, handleSubmit} = useForm();
    const {pathname, state} = useLocation();
    const [isLogin, setIsLogin] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        pathname === '/register' ? setIsLogin(false) : setIsLogin(true)
    }, [pathname])
    const submit = async (user) => {
        try {
            if (!isLogin) {
              await  userService.create(user)
                navigate('/login')

            } else {
                await dispatch(authActions.login({user}))
                navigate(state.pathname, {replace:true})
            }
        } catch (e) {

        }
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>{isLogin ? 'login' : 'register'}</button>
            <div>


            </div>
        </form>
    );
};

