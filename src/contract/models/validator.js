import {ethers} from "ethers";
import validatorAbi from "../abi/valdiator.json"
import { switchChain } from "../../utils/switchChain";


export const getValidatorContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const ValidatorContarct = new ethers.Contract(
     '0xe60b1F8ec572f9B00f1210eA6BeF67b11bC65De9',
     validatorAbi,
     signer
  )
  return ValidatorContarct;
}