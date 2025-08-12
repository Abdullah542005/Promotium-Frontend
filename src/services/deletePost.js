import { ethers, toNumber } from "ethers";
import { getPostAContract } from "../contract/models/postA";
import { getPostBContract } from "../contract/models/postB";
import { toast } from "sonner";
import getServerUrl from "../utils/getServerUrls";

export async function deletePostA(postId) {
  try {
    toast.loading("Deleting From Contract");
    const contract = await getPostAContract();
    const txResponse = await contract.deletePost(
      toNumber(postId.split("_")[1])
    );
    toast.dismiss();
    await txResponse.wait();
    toast.message("Tx Hash: " + txResponse.hash);
    toast.loading("Deleting from backend");
    const sendDataToBackend = await fetch(
      `${getServerUrl("C")}/api/deleteposta`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          userAddress: localStorage.getItem("userAddress").toLocaleLowerCase(),
          postId:postId
        }),
      }
    );
    const parseResponse = await sendDataToBackend.json();
    toast.dismiss();
    toast.success(parseResponse.message, { duration: 3000 });
  } catch (error) {
    toast.dismiss();
    console.log("Error at Post Deletion A : " + error.message);
    toast.error(error.message, { duration: 3000 });
  }
}


export async function initiateDelete(postId) {
  try {
    toast.loading("Initiating Delete from Contract");
    const contract = await getPostBContract();
    const txResponse = await contract.initDelete(
      toNumber(postId.split("_")[1])
    );
    toast.dismiss();
    await txResponse.wait();
    toast.message("Tx Hash: " + txResponse.hash);
   
  } catch (error) {
    toast.dismiss();
    console.log("Error at Post Deletion B : " + error.message);
    toast.error(error.message, { duration: 3000 });
  }
}


export async function deletePostB(postId) {
  try {
    toast.loading("Deleting From Contract");
    const contract = await getPostBContract();
    const txResponse = await contract.deletePost(
      toNumber(postId.split("_")[1])
    );
    toast.dismiss();
    await txResponse.wait();
    toast.message("Tx Hash: " + txResponse.hash);
    toast.loading("Deleting from backend");
    const sendDataToBackend = await fetch(
      `${getServerUrl("C")}/api/deletepostb`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          userAddress: localStorage.getItem("userAddress").toLocaleLowerCase(),
          postId:postId
        }),
      }
    );
    const parseResponse = await sendDataToBackend.json();
    toast.dismiss();
    toast.success(parseResponse.message, { duration: 3000 });
  } catch (error) {
    toast.dismiss();
    console.log("Error at Post Deletion B : " + error.message);
    toast.error(error.message, { duration: 3000 });
  }
}
