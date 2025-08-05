import {ethers} from "ethers";
import postBAbi from "../abi/postB.json"
import { switchChain } from "../../utils/switchChain";


export const getPostBContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postBContract = new ethers.Contract(
     '0x4cE33CEc9Ea2b5e6C030F5fE4e4dfc8EFd407464',
     postBAbi,
     signer
  )
  return postBContract;
}