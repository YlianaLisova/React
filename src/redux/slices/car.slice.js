import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[]
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async ()=>{
        const {data} = await carService.getAll();
        return data
    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {dispatch})=> {
        try {
            const {data} = await carService.create(car);
            dispatch(create({car: data}))
        } catch (e) {
            return car
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        getAllCars: (state, action) => {
            state.cars = action.payload
        },
        create: (state, action) => {
            state.cars.push(action.payload.car)
            console.log(action.payload.car);
        }
    }
});

const {reducer:carReducer, actions:{getAllCars, create}} = carSlice;
const carActions = {
    getAll,
    getAllCars,
    createCar
}

export {
    carReducer,
    carActions
}
