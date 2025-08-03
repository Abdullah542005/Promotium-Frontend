//Route to change only on line 159

import { useEffect, useState } from "react";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import './Topbar.css'
import { Client } from "../../services/thirdWebClient";
import { createWallet } from "thirdweb/wallets";
import CoreDaoImg from "../../assets/Images/coreDao.png"
import NotificationMenu from "../Menu/NotificationMenu";
import "./SearchMenu.css"
import {motion} from "framer-motion"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getNonce, login } from "../../services/authService"
import { useActiveWallet } from "thirdweb/react";
import {setLoggedIn} from "../../redux/slices/auth"
import { shortenAddress } from "thirdweb/utils";
import toImageUrl from "../../utils/toImageUrl";
export default function Topbar() {
  const isConnected = useSelector((state)=>state.auth.isLoggedIn)
  const [notificatonMenu,setNotificationMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchBarShow, setsearchBarShow] = useState(false);

  
  const handleMobileMenuItemClick = () => {
    setMobileMenuOpen(false);
  };
 
  const navigate = useNavigate();
  const wallet = useActiveAccount();
  const dispatch  = useDispatch();

  useEffect(()=>{
     handleUserLogin();
  },[wallet])

  const  handleUserLogin = async () => {
    try{
    if(!wallet || localStorage.getItem('token'))
       return;
    
    const nonce = await getNonce(wallet.address);
    const signature = await wallet.signMessage({
    message:`Connecting to Promotium, Nonce:${nonce}, Address:${wallet.address}`})
    const response = await login(signature,wallet.address)   
    localStorage.setItem('token', response.token);
    
   

    dispatch(setLoggedIn(wallet.address));
    if(response.message == "CreateAccount")
       navigate('/onboarding')
    else{
       localStorage.setItem('pfp',response.pfp);
       localStorage.setItem('username',response.username);
       localStorage.setItem('isEmailLinked',response.isEmailLinked);
       localStorage.setItem('isValidator',response.isValidator)
       localStorage.setItem('fullname',response.fullname)
    }  
    }catch(error){
      console.log("An Error Happened at User Login " + error.message);
    }
  }
  
  return (
    <motion.div 
       initial ={{y:-100}}
       animate={{y:0}}
       transition={{delay:0.1, duration:0.5}}
    className="Topbar">
      <div className="FontHead-SearchBar">
        <div style={{gap:"20px"}} className="FontHead protocolTools">
          <Link to={"/Faucet"} style={{textDecoration:"none", color:"white"}}>Faucet</Link>
          <a>LitePaper</a>
        </div>

        <div className="HamburgerIcon" onClick={() => setMobileMenuOpen(prev => !prev)}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

       
          <svg 
          onClick={()=>{setsearchBarShow(true)}}
          className="SearchSVG" width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>  
       
       
        
           
      </div>

      <div>  
        
       {!isConnected ? (
        <div  style={{ transform: 'scale(0.7)' }}>       
          <ConnectButton className="ConnectButton"
            client={Client}
            connectModal={{
            title:"Sing In To Promotium"
           }}
            wallets={[
              createWallet('io.metamask'),
              createWallet('com.okex.wallet'),
              createWallet("com.bitget.web3"),
            ]}

            />
        </div> ) : 
        
        <div className="TUserWrapper">
          
              <div className="TUserProfile">
             
                 <Link className="userProfile" to={`Profile/${localStorage.getItem('username')}`} >
                    <img src={`https://gateway.pinata.cloud/ipfs/${localStorage.getItem('pfp')}`}></img>
                    <span>
                      <h2 className="FontNormal">{localStorage.getItem('fullname') || "Staoshi Nakamoto"}</h2>
                      <h3 className="FontNormal">{shortenAddress(localStorage.getItem('userAddress')) || "0x23.043"}</h3>
                    </span>

                  </Link>
               

                   <div className="NotificationIcon"
                     onClick={()=>{setNotificationMenu((prev)=>!prev)}}
                   >
                      <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                      <span><h3 className="FontNormal">1</h3></span>
                      <div className="NotificationMenu">
                      </div>
                   </div>    
                   
              </div>

              <img src={CoreDaoImg}></img>
        </div>
        }

      </div>
     {notificatonMenu&&( <NotificationMenu closeMenu={setNotificationMenu} />)}

     {mobileMenuOpen && (
      <div className="MobileMenu">
        <Link to="/Faucet" style={{textDecoration:"none",color:"white"}} onClick={handleMobileMenuItemClick}>Faucet</Link>
        <a onClick={handleMobileMenuItemClick}>LitePaper</a>
      </div>
     )}
      {searchBarShow && (<SearchMenu  closeMenu={setsearchBarShow}/>)}
    </motion.div>
  );
}






function SearchMenu({closeMenu}){
  const [selectedSearch, setSelectedSearch] = useState('username');
  const [valuetoSearch, setvaluetoSearch] = useState('');
  const [result, setResult] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key != 'Enter')
      return;
    console.log('Search value:', valuetoSearch);
    getResult(selectedSearch ,valuetoSearch);
  }

  const getResult = async (selectedSearch, valuetoSearch) =>{
    console.log(selectedSearch);
    try {
      const res = await fetch("http://localhost:5000/api/search", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          by: selectedSearch,
          value: valuetoSearch,
        }),
      });
      const data = await res.json();
      if (data.message === "Not Found"){
        setResult(false);
      }else{
        console.log(data);
        setResult(data);
      }
    } catch (error){
      console.log(error);
    }
  }

  return(
    <div className="SearchMenu Menu">
          <div>
                <h1 className="FontNormal">Search</h1>
                <svg onClick={()=>{closeMenu(false)}}
                className="CloseButton"
                width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#fafafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fafafa"></path> </g></svg>
            </div>
            <div className="SearchBar">
              <div className="CustomInputWrapper">
                {selectedSearch && (
                  <div className="SearchBadge">
                    {selectedSearch}
                  </div>
                )}
                <input
                  className="SearchInput"
                  type="text"
                  placeholder={`${selectedSearch} ID`}
                  onChange={(e) => setvaluetoSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <svg className="SearchSVGBTN" width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>  
              </div>

            </div>

            <div className="quickResult">
              <h1>Quick Result</h1>
              <div className="filter-group">
                {['username', 'postId', 'reportId'].map((label) => (
                  <label key={label} className={`filter-option ${selectedSearch === label ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="filter"
                      value={label}
                      checked={selectedSearch === label}
                      onChange={() => setSelectedSearch(label)}
                    />
                    <div>{label}</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="ResultsSearch">
              <h1>Result</h1>
              {result ? (
                <div className="usersResult">
                  {/* Handle user-type result */}
                  {selectedSearch === "username" && (
                    <>
                      <img
                        width="30px"
                        height="30px"
                        src={result.pfp || "https://via.placeholder.com/30"}
                        alt="pfp"
                      />
                      <p>{result.fullName || "Unknown User"}</p>
                    </>
                  )}

                  {/* Handle post-type result */}
                  {selectedSearch === "postId" && (
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                  )}

                  {/* Handle report-type result */}
                  {selectedSearch === "reportId" && (
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                  )}
                </div>
              ) : (
                <p style={{ color: "red", padding: "10px" }}>No result found or invalid ID.</p>
              )}
            </div>
    </div>
  )
}