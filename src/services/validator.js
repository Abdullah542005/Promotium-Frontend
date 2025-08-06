import { toast } from "sonner";


export async function fetchValidatorData(){ 
    try{
       const response = await fetch('http://localhost:5000/api/validator',
        {
            method:"POST",
            headers:{
               "Content-Type": "application/json",
            },
            body:JSON.stringify({
                userAddress:localStorage.getItem('userAddress')
            })
        }
       )
       const parseResponse = await response.json();
        if(!response.ok){
           toast.error(parseResponse.message,{duration:3000})
        }
       return parseResponse
    }catch(error){
        toast.error(error.message,{duration:3000})
    }
}