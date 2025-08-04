import { ethers } from "ethers";
import { getPostAContract } from "../contract/models/postA";
import { toWei } from "thirdweb";
import { generateID } from "../utils/generateID";
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
           toWei(post.rewardPerInteraction.toString()),
           post.maximumInteraction,
           hash,
           id
         );
        const receipt = await txResponse.wait();
        console.log(receipt)

     }catch(error){ 
        console.error("Error Occured at create post A :" + error.message)
     }
}