import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Car} from "../Car/Car";
import {carActions} from "../../redux";

export const Cars = () => {
    const {cars,status} = useSelector(state => state.car);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(carActions.getAll())
    }, [dispatch])
    return (
        <div>
            {status && <h1>{status}</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

