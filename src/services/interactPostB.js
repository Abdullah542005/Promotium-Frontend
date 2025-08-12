import { toast } from "sonner";
import UploadtoPinata from "../services/UploadtoPinata"
import getServerUrl from "../utils/getServerUrls";
import {getPostBContract} from "../contract/models/postB"
import {ethers, toNumber, toUtf8Bytes} from "ethers"
export async function interactPostB(postId,proofBody,images){
    try{
       let toastId = toast.loading("Uploding Proof Images to Pinata")
       const imagesProof = [];
       for(let image of images){
         //Converting the blob back to image
         if(!image.file) continue;
         const response = await fetch(image.file);
         const blob = await response.blob();
         let file = new File([blob], 'proof-image.png', { type: blob.type });
         const cid = await UploadtoPinata(file)
         imagesProof.push(cid)
       }
       toast.dismiss(toastId);
       toastId = toast.loading("Sending metadata to Smart Contract");
       const contract = await getPostBContract();
       const hash = ethers.sha256(toUtf8Bytes(proofBody))
       const tx = await contract.interact(toNumber(postId.split("_")[1]),hash);
       toast.success("TxHash: " + tx.hash,{duration:3000})
       const receipt = await tx.wait();
       toast.dismiss(toastId)
        
       if (receipt.status !== 1) {
         return toast.error("A Problem occured sending metadata",{duration:3000})
       }
       toastId = toast.loading("Sending data to backend");
       const sendDataToBackend = await fetch(
         `${getServerUrl('C')}/api/interactpostb`,{
            method:"POST",
             headers:{
             "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                userAddress:localStorage.getItem('userAddress').toLocaleLowerCase(),
                postId:postId,
                interactionObject:{
                    timestamp:Date.now()/1000,
                    imageProofs:imagesProof,
                    interactionBody:proofBody
                }
            })
         }
        )
        const parseResponse = await sendDataToBackend.json();
        toast.dismiss(toastId)
        if(sendDataToBackend.ok)
          toast.success(parseResponse.message,{duration:3000})
        else
          toast.error(parseResponse.message,{duration:3000})
        
    }catch(error){
        toast.dismiss();
       toast.error(error.message, {duration:3000})
       return "failed";
    }
}


export async function claimRewards(postId){ 
    try{
       let toastId = toast.loading("Claiming Rewards")
       const contract = await getPostBContract();
       const tx = await contract.claimReward(toNumber(postId.split("_")[1]));
       toast.success("TxHash: " + tx.hash,{duration:3000})
       const receipt = await tx.wait();
       toast.dismiss(toastId)
        
       if (receipt.status !== 1) {
         return toast.error("A Problem occured interacting with contract",{duration:4000})
       }
       const sendDataToBackend = await fetch(
         `${getServerUrl('C')}/api/claimreward`,{
            method:"POST",
             headers:{
             "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                userAddress:localStorage.getItem('userAddress').toLocaleLowerCase(),
                postId:postId,
            })
         }
        )
        const parseResponse = await sendDataToBackend.json();
        toast.dismiss(toastId)
        if(sendDataToBackend.ok)
          toast.success(parseResponse.message,{duration:3000})
        else
          toast.error(parseResponse.message,{duration:3000})
        
    }catch(error){
        toast.dismiss();
       toast.error(error.message, {duration:3000})
       return "failed";
    }
}