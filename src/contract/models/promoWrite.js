import {ethers} from "ethers";
import erc20Abi from "../abi/erc20.json"
import { switchChain } from "../../utils/switchChain";


export const getPromoWriteContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(
     '0xbacE492619BaBcD20C7B88ce22e9C77c1fB68cF1',
     erc20Abi,
     signer
  )
  return contract;
}