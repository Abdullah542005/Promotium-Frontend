import {ethers} from "ethers";
import postAAbi from "../abi/postA.json"
import { switchChain } from "../../utils/switchChain";


export const getPostAContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const postAContract = new ethers.Contract(
     '0x4d9605B05C559187A5EdFcBc7ff221dc0B5A9Ac0',
     postAAbi,
     signer
  )
  return postAContract;
}