import React from 'react'
import { useState } from 'react';
import './DesktopNavbar.css'

const DesktopNavbar = () => {
    const [activeSelection, setActiveSelection] = useState(false);
    const [activeDispute, setActiveDispute] = useState(false);

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
        <div className={`Navbar ${activeSelection ? '' : 'unactive'}`} style={{width: activeSelection ? '340px' : '40px', height:"95vh", backgroundColor:"#1C1C1C", borderRadius:'12px'}}>
            <div className="nameSection">
                <img onClick={expandNavbar} style={{width:'40px', height: '40px', borderRadius: '50%', backgroundColor: 'white'}}></img>
                <div className="expandednameSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>    
                    <p>Promotium</p>
                    {/* <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
                </div>
            </div>
            {/* NameSection */}

            <div className="disputeSection">
                <div className="disputeRow">
                    <svg onClick={expandNavbar} className="disputeSVG" width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 9a1 1 0 002 0V7a1 1 0 10-2 0v2zm0 4a1 1 0 102 0 1 1 0 00-2 0zm-7-3c0 4.411 3.589 8 8 8a7.939 7.939 0 004.111-1.15l2.494 1.069a1 1 0 001.314-1.313l-1.069-2.495A7.939 7.939 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8z" fill="white"/>
                    </svg>
                    <div className="expandeddisputeSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                        <p style={{cursor: 'pointer'}} onClick={expandDispute}>Dispute</p>
                        <svg className={`arrowDown ${activeDispute ? 'active' : ''}`} style={{cursor: 'pointer'}} onClick={expandDispute} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="white"/>
                        </svg>
                    </div>
                </div>

                <div className="expandedDispute" style={{display: activeDispute ? 'block' : 'none'}}>
                    <p className="paraDispute">Dashboard</p>
                    <p className="paraDispute">Active Disputes</p>
                </div>
                <div className="newsFeedSection">
                    <svg onClick={expandNavbar} width="30px" height="35px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/>
                        <g><path d="M27,5V3H1v26   c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z" fill="white" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                            <rect fill="none" height="8" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" width="10" x="5" y="19"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="5" y2="24"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="26" y2="28"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="11" y2="11"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="7" y2="7"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="15" y2="15"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="19" y2="19"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="23" y2="23"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="27" y2="27"/>
                        </g>
                    </svg>
                    <div className="expandednewsFeedSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                        <p style={{cursor: 'pointer'}}>News Feed</p>
                    </div>
                </div>
            </div>
            {/* dispute Section */}
            <div className="postSection">
            <svg onClick={expandNavbar} width="30px" height="30px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="m0 0h32v32h-32z"/><path d="m13.4972619-.65685425h4c1.1045695 0 2 .8954305 2 2v23.66314045c0 .6440327-.1555097 1.2785431-.4533088 1.8495895l-3.0006899 5.7539905c-.153225.2938175-.5156245.4077902-.8094421.2545652-.1127518-.0587998-.2039066-.1519019-.2603101-.2658713l-3.0612398-6.1855586c-.2729885-.5516022-.4150093-1.1587586-.4150093-1.7742159v-23.29563985c0-1.1045695.8954305-2 2-2z" fill="white" transform="matrix(.70710678 .70710678 -.70710678 .70710678 16.206305 -6.125481)"/></g></svg>
                <div className="expandedpostSection" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                    <p>Create Post</p>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Edit / Add_Plus"><path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g>
                    </svg>
                </div>
            </div>
            {/* Post Section */}
            <div className="leave">
                <svg onClick={expandNavbar} className="leaveSvg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <div className="expandedLeave" style={{display: activeSelection ? 'flex' : 'none', justifyContent: 'space-between'}}>
                    <p style={{fontSize: "0.75rem", color: "gray"}}>Sign Out</p>
                </div>
            </div>
        </div>
    )
}

export default DesktopNavbar
