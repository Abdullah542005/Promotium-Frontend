import getServerUrl from "../utils/getServerUrls";
import { getPostBContract } from "../contract/models/postB";
import { ethers, toNumber, toUtf8Bytes } from "ethers";
import { toast } from "sonner";

export async function createReport(postId, promoter, advertiserComment) {
  try {
    let toastId = toast.loading("Sending metadata to Smart Contract");
    const contract = await getPostBContract();
    console.log(advertiserComment)
    const hash = ethers.sha256(toUtf8Bytes(advertiserComment));
    const tx = await contract.submitReport(
      toNumber(postId.split("_")[1]),
      promoter,
      hash
    );
    const receipt = await tx.wait();
    toast.dismiss(toastId);
    if (receipt.status !== 1)
      return toast.error("A Problem occured sending metadata", {
        duration: 3000,
      });
    toast.success("Tx Hash: " + tx.hash, { duration: 3000 });
    toastId = toast.loading("Sending Request to BackEnd");

    const sendDataToBackend = await fetch(
      `${getServerUrl("D")}/api/createReport`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          userAddress: localStorage.getItem("userAddress").toLocaleLowerCase(),
          postId: postId,
          promoterAddress: promoter,
          advertiserComment: advertiserComment,
        }),
      }
    );
    
    const parseResponse = await sendDataToBackend.json();
    toast.dismiss(toastId)
    if(sendDataToBackend.ok)
        toast.success(parseResponse.message, { duration: 3000 });
    else
        throw new Error(parseResponse.message)
  } catch (error) {
    toast.dismiss();
    toast.error(error.message, { duration: 3000 });
  }
}



export async function castVote(reportId,postId,promoter,comment,isValid) {
    try {
    let toastId = toast.loading("Sending metadata to Smart Contract");
    const contract = await getPostBContract();
    const hash = ethers.sha256(toUtf8Bytes(comment));
    const tx = await contract.submitReport(
      toNumber(postId.split("_")[1]),
      promoter,
      hash,
      isValid
    );
    const receipt = await tx.wait();
    toast.dismiss(toastId);
    if (receipt.status !== 1)
      return toast.error("A Problem occured sending metadata", {
        duration: 3000,
    });
    toast.success("Tx Hash: " + tx.hash, { duration: 3000 });
    toastId = toast.loading("Sending Request to Backend");

    const sendDataToBackend = await fetch(
      `${getServerUrl("D")}/api/castVote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          userAddress: localStorage.getItem("userAddress").toLocaleLowerCase(),
          postId: postId,
          promoterAddress: promoter,
          reportId:reportId,
          isValid:isValid,
          validatorComment:comment,
          hash:hash
        }),
      }
    );
    const parseResponse = await sendDataToBackend.json();
    toast.dismiss(toastId)
    if(sendDataToBackend.ok)
        toast.success(parseResponse.message, { duration: 3000 });
    else
        throw new Error(parseResponse.message)
  } catch (error) {
    toast.error(error.message, { duration: 3000 });
  }
}