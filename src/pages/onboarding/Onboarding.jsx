import ReactCountryDropdown from "react-country-dropdown";
import React, { useEffect, useState } from "react";
import { LoginSocialFacebook } from 'reactjs-social-login';
import "./Onboarding.css";

export default function Onboarding() {
    const [stage, setStage] = useState(1);
    const [FBProfile, setFBProfile] = useState(null);
    const [XProfile, setXProfile] = useState(null);

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
                                    <svg width="3rem" height="3rem" xmlns="http://www.w3.org/2000/svg" viewBox="300 100 1068 1021" className={`fbLogo${XProfile ? ' active' : ''}`}>
                                        <circle cx="834" cy="610" r="481.33"></circle>
                                        <path fill="#fff" d="M485.39,356.79l230.07,307.62L483.94,914.52h52.11l202.7-218.98l163.77,218.98h177.32
                                                    L836.82,589.6l215.5-232.81h-52.11L813.54,558.46L662.71,356.79H485.39z M562.02,395.17h81.46l359.72,480.97h-81.46L562.02,395.17
                                                    z" transform="translate(52.39 -25.059)"></path>
                                    </svg>
                                    <p>X (Twitter)</p>
                                </div>
                                <button className={`LinkXFB${XProfile ? ' active' : ''}`}>{XProfile ? 'Linked' : 'Link'}</button>
                            </div>
                            
                            <div className="facebook Social">
                                <div className="logo_text">
                                    <svg className={`fbLogo${FBProfile ? ' active' : ''}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="3.25rem" height="3.25rem" viewBox="0 0 48 48">
                                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                                    </svg>
                                    <p>Facebook</p>
                                </div>
                                <LoginSocialFacebook 
                                    appId="1041638454621359" 
                                    onResolve={(response) => {
                                        console.log(response);
                                        setFBProfile(response.data);
                                    }}
                                    onReject={(error) => {
                                        console.log(error);
                                    }}>
                                    <button className={`LinkXFB${FBProfile ? ' active' : ''}`}>{FBProfile ? 'Linked' : 'Link'}</button>
                                </LoginSocialFacebook>
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