import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users:[]
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        add:((state, action) => {
            const {user} = action.payload;
            const newUser = {id: new Date().getTime(),name:user}
            state.users.push(newUser)
        }),
        deleteUser:((state, action) => {
            const index = state.users.findIndex(user=> user.id === action.payload.id)
            state.users.splice(index,1)
        })
    }
});
const {reducer: userReducer,actions:{add, deleteUser}} = userSlice;
export default userReducer;
export const userAction = {add, deleteUser}