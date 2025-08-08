import { useState } from "react"
import "./InteractionHistory.css"
import {motion} from "framer-motion"
import { toDate } from "../../utils/toDate"
import ReportPost from './ReportPost'
 
export default function InteractionHistory({postId,closeMenu,interactionData,isOwner}){
    const selectedStyle = {
       backgroundColor:"#3d3d3d"
    }
    const [selectedPromoter,setSelectedPromoter] = useState(0);
    const [reportSection, setreportSection] = useState(false);

    return(
        <motion.div 
         initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%"}}
         animate={{ scale: 1, opacity: 1 }}
         exit={{ scale: 0.8, opacity: 0 }}
         transition={{ duration: 0.1, ease: 'easeInOut' }}
        className="Menu InteractionHistoryMenu">
              <div>
                <h1 className="FontNormal">Post Interactions History</h1>
                <svg onClick={()=>{closeMenu(false)}}
                className="CloseButton"
                width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#fafafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fafafa"></path> </g></svg>
            </div>

           {interactionData.length !=0 ?( <div className="IHPostB">   {/* IHPOSTB means Intearction History Post B */}
                <div className="PromotersWrapper">
                      <h2>Recent Promoters</h2>

                      {interactionData.map((int,index)=>
                        <span
                        key={index}
                        onClick={()=>{setSelectedPromoter(index)}}
                        style={selectedPromoter == index?{...selectedStyle}:{}}>
                           <img src={`https://peach-personal-bedbug-525.mypinata.cloud/ipfs/${int.promoterPfp}`}></img>
                           <h2>{"@"+int.promoterUsername}</h2>
                        </span>
                      )}

                </div>
                <div className="InteractionDetails">
                     <h2>Interaction Details</h2>
                    {isOwner &&( <button onClick={()=>setreportSection(true)} style={{alignSelf:"flex-end"}} className="ReportButton"><svg width="13px" height="13px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>report_flag [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke-width="0.00021000000000000004" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -600.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M381.9,440 L369.3,440 C368.13975,440 367.2,440.895 367.2,442 L367.2,450 C367.2,451.105 368.13975,452 369.3,452 L381.9,452 C383.06025,452 384,451.105 384,450 L384,442 C384,440.895 383.06025,440 381.9,440 M365.1,441 L365.1,459 C365.1,459.552 364.6296,460 364.05,460 C363.4704,460 363,459.552 363,459 L363,441 C363,440.448 363.4704,440 364.05,440 C364.6296,440 365.1,440.448 365.1,441" id="report_flag-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                     Report</button>)}
                     {reportSection && <ReportPost postId={postId} closeMenu={setreportSection} interactionData={interactionData[selectedPromoter]}/>}
                     <span><h3 >Interacted On: {toDate(interactionData[selectedPromoter].interactedAt)}</h3> </span>
                     <span><h3>Interaction ID: #{interactionData[selectedPromoter].interactionID}</h3><h3>Interaction Challenged: {interactionData[selectedPromoter].isChallenged ? "Yes" :"No"}</h3></span>
                     <span><h3>Post ID: {postId}</h3><h3>Reward Claimed: {interactionData[selectedPromoter].hasClaimed?"Yes":"No"}</h3></span>
                     <span><h3>Hash: {interactionData[selectedPromoter].interactionHash}</h3></span>
                     <span style={{borderBottom:"1px solid rgb(56, 55, 55)"}}></span>
                     <div className="InteractionTextProof">
                         <h2>Promoter's Comment:</h2>
                         <p>
                           {interactionData[selectedPromoter].interactionBody}
                         </p>
                     </div>

                     <div className="InteractionImageProof">
                         <h2>Image Proofs:</h2>
                         <div className="ProofImagesContainer">
                            {interactionData[selectedPromoter].imageProofs.map((cid)=>
                            <img src={`https://peach-personal-bedbug-525.mypinata.cloud/ipfs/${cid}`}></img>)}
                         </div>
                     </div>
                </div>


            </div>):<h1>No Interactions Found</h1>}
        </motion.div>
    )
}

