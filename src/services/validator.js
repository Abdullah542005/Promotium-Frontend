import { toast } from "sonner";
import getServerUrl from "../utils/getServerUrls";
import { getValidatorContract } from "../contract/models/validator";
export async function fetchValidatorData(){ 
    try{
       const response = await fetch(`${getServerUrl('A')}/api/validator`,
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



export async function  resign() {
    try{
        toast.loading("Applying for Resign");
        const contract = await getValidatorContract();
        const tx  = await contract.resign();
        const receipt = await tx.wait();
        toast.dismiss()
         if (receipt.status !== 1) {
         return toast.error("A Problem occured calling contract",{duration:3000})
       }
       toast.success("Tx Hash: " + tx.hash,{duration:4000})
    }catch(error){
        toast.dismiss();
        toast.error(error.message,{duration:4000})
    }
}

export async function  unstake() {
    try{
        toast.loading("unstaking your core");
        const contract = await getValidatorContract();
        const tx  = await contract.unStake();
        const receipt = await tx.wait();
        toast.dismiss()
         if (receipt.status !== 1) {
         return toast.error("A Problem occured calling contract",{duration:3000})
       }
       toast.success("Tx Hash: " + tx.hash,{duration:4000})
    }catch(error){
        toast.dismiss();
        toast.error(error.message,{duration:4000})
    }
}