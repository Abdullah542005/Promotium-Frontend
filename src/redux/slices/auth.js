import {createSlice} from   "@reduxjs/toolkit"


const auth  = createSlice({ 
    name:"auth",
    initialState: {
      isLoggedIn: !!localStorage.getItem("token"),
      userAddress: !!localStorage.getItem("userAddress"),
      hasAccount: !!localStorage.getItem("hasAccount")
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
          localStorage.removeItem('userAddress');
          localStorage.removeItem('token');
          localStorage.removeItem('hasAccount')
        }
        
    }
})

export default auth.reducer;
export const {setLoggedIn,logOut} = auth.actions;