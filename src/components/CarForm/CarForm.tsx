import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hook";
import {carActions} from "../../redux";


export const CarForm: FC = () => {
    const {reset, register, handleSubmit} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = async (car) => {
       await dispatch(carActions.create({car}))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Model'} {...register('model')}/>
            <input type="text" placeholder={'Price'} {...register('price')}/>
            <input type="text" placeholder={'Year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

