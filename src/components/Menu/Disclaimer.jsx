import {motion,AnimatePresence} from "framer-motion"
export default function Disclaimer({closeMenu}) {
    return(
      <AnimatePresence>
         <motion.div 
             initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%"}}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
         className="Menu" style={{width:"90%", maxWidth:"600px"}}>
            <div>
                <h1 className="FontNormal">Disclaimer</h1>
                <svg onClick={()=>{closeMenu(false)}}
                className="CloseButton"
                width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#fafafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fafafa"></path> </g></svg>
            </div>
            <div className="DisclaimerMenuBody">  {/* Class added in Menu css */} 
              <h1 style={{color:"#FF3B3B", textShadow: '1px 1px 4px rgba(255, 0, 0, 0.4)'}}>Risk Of Stake Slash (Challenge Post Only)</h1>
              <p className="FontNormal">
             When a promoter interacts with a challenge post on Promtium, 
             they're required to stake a specific amount of tokens for the duration of the challenge period, 
             as set by the advertiser. The advertiser can report against the promoter's interaction within this period,
             which is then verified by a panel of validators who cast their votes.<br></br>
               If a promoter's interaction is voted invalid, their entire stake is slashed, 
             the interaction is invalidated, and they are exempted from any rewards. If the interaction is voted valid, the promoter receives their reward and their stake is unlocked immediately, regardless of how much time is left in the
             challenge period. <br></br> Promtium is designed to ensure every party has an equal and fair opportunity.
              </p>
            <div>
             <input type="checkbox" onClick={()=>{localStorage.setItem("ChallengeDisclaimer","Agree")}}></input>
             <label>Don't Show me again</label>
            </div> 
            <button onClick={()=>{closeMenu(false)}}>Close</button>
            </div>
             
         </motion.div>
         </AnimatePresence>
    )
}