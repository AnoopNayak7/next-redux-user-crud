import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
  };

const userSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addUsers: (state, {payload}) => {
            state.users.push(payload);
        }
    }
})

export const { addUsers } = userSlice.actions;
export const getAllUsers = (state) =>  state.users;
export default userSlice.reducer;