import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dogs:[],
    dogForUpdate: null
}
const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers:{
        addDog:(state, action) => {
            const {dog} = action.payload;
            const newDog = {id:new Date().getTime(), name: dog};
            state.dogs.push(newDog);
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(dog=> dog.id === action.payload.id);
            state.dogs.splice(index,1);
        },
        setDog: (state, action) => {
            state.dogForUpdate = action.payload.dog
        },
        updateDogById: (state, action) => {
            const {id,updateName} = action.payload;
            const index = state.dogs.findIndex(dog=> dog.id === id)
            state.dogs[index].name = updateName

        }
    }
});
const {reducer:dogReducer, actions:{addDog,deleteDog,setDog,updateDogById}} = dogSlice;
export default dogReducer;
export const dogAction = {addDog,deleteDog,setDog,updateDogById}