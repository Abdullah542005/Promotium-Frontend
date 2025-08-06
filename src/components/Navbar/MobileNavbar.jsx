import React, { useState } from 'react'
import './MobileNavbar.css'
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
import  validatorImage from "../../assets/Images/validatorLogoWhite.svg"
const MobileNavbar = () => {
    const [searchBar, setsearchBar] = useState(true);

    const activatesearchBar = () => {
        if (searchBar)
            setsearchBar(false);
        else
            setsearchBar(true);
    }

  return (
    <motion.div 
       initial = {{y:150, x: "-50%", }}
       animate={{y:0,x: "-50%",}}
       transition={{delay:0}}
    className='NaviBar'>
        <Link to={"/ValidatorDashboard"} className="feed" style={{display: searchBar ? 'flex' : 'none'}}>
           <img style={{width:"28px",height:"28px"}} src={validatorImage}></img>
           <p style={{textDecoration:"none", color:"white"}}>Validator</p>
        </Link>
        <Link to={"/"}  className="dispute" style={{display: searchBar ? 'flex' : 'none'}}>
             <svg width="20px" height="25px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc/>
                <g><path d="M27,5V3H1v26   c0,1.105,0.895,2,2,2h26c1.105,0,2-0.895,2-2V5H27z" fill="white" stroke="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <rect fill="none" height="8" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" width="10" x="5" y="19"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="5" y2="24"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="27" x2="27" y1="26" y2="28"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="11" y2="11"/><line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="7" y2="7"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="24" y1="15" y2="15"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="19" y2="19"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="23" y2="23"/>                        <line fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="18" x2="24" y1="27" y2="27"/>
                </g>
            </svg>
            <p  style={{textDecoration:"none", color:"white"}}>Feed</p>
        </Link>
        <Link to={`Profile/${localStorage.getItem('username')}`} className="profile" style={{display: searchBar ? 'flex' : 'none'}}>
            <img style={{width:'25px', height: '25px', borderRadius: '50%', backgroundColor: 'white'}}></img>
            <p  style={{textDecoration:"none", color:"white"}}>Profile</p>
        </Link>
    </motion.div>
  )
}

export default MobileNavbar