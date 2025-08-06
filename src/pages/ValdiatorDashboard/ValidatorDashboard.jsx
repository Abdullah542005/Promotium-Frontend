import { useEffect, useState } from "react"
import ReportMenu from "../../components/Menu/ReportMenu"
import promotiumLogo from "../../assets/Images/PromotiumLogo.svg"
import "./ValidatorDashboard.css"
import { Link } from "react-router-dom"
import { getValidatorContract } from "../../contract/models/validator"
import { toast, Toaster } from "sonner"
import { fetchValidatorData } from "../../services/validator"
import { set } from "react-hook-form"
import { toDate, toTimeAgo } from "../../utils/toDate"

export default function ValidatorDashoard(){ 
    const [tabs,setTabs]  = useState("AssignedReports")
    const [reportMenu,setReportMenu] = useState(false)
    const [isUserValidator,setIsUserValidator] = useState(localStorage.getItem('isValidator')?true:false);
    const [validatorInfo,setValidatorInfo] = useState({});
    
    useEffect(()=>{
          if(localStorage.getItem('isValidator')){
              handleDataRetrieval();
          }
    },[])

    const handleDataRetrieval = async ()=>{ 
       const data = await fetchValidatorData();
       console.log(data)
       setValidatorInfo(data)
    }

    
    return(
     isUserValidator?
       <div className="VDashboard"> 
           <div>
               <h1>Validator Dashboard</h1>
               <button className="RMenuButton ResignBtn"> Apply Resign</button>
              </div>
               <Toaster richColors position='top-right' unstyled/>
             <VDashboardBody validatorInfo={validatorInfo} />
             <div className="VDasboardTabs">
                <span onClick={()=>{setTabs("AssignedReports")}} style={tabs == "AssignedReports"?{borderBottom:"2px solid #01A1CD", opacity:1}:{}}><h2>Assinged Reports</h2></span>
                <span onClick={()=>{setTabs("History")}} style={tabs == "History"?{borderBottom:"2px solid #01A1CD", opacity:1}:{}}><h2>History</h2></span>
              </div>

              {tabs == "AssignedReports"&&(<div className="ReportTagContainer">
                   <ReportTag setReportMenu={setReportMenu} status={"Pending"} hasEnded={false} 
                    timestmap={"19 hours 13 min 5s"} reportId={"#95497"}
                   />
                   <ReportTag setReportMenu={setReportMenu} status={"Pending"} hasEnded={false} 
                    timestmap={"11 hours 42 min 12s"} reportId={"#36597"}
                   />
                 
              </div>)}
              {
                tabs=="History" && (
                  <div className="ReportTagContainer">
                   <ReportTag setReportMenu={setReportMenu} status={"Completed"} hasEnded={true} 
                    timestmap={"19 hours 13 min 5s"} reportId={"#95497"}
                   />
                   <ReportTag setReportMenu={setReportMenu} status={"Missed"} hasEnded={true} 
                    timestmap={"11 hours 42 min 12s"} reportId={"#36597"}
                   />
                   <ReportTag setReportMenu={setReportMenu} status={"Missed"} hasEnded={true} 
                    timestmap={"11 hours 42 min 12s"} reportId={"#36597"}
                   />
              </div>
                )
              }
            {reportMenu &&( <ReportMenu closeMenu={setReportMenu} />)}
           {reportMenu && ( <div onClick={()=>{setReportMenu(false)}} className="BackdropEffect"> </div>)}
       </div>:<BecomeValidator />
    )
}


function BecomeValidator(){
 return( <div className="VDBecomeValditor">
       <h1>Sorry, Looks like you are not a validator</h1>
       <p>
         Solve Disputes, Cast Votes, Earn Rewards
       </p>
      <Link to={"/BecomeValidator"}> <button>Become One</button></Link>
  </div>)
}


function VDashboardBody({validatorInfo}){ 
    const [onchainInstructions,setOnchainInstructions]  = useState(false)
    const [offchainInstructions,setoffchainInstructions]  = useState(false)
    return (
      <div className="VDasboardBody">
        <div className="VDasboardBodyContainers">
          <div>
            <h1>{validatorInfo.onChainCreditScore || 0}</h1>
            <span className="CreditScoreInfo">
              <h2> OnChain Credit Score</h2>
              <svg
                 onMouseEnter={()=>{setOnchainInstructions(true)}}
                 onMouseLeave={()=>{setOnchainInstructions(false)}}
                width="13px"
                height="13px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                stroke="#000000"
                stroke-width="0.00016"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>

              {onchainInstructions && (
                <p>
                  On-Chain Credit Score ranges up to 10, increasing with each
                  weekly check-in and decreasing by 1 for each missed. If it
                  drops below 10, the validator becomes ineligible to vote and
                  is slashed 10% of their stake for every point below 10. The
                  score also impacts their chances of being selected for report
                  resolution
                </p>
              )}
            </span>
          </div>
          <div>
            <h1>{validatorInfo.offChainCreditScore || 0}</h1>
            <span className="CreditScoreInfo">
              <h2> OffChain Credit Score</h2>
              <svg
                 onMouseEnter={()=>{setoffchainInstructions(true)}}
                 onMouseLeave={()=>{setoffchainInstructions(false)}}
                width="13px"
                height="13px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                stroke="#000000"
                stroke-width="0.00016"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 s -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503906 -1.125 1.125 s 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 s -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265624 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>

              {offchainInstructions && (
                <p>
                  Off-Chain Credit Score ranges up to 10, it decreases if a validator
                  missed a report. There is no penalty for decrease in off-Chain Credit Score,
                  however its weigthage in probability of being selected is 2x more than OnChain-Score.
                </p>
              )}
            </span>
          </div>

          <div>
               <h1 style={{fontSize:"1.3em", color:"#007EA0"}}> Weekly Check In</h1>
               <h3 style={{opacity:"0.8", fontSize:"0.9em"}}>Last Check In: {toTimeAgo(validatorInfo.lastCheckIn)}</h3>
               <button className="RMenuButton"
                 onClick={async ()=>{
                  try{
                   const contract  =await getValidatorContract();
                   const tx = await contract.checkIn();
                   toast.success("Tx Hash: "+ tx.hash,{duration:3000})
                  }catch(error){
                    console.log("error occured at checking In :"+ error.message)
                    toast.error(error.message,{duration:5000})
                  }
                 }}
               >CheckIn</button>
          </div>

          <div>
              <h1 style={{fontSize:"1.3em", color:"#007EA0"}}> 4000 Core</h1>
               <h3 style={{opacity:"0.8", fontSize:"0.9em"}}>My Stake (Req: 4000)</h3>
               <button className="RMenuButton">Replenish</button>
          </div>
     
 
        </div>
      </div>
    );
}


function ReportTag({setReportMenu, hasEnded, reportId, timestmap,status}){
   const reportStatus = {
    status:status == "Completed"?"Completed": status == "Missed"?"Missed":"Pending",
    color:status == "Completed"?"rgb(2, 192, 2)": status == "Missed"?"rgb(226, 69, 1)":" rgb(237, 178, 67)"
   }
   return( 
    <div className="ReportTag">
      <div className="ReportTagHead"> <span>
        <h1>{hasEnded?"":"New"} Report</h1><h2 style={{opacity:"0.6" ,fontWeight:"300"}}>{reportId}</h2></span> 

        <span><span style={{backgroundColor:reportStatus.color}} className="Dot"></span> 
        <h2 style={{color:reportStatus.color}}>{reportStatus.status}</h2></span> </div>

       <div className="ReportVotingPeriod">
            <h1>{hasEnded?"Voting Ended":"Voting Ends In:"}</h1>
             <h2>{timestmap}</h2>
       </div>
       <div className="ReportVotingPeriod" style={{borderBottom:"1px solid rgb(89, 89, 89)",paddingBottom:"10px"}}>
            <h1>Reward</h1>
             <span style={{display:"flex", gap:"3px", alignItems:"center"}}> <h2>10</h2><img src={promotiumLogo} style={{width:"17px", height:"14px"}}></img></span>
       </div>
       <button onClick={()=>{setReportMenu(true)}} style={{alignSelf:"center"}} className="RMenuButton">View Report</button>
    </div>
   )
}