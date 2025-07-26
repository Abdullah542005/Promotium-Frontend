import { useEffect, useState } from "react"
import Topbar from "../../components/Topbar/Topbar"
import "./Dashboard.css"
import {motion,AnimatePresence} from "framer-motion"
import Post from "../../components/Post/Post";
import testImage from "../../assets/Images/test.jpg"
import coreImg from "../../assets/Images/coreDao.png"
import CreatePost from "../../components/CreatePost/CreatePost";

export default function Dashbaord(){ 
    const [filterMenu,setFilterMenu]  = useState(false);
    const [isApplying,setIsApplying]   = useState(false);
    const [isCreatePost, setisCreatingPost] = useState(false);

    useEffect(()=>{
        const timeOut  =  setTimeout(()=>setIsApplying(()=>false),3000)
        return ()=>{clearTimeout(timeOut)}
    },[isApplying])

    const changeCreatingPost = () => {
      if (isCreatePost)
        setisCreatingPost(false);
      else
        setisCreatingPost(true);
    }

    return(
         <div className="Dashboard">
             <Topbar />   

             <div className="DSection2">
                   <div>
                        <div><button onClick={changeCreatingPost} className="CreatePostbutton">
                          <svg width="22px" height="22px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00025"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.2942 7.95881C13.5533 7.63559 13.5013 7.16358 13.178 6.90453C12.8548 6.64549 12.3828 6.6975 12.1238 7.02072L13.2942 7.95881ZM6.811 14.8488L7.37903 15.3385C7.38489 15.3317 7.39062 15.3248 7.39623 15.3178L6.811 14.8488ZM6.64 15.2668L5.89146 15.2179L5.8908 15.2321L6.64 15.2668ZM6.5 18.2898L5.7508 18.2551C5.74908 18.2923 5.75013 18.3296 5.75396 18.3667L6.5 18.2898ZM7.287 18.9768L7.31152 19.7264C7.36154 19.7247 7.41126 19.7181 7.45996 19.7065L7.287 18.9768ZM10.287 18.2658L10.46 18.9956L10.4716 18.9927L10.287 18.2658ZM10.672 18.0218L11.2506 18.4991L11.2571 18.491L10.672 18.0218ZM17.2971 10.959C17.5562 10.6358 17.5043 10.1638 17.1812 9.90466C16.8581 9.64552 16.386 9.69742 16.1269 10.0206L17.2971 10.959ZM12.1269 7.02052C11.8678 7.34365 11.9196 7.81568 12.2428 8.07484C12.5659 8.33399 13.0379 8.28213 13.2971 7.95901L12.1269 7.02052ZM14.3 5.50976L14.8851 5.97901C14.8949 5.96672 14.9044 5.95412 14.9135 5.94123L14.3 5.50976ZM15.929 5.18976L16.4088 4.61332C16.3849 4.59344 16.3598 4.57507 16.3337 4.5583L15.929 5.18976ZM18.166 7.05176L18.6968 6.52192C18.6805 6.50561 18.6635 6.49007 18.6458 6.47532L18.166 7.05176ZM18.5029 7.87264L19.2529 7.87676V7.87676L18.5029 7.87264ZM18.157 8.68976L17.632 8.15412C17.6108 8.17496 17.5908 8.19704 17.5721 8.22025L18.157 8.68976ZM16.1271 10.0203C15.8678 10.3433 15.9195 10.8153 16.2425 11.0746C16.5655 11.3339 17.0376 11.2823 17.2969 10.9593L16.1271 10.0203ZM13.4537 7.37862C13.3923 6.96898 13.0105 6.68666 12.6009 6.74805C12.1912 6.80943 11.9089 7.19127 11.9703 7.60091L13.4537 7.37862ZM16.813 11.2329C17.2234 11.1772 17.5109 10.7992 17.4552 10.3888C17.3994 9.97834 17.0215 9.69082 16.611 9.74659L16.813 11.2329ZM12.1238 7.02072L6.22577 14.3797L7.39623 15.3178L13.2942 7.95881L12.1238 7.02072ZM6.24297 14.359C6.03561 14.5995 5.91226 14.9011 5.89159 15.218L7.38841 15.3156C7.38786 15.324 7.38457 15.3321 7.37903 15.3385L6.24297 14.359ZM5.8908 15.2321L5.7508 18.2551L7.2492 18.3245L7.3892 15.3015L5.8908 15.2321ZM5.75396 18.3667C5.83563 19.1586 6.51588 19.7524 7.31152 19.7264L7.26248 18.2272C7.25928 18.2273 7.25771 18.2268 7.25669 18.2264C7.25526 18.2259 7.25337 18.2249 7.25144 18.2232C7.2495 18.2215 7.24825 18.2198 7.24754 18.2185C7.24703 18.2175 7.24637 18.216 7.24604 18.2128L5.75396 18.3667ZM7.45996 19.7065L10.46 18.9955L10.114 17.536L7.11404 18.247L7.45996 19.7065ZM10.4716 18.9927C10.7771 18.9151 11.05 18.7422 11.2506 18.499L10.0934 17.5445C10.0958 17.5417 10.0989 17.5397 10.1024 17.5388L10.4716 18.9927ZM11.2571 18.491L17.2971 10.959L16.1269 10.0206L10.0869 17.5526L11.2571 18.491ZM13.2971 7.95901L14.8851 5.97901L13.7149 5.04052L12.1269 7.02052L13.2971 7.95901ZM14.9135 5.94123C15.0521 5.74411 15.3214 5.6912 15.5243 5.82123L16.3337 4.5583C15.4544 3.99484 14.2873 4.2241 13.6865 5.0783L14.9135 5.94123ZM15.4492 5.7662L17.6862 7.6282L18.6458 6.47532L16.4088 4.61332L15.4492 5.7662ZM17.6352 7.58161C17.7111 7.6577 17.7535 7.761 17.7529 7.86852L19.2529 7.87676C19.2557 7.36905 19.0555 6.88127 18.6968 6.52192L17.6352 7.58161ZM17.7529 7.86852C17.7524 7.97604 17.7088 8.07886 17.632 8.15412L18.682 9.22541C19.0446 8.87002 19.2501 8.38447 19.2529 7.87676L17.7529 7.86852ZM17.5721 8.22025L16.1271 10.0203L17.2969 10.9593L18.7419 9.15928L17.5721 8.22025ZM11.9703 7.60091C12.3196 9.93221 14.4771 11.5503 16.813 11.2329L16.611 9.74659C15.0881 9.95352 13.6815 8.89855 13.4537 7.37862L11.9703 7.60091Z" fill="#ffffff"></path> </g></svg>
                            Create Post</button>
                             <span
                              onMouseEnter={()=>{setFilterMenu(()=>true)}}
                              onMouseLeave={()=>{setFilterMenu(()=>false)}}
                             ><svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z" stroke="#ffffff" stroke-width="0.8879999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg><h2>Filter</h2>
                               <AnimatePresence> 
                                {filterMenu&&(<motion.div 
                                 initial={{scale:0.8,opacity:0}}
                                 animate={{scale:1,opacity:1}}
                                 exit={{scale:0.8,opacity:0}}
                                 transition={{duration:0.2,ease:"easeInOut"}}
                                className="FilterMenu">
                                   <span><input type="checkbox"></input><label>Ordinary</label></span>
                                   <span><input type="checkbox"></input><label>Challange</label></span>
                                   <span><input type="checkbox"></input><label>Reward Low-High</label></span>
                                  <span><input type="checkbox"></input><label>Reward High-Low</label></span>
                                  <span><input type="checkbox"></input><label>Recently Created</label></span>
                                  <span><input type="checkbox"></input><label>Eligible</label></span>
                                  <button
                                   onClick={()=>{setIsApplying(()=>true)}}
                                   className="CreatePostbutton"
                                  >{!isApplying?"Apply":(<span className="button-loader"></span>)}</button>
                               </motion.div>)}
                               </AnimatePresence>
                             </span>
                          </div>

                        <div className="PostWrapper">
                              <Post name={"Promotium"} postHead={"Create. Share. Earn."}
                               postBody={"Join the movement on Promotium, the platform that connects advertisers and promoters for real, on-chain impact Create a thread on X (formerly Twitter) explaining how Promotium works — from how advertisers post tasks to how promoters complete them and earn tokens.Share your insights, help others discover the platform, and get 10 Promo as a reward for completing this task."}
                               createdTime={"43 mins ago"} tags={["500 Promo", "10 Interactions Left","5 Core Stake Required","1 Day Challenge Window"]}
                               address={"0xa09..4003"} isfollowed={false}
                               type={"Challenge"}
                              />

                              <Post name={"The Economist"} postHead={"Stay Informed Get Rewarded"}
                               postBody={"Follow The Economist on X (formerly Twitter) to gain sharp insights into global economics, business trends, and geopolitics. Stay ahead with expert analysis, data-driven stories, and a global perspective that matters. Complete this simple task and get rewarded with 5 Promo Points. Learn more, stay smart, and earn as you go. Learn more, earn more — it's that simple."}
                               createdTime={"1 hr ago"} tags={["5 Promo", "1498 Interactions Left"]}
                               address={"0xa09..4003"} isfollowed={true}
                               type={"Ordinary"}
                              />
                        
                             
                        </div>
                   </div>

                   <div>
                     <div className="DNewsComponent">
                      <img src={testImage}></img>
                      <div>
                        <span ></span>
                        <span style={{backgroundColor:"white"}} ></span>
                        <span></span>
                      </div>

                     </div>
                     {window.innerWidth > 800 && (<div className="DAssetsComponent">
                        <h1 className="FontHead">Assets</h1>
                        <div className="AssetsTag">
                            <div>
                                 <img src={coreImg}></img>
                                 <span><h2>PROMOTIUM</h2><h3>PROMO</h3></span>
                            </div>
                            <span><h2>100000000</h2><h3>@5.00 USD</h3></span>
                        </div>

                        <div className="AssetsTag">
                            <div>
                                 <img src={coreImg}></img>
                                 <span><h2>CORE DAO</h2><h3>CORE</h3></span>
                            </div>
                            <span><h2>344.53</h2><h3>@10000.00 USD</h3></span>
                        </div>
                     </div>)}
                   </div>
             </div>
             <AnimatePresence>
              {isCreatePost && (
                <CreatePost closePostMenu={setisCreatingPost} />
              )}
            </AnimatePresence>
         </div>
    )
}