import React, {useEffect} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {joiResolver} from "@hookform/resolvers/joi"
import {carValidator} from "../../validators";

export const CarForm = ({setNewCar, carForUpdate,setUpdatedCar}) => {
    const {register, reset, handleSubmit, formState: {errors}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onTouched"
    });
    // const [formError, setFormError] = useState({})
    useEffect(() => {
        if (carForUpdate){
            const {model, price, year} = carForUpdate
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
            }, [carForUpdate]) // eslint-disable-line react-hooks/exhaustive-deps

    const submit = async (car) => {
        // try{
        if (carForUpdate){
        const {data} = await carService.updateById(carForUpdate.id, car);
            setUpdatedCar(data);
        }else {
        const {data} = await carService.create(car);
        setNewCar(data);

        }
        reset();

        // }catch (e){
        //     // setFormError(e.response.data)
        // }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {/*{formError.model && <span>{formError.model[0]}</span>}*/}
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Price: <input type="text" {...register('price', {valueAsNumber: true})}/></label></div>
            {/*{formError.price && <span>{formError.price[0]}</span>}*/}
            {errors.price && <span>{errors.price.message}</span>}
            <div><label>Year: <input type="text" {...register('year', {valueAsNumber: true})}/></label></div>
            {/*{formError.year && <span>{formError.year[0]}</span>}*/}
            {errors.year && <span>{errors.year.message}</span>}
            <button>SAVE</button>
        </form>
    );
};

