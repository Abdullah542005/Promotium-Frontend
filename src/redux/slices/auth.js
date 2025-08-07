import {createSlice} from   "@reduxjs/toolkit"


const auth  = createSlice({ 
    name:"auth",
    initialState: {
      isLoggedIn: !!localStorage.getItem("token"),
      userAddress: !!localStorage.getItem("userAddress"),
      hasAccount: !!localStorage.getItem("hasAccount"),
      change:true,  //this state is shared accross to make relevent data change occurs when an event happens
    },
    reducers:{

        setLoggedIn:(state, action)=>{
           state.isLoggedIn = true;
           state.userAddress  = action.payload;
           localStorage.setItem("userAddress", action.payload);
        },

        setHasAccount:(state,payload)=>{
            state.hasAccount  = payload.hasAccount;
        },
        logOut:(state) =>{
          state.isLoggedIn = false;
          state.userAddress = false;
          state.hasAccount  = false
          localStorage.clear();
        },
        onChange:(state)=>{
          state.change = !state.change;
        }
    }
})

export default auth.reducer;
export const {setLoggedIn,logOut,onChange} = auth.actions;