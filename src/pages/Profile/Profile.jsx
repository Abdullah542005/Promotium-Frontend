import React, { useEffect, useState } from 'react'
import validatorLogo from "../../assets/Images/validatorLogoGreen.png"
import {Toaster, toast} from 'sonner';
import './Profile.css'
import './Component/ProfileAction.css'
import Post from '../../components/Post/Post'
import { time } from 'framer-motion';
import {motion,AnimatePresence} from "framer-motion"

const Profile = ({User}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);
  const [profileTab, setprofileTab] = useState("Ordinary");
  const [editProfile, setEditProfile] = useState(false);
  const [loadingProfile, setloadingProfile] = useState(true);

  useEffect(() => {
    // Simulate a 3-second loading delay
    const timer = setTimeout(() => setloadingProfile(false), 2000);
    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 769);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const copyToClipboardWalletAddress = () => {
      // Yet to Include Copy to Clipboard Logic
      toast.success('Copied!', {duration: 3000, description: "Wallet Address Copied to Clipboard", className: "SuccessToast"})
    }

    const copyToClipboardProfile = () => {
      // Yet to Include Copy to Clipboard Logic
      toast.success('Copied!', {duration: 3000, description: "Profile URL Copied to Clipboard", className: "SuccessToast"})
    }

    const changeToOrdinary = () => {
      setprofileTab("Ordinary");
    }

    const changeToChallenge = () => {
      setprofileTab("Challenge");
    }

    const changeEditProfile = () => {
      if (editProfile)
        setEditProfile(false);
      else
        setEditProfile(true);
    }

  return (
    <div className="Profile" >
      <div className="Loading" style={{display: loadingProfile ? 'flex' : 'none'}}>
        <div className="BackdropEffectProfile" >
          <div className="loaderProfile"></div>
        </div>
      </div>
      <Toaster richColors position='top-right' unstyled/>
      <div className="UserCard">
         <div className='ProfileValidatorTag'> 
          <img src={validatorLogo}></img>
          <h1>Validator</h1></div>
        <div className="ProfilePicture"> {/* Will Contain the User Profile Picture*/}
            <img src={User.imgSrc}></img>
        </div>
        <div className="information"> {/* Will Contain the User Information a Parent Container */}
            <div className="ProfileActions-UserName">  {/* Will Contain the User Full Name & Action Buttons (Edit Profile & Interactions) */}
                <div>
                  <p className='UserName'>{User.name}</p>
                </div>
             
                
                <div className="profile-buttons" >
                  <button className="edit-button" onClick={changeEditProfile}>
                    {User.personalAccount ? editProfile ? 'Save Profile' : 'Edit Profile' : User.isFollowing ? ('Following') : ('Follow')}
                  </button>
                  <button className="interact-button" onClick={copyToClipboardProfile}>
                    Share Profile
                  </button>
                </div>
            </div>
            <div className="UserStats"> {/* Will Contain the User Posts, Followers, & Following */}

                <span className="stat stat-posts">
                    <h1>103</h1><h3>Posts</h3>
                </span>
                <span className="stat stat-followers">
                   <h1>1490</h1><h3>Followers</h3>
                </span><span className="stat stat-following">
                  <h1>23</h1><h3>Following</h3>
                </span>

            </div>
            <div className="userInfo">  {/* Will Contain the UserName & Wallet Address */}
                <input type="text" name="nameChangeInput" id="nameChangeInput" style={{ display: editProfile ? 'flex' : 'none', resize: 'none' }} placeholder={User.name} />
                <p style={{display : editProfile ? 'none' : 'flex'}} className='userFullName'>{User.username}</p>
                <div className="walletAddress">
                  <p className='userWalletAddress' onClick={copyToClipboardWalletAddress} style={{cursor: 'pointer'}}>{User.walletAddress}</p>
                  <svg className='copySVG' style={{cursor: 'pointer'}} onClick={copyToClipboardWalletAddress} width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="white"/>
                    <path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="white"/>
                  </svg>
                </div>
            </div>
            <div className="userBio"> {/* Will Contain the Bio of the User */}
              <h1>Bio:</h1>
              <textarea name="bioChangeInput" id="bioChangeInput" style={{ display: editProfile ? 'flex' : 'none', resize: 'none' }} placeholder={User.about} rows={4}/>
              <label className='labelBioChange' htmlFor="bioChangeInput" style={{ display: editProfile ? 'flex' : 'none', resize: 'none' }} >Max 64 characters</label>
              <p style={{display : editProfile ? 'none' : 'flex'}}>{User.about}</p>
            </div>
            <div className="socialLinks">
              <h1>Social Links:</h1>
              <div className="socialContainers Facebook">
                <svg className='linkSVG' width="0.75rem" height="0.75rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" fill="#75a8b6"/>
                  <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" fill="#75a8b6"/>
                  <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" fill="#75a8b6"/>
                </svg>
                <a href={`https://${User.facebookURL}`} target='_blank'>{User.facebookURL}</a>
              </div>
              <div className="socialContainers XTwitter">
                <svg className='linkSVG' width="0.75rem" height="0.75rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z" fill="#75a8b6"/>
                    <path d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z" fill="#75a8b6"/>
                    <path d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z" fill="#75a8b6"/>
                  </svg>
                <a href={`https://${User.twitterURL}`} target='_blank'>{User.twitterURL}</a>
              </div>
            </div>
            {/* <div className="profile-buttons" style={{display: isMobile ? 'flex' : 'none'}}>
              <button className="edit-button" onClick={changeEditProfile}>
                {User.personalAccount ? editProfile ? 'Save Profile' : 'Edit Profile' : User.isFollowing ? ('Following') : ('Follow')}
              </button>
              <button className="interact-button" onClick={copyToClipboardProfile}>
                Share Profile
              </button>
            </div> */}
        </div>
      </div>        {/* End of UserCard Section */}

      <div className="uploadedContent"> {/* Will Contain the User Uploaded Content */}
        <div className="ChallengeOrdinarySelection">
          <span className={`${profileTab == "Challenge" && ' selected' }`} onClick={changeToChallenge}>Challenge</span>
          <span className={`${profileTab == "Ordinary" && ' selected' }`}  onClick={changeToOrdinary}>Ordinary</span>
          <span className={`${profileTab == "My Interactions" && ' selected'}`}  onClick={()=>{setprofileTab("My Interactions")}}>My Interactions</span>
        </div>
        

        {(profileTab == "Challenge" || profileTab == "Ordinary") && (<div className='PostHistory'>
          <Post name={"Promotium"} postHead={"Create. Share. Earn."}
            postBody={"Join the movement on Promotium, the platform that connects advertisers and promoters for real, on-chain impact Create a thread on X (formerly Twitter) explaining how Promotium works — from how advertisers post tasks to how promoters complete them and earn tokens.Share your insights, help others discover the platform, and get 10 Promo as a reward for completing this task."}
            createdTime={"43 mins ago"} tags={["500 Promo", "10 Interactions Left","5 Core Stake Required","1 Day Challenge Window"]}
            address={"0xa09..4003"} isfollowed={false}
          />
          <Post name={"Promotium"} postHead={"Create. Share. Earn."}
            postBody={"Join the movement on Promotium, the platform that connects advertisers and promoters for real, on-chain impact Create a thread on X (formerly Twitter) explaining how Promotium works — from how advertisers post tasks to how promoters complete them and earn tokens.Share your insights, help others discover the platform, and get 10 Promo as a reward for completing this task."}
            createdTime={"43 mins ago"} tags={["500 Promo", "10 Interactions Left","5 Core Stake Required","1 Day Challenge Window"]}
            address={"0xa09..4003"} isfollowed={false}
          />  
        </div>)}

        {profileTab == 'My Interactions' && (
          <div className='PInteractionHistoryContainer'> 
              <ProfileInteractionTag type={"Ordinary"} timestamp={"5 mins ago"} postId={"#PSO_40494"}
                 isClaimAvailible={false}
              />

              <ProfileInteractionTag type={"Challenge"} timestamp={"25 mins ago"} postId={"#PSO_40494"}
                 isClaimAvailible={true}
              />
              <ProfileInteractionTag type={"Challenge"} timestamp={"1 hr 33 mins ago"} postId={"#PSO_40494"}
                 isClaimAvailible={false}
              />
              <ProfileInteractionTag type={"Ordinary"} timestamp={"2 hr 43 mins ago"} postId={"#PSO_40494"}
                 isClaimAvailible={false}
              />
              <ProfileInteractionTag type={"Ordinary"} timestamp={"5 hr 54 mins ago"} postId={"#PSO_40494"}
                 isClaimAvailible={false}
              />
          </div> )
          }




      </div> {/* End of UploadedContent Section */}
    </div>
  )
}





function ProfileInteractionTag({postId, type, timestamp, isClaimAvailible}){ 
  return( 
    <div className='PInteractionTag'>
         <div>
              <h2>{`Interacted with ${type} Post ${postId}`}</h2>
              <span>
              <h2>{timestamp}</h2>
              {/* <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.0002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M13.098 8H6.902c-.751 0-1.172.754-.708 1.268L9.292 12.7c.36.399 1.055.399 1.416 0l3.098-3.433C14.27 8.754 13.849 8 13.098 8Z"></path></g></svg> */}
              </span>
         </div>
         
        {type == "Challenge" && ( <div>
          <button className='PIButtons'>More Info</button>
           <button className='PIButtons'  style={(isClaimAvailible)?{}:{backgroundColor:"#01495e"}}>Claim Rewards</button>
         </div>)}

    </div>
  )
}


export default Profile