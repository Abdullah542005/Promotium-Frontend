import React, { useState } from 'react'
import './MobileNavbar.css'

const MobileNavbar = () => {
    const [searchBar, setsearchBar] = useState(true);

    const activatesearchBar = () => {
        if (searchBar)
            setsearchBar(false);
        else
            setsearchBar(true);
    }

  return (
    <div className='NaviBar'>
        <div className="feed" style={{display: searchBar ? 'flex' : 'none'}}>
            <svg width="20px" height="25px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/>
                <g><path d="M27,5V3H1v26   c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z" fill="white" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <rect fill="none" height="8" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" width="10" x="5" y="19"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="5" y2="24"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="26" y2="28"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="11" y2="11"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="7" y2="7"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="15" y2="15"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="19" y2="19"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="23" y2="23"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="27" y2="27"/>
                </g>
            </svg>
            <p>Feed</p>
        </div>
        <div className="dispute" style={{display: searchBar ? 'flex' : 'none'}}>
            <svg className="" width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9 9a1 1 0 002 0V7a1 1 0 10-2 0v2zm0 4a1 1 0 102 0 1 1 0 00-2 0zm-7-3c0 4.411 3.589 8 8 8a7.939 7.939 0 004.111-1.15l2.494 1.069a1 1 0 001.314-1.313l-1.069-2.495A7.939 7.939 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8z" fill="white"/>
            </svg>
            <p>Dispute</p>
        </div>
        <div className="search">
            <input type="text" name="" id="searchBar" placeholder='Search..' style={{display: !searchBar ? 'flex' : 'none'}}/>
            <svg className={`searchIcon ${!searchBar ? 'active' : ''}`} onClick={activatesearchBar} width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <p style={{display: searchBar ? 'flex' : 'none'}}>Search</p>
        </div>
        <div className="profile" style={{display: searchBar ? 'flex' : 'none'}}>
            <img style={{width:'20px', height: '20px', borderRadius: '50%', backgroundColor: 'white'}}></img>
            <p>Profile</p>
        </div>
    </div>
  )
}

export default MobileNavbar
