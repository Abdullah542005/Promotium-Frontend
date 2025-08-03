import {ethers} from "ethers"

export async function  switchChain(provider){ 
 const {chainId} = await provider.getNetwork();
 const coreTestnetChain ="0x45a";
 if(chainId!= parseInt(coreTestnetChain,16))
    try{
      await window.ethereum.request({
        method:"wallet_switchEthereumChain",
        params:[{chainId:coreTestnetChain}]
      })
    }catch(error){
        console.log("error :" + error.message)
    }
}