import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[
      {id: 1, name: "John"},
      {id: 2, name: "Winnie"},
      {id: 3, name: "Lester"},
    ],
    loading: true
  }
const userSlice = createSlice({
  name: "myUser",
  initialState,
  reducers: {
    deleteUser: (state,  action ) => {
      console.log(action)
      return {
        ...state, 
        users: state.users.filter(user => user.id !== action.payload) 
      }
    }
  }
})


export const {deleteUser} = userSlice.actions
export default userSlice.reducer


