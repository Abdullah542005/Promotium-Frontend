import {ethers} from "ethers";
import validatorAbi from "../abi/valdiator.json"
import { switchChain } from "../../utils/switchChain";


export const getValidatorContract = async ()=>{ 
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.BrowserProvider(window.ethereum)
  switchChain(provider)
  const signer = await provider.getSigner();

  const ValidatorContarct = new ethers.Contract(
     '0x6E793c80d731fDbFA399690B03E43917b208C8dE',
     validatorAbi,
     signer
  )
  return ValidatorContarct;
}