import { createThirdwebClient } from "thirdweb";

export const Client  =  createThirdwebClient({
    clientId:import.meta.env.VITE_THIRDWEB_CLIENT,
})