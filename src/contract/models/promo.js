import {ethers} from "ethers";
import erc20Abi from "../abi/erc20.json"

export const getPromoContract = async ()=>{ 
  const provider  = new ethers.JsonRpcProvider( 'https://rpc.test2.btcs.network/',{ 
    name:"Core Blockchain Testnet2",
    chainId:1114
  })
  const contract = new ethers.Contract(
    '0xbacE492619BaBcD20C7B88ce22e9C77c1fB68cF1',
     erc20Abi,
     provider
  )
  return {provider,contract}
}