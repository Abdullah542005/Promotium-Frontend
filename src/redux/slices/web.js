import {createSlice} from "@reduxjs/toolkit"


const web = createSlice({ 
    name:"web",
    initialState:{
        change:false,
        isloading:true
    },
    reducers:{ 
    onChange:(state)=>{
          state.change = !state.change;
    },
    setIsLoading:(state,payload)=>{
        state.isloading = payload.payload
    }
}
})

export default web.reducer;
export const {onChange,setIsLoading}  = web.actions;