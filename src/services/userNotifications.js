import { toast } from "sonner";

export async function  getUserNotifications() {
    if(!localStorage.getItem("userAddress"))
        return;
    try{
      const response = await fetch(`http://localhost:5000/api/notifications/${
        localStorage.getItem("userAddress")
      }`)
      const parseResponse = await response.json();
      if(response.ok)
        return parseResponse;
      else 
        throw new Error(parseResponse.message)
    }catch(error){
        toast.error("Problem fetching data", {duration:4000})
    }
}


export async function  clearNotifications() {
    if(!localStorage.getItem("userAddress"))
        return;
    try{
      const toastId = toast.loading('Request Sent')
      const response = await fetch(`http://localhost:3000/api/auth/clearNotifications/${
        localStorage.getItem("userAddress")
      }`,{ 
            headers:{
             "Content-Type": "application/json",
            },
            method:"POST",
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
            })
         }
    )
      const parseResponse = await response.json();
      toast.dismiss(toastId)
      if(response.ok)
         toast.success(parseResponse.message);
      else 
        throw new Error(parseResponse.message)
    }catch(error){
        toast.error(error.message, {duration:4000})
    }
}