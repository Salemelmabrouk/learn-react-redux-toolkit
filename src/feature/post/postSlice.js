import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts=createAsyncThunk("post/getPosts",async() => { 
   const {data}= await axios.get("https://jsonplaceholder.typicode.com/posts")
   return data;
 })
const postSlice = createSlice({name:"post",
    initialState:{
        posts:[],
        loading:false,
    },
    reducers:{},
    extraReducers:(builder) => {  
        builder.addCase(getPosts.pending,(state) => { 
            state.loading=true;
            console.log("pending...",state.loading)
    
         })
         .addCase(getPosts.fulfilled ,(state,{payload}) => { 
            console.log("fulfilled...",payload)
            return {
                ...state,
                posts:payload,
                loading:false, 
            }
          })
          .addCase(getPosts.rejected ,(state) => { 
            console.log("Response Rejected !...")
             state.loading=false;
          })

    } 
    
})
    

export default postSlice.reducer;
 