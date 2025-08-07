import "./Menu.css"
import {motion,AnimatePresence} from "framer-motion"
import { clearNotifications } from "../../services/userNotifications"
import {toTimeAgo} from "../../utils/toDate"
export default  function NotificationMenu({notifications,closeMenu}){
    return( 
        <AnimatePresence>
        <motion.div 
          initial={{scale:0.9,opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1,opacity:1}}
          exit={{scale:0.5,opacity:0.8}}
          transition={{duration:0.3,ease:"easeInOut"}}
         className="Menu NotificationMenuA" style={{gap:"18px"}}>
            <div>
                <h1 className="FontNormal">Notifications</h1>
                <svg onClick={()=>{closeMenu(false)}}
                className="CloseButton"
                width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#fafafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fafafa"></path> </g></svg>
            </div>
            <div className="NotificationButtons">
                <h2 onClick={async ()=>{
                    await clearNotifications();
                    closeMenu(false)
                }} className="FontNormal">Clear All</h2>
            </div>

            <div className="NTagWraper">
            {notifications && 
            notifications.map((nt)=>
            <NotificationTag  head={nt.type} body={nt.message}
                 time={nt.timestamp ? toTimeAgo(nt.timestamp) : "a while ago"}
                 isRead={false}
            />)}
                
            </div>
        </motion.div>
        </AnimatePresence>
    )
}


function NotificationTag({head,body,type,isRead, time}){
    return( 

        <div className="NTag" style={!isRead?{backgroundColor:"#363434"}:{}}>
            {head === "Account Created" ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="30px" height="30px" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            :   head === "Post Created" ? 
                <svg fill="white" width="30px" height="30px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zM238.1 177.9L102.4 313.6l-6.3 57.1c-.8 7.6 5.6 14.1 13.3 13.3l57.1-6.3L302.2 242c2.3-2.3 2.3-6.1 0-8.5L246.7 178c-2.5-2.4-6.3-2.4-8.6-.1zM345 165.1L314.9 135c-9.4-9.4-24.6-9.4-33.9 0l-23.1 23.1c-2.3 2.3-2.3 6.1 0 8.5l55.5 55.5c2.3 2.3 6.1 2.3 8.5 0L345 199c9.3-9.3 9.3-24.5 0-33.9z"/></svg>
            :   <svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            <div>
                <div><h1  className="FontNormal">{head}</h1> <h3 className="FontNormal"> .{time}</h3></div>
                <h2 className="FontNormal">{body}</h2>
            </div>
        </div>

    )
}