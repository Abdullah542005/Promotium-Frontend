import { toast } from "sonner";
import getServerUrl from "../utils/getServerUrls";
export async function interactPostA (postId){
    try{
        const response = await fetch(
         `${getServerUrl('C')}/api/interactposta`,{
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