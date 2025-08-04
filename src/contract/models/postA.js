import {ethers} from "ethers";
import postAAbi from "../abi/postA.json"
import { switchChain } from "../../utils/switchChain";


export const getPostAContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postAContract = new ethers.Contract(
     '0xc785F52C0992aE729B7F48a532D0635d57Ba65e6',
     postAAbi,
     signer
  )
  return postAContract;
}