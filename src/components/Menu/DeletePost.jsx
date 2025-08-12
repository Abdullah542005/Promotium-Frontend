import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './DeletePost.css'
import { deletePostA } from '../../services/deletePost'
import { getPostBContract } from '../../contract/models/postB'
import { toNumber } from 'ethers'



const DeletePost = ({closeMenu, output, outputInitiate, type, postId}) => {
   const [initiatedTime,setInitiatedTime] = useState(0);
   useEffect(()=>{
       if(type == 'Challenge')
            getPostData()
   },[])
   
    const getPostData = async ()=>{
     const post = await getPostBContract().posts(
         toNumber(postId.split("_")[1])
     )
     console.log(post)
    }

    const deletePostInitiate = ()=>{
        closeMenu(false);
    }

    const deletePost = async ()=>{
        await deletePostA(postId)
        closeMenu(false);
    }

  return (
      <AnimatePresence>
        <div className="BackdropEffect" onClick={() => closeMenu(false)} />
        <motion.div 
          initial={{scale:0.9,opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1,opacity:1}}
          exit={{scale:0.5,opacity:0.8}}
          transition={{duration:0.3,ease:"easeInOut"}}
          className="Menu1 DeletePost" style={{gap:"18px"}}>
            <div className="LogoWrapper">
                <div className="circle">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="red"/>
                    </svg>
                </div>
            </div>
            {type === 'Ordinary' ? 
                <div className="textWarning">
                    <h1>Are You Sure?</h1>
                    <p>This action cannot be undone. All values associated with this post will be lost.</p>
                </div> : 
                <div className="textWarning">
                    <h1>Are You Sure?</h1>
                    <p>This action cannot be undone. Post will be deleted after the Challenge Window End.</p>
                </div>
                }
            <div className="DeletePostActions">
                <button className='DeleteButton' onClick={()=> {type === 'Challenge' ? deletePostInitiate() : deletePost()}}>{type === 'Challenge' ? 'Initiate Delete' : 'Delete'}</button>
                <button className='CancelButton' onClick={()=>{closeMenu(false)}}>Cancel</button>
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default DeletePost
