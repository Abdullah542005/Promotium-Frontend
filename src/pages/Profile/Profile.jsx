import React, { useEffect, useState } from 'react'
import {Toaster, toast} from 'sonner';
import './Profile.css'
import './Component/ProfileAction.css'
import Post from '../../components/Post/Post'

const Profile = ({User}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 769);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const copyToClipboard = () => {
      // Yet to Include Copy to Clipboard Logic
      toast.success('Copied!', {duration: 3000, description: "Wallet Address Copied to Clipboard"})
    }

  return (
    <div className="Profile">
      <Toaster richColors position='top-right'/>
      <div className="UserCard">
        <div className="ProfilePicture"> {/* Will Contain the User Profile Picture*/}
            <img src={User.imgSrc}></img>
        </div>
        <div className="information"> {/* Will Contain the User Information a Parent Container */}
            <div className="ProfileActions-UserName">  {/* Will Contain the UserName & Action Buttons (Edit Profile & Interactions) */}
                <p className='UserName'>{User.username}</p>
                <div className="profile-buttons" style={{display: isMobile ? 'none' : 'flex'}}>
                  <button className="edit-button">
                    {User.personalAccount ? ('Edit Profile') : User.isFollowing ? ('Following') : ('Follow')}
                  </button>
                  <button className="interact-button">
                    {User.personalAccount ? ("Interactions") : ("Share Profile")}
                  </button>
                </div>
            </div>
            <div className="UserStats"> {/* Will Contain the User Posts, Followers, & Following */}
                <span className="stat stat-posts">
                    <strong>{User.numberOfPosts}</strong> posts
                </span>
                <span className="stat stat-followers">
                    <strong>{User.numberOfFollowers}</strong> followers
                </span><span className="stat stat-following">
                    <strong>{User.numberOfFollowing}</strong> following
                </span>
            </div>
            <div className="userInfo">  {/* Will Contain the User Full Name & Wallet Address */}
                <p className='userFullName'>{User.name}</p>
                <div className="walletAddress">
                  <p className='userWalletAddress' onClick={copyToClipboard} style={{cursor: 'pointer'}}>{User.walletAddress}</p>
                  <svg style={{cursor: 'pointer'}} onClick={copyToClipboard} width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.59961 11.3974C6.59961 8.67119 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C17.9549 5.61426 19.3125 5.61426 20.1561 6.46118C20.9996 7.3081 20.9996 8.6712 20.9996 11.3974V16.2167C20.9996 18.9429 20.9996 20.306 20.1561 21.1529C19.3125 21.9998 17.9549 21.9998 15.2396 21.9998H12.3596C9.64432 21.9998 8.28667 21.9998 7.44314 21.1529C6.59961 20.306 6.59961 18.9429 6.59961 16.2167V11.3974Z" fill="white"/>
                    <path opacity="0.5" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V12C3 15.7712 3 17.6569 4.17157 18.8284C4.78913 19.446 5.6051 19.738 6.79105 19.8761C6.59961 19.0353 6.59961 17.8796 6.59961 16.2167V11.3974C6.59961 8.6712 6.59961 7.3081 7.44314 6.46118C8.28667 5.61426 9.64432 5.61426 12.3596 5.61426H15.2396C16.8915 5.61426 18.0409 5.61426 18.8777 5.80494C18.7403 4.61146 18.4484 3.79154 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157Z" fill="white"/>
                  </svg>
                </div>
            </div>
            <div className="userBio"> {/* Will Contain the Bio of the User */}
              <p>{User.about}</p>
            </div>
            <div className="socialLinks">
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
            <div className="profile-buttons" style={{display: isMobile ? 'flex' : 'none'}}>
              <button className="edit-button">
                {User.personalAccount ? ('Edit Profile') : User.isFollowing ? ('Following') : ('Follow')}
              </button>
              <button className="interact-button">
                {User.personalAccount ? ("Interactions") : ("Share Profile")}
              </button>
            </div>
        </div>
      </div>        {/* End of UserCard Section */}

      <div className="uploadedContent"> {/* Will Contain the User Uploaded Content */}
        <Post name={"Promotium"} postHead={"Create. Share. Earn."}
          postBody={"Join the movement on Promotium, the platform that connects advertisers and promoters for real, on-chain impact Create a thread on X (formerly Twitter) explaining how Promotium works — from how advertisers post tasks to how promoters complete them and earn tokens.Share your insights, help others discover the platform, and get 10 Promo as a reward for completing this task."}
          createdTime={"43 mins ago"} tags={["500 Promo", "10 Interactions Left","5 Core Stake Required","1 Day Challenge Window"]}
          address={"0xa09..4003"} isfollowed={false}
        />
      </div> {/* End of UploadedContent Section */}
    </div>
  )
}

export default Profile