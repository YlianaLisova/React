import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import css from './CarForm.module.css'

export const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.car);
    const {formErrors} = useSelector(state => state.car);
    const {reset,register,handleSubmit,setValue} = useForm();
    const dispatch = useDispatch();
    const submit = async (newCar) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id:carForUpdate.id, car: newCar}))
        } else {
        await dispatch(carActions.create({car: newCar}))

        }
        reset()
    }
    useEffect(()=> {
        if (carForUpdate){
           const {model,price,year} = carForUpdate;
           setValue('model', model);
           setValue('price', price);
           setValue('year', year);

        }
    },[carForUpdate])

    return (
        <form className={css.form} onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register('model')}/></label></div>
            {formErrors.model && <span>{formErrors.model[0]}</span>}
            <div><label>Price: <input className={css.marg1} type="text" {...register('price')}/></label></div>
            {formErrors.price && <span>{formErrors.price[0]}</span>}
            <div><label>Year: <input className={css.marg2} type="text" {...register('year')}/></label></div>
            {formErrors.year && <span>{formErrors.year[0]}</span>}
            <button className={css.btn}>Save</button>
            <button className={css.btn}>updateCar</button>
        </form>
    );
};

