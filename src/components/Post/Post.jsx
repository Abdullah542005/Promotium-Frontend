
import { useEffect, useState } from "react"
import xlogo from "../../assets/Images/xlogo.png"
import "./Post.css"
import InteractionA from "../Menu/InteractionA"
import Disclaimer from "../Menu/Disclaimer"
import InteractionB from "../Menu/interactionB"
import {motion,AnimatePresence} from "framer-motion"
import InteractionHistory from "../Menu/InteractionHistory"
import InteractionHistoryOrdinary from "../Menu/InteractionHistoryOrdinary"
import DeletePost from "../Menu/DeletePost"
import {Toaster, toast} from 'sonner';


export default function Post({name,address,createdTime,isfollowed,postHead,postBody,tags,type}){
    const [interactMenu,setInteractMenu] = useState(false)
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [isCreator,setIsCreator] = useState(false);
    const [viewPostControls,setViewPostControls] = useState(false);
    const disclaimer = localStorage.getItem("ChallengeDisclaimer")

    const [interactionsHistoryMenu,setInteractionsHistoryMenu] = useState(false)
    const [interactionHistoryMenuOrdinary, setInteractionsHistoryMenuOrdinary] = useState(false);
    const [deletePostOrdinary, setDeletePostOrdinary] = useState(false);
    const [deletePostChallenge, setDeletePostChallenge] = useState(false);
    const [showDeleteToast, setShowDeleteToast] = useState(false);
    const [showDeleteToastChallenge, setShowDeleteToastChallenge] = useState(false);

    useEffect(() => {
      if (showDeleteToastChallenge){
         toast.success('Deleted!', {
            duration: 3000,
            description: "Post Deletetion Intitiated",
            className: "SuccessToast"
         });
      }

      else if (showDeleteToast) {
        toast.success('Deleted!', {
          duration: 3000,
          description: "Post Deleted successfully",
          className: "SuccessToast"
        });
    
        // reset after toast
        setShowDeleteToast(false);
        setShowDeleteToastChallenge(false);
      }
    }, [showDeleteToast, showDeleteToastChallenge]);
    

    return(
        <div className="Post">
        {interactMenu&& (type == "Challenge"? 
        <>
           {showDisclaimer && !disclaimer && <Disclaimer closeMenu={setShowDisclaimer} />}
           {(!showDisclaimer || disclaimer) &&  <InteractionB closeMenu={setInteractMenu} />}
        </>:<InteractionA closeMenu={setInteractMenu}/> )}

        {interactionsHistoryMenu && (<InteractionHistory closeMenu={setInteractionsHistoryMenu}/>)}
        {interactionHistoryMenuOrdinary && (<InteractionHistoryOrdinary closeMenu={setInteractionsHistoryMenuOrdinary}/>)}
        {deletePostOrdinary && <DeletePost closeMenu={setDeletePostOrdinary} output={setShowDeleteToast} type={type}/>}
        {deletePostChallenge && <DeletePost closeMenu={setDeletePostChallenge} output={setShowDeleteToast} outputInitiate={setShowDeleteToastChallenge} type={type}/>}

        {(interactMenu || interactionsHistoryMenu ) && (<div onClick={()=>{setInteractMenu(false)}} className="BackdropEffect"> </div>)}
            <div className="PostHead">
                  <div>
                      <img></img>
                      <div>
                           <h2 style={{fontWeight:'bold'}} className="FontNormal">{name}</h2>
                           <h4 className="FontNormal">{address}</h4>
                      </div>
                     <h4 style={{marginLeft:"20px"}} className="FontNormal">{createdTime}</h4>
                  </div>
                  <h2 className="FontNormal" style={{fontWeight:'bold'}}>{isfollowed?"Following":"+ Follow"}</h2>
            </div>

            <div className="PostBody">
                 <h1 className="FontHead">{postHead}</h1>
                 <p className="FontNormal">{postBody}</p>
                 <div className="PostTags">
                   {tags.map((tag)=><span><h2>{tag}</h2></span>)} 
                 </div>
                 <button
                  onClick={()=>setInteractMenu(true)}
                 >VIEW 
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="#ffffff"></path> </g></svg>
                 </button>
                  
                 {isCreator && (<div className="SocialIcons">
                   <img src={xlogo}></img>
                   <svg width="23px" height="23px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"></path></g></svg>
                  </div>)}

                  <div className="PostControls SocialIcons">
                    <svg onClick={()=>{setViewPostControls((prev)=>!prev)}}
                     width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#ffffff"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#ffffff"></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#ffffff"></path> </g></svg>
                     
                     {viewPostControls &&(
                       <AnimatePresence>
                        <motion.div
                          initial={{scale:0.9,opacity:0}}
                          animate={{scale:1,opacity:1}}
                          transition={{duration:0.3}}
                          exit={{scale:0.9,opacity:0}}
                          onClick={()=>{setViewPostControls((prev)=>!prev)}}
                        className="PostControlMenu">
                           <span onClick={()=>{type==='Ordinary' ? setInteractionsHistoryMenuOrdinary(true) :setInteractionsHistoryMenu(true)}}>
                              <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.25C7.48587 3.25 4.44529 5.9542 2.68057 8.24686L2.64874 8.2882C2.24964 8.80653 1.88206 9.28392 1.63269 9.8484C1.36564 10.4529 1.25 11.1117 1.25 12C1.25 12.8883 1.36564 13.5471 1.63269 14.1516C1.88206 14.7161 2.24964 15.1935 2.64875 15.7118L2.68057 15.7531C4.44529 18.0458 7.48587 20.75 12 20.75C16.5141 20.75 19.5547 18.0458 21.3194 15.7531L21.3512 15.7118C21.7504 15.1935 22.1179 14.7161 22.3673 14.1516C22.6344 13.5471 22.75 12.8883 22.75 12C22.75 11.1117 22.6344 10.4529 22.3673 9.8484C22.1179 9.28391 21.7504 8.80652 21.3512 8.28818L21.3194 8.24686C19.5547 5.9542 16.5141 3.25 12 3.25ZM3.86922 9.1618C5.49864 7.04492 8.15036 4.75 12 4.75C15.8496 4.75 18.5014 7.04492 20.1308 9.1618C20.5694 9.73159 20.8263 10.0721 20.9952 10.4545C21.1532 10.812 21.25 11.2489 21.25 12C21.25 12.7511 21.1532 13.188 20.9952 13.5455C20.8263 13.9279 20.5694 14.2684 20.1308 14.8382C18.5014 16.9551 15.8496 19.25 12 19.25C8.15036 19.25 5.49864 16.9551 3.86922 14.8382C3.43064 14.2684 3.17374 13.9279 3.00476 13.5455C2.84684 13.188 2.75 12.7511 2.75 12C2.75 11.2489 2.84684 10.812 3.00476 10.4545C3.17374 10.0721 3.43063 9.73159 3.86922 9.1618Z" fill="#ffffff"></path> </g></svg>
                             <h1>View Interactions</h1>
                           </span>

                           <span onClick={()=>{type==='Ordinary' ? setDeletePostOrdinary(true) : setDeletePostChallenge(true)}}>
                           <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ff0000" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#ff0000" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#ff0000" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff0000" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff0000" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <h1 onClick={()=>{type==='Ordinary' ? setDeletePostOrdinary(true) : setDeletePostChallenge(true)}}>Delete Post</h1>
                            </span>

                     </motion.div>
                     </AnimatePresence> )}
                     <Toaster richColors position='top-right' unstyled/>
                  </div>


            </div>

           
            
         </div>
    )
}