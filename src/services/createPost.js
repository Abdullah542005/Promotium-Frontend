import { ethers } from "ethers";
import { getPostAContract } from "../contract/models/postA";
import { toWei } from "thirdweb";
import { generateID } from "../utils/generateID";
import { toast } from "sonner";
//Contract Integration also moved here instead of jsx components

export async function hanldePostACreation(post){
    try{
        const contract = await getPostAContract();
        const timestamp = Date.now()/1000
        const hash = ethers.sha256(
          ethers.toUtf8Bytes(
          localStorage.getItem('userAddress')+
          post.postBody +
          post.postHead +
          timestamp +
          post.rewardPerInteraction +
          post.maximumInteraction
           )
        )
        const id = generateID();
        const txResponse = await contract.createPost(
           ethers.parseUnits(post.rewardPerInteraction.toString(), 18),
           BigInt(post.maxInteraction),                                  // Ensure BigInt
           hash,                                                         // This is fine
           BigInt(id)
         );
        await txResponse.wait();
        const sendDataToBackend = await fetch(
         'http://localhost:4001/api/createposta',{
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
        toast.success(parseResponse.message,{duration:3000})
      }catch(error){
         console.log("Error at Post Creation A : " + error.message)
         toast.error(error.message,{duration:3000})
      }
}