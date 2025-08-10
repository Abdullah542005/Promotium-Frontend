import {ethers} from "ethers";
import postBAbi from "../abi/postB.json"
import { switchChain } from "../../utils/switchChain";


export const getPostBContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postBContract = new ethers.Contract(
     '0x8b1443B4Fc488a08e9D7083c18576D5ad900887f',
     postBAbi,
     signer
  )
  return postBContract;
}