import React from 'react'
import { useState } from 'react';
import './DesktopNavbar.css'
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import validatorLogo from "../../assets/Images/validatorLogoWhite.svg"
import promotiumLogo from "../../assets/Images/PromotiumLogo.svg"
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/slices/auth';
import { useNavigate } from 'react-router-dom';
const DesktopNavbar = () => {
    const [activeSelection, setActiveSelection] = useState(false);
    const [activeDispute, setActiveDispute] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isloading = useSelector((state)=>state.web.isloading)
    const expandDispute = () => {
        if (!activeDispute && activeSelection)
            setActiveDispute(true);
        else
            setActiveDispute(false);
    }
    const expandNavbar = () => {
        if (!activeSelection)
            setActiveSelection(true);
        else
            setActiveSelection(false);
    };

    return(
        <motion.div
          initial={{x:-150}}
          animate={!isloading && {x:0}}
          transition={{delay:0}}
          className={`Navbar ${activeSelection ? '' : 'unactive'}`} style={{width: activeSelection ? '340px' : '40px', height:"95vh", backgroundColor:"#1C1C1C", borderRadius:'12px'}}>
            <div className="nameSection">
                <img onClick={expandNavbar} src={promotiumLogo} style={{width:'40px', height: '40px', borderRadius: '50%', }}></img>
                <div className="expandednameSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>    
                    <p>Promotium</p>
                    {/* <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                </div>
            </div>
            {/* NameSection */}

            <div className="disputeSection">
                

                {/* <div className="expandedDispute" style={{display: activeDispute ? 'block' : 'none'}}>
                    <p className="paraDispute">Dashboard</p>
                    <p className="paraDispute">Active Disputes</p>
                </div> */}
                <Link onClick={()=>{setActiveSelection(false)}} to={'/'} style={{textDecoration:"none", color:"white"}} className="newsFeedSection">
                    <svg onClick={expandNavbar} width="23px" height="23px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/>
                        <g><path d="M27,5V3H1v26   c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z" fill="white" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                            <rect fill="none" height="8" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" width="10" x="5" y="19"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="5" y2="24"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="26" y2="28"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="11" y2="11"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="7" y2="7"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="15" y2="15"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="19" y2="19"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="23" y2="23"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="27" y2="27"/>
                        </g>
                    </svg>
                    <div className="expandednewsFeedSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                      <p style={{cursor: 'pointer'}}>Feed</p>
                    </div>
                </Link>
                <Link onClick={()=>{setActiveSelection(false)}} to={`Profile/${localStorage.getItem('username')}`} style={{textDecoration:"none", color:"white"}} className="ProfileSection">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" fill="white"/>
                    </svg>
                    <div className="expandedProfileSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                      <p style={{cursor: 'pointer'}}>Profile</p>
                    </div>
                </Link>
                <Link onClick={()=>{setActiveSelection(false)}} to={"/ValidatorDashboard"} style={{textDecoration:"none", color:"white"}} className="disputeRow">     
                    <img style={{width:"30px", height:"30px"}} src={validatorLogo}></img>
                    <div className="expandeddisputeSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                       <div to = "/ValidatorDashboard"
                       ><p style={{cursor: 'pointer'}} onClick={expandDispute}>Validator Dasboard</p></div>
                    </div>
                    
                </Link>
            </div>
            {/* dispute Section */}
            {/* <div className="postSection">
            <svg onClick={expandNavbar} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 0h32v32h-32z"/><path d="m13.4972619-.65685425h4c1.1045695 0 2 .8954305 2 2v23.66314045c0 .6440327-.1555097 1.2785431-.4533088 1.8495895l-3.0006899 5.7539905c-.153225.2938175-.5156245.4077902-.8094421.2545652-.1127518-.0587998-.2039066-.1519019-.2603101-.2658713l-3.0612398-6.1855586c-.2729885-.5516022-.4150093-1.1587586-.4150093-1.7742159v-23.29563985c0-1.1045695.8954305-2 2-2z" fill="white" transform="matrix(.70710678 .70710678 -.70710678 .70710678 16.206305 -6.125481)"/></g></svg>
                <div className="expandedpostSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                    <p>Create Post</p>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Add_Plus"><path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
                    </svg>
                </div>
            </div> */}
            {/* Post Section */}
            <div className="SupportLink"
               onClick={()=>{
                 navigate("/Support")
               }}
            >
            <svg fill="#ffffff" width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path></g></svg>
                <div className="expandedLeave" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                    <p style={{fontSize: "0.75rem", color: "gray"}}>Support</p>
                </div>
            </div>

            <div className="leave"
               onClick={()=>{
                 navigate("/")
                 dispatch(logOut())
                 window.location.reload()
               }}
            >
            <svg onClick={expandNavbar} className="leaveSvg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div className="expandedLeave" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                    <p style={{fontSize: "0.75rem", color: "gray"}}>Sign Out</p>
                </div>
            </div>

        </motion.div>
    )
}

export default DesktopNavbar
