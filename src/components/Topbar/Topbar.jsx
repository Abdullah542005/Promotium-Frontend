import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import "./Topbar.css";
import { Client } from "../../services/thirdWebClient";
import { createWallet } from "thirdweb/wallets";
import CoreDaoImg from "../../assets/Images/coreDao.png"

export default function Topbar() {
  const [isConnected,setIsConnected] = useState(false);
  return (
    <div className="Topbar">
      <div>
        <div className="FontHead">
          <a>Faucet</a>
          <a>Governance</a>
        </div>

        <div>
          <input className="FontNormal" placeholder="Search User"></input>
           <svg width="25px" height="25px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#ffffff" stroke-width="0.72" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      </div>

      <div>  
        
       {isConnected ? (
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
                 <div>

                    <img></img>

                    <span>
                      <h2 className="FontNormal">Abdullah Imran</h2>
                      <h3 className="FontNormal">0xa4..039</h3>
                    </span>

                  </div>

                   <div className="NotificationIcon">
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

    </div>
  );
}
