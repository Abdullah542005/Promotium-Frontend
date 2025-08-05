import { toast } from "sonner";

export async function interactPostA (postId){
    try{
        const response = await fetch(
         'http://localhost:4001/api/interactposta',{
            method:"POST",
             headers:{
             "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                userAddress:localStorage.getItem('userAddress').toLocaleLowerCase(),
                postId:postId
            })
         }
        )   
        const parseResponse = await response.json();
        toast.success(parseResponse.message,{duration:4000})
    }catch(error){

        toast.error(error.message)
    }
}