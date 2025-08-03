import './BecomeValidator.css'
import React, { useState } from 'react'
import Logo from '../../assets/Images/PromotiumLogo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getOtp, verifyOtp } from '../../services/emailLink'
import {logOut} from  "../../redux/slices/auth"
import { prepareContractCall,getContract,toWei,} from 'thirdweb'
import { Client } from '../../services/thirdWebClient'
import { coreTestnet } from 'thirdweb/chains'
import { useActiveWallet, useConnect, useSendTransaction } from 'thirdweb/react'
import {createWallet} from "thirdweb/wallets"
import { getValidatorContract } from '../../contract/models/validator'
import { switchChain } from '../../utils/switchChain'

const BecomeValidator = () => {

  const emailInput  = useRef();
  const dispatch = useDispatch();
  const  navigate =  useNavigate();
  const [isOTPSent, setIsOTPSent]  = useState(false)
  const [isEmailLinked, setIsEmailLinked] = useState(localStorage.getItem('isEmailLinked'))
  const isUserLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  
  const handleOTPRequest = async ()=>{ 
    try{
      if(!isUserLoggedIn){
          // Change with Toast
          alert("Action Denied, User is not logged In");
          navigate("/")
      }
      const email =  emailInput.current.value;
      const response = await getOtp(email);  
      if(response == "Token Expired"){
        dispatch(logOut())
        //Change with toast
        alert("Token Expired, LogIn again");
      }
      else if(response.message == "Success"){
         setIsOTPSent(true);
         emailInput.current.value = ""
          //Change with toast
          alert("Otp Send Success,Please enter the otp")
      }else if(response.message == "OTP already sent"){
         //Change with toast
           emailInput.current.value = ""
          setIsOTPSent(true);
         alert(response.message)
      }else {
         alert(response.message)
      }
     } catch(error){
        console.log("Error at sending otp : "+ error.message)
      }
  }
  
  const handleVerifyOtp = async ()=> {
    try{
    const otp =  emailInput.current.value;
    const response = await verifyOtp(otp);
    if(response == "Token Expired")
        dispatch(logOut())
    if(response.message == "Success"){
       //Change with toast
       alert("Email Linked");
       setIsEmailLinked(true);
    }
    }catch(error){
        console.log("Error at sending otp : "+ error.message)
    }
  }

  const handleBecomeValiator = async ()=> {
    try{
      const contract = await getValidatorContract();
      const txhash = await contract.addValidator(
        {
            value:toWei('0.01')
        }
      );
      console.log(txhash.hash);
      //add toast for txtHash
      // logout user prompt to logIn In to update
      navigate("/")
      dispatch(logOut())
    }catch(error){
        console.log("Error at Calling Contract Function",
            + error.message
        )
    }
  }

  return (
    <div className='BecomeValidator'>
      <div className="header">
        <div className="logoContainer">
            <img src={Logo} alt="" srcSet="" width={'60px'} height={'60px'}/>
            <h1>PROMOTIUM</h1>
        </div>
        <Link to={"/ValidatorDashboard"} className="backButtonWrapper">
            <button type="button" className='backButton'>BACK</button>
        </Link>
      </div>    {/* Header Section Contain Logo & Menu Items */}
      <div className="heroSection">
        <div className="headingHeroSection">
            <h1 data-text="BECOME A VALIDATOR">BECOME A VALIDATOR</h1>
        </div>
        <div className="statsHeroSection">
            <div className="statLeftSection">
                <div className="earnRewards">
                    <h2>Earn Rewards:</h2>
                    <p>Get paid in $PROMO for every honest vote.</p>
                </div>
                <div className="shapeEco">
                    <h2>Shape the Ecosystem:</h2>
                    <p>Help ensure fairness on Promotium.</p>
                </div>
                <div className="reputation">
                    <h2>Reputation & Recognition:</h2>
                    <p>Your credibility is backed by a Soulbound Token.</p>
                </div>
            </div>
            <div className="statRightSection">
                <p>Help keep Promotium fair and fraud-free while earning rewards.</p>
                <button>Apply Now</button>
            </div>
        </div>
      </div>    {/* Hero Section Ended*/}
      <div className="divider"></div>
      <div className="BenefitsOfValidator">
        <div className="HeadingBenefits">
            <h3>Why Become a Validator?</h3>
            <p>Validators enjoy the following perks and advantages.</p>
        </div>
        <div className="cards">
            <div className="earnRewardsCard">
                <div className="circle">
                    <svg width="30px" height="30px" fill="#01a1cd" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 915 915" xmlSpace="preserve"> <g><g> <path d="M457.45,0c-154.7,0-280.1,125.4-280.1,280.1c0,176.4,167.6,378.4,167.6,378.4h234.9c0,0,157.801-202,157.801-378.4 C737.549,125.4,612.15,0,457.45,0z M540.15,472.399c-14.102,14.801-33.102,25-54.9,29.7v7.5c0,13-10.6,23.601-23.6,23.601H451.45 c-13,0-23.6-10.601-23.6-23.601v-8c-11.5-2.5-22.301-6.3-32.301-11.5c-13.3-6.8-24.8-17.899-34.3-32.899 c-6.3-9.9-10.899-21.5-13.7-34.4c-1.399-6.3-0.1-12.6,3.5-18c3.601-5.3,9.301-9,15.601-10.1l10.2-1.801 c1.3-0.199,2.699-0.399,4.1-0.399c10.8,0,20.2,7.3,22.8,17.8c2.7,10.6,6.3,18.8,10.7,24.5c9.9,12.7,26.4,20.3,44,20.3 c3,0,6-0.2,8.9-0.7c12.6-1.899,23.699-7.8,31.5-16.6c8.199-9.3,12.4-21.2,12.4-35.2c0-11.7-2.801-21.1-8.301-27.899 c-10.6-13-29.299-18.601-46.2-22.5c-22.3-5.101-42.5-10.2-62.899-21.601c-13.601-7.6-24.101-18.2-31.5-31.6 c-7.301-13.3-10.9-28.4-10.9-45.1c0-29.6,10.7-54,31.8-72.5c11.601-10.1,27-17.4,44.7-21.2v-11.5c0-13,10.6-23.6,23.6-23.6h10.201 c13,0,23.6,10.6,23.6,23.6v11.8c16.4,3.7,30.699,10.4,41.699,19.5c12.602,10.5,21.9,23.9,27.602,39.8 c2.398,6.6,1.699,13.8-1.9,19.9s-9.801,10.2-16.801,11.3l-9.9,1.5c-1.199,0.2-2.299,0.3-3.5,0.3c-10.1,0-19.1-6.4-22.299-16 c-2.201-6.4-5.1-11.7-8.6-15.6c-8.102-9.1-21-14.3-35.3-14.3c-15.4,0-29.801,5.9-38.601,15.8c-7.1,8-10.6,17.3-10.6,28.3 c0,10.9,3,20,8.899,27.1c12.801,15.4,34.7,19.8,55.9,24.1c13.1,2.6,26.6,5.4,38.6,10.6c12.801,5.6,23.5,12.7,31.701,20.9 c8.299,8.3,14.799,18.3,19.199,29.7c4.4,11.301,6.6,23.601,6.6,36.7C567.85,428.8,558.549,453.1,540.15,472.399z"/> <rect x="339.45" y="691.6" width="235.9" height="60.9"/><path d="M339.45,798.1L339.45,798.1c0.6,64.7,53.1,116.9,117.9,116.9c64.8,0,117.4-52.2,117.9-116.9l0,0v-13.7h-235.8V798.1z"/></g></g></svg>
                </div>
                <h1 style={{textAlign: 'center'}}>Earn Rewards</h1>
                <p style={{color: 'white'}}>Get rewarded in $PROMO tokens every time you cast an honest, fair vote. Your integrity helps maintain a trustworthy system and you get paid for it.</p>
            </div>
            <div className="ShapeEcoSysCard">
                <div className="circle">
                    <svg width="30px" height="30px" fill='#067d81' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"/>
                        <rect width="24" height="24" fill="none"/>
                    </svg>
                </div>
                <h1 style={{textAlign: 'center'}}>Shape the Ecosystem</h1>
                <p>Play a vital role in keeping Promotium fair and transparent. Your decisions help resolve disputes and ensure honest behavior across the platform.</p>
            </div>
            <div className="ReputationCard">
                <div className="circle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#44bfc3" viewBox="0 0 512 512" width={'30px'} height={'30px'}>
                        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
                    </svg>
                </div>
                <h1 style={{textAlign: 'center'}}>NFT Soulbound Token</h1>
                <p>Earn lasting credibility through a Soulbound Token that reflects your contributions and trustworthiness in the community. Your reputation is your badge of honor.</p>
            </div>
            <div className="Decentralized-Impact-Card">
                <div className="circle">
                    <svg fill="#18687e" width="30px" height="30px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11 8a2.64 2.64 0 0 0-.53-1.59l1.33-1.32a2.22 2.22 0 0 0 .82.17 1.94 1.94 0 0 0 2-1.88 2 2 0 0 0-4 0 1.76 1.76 0 0 0 .24.88L9.53 5.59A3.14 3.14 0 0 0 8 5.19a3 3 0 0 0-2.93 2.19h-.69A2 2 0 0 0 2.5 6.13 1.94 1.94 0 0 0 .5 8a1.94 1.94 0 0 0 2 1.88 2 2 0 0 0 1.88-1.25h.69A3 3 0 0 0 8 10.82 2.91 2.91 0 0 0 11 8zm1.62-5.24a.69.69 0 0 1 .75.62.76.76 0 0 1-1.5 0 .7.7 0 0 1 .75-.62zM2.5 8.63A.7.7 0 0 1 1.75 8a.7.7 0 0 1 .75-.62.7.7 0 0 1 .75.62.7.7 0 0 1-.75.63zm5.5.94A1.67 1.67 0 0 1 6.25 8 1.66 1.66 0 0 1 8 6.44 1.67 1.67 0 0 1 9.75 8 1.68 1.68 0 0 1 8 9.57z"/><path d="M2.5 4.38a2 2 0 0 0 .82-.17L5.08 6A3.73 3.73 0 0 1 6 5.13L4.26 3.38a1.76 1.76 0 0 0 .24-.88 1.94 1.94 0 0 0-2-1.87 1.94 1.94 0 0 0-2 1.87 1.94 1.94 0 0 0 2 1.88zm0-2.5a.7.7 0 0 1 .75.62.7.7 0 0 1-.75.63.7.7 0 0 1-.75-.63.7.7 0 0 1 .75-.62zm11 9.75a2 2 0 0 0-.82.17L10.92 10a3.73 3.73 0 0 1-.93.84l1.74 1.74a1.75 1.75 0 0 0-.23.88 2 2 0 0 0 4 0 1.94 1.94 0 0 0-2-1.83zm0 2.5a.7.7 0 0 1-.75-.63.76.76 0 0 1 1.5 0 .7.7 0 0 1-.75.63z"/></svg>
                </div>
                <h1 style={{textAlign: 'center'}}>Decentralized Impact</h1>
                <p>Be part of a trustless governance model where your voice truly matters. Help shape a future built on fairness, transparency, and community power.</p>
            </div>
        </div>
      </div>    {/* Benefits Section Ended*/}
      <div className='ValidatorDisclaimer'>
          <h1>Disclaimer</h1>
          <p>Please Read before continuing</p>
          <p>Validators are integral part of the platform, their 
            honest participation is what makes the platform decentralized
            and better, in order prevent misconduct we introduce stake slashing,
            please view our litepaper for more.
            <br></br>
            By continuing you agree that you are aware that how promotium protocol works.
          </p>
      </div>
      <div className="registerSection">
        <div className="Instructions">
            <h1>REQUIREMENTS</h1>
            <div className="FirstInstruction">
                <div>1</div>
                <span>Link Email</span>
            </div>
            <div className="SecondInstruction">
                <div>2</div>
                <span>{`GitcoinScore > 20`}</span>
            </div>
            <div className="thirdInstruction">
                <div>3</div>
                <span>Stake 0.1 Core</span>
            </div>
           
        </div>
        <div className="procedure">
            <div className="linkEmail">
                <label htmlFor="">Email</label>
                <div className="emailInputWrapper">
                 <input ref={emailInput} placeholder={isOTPSent?"12345":"test@gmail.com"} type="email" name="linkEmail" id="linkEmail" required/>
                 <button 
                   onClick={()=>{ 
                     if(!isOTPSent)
                        handleOTPRequest();
                     else
                        handleVerifyOtp();
                   }}
                 >{isOTPSent?"Verify":"Link"}</button>  
                </div>
            </div>
            <div className="stakeToken">
                <h1>Gitcoin Score</h1>
                <button>Check</button>
            </div>
            <div className="getCoinScore">
                <p>Score: 0</p>
            </div>
            <button
              onClick={async ()=>{ 
                if(isEmailLinked){
                   handleBecomeValiator();
                }
                else  //
                   alert("Link Email First");    
              }}
            >Send Stake and Apply</button>
        </div>
      </div>
    </div>
  )
}

export default BecomeValidator
