import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../Car/Car";

export const Cars = ({newCar, setCarForUpdate,updatedCar}) => {
    let [cars,setCars] = useState([]);
    const [deleteCarById,setDeleteCarById] = useState();


    useEffect(()=> {
        carService.getAll().then(({data})=> setCars(data))
    },[]);

    useEffect(()=> {
        if (newCar) {
            setCars(prevState => [...prevState, newCar])
        }
    },[newCar]);

    useEffect(()=>{
        if (deleteCarById) {
            setCars(cars.filter(car => car.id !== deleteCarById))
        }
    },[deleteCarById]);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if(updatedCar){
            const car = cars.find(car => car.id === updatedCar.id);
            Object.assign(car, updatedCar);
            setCars([...cars])
        }
    }, [updatedCar]);// eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setDeleteCarById={setDeleteCarById} setCarForUpdate={setCarForUpdate}/>)
            }
        </div>
    );
};

