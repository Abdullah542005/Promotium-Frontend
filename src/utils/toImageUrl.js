import {pinata} from "../services/UploadtoPinata"
// Converts Pinata Cid to Iamge Url
export default async function toImageUrl(cid){
   if(!cid)
     return;
   return `https://gateway.pinata.cloud/ipfs/${cid}`
}