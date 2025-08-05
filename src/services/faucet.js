import { toast } from "sonner"

export async function faucet(userAddress){
    try{
       const response  = await fetch(
        `http://localhost:4001/api/faucet/${userAddress}`
       )
       console.log("clicked")
       const parseResponse = await response.json()
       if(response.ok){
         toast.success(parseResponse.message,{duration:3000})
       }else{
         toast.error(parseResponse.message,{duration:3000})
       }
    }catch(error){
      console.log("Error at faucet : " + error.message)
      toast.error(error.message,{duration:3000})
    }
}