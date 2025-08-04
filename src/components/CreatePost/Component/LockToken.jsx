import { useState } from 'react';
import './LockToken.css'; // contains your loader CSS
import {getPromoWriteContract} from "../../../contract/models/promoWrite"
import { toWei } from 'thirdweb';
export default function LockTokens({setIsStaked,tokensToApprove,type}) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    // Simulate a loading task (e.g., async operation)
  };

  const handleTokenApprove = async ()=>{ 
    try{
    const contractAddress = type =='A'?
    "0xc785F52C0992aE729B7F48a532D0635d57Ba65e6":
    "0xC93f1223bFd18Dc4170F4b6D7ef1Feb0B4Ce9E80"
    const contract = await getPromoWriteContract();
    const tx = await contract.approve(
      contractAddress, 
      toWei(tokensToApprove.toString())
    );
    console.log(tx)
    setIsStaked(true);
    setLoading(false)
    }catch(error){ 
      console.log("An Error Occured :"+ error.message)
    }
  }

  return (
    <div className="lockTokensWrapper">
      <button
        className="lockToken"
        onClick={()=>{
          handleClick();
          handleTokenApprove();
        }}
        disabled={loading}
      >
        {loading ? (
          <div className="loaderWrapper">
            <div className="loader"></div>
          </div>
        ) : (
          'Approve Tokens'
        )}
      </button>
    </div>
  );
}
