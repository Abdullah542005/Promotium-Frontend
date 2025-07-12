import "./Onboarding.css";
import ReactCountryDropdown from "react-country-dropdown";
import React, { useState } from "react";

export default function Onboarding() {
    const [stage, setStage] = useState(1);

    const nextStage = () => {
    setStage(prev => (prev < 3 ? prev + 1 : prev));
    };

    const prevStage = () => {
        setStage(prev => (prev > 1 ? prev - 1 : prev));
    };

    
  return (
    <div className="Onboarding">
        <h1 className="HeadingWelcome">WELCOME TO <span className="Promotium" style={{color: "rgb(0, 200, 255)"}}>PROMOTIUM</span></h1>
        <div className="wrapper">
            <div className="leftSection">
                <h2 className="onboard">Onboarding</h2>
                <div className="pwrapper"><p className="DescriptionOnboard">We need a few basic details about you before you can start your journey with us.</p></div>
                <ul className="vision">
                    <li className="Li">Transparency</li>
                    <li className="Li">Trust</li>
                    <li className="Li">Decentralization</li>
                </ul>
            </div>
            <div className="rightSection">
                <div className="head-progress">
                    <h3 className="BasicInfo">{stage === 1 ? 'Basic Info' : stage === 2 ? 'Link Social' : 'Terms & Conditions'}</h3>
                    <div className="progress">
                        <div className="line">
                        <div className="lin2"
                            style={{
                                width:
                                stage === 1 ? "0%" :
                                stage === 2 ? "50%" :
                                stage === 3 ? "100%" : "0%",
                                transition: "width 0.4s ease-in-out",
                            }}
                        ></div>

                        </div>
                        <span className={`dot ${stage >= 1 ? 'active' : ''}`}>1</span>
                        <span className={`dot ${stage >= 2 ? 'active' : ''}`}>2</span>
                        <span className={`dot ${stage === 3 ? 'active' : ''}`}>3</span>
                    </div>
                </div>
                {stage === 1 && (
                    <>
                    <div className="inputFields">
                        <div className="fullName">
                            <label htmlFor="name" className="namelabel">Full Name</label>
                            <input type="text" autoComplete="off" placeholder="Ahmad" name="name" id="name" required/>
                        </div>

                        <div className="Username">
                            <label htmlFor="Username" className="usernamelabel">Username</label>
                            <input type="text" autoComplete="off" placeholder="@Ahmad453" name="Username" id="Username" required/>
                        </div>
                    </div>
                    <div className="pfpCountry">
                        <div className="countrySection">
                            <label htmlFor="country" className="countrylabel">Country</label>
                            <ReactCountryDropdown
                                defaultCountry="PK"
                                onSelect={(country) => console.log(country.name)}
                            />
                        </div>
                        <div className="pfp">
                            <input type="file" accept="image/*" required id="pfpImageInsertion"/>
                            <label htmlFor="pfpImageInsertion" className="CircleforIMG"></label>
                            <p className="Profile-Picture">Profile Image</p>
                        </div>
                    </div>
                    </>
                    )}  
                {/* Stage 1 Code Ended */}
                    {stage === 2 && (
                        <>
                        <div className="socials">
                            <div className="xTwitter Social">
                                <div className="logo_text">
                                    <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="300 100 1068 1021" id="twitter-x">
                                        <circle cx="834" cy="610" r="481.33"></circle>
                                        <path fill="#fff" d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32
                                                    L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17
                                                    z" transform="translate(52.39 -25.059)"></path>
                                    </svg>
                                    <p>X (Twitter)</p>
                                </div>
                                <button className="LinkXTwitter">Link</button>
                                {/* After Linking Account the link button will change Color that needed to added later. */}
                            </div>
                            
                            <div className="facebook Social">
                                <div className="logo_text">
                                    <svg width="2.75rem" height="2.75rem" className="fblogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook">
                                        <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
                                        <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
                                    </svg>
                                    <p>Facebook</p>
                                </div>
                                <button className="LinkXFB">Link</button>
                                {/* After Linking Account the link button will change Color that needed to added later. */}
                            </div>
                        </div>
                        </>
                        )}
                        {/* Stage 2 Ended */}

                        {stage === 3 && (
                            <>
                                <div className="TACPara">
                                    <p className="Term_ConditionPara">
                                        The platform Promotium ensures trustworthiness and legit experience for all of our users.
                                        <br />
                                        If a user is found cheating, using fake social media accounts, Sybil, exploiting bugs or by any means
                                        damaging the platform directly or indirectly would be treated harshly which may include termination of
                                        their accounts and slashing their stakes.
                                    </p>
                                    <div className="checkboxTC">
                                        <div className="wrapperCheckbox">
                                            <input type="checkbox" name="Terms_ConditionCheck" id="Terms_ConditionCheck" className="Terms_ConditionCheck" />
                                        </div>
                                        <label htmlFor="Terms_ConditionCheck">I Agree to Terms & Conditions</label>
                                    </div>
                                </div> 
                            </>
                        )}

                <div className="buttons">
                    <button style={{cursor: stage === 1 ? 'not-allowed' : 'pointer', background: stage === 1 ? '#C5C5C5' : ''}} className="proceed back" onClick={() => {prevStage()}}>
                        <svg style={{transform: "rotate(180deg)"}} width="24px" height="24px" viewBox="0 0 24 24" id="_24x24_On_Light_Next" data-name="24x24/On Light/Next" xmlns="http://www.w3.org/2000/svg">
                            <rect id="view-box" width="24" height="24" fill="white" opacity="0"/>
                            <path id="Shape" d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" transform="translate(4.25 7.25)" fill="white"/>
                        </svg>
                        Back 
                    </button>

                    <button style={{cursor: stage === 3 ? 'not-allowed' : 'pointer', background: stage === 3 ? '#C5C5C5' : ''}} className="proceed" onClick={() => {nextStage()}}>Proceed 
                        <svg width="24px" height="24px" viewBox="0 0 24 24" id="_24x24_On_Light_Next" data-name="24x24/On Light/Next" xmlns="http://www.w3.org/2000/svg">
                            <rect id="view-box" width="24" height="24" fill="white" opacity="0"/>
                            <path id="Shape" d="M10.22,9.28a.75.75,0,0,1,0-1.06l2.72-2.72H.75A.75.75,0,0,1,.75,4H12.938L10.22,1.281A.75.75,0,1,1,11.281.22l4,4a.749.749,0,0,1,0,1.06l-4,4a.75.75,0,0,1-1.061,0Z" transform="translate(4.25 7.25)" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}