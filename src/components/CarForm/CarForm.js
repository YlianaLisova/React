import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

export const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.car);
    const {register, reset, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year)
        }
    }, [carForUpdate,setValue])

    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateCar({id: carForUpdate.id, car: newCar}))
        } else {
            await dispatch(carActions.createCar({car: newCar}))
        }
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

