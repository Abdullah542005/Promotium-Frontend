import { ethers } from "ethers";
import { getPostAContract } from "../contract/models/postA";
import { toWei } from "thirdweb";
import { generateID } from "../utils/generateID";
import {getPostBContract} from "../contract/models/postB"
import { toast } from "sonner";
import getServerUrl from "../utils/getServerUrls";
//Contract Integration also moved here instead of jsx components

export async function hanldePostACreation(post){
    try{
        toast.loading("Sending Metadata to contract");
        const contract = await getPostAContract();
        const timestamp = Date.now()/1000
        const hash = ethers.sha256(
          ethers.toUtf8Bytes(
          localStorage.getItem('userAddress')+
          post.postBody +
          post.postHead +
          timestamp +
          post.rewardPerInteraction +
          post.maxInteraction
           )
        )
        const id = generateID();
        const txResponse = await contract.createPost(
           ethers.parseUnits(post.rewardPerInteraction.toString(), 18),
           BigInt(post.maxInteraction),                                  // Ensure BigInt
           hash,                                                         // This is fine
           BigInt(id)
         );
         toast.dismiss()
        await txResponse.wait();
        toast.message("Tx Hash: " + txResponse.hash);
        toast.loading("Sending post data to backend")
        const sendDataToBackend = await fetch(
         `${getServerUrl('C')}/api/createposta`,{
            method:"POST",
             headers:{
             "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                userAddress:localStorage.getItem('userAddress').toLocaleLowerCase(),
                post:{...post,postId:id,timestamp:timestamp}
            })
         }
        )
        const parseResponse = await sendDataToBackend.json();
        toast.dismiss()
        toast.success(parseResponse.message,{duration:3000})
      }catch(error){
         toast.dismiss();
         console.log("Error at Post Creation A : " + error.message)
         toast.error(error.message,{duration:3000})
      }
}


export async function  handlePostBCreation(post) {
   try{
      toast.loading("Sending Metadata to contract");
      const contract = await getPostBContract();
      const timestamp = Date.now()/1000
        const hash = ethers.sha256(
          ethers.toUtf8Bytes(
          localStorage.getItem('userAddress')+
          post.postBody +
          post.postHead +
          timestamp +
          post.rewardPerInteraction +
          post.maxInteraction + 
          post.stakeRequired + 
          post.challengePeriod
           )
        )
        const id = generateID();
        const txResponse = await contract.createPost(
           ethers.parseUnits(post.rewardPerInteraction.toString(), 18),
           BigInt(post.maxInteraction),                                  // Ensure BigInt
           hash,
           ethers.parseUnits(post.stakeRequired.toString(),18),
           BigInt(post.challengePeriod),                                                        // This is fine
           BigInt(id)
         );
         
        await txResponse.wait();
         toast.dismiss()
         toast.message("Tx Hash: " + txResponse.hash);
         toast.loading("Sending Metadata to contract");
        const sendDataToBackend = await fetch(
         `${getServerUrl('C')}/api/createpostb`,{
            method:"POST",
             headers:{
             "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                Authorization:`Bearer ${localStorage.getItem("token")}`,
                userAddress:localStorage.getItem('userAddress').toLocaleLowerCase(),
                post:{...post,postId:id,timestamp:timestamp}
            })
         }
        )
          toast.dismiss()
        const parseResponse = await sendDataToBackend.json();
        toast.success(parseResponse.message,{duration:3000})

   }catch(error) {
      toast.dismiss()
      console.log("Error at Post Creation A : " + error.message)
      toast.error(error.message,{duration:3000})
   }
}