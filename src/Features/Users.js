import {createSlice} from '@reduxjs/toolkit';
import { UsersData} from './FakeUsers'

export const userSlice = createSlice({
    name : "users" ,
    initialState : { value : UsersData } , 
    reducers : {
        addUser : ( state , action ) => {
            state.value.push(action.payload);
        },
        deleteUser : ( state , action ) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateUsername : ( state , action ) => {
            state.value.map((user) => {
                if(user.id === action.payload.id){
                    user.first = action.payload.first
                    user.second = action.payload.second
                }
            })
        }
    }
})

export const { addUser , deleteUser , updateUsername } = userSlice.actions;
export default userSlice.reducer;
