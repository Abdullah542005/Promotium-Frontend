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
    "0x4d9605B05C559187A5EdFcBc7ff221dc0B5A9Ac0":
    "0x8b1443B4Fc488a08e9D7083c18576D5ad900887f"
    const contract = await getPromoWriteContract();
    const tx = await contract.approve(
      contractAddress, 
      toWei((tokensToApprove + 0.1).toString())
    );
    toast.success("TxHash: "+tx.hash,{duration:3000})
    setIsStaked(true);
    setLoading(false)
    setshowload(false);
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
