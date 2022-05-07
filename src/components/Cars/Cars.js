import React, {useEffect} from 'react';
import {Car} from "../Car/Car";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";
import {CarForm} from "../CarForm/CarForm";

export const Cars = () => {
    const {cars} = useSelector(state => state.car);
    const dispatch = useDispatch();

    useEffect(()=>{
       dispatch(carActions.getAll())
    },[dispatch])
    return (
        <div>
            <CarForm/>
            {cars.map(car=> <Car key={car.id} car={car}/>)}
        </div>
    );
};

