import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs:[],
    dogForUpdate: null
}
const dogSlice = createSlice({
    name:'dogSlice',
    initialState,
    reducers:{
        add:(state, action) => {
            const {dog} = action.payload
            const newDog = {id: new Date().getTime(), name: dog}
            state.dogs.push(newDog)
        },
        deleteDogById: (state, action) => {
            const index= state.dogs.findIndex(dog => dog.id === action.payload.id);
            state.dogs.splice(index,1)
        },
        setDogForUpdate:(state, action) => {
            state.dogForUpdate = action.payload.dog
        },
        updateDogById: (state, action) => {
            const {id, newDogName} = action.payload;
            const index = state.dogs.findIndex(dog => dog.id === id);
            state.dogs[index].name = newDogName
            state.dogForUpdate = false
        }
    }
});
const {reducer: dogReducer,actions: {add,deleteDogById,setDogForUpdate,updateDogById}} = dogSlice;
export default dogReducer;
export const dogAction = {add,deleteDogById,setDogForUpdate,updateDogById}