import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null
}

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({id,car},{dispatch}) => {
        await carService.updateById(id,car)
        dispatch(updateCarById({id,car}))
    }
)

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
        await carService.deleteById(id)
        dispatch(deleteCar({id}))
    }
)

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {dispatch}) => {
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
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars.splice(index, 1)
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(car=> car.id === action.payload.id)
            state.cars[index] = {...state.cars[index], ...action.payload.car};
            state.carForUpdate = false
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload
        }
    }
});

const {reducer: carReducer, actions: {create, deleteCar, updateCarById, setCarForUpdate}} = carSlice;
const carActions = {
    getAll,
    createCar,
    deleteCarById,
    updateCar,
    setCarForUpdate
}

export {
    carReducer,
    carActions
}
