import { useState } from 'react';
import './LockToken.css'; // contains your loader CSS
import {getPromoWriteContract} from "../../../contract/models/promoWrite"
import { toWei } from 'thirdweb';
import { toast } from 'sonner';
export default function LockTokens({setIsStaked,tokensToApprove,type,setshowload}) {
  const [loading, setLoading] = useState(false);
  const [isCompleted,setIsCompleted] = useState(false)
  const handleClick = () => {
    if (loading) return;
    setLoading(true);

    // Simulate a loading task (e.g., async operation)
  };

  const handleTokenApprove = async ()=>{
    setshowload(true);
    try{
    const contractAddress = type =='A'?
    "0xc785F52C0992aE729B7F48a532D0635d57Ba65e6":
    "0xBA789D4B2538E4712C7Fe901Caf87Fe2439931a0"
    const contract = await getPromoWriteContract();
    const tx = await contract.approve(
      contractAddress, 
      toWei((tokensToApprove + 0.1).toString())
    );
    toast.success("TxHash: "+tx.hash,{duration:3000})
    setIsStaked(true);
    setLoading(false)
    // setshowload(false);
    setIsCompleted(true)
    }catch(error){ 
      console.log("An Error Occured :"+ error.message)
    }
  }

  return (
    <div className="lockTokensWrapper">
      {!isCompleted && (<button
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
      </button>)}
    </div>
  );
}
