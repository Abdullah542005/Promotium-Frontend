import { configureStore } from "@reduxjs/toolkit";
import  auth  from "../slices/auth";
import web from "../slices/web"
export const store = configureStore({
    reducer:{ 
       auth:auth,
       web:web,
    }
})