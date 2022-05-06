import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

export const CarForm = () => {
    const {register,reset,handleSubmit} = useForm();
    const dispatch = useDispatch();

    const submit = async (newCar) => {
      await dispatch(carActions.createCar({car: newCar}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label><input type="text" {...register('model')}/></label></div>
            <div><label><input type="text" {...register('price')}/></label></div>
            <div><label><input type="text" {...register('year')}/></label></div>
            <button>save</button>
        </form>
    );
};

