import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data"

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload
            const u = state.find(user => user.id == id)
            if(u){
                u.name = name;
                u.email =email;
            }
        },
        deleteUser:(state,action)=>{
            const {id} = action.payload;
            const u = state.find(user => user.id == id)
            if(u){
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export default userSlice.reducer;
export const { addUser, updateUser, deleteUser } = userSlice.actions;