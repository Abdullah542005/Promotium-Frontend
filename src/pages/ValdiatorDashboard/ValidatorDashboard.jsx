import { useEffect, useState } from "react"
import ReportMenu from "../../components/Menu/ReportMenu"
import promotiumLogo from "../../assets/Images/PromotiumLogo.svg"
import "./ValidatorDashboard.css"
import {  Link } from "react-router-dom"
import { getValidatorContract } from "../../contract/models/validator"
import { toast, Toaster } from "sonner"
import { fetchValidatorData } from "../../services/validator"
import { getCountdown, toDate, toTimeAgo } from "../../utils/toDate"
import ResignMenu from "../../components/Menu/ResignMenu"
import {motion} from  "framer-motion"
export default function ValidatorDashoard(){ 
    const [tabs,setTabs]  = useState("AssignedReports")
    const [reportMenu,setReportMenu] = useState(false)
    const [isUserValidator,setIsUserValidator] = useState(localStorage.getItem('isValidator') === "true");
    const [validatorInfo,setValidatorInfo] = useState({});
    const [resignMenu,setResignMenu] = useState(false)
    useEffect(()=>{
          if(localStorage.getItem('isValidator')){
              handleDataRetrieval();
          }
    },[])

    const handleDataRetrieval = async ()=>{ 
       const data = await fetchValidatorData();
       setValidatorInfo(data)
    }

    
    return(
     isUserValidator == true?
       (<div className="VDashboard"> 
          <motion.div
            initial={{y:40,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.8}}
          >
               <h1>Validator Dashboard</h1>
               <button
                 onClick={async ()=>{
                   if(!validatorInfo.hasRequestedResign)
                      return setResignMenu(true)
                    if(validatorInfo.resignationTime < Date.now()/1000)
                      return await unstake();
                    return toast.message("Please wait for the leftover time to unstake",{duration:4000})
                 }}
                 className="RMenuButton ResignBtn">
                  {validatorInfo.hasRequestedResign?
                  validatorInfo.resignationTime>Date.now()/1000?`Unstake In ${getCountdown(validatorInfo.resignationTime)}`
                  :"Unstake":"Resign"
                }
                  </button>
              </motion.div>
               <Toaster richColors position='top-right' unstyled/>
             <VDashboardBody validatorInfo={validatorInfo} />
             <motion.div
                initial={{y:40,opacity:0}}
                whileInView={{y:0,opacity:1}}
                viewport={{once:true,amount:0.1}}
                transition={{duration:0.8,delay:0.3}}
             className="VDasboardTabs">
                <span onClick={()=>{setTabs("AssignedReports")}} style={tabs == "AssignedReports"?{borderBottom:"2px solid #01A1CD", opacity:1}:{}}><h2>Assinged Reports</h2></span>
                <span onClick={()=>{setTabs("History")}} style={tabs == "History"?{borderBottom:"2px solid #01A1CD", opacity:1}:{}}><h2>History</h2></span>
              </motion.div>

              {tabs == "AssignedReports"&&(<div className="ReportTagContainer">
                  {validatorInfo.assignedReport && validatorInfo.assignedReport.map((report,index)=>
                    <ReportTag delay={index*0.1} key={index} hasVoted={false} setReportMenu={setReportMenu} status={"Pending"} hasEnded={false} 
                    timestamp={report.timestamp} reportId={report.reportId}
                   />
                  )}
                 
              </div>)}
              {
                tabs=="History" && (
                  <div className="ReportTagContainer">
                    {validatorInfo.validationHistory && validatorInfo.validationHistory.map((report,index)=>
                    <ReportTag key={index} delay={index*0.1} hasVoted={true} setReportMenu={setReportMenu} status={"Completed"} hasEnded={true} 
                     timestamp={report.timestamp} reportId={report.reportId}
                   />
                  )}
              </div>
                )
              }
           {(reportMenu || reportMenu) && ( <div onClick={()=>{setReportMenu(false)}} className="BackdropEffect"> </div>)}
           {resignMenu && <ResignMenu closeMenu={setResignMenu} />}

       </div>):<BecomeValidator />
    )
}


function BecomeValidator(){
 return( <div className="VDBecomeValditor">
       <motion.h1
            initial={{y:40,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.6}}
       >Sorry, Looks like you are not a validator</motion.h1>
       <motion.p
           initial={{y:40,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.6,delay:0.2}}
         >
         Solve Disputes, Cast Votes, Earn Rewards
       </motion.p>
      <Link to={"/BecomeValidator"}> <motion.button 
           initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.4,delay:0.4}}
      >Become One</motion.button></Link>
  </div>)
}


function VDashboardBody({validatorInfo}){ 
    const [onchainInstructions,setOnchainInstructions]  = useState(false)
    const [offchainInstructions,setoffchainInstructions]  = useState(false)
    return (
      <div className="VDasboardBody">
        <div className="VDasboardBodyContainers">

          <motion.div
            initial={{y:40,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true,amount:0.1}}
            transition={{duration:0.8,delay:0.2}}
          >
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
                <motion.p
                initial={{scale:0.7,opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{duration:0.3}}
                >
                  On-Chain Credit Score ranges up to 10, increasing with each
                  weekly check-in and decreasing by 1 for each missed. If it
                  drops below 10, the validator becomes ineligible to vote and
                  is slashed 10% of their stake for every point below 10. The
                  score also impacts their chances of being selected for report
                  resolution
                </motion.p>
              )}
            </span>
          </motion.div>

          <motion.div
             initial={{y:40,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true,amount:0.1}}
            transition={{duration:0.8,delay:0.2}}
          >
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
                <motion.p
                initial={{scale:0.7,opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{duration:0.3}}
                >
                  Off-Chain Credit Score ranges up to 10, it decreases if a validator
                  missed a report. There is no penalty for decrease in off-Chain Credit Score,
                  however its weigthage in probability of being selected is 2x more than OnChain-Score.
                </motion.p>
              )}
            </span>
          </motion.div>

          <motion.div
              initial={{y:40,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true,amount:0.1}}
            transition={{duration:0.8,delay:0.2}}
          >
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
          </motion.div>

          <motion.div
            initial={{y:40,opacity:0}}
            whileInView={{y:0,opacity:1}}
            viewport={{once:true,amount:0.1}}
            transition={{duration:0.8,delay:0.2}}
          >
              <h1 style={{fontSize:"1.3em", color:"#007EA0"}}> {validatorInfo.stake} Core</h1>
               <h3 style={{opacity:"0.8", fontSize:"0.9em"}}>My Stake (Req: 0.1 Core)</h3>
               <button className="RMenuButton">Replenish</button>
          </motion.div>
     
 
        </div>
      </div>
    );
}


function ReportTag({delay = 0,hasEnded, reportId, timestamp,status,hasVoted}){
   const reportStatus = {
    status:status == "Completed"?"Completed": status == "Missed"?"Missed":"Pending",
    color:status == "Completed"?"rgb(2, 192, 2)": status == "Missed"?"rgb(226, 69, 1)":" rgb(237, 178, 67)"
   }
   const [countDown,setCountDown] = useState("")
   useEffect(()=>{
    setCountDown(getCountdown(timestamp))
    setInterval(()=>{
      setCountDown(getCountdown(timestamp*1000))
    },1000)
   },[])
   const [reportMenu,setReportMenu] = useState(false)
   return( 
    <motion.div
           initial={{x:70,opacity:0}}
            whileInView={{x:0,opacity:1}}
            viewport={{once:true,amount:0.1}}
            transition={{duration:0.4,delay:0.1 + delay}}
    className="ReportTag">
      {reportMenu && (<ReportMenu hasVoted={hasVoted} reportId={reportId} closeMenu={setReportMenu} />)}
      <div className="ReportTagHead"> <span>
        <h1>{hasEnded?"":"New"} Report</h1><h2 style={{opacity:"0.6" ,fontWeight:"300"}}>{reportId}</h2></span> 

        <span><span style={{backgroundColor:reportStatus.color}} className="Dot"></span> 
        <h2 style={{color:reportStatus.color}}>{reportStatus.status}</h2></span> </div>

       <div className="ReportVotingPeriod">
            <h1>{hasEnded?"Voting Ended":"Voting Ends In:"}</h1>
             <h2>{hasEnded? toTimeAgo(timestamp) :countDown}</h2>
       </div>
       <div className="ReportVotingPeriod" style={{borderBottom:"1px solid rgb(89, 89, 89)",paddingBottom:"10px"}}>
            <h1>Reward</h1>
             <span style={{display:"flex", gap:"3px", alignItems:"center"}}> <h2>10</h2><img src={promotiumLogo} style={{width:"17px", height:"14px"}}></img></span>
       </div>
       <button onClick={()=>{setReportMenu(true)}} style={{alignSelf:"center"}} className="RMenuButton">View Report</button>
    </motion.div>
   )
}