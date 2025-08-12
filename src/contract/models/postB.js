import {ethers} from "ethers";
import postBAbi from "../abi/postB.json"
import { switchChain } from "../../utils/switchChain";


export const getPostBContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postBContract = new ethers.Contract(
     '0x7293c154e9Ab2cd9C209f4E9d26015d1536dD6F2',
     postBAbi,
     signer
  )
  return postBContract;
}