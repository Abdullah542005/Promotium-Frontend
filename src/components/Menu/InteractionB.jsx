import "./InteractionB.css";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import insertImage from "../../assets/Images/insertImage.png";
import LockTokens from "../CreatePost/Component/LockToken";
import Logo from "../../assets/Images/PromotiumLogo.svg";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { interactPostB } from "../../services/interactPostB";

export default function InteractionB({ closeMenu,postData }) {
  const [stage, setStage] = useState(1);
  const [images, setImages] = useState([{ id: Date.now(), file: null }]);
  const [stake,setIsStake] = useState(false)
  const [proofBody,setProofBody] = useState("");
  const proofBodyInput = useRef();

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (!file) return;

    const updatedImages = [...images];
    updatedImages[index].file = URL.createObjectURL(file);
    setImages(updatedImages);

    // If last item is just filled, add a new empty container
    if (index === images.length - 1) {
      setImages([...updatedImages, { id: Date.now(), file: null }]);
    }
  };

  const handleDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages.length ? updatedImages : [{ id: Date.now(), file: null }]);
  };


  const handleStageChange = async ()=>{
    if(stage==1){
       const txt = proofBodyInput.current.value;
       if(txt.length == 0){
          toast.error("Proof Body Missing", {duration:3000})
          return;
       }
       setProofBody(txt);
    }if(stage == 2){
       if(!stake)
          return toast.error("Please approve tokens for stake first", {duration:3000})
       try{
         await interactPostB(postData._id,proofBody,images)
         closeMenu(false)
       }catch(error){
         toast.error(error.message, {duration:3000})
         return;
       }  
    }
    if (stage < 2) setStage((prev) => prev + 1);
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="InteractionB Menu"
      >
        <div>
          <h1 className="FontNormal">Interact</h1>
          <svg
            onClick={() => {
              closeMenu(false);
            }}
            className="CloseButton"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                fill="#fafafa"
              ></path>{" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                fill="#fafafa"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="InteractBTags">
          <span>
            <h2>Post Type: </h2> <h2 >Challenge</h2>
          </span>
          <span>
            <h2>Post ID:</h2> <h2 >{postData._id}</h2>
          </span>
          <span>
            <h2>Reward: </h2> <h2 >{postData.rewardPerInteraction} PROMO</h2>
          </span>
          <span>
            <h2>Interactions Left:  </h2>
            <h2 >{postData.maximumInteraction - postData.interactionCount}</h2>
          </span>
          <span>
            <h2>Stake Required: </h2>{" "}
            <h2 >{postData.stakeRequired} PROMO</h2>
          </span>
          <span>
            <h2>Challenge Period: </h2>{" "}
            <h2 >{postData.challengeWindow/(24*60*60)} Days</h2>
          </span>
        </div>

        {stage == 1 && (
          <p>
            Please complete all the post requirements, specified in post body
            and attach the required proof.
          </p>
        )}

        {stage == 1 && (
          <div className="InteractionbBody">
            <div>
              <label>Proof Body:</label>
              <textarea ref={proofBodyInput} placeholder="I have successfully complete the requirements, here is required email example@gmail.com...."></textarea>
            </div>

            <div>
              <label>Proof Images:</label>
              <div className="ProofImagesContainer">
                {images.map((image, index) => (
                  <div
                    className="image-container"
                    key={image.id}
                    onClick={() => document.getElementById(`fileInput-${image.id}`).click()}
                  >
                    {image.file ? (
                      <>
                        <img src={image.file} alt="Uploaded" className="uploaded-image"/>
                        <button
                          className="delete-button"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent opening file picker
                            handleDelete(index);
                          }}
                        >
                          ×
                        </button>
                      </>
                    ) : (
                      <div className="ClickToAdd">
                        <div className="svgContainer" style={{width: '60px', height: '60px', borderRadius: '8px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                          <svg width="50px" height="50px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M296.4 208.4h495.5c14.4 0 26.1 11.7 26.1 26.1v326c0 14.4-11.7 26.1-26.1 26.1H296.4c-14.4 0-26.1-11.7-26.1-26.1v-326c0-14.4 11.7-26.1 26.1-26.1z" fill="#FFFFFF" /><path d="M791.9 612.6H296.4c-28.8 0-52.2-23.4-52.2-52.2v-326c0-28.8 23.4-52.2 52.2-52.2h495.5c28.8 0 52.2 23.4 52.2 52.2v326c0 28.8-23.4 52.2-52.2 52.2zM296.4 234.5v326h495.5v-326H296.4z" fill="#333333" /><path d="M270.3 404h534.6v52.2H270.3z" fill="#333333" /><path d="M147 416.4l458.8-122.9c13.9-3.7 28.2 4.5 31.9 18.4 0 0.1 0 0.1 0.1 0.2l87.8 339.1c3.6 13.9-4.7 28-18.5 31.7L248.3 805.8c-13.9 3.7-28.2-4.5-31.9-18.4 0-0.1 0-0.1-0.1-0.2l-87.8-339.1c-3.6-13.9 4.6-28 18.5-31.7z" fill="#FFFFFF" /><path d="M241.4 832.8c-9 0-18-2.4-26-7-12.1-7-20.7-18.2-24.3-31.7l-87.9-339.5c-7.1-27.6 9.5-56.1 37-63.4L599 268.3c13.5-3.6 27.5-1.8 39.6 5.2 12.1 7 20.7 18.2 24.3 31.7l87.9 339.5c7.1 27.6-9.4 56.1-37 63.4L255 831c-4.5 1.2-9 1.8-13.6 1.8zM147 416.4l6.7 25.2 87.8 339.1 458.8-122.9-87.8-339.1-458.8 122.9-6.7-25.2z" fill="#333333" /><path d="M153.4 441.5l459.8-122.4L676.1 558 216.5 680.6z" fill="#8CAAFF" /><path d="M212.3 675c28.9-94.6 63.9-149.1 104.8-163.4 41-14.4 91 17.9 150.2 96.9" fill="#FFFFFF" /><path d="M212.3 701.1c-2.5 0-5.1-0.4-7.6-1.1-13.8-4.2-21.5-18.8-17.3-32.6 31.8-104 71.4-163 121.1-180.4 53.5-18.7 112.2 15.9 179.7 105.8 8.6 11.5 6.3 27.9-5.2 36.5-11.5 8.6-27.9 6.3-36.5-5.2-49.8-66.5-92.7-97.7-120.7-87.9-22.3 7.8-55.9 39.6-88.5 146.4-3.6 11.3-13.9 18.5-25 18.5z" fill="#333333" /><path d="M400.7 631.5c34-79.5 68.6-125.5 103.9-137.9 35.3-12.4 85.3 7.7 150 60.2" fill="#FFFFFF" /><path d="M400.7 657.6c-3.4 0-6.9-0.7-10.2-2.1-13.2-5.6-19.4-21-13.8-34.2C414 533.9 453 484.1 495.9 469c44.9-15.7 102.2 5.4 175.1 64.6 11.2 9.1 12.9 25.5 3.8 36.7-9.1 11.2-25.5 12.9-36.7 3.8-74.6-60.5-110.3-61-125-55.8-15.7 5.5-48.1 28.9-88.5 123.5-4.1 9.9-13.7 15.8-23.9 15.8z" fill="#333333" /><path d="M192.088 678.984l491.16-131.6 13.51 50.42-491.16 131.6z" fill="#333333" /></svg>
                        </div>
                        <div className="text">
                          <h2 className="upload-text-head">Click to upload a picture</h2>
                          <span className="upload-text-desc">Supported formats: JPG, PNG, or GIF.</span>
                        </div>
                      </div>
                    )}
                    <input
                      type="file"
                      id={`fileInput-${image.id}`}
                      style={{ display: 'none' }}
                      accept="image/*"
                      onChange={(e) => handleImageChange(index, e)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {stage == 2 && (
          <div className="Confirmation">
            <div className="wrapperApprove">
              <div className="wrapperlogo-Price">
                <h2 className="ValueofStake">{postData.stakeRequired}</h2>
                <div className="logocircle">
                  <img src={Logo} alt="" width={"50%"} height={"50%"} />
                </div>
              </div>
              <LockTokens tokensToApprove={postData.stakeRequired} setIsStaked={setIsStake} type={"B"}/>
              <div className="CreatePostInstructions">
                <h1>Instructions:-</h1>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem" }}>
                  <li>
                    Please confirm the following transactions: one for approving
                    the staking of tokens to the contract, and another for
                    storing the metadata related to the post’s interaction on
                    the blockchain.
                  </li>
                  <li>Once an interaction is created, it cannot be deleted.</li>
                  <li>All the proof images provided would be uploaded to ipfs.</li>
                  <li>
                    You can monitor the status of your post interaction through
                    your user profile. Unlike standard posts, you must manually
                    claim your tokens from the interaction tab once they are
                    unlocked.
                  </li>
                  <li>
                    By proceeding, you confirm that you have read and understood
                    the disclaimer and the associated risks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={handleStageChange}
        >
          Next
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
