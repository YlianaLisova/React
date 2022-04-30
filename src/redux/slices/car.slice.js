import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    carForUpdate: null,
    formErrors: {}
};
const updateCar = createAsyncThunk(
    'updateCar',
    async ({id,updatedCar})=> {
        await carService.updateById(id,updatedCar)
    }
);
const deleteCar = createAsyncThunk(
    'deleteCar',
    async ({id})=> {
        await carService.deleteCar(id);
        return id
    }

)

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);
const create = createAsyncThunk(
    'create',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            return data
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.pending]: (state) => {
            state.status = 'pending'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAll.rejected]: (state) => {
            state.status = 'rejected'
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload)
        },
        [create.rejected]: (state, action) => {
            const {status, formErrors} = action.payload;
            state.status = status
            state.formErrors = formErrors
        },
        [deleteCar.fulfilled]: (state,action) => {
            const index = state.cars.findIndex(car=> car.id === action.payload)
            state.cars.splice(index,1)
        }
    }
});

const {reducer: carReducer, actions} = carSlice;
export default carReducer;
export const carActions = {
    getAll,
    create,
    deleteCar,
    updateCar
}