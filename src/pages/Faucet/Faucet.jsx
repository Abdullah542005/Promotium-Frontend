import React, { useRef } from 'react'
import './Faucet.css'
import Logo from '../../assets/Images/PromotiumLogo.svg'
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { toast,Toaster } from 'sonner';
import { faucet } from '../../services/faucet';
const Faucet = () => {
    const addressInput = useRef()
  return (
    <div className='Faucet'>
        <Toaster position='top-right'/>
      <div className="header">
        <div className="logoContainer">
            <img src={Logo} alt="" srcset="" width={'60px'} height={'60px'}/>
            <h1>PROMOTIUM</h1>
        </div>
        <Link to={"/"} className="backButtonWrapper">
            <button type="button" className='backButton'>BACK</button>
        </Link>
      </div>
        <div className="mainContainer">
            <div className="TestnetFaucetPromotium">  {/* Left Side of the Faucet Page*/}
                <h1>Testnet Faucet</h1>
                <div className="freeTokenforPromotium">
                    <div className="logo-withHeader">
                        <svg fill="#01a1cd" width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z"/></svg>
                        <h1>Free testnet tokens for Promotium</h1>
                    </div>
                    <p>Ideal for developers, testers, and enthusiasts exploring the Promotium ecosystem.</p>
                </div>
                <div className="fastEasy">
                    <div className="logo-withHeader">
                        <svg width="15px" height="15px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#01a1cd" d="m21,21v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm-334.875,167.4375v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125zm167.4375,0v135.125h135.125v-135.125h-135.125z"/></svg>
                        <h1>Fast, and Easy.</h1>
                    </div>
                    <p>
                        All you need us to enter your address to get tokens droped to your Wallet</p>            
                </div>
                {/* <div className="connectWallet">
                    <div className="logo-withHeader">
                        <svg width="15px" height="15px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#01a1cd" d="m86.2125,21c-35.971,0-65.2125,29.0238-65.2125,64.9187s29.2415,65.0657 65.2125,65.0657c22.0002,0 41.3525-11.0735 53.1692-27.7594l88.8591,44.7969-91.9437,46.4124c-11.9695-14.3727-29.924-23.5-50.0846-23.5-35.971,0-65.2125,29.1707-65.2125,65.0657 0,35.8949 29.2415,64.9187 65.2125,64.9187 20.1592,0 38.1151-9.1695 50.0846-23.5l91.9437,46.4125-88.7125,44.65c-11.8101-16.7268-31.2836-27.6125-53.3159-27.6125-35.971,0-65.2125,29.1707-65.2125,65.0656 0,35.895 29.2415,65.0656 65.2125,65.0656 31.3166,0 57.482-22.1473 63.7442-51.5531h212.2341c6.2614,29.4058 32.4272,51.5531 63.7438,51.5531 35.971,0 65.0654-29.1706 65.0654-65.0656 0-35.8949-29.094-65.0656-65.0654-65.0656-22.0679,0-41.5123,10.9859-53.3154,27.7594l-88.8596-44.7968 91.9437-46.4125c11.9691,14.3319 30.0716,23.5 50.2313,23.5 35.971,0 65.0654-29.0238 65.0654-64.9187 0-35.895-29.094-65.0657-65.0654-65.0657-20.1612,0-38.2622,9.1259-50.2313,23.5l-91.9437-46.4124 88.8596-44.7969c11.8102,16.7183 31.2907,27.7594 53.3154,27.7594 35.971,0 65.0654-29.1708 65.0654-65.0657s-29.094-64.9187-65.0654-64.9187c-31.4271,0-57.7494,22.1671-63.8904,51.7h-211.9409c-6.142-29.5329-32.4638-51.7-63.8908-51.7zm-10.8683,14.1c2.5334,0 4.9289.2501 7.3433.7344-20.3877,4.1624-35.8375,24.7454-35.8375,49.6437s15.4499,45.6282 35.8375,49.7906c-2.4144.485-4.8099.7344-7.3433.7344-23.9963,0-43.6221-22.6265-43.6221-50.525s19.6267-50.3781 43.6221-50.3781zm344.8625,0c2.5333,0 5.0746.2501 7.4904.7344-20.3891,4.1624-35.9847,24.7454-35.9847,49.6437s15.5956,45.6282 35.9847,49.7906c-2.4158.485-4.9571.7344-7.4904.7344-23.9954,0-43.475-22.6265-43.475-50.525s19.4796-50.3781 43.475-50.3781zm-269.9567,62.1282h211.6471c.1974,1.0674.343,2.1763.5873,3.2313l-106.4846,53.6094-106.3375-53.4625c.2587-1.1114.3805-2.2521.5874-3.3781zm105.7499,84.7469 107.8068,54.1969c-1.998,6.2379-3.0846,12.9354-3.0846,19.8281 0,6.8445 1.1134,13.3431 3.0846,19.5343l-107.8068,54.3438-107.6591-54.1969c1.997-6.2292 3.0841-12.7885 3.0841-19.6813 0-6.941-1.0603-13.6992-3.0841-19.975l107.659-54.05zm-180.6557,23.6469c2.5334,0 4.9289.2501 7.3433.7344-20.3877,4.1624-35.8375,24.7455-35.8375,49.6438s15.4499,45.6282 35.8375,49.7906c-2.4144.485-4.8099.7344-7.3433.7344-23.9963,0-43.6221-22.6266-43.6221-50.525s19.6267-50.3781 43.6221-50.3781zm344.8625,0c2.5333,0 5.0746.2501 7.4904.7344-20.3891,4.1624-35.9847,24.7455-35.9847,49.6438s15.5956,45.6282 35.9847,49.7906c-2.4158.485-4.9571.7344-7.4904.7344-23.9954,0-43.475-22.6266-43.475-50.525s19.4796-50.3781 43.475-50.3781zm-164.2068,152.1625 106.3376,53.6094c-.2587,1.1385-.3899,2.356-.5874,3.525h-211.3528c-.2205-1.2334-.4562-2.4693-.7347-3.6719l106.3375-53.4625zm-180.6557,18.3594c2.5334,0 4.9289.2501 7.3433.7344-20.3877,4.1625-35.8375,24.7455-35.8375,49.6438s15.4499,45.6282 35.8375,49.7906c-2.4144.485-4.8099.7344-7.3433.7344-23.9963,0-43.6221-22.6265-43.6221-50.525s19.6267-50.3781 43.6221-50.3781zm344.8625,0c2.5333,0 5.0746.2501 7.4904.7344-20.3891,4.1625-35.9847,24.7455-35.9847,49.6438s15.5956,45.6282 35.9847,49.7906c-2.4158.485-4.9571.7344-7.4904.7344-23.9954,0-43.475-22.6265-43.475-50.525s19.4796-50.3781 43.475-50.3781z"/></svg>
                        <h1>Connect your Wallet</h1>
                    </div>
                    <p>We support all major Promotium wallets—no sign-ups, just paste your address and get tokens instantly.</p>
                </div> */}
            </div>    {/* Left Side of the Faucet Page*/}

            <div className="claimFaucet"> {/* Right Side of the Faucet Page*/}
                <div className="tokeRequestPanel-Instructions">
                    <div className="Instructions">
                        <h1>INSTRUCTIONS</h1>
                        <div className="FirstInstruction">
                            <div>1</div>
                            <span>Paste your Wallet Address</span>
                        </div>
                        <div className="SecondInstruction">
                            <div>2</div>
                            <span>Complete the Captcha</span>
                        </div>
                        <div className="thirdInstruction">
                            <div>3</div>
                            <span>Press 'Request PROMOTIUM Token'</span>
                        </div>
                    </div>
                    <div className="walletAddressWrapper">
                        <div className="inputFieldWrapper">
                            <label htmlFor="walletAddress">WALLET ADDRESS</label>
                            <div className="inputWrapper">
                                <input ref={addressInput} type="text" name="walletAddress" id="walletAddress" placeholder='Enter Wallet Address'/>
                            </div>
                        </div>
                        <div className="captcha">
                            <ReCAPTCHA sitekey='6LcR0pArAAAAAOVxxJgQ1yVjvclnUNTjJkhfDQiq'/>
                        </div>
                    </div>
                </div>
                <div className="requestButtonWrapper">
                    <button onClick={async ()=>{
                       if(addressInput.current.value.length!=42)
                        toast.error("Invalid User Address",{duration:3000})
                       else{
                         await faucet(addressInput.current.value);
                       }
                    }} type="button"  className='requestButton'>REQUEST PROMOTIUM TOKEN</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Faucet