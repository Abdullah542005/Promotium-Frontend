import {ethers} from "ethers";
import postBAbi from "../abi/postB.json"
import { switchChain } from "../../utils/switchChain";


export const getPostBContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postBContract = new ethers.Contract(
     '0xBA789D4B2538E4712C7Fe901Caf87Fe2439931a0',
     postBAbi,
     signer
  )
  return postBContract;
}