import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cats:[],
    catForUpdate: null
};

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers:{
        addCat: (state, action) => {
            const {cat} = action.payload;
            const newCat = {id: new Date().getTime(), name: cat}
            state.cats.push(newCat)
        },
        deleteCatById:(state, action) => {
            const index = state.cats.findIndex(cat=> cat.id === action.payload.id)
            state.cats.splice(index,1)
        },
        setCat:(state, action) => {
            state.catForUpdate= action.payload.cat
        },
        updateCatById:(state, action) => {
            const {id,updateName} = action.payload;
            const index = state.cats.findIndex(cat=> cat.id === id)
            state.cats[index].name = updateName
            state.catForUpdate = false
        }
    }
});
const {reducer: catReducer, actions:{addCat,deleteCatById,setCat,updateCatById}} = catSlice;
export default catReducer;
export const catAction = {addCat,deleteCatById,setCat,updateCatById}