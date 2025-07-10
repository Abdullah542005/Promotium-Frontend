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
        <h1 className="HeadingWelcome">WELCOME TO <span className="Promotium">PROMOTIUM</span></h1>
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
                    <h3 className="BasicInfo">Basic Info</h3>
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