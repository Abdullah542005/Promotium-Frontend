import React, { useState, useEffect } from 'react';
import './CreatePost.css';
import { motion } from 'framer-motion';
import imgChallenge from './Business solution-pana.png'
import imgOrdinary from './Good team-pana.png'

const CreatePost = ({ closePostMenu }) => {
    const [stage, setStage] = useState(1);
    const [selectedType, setSelectedType] = useState('A');
    const [text, setText] = useState('');
    const [valuePerInt, setValuePetInt] = useState('');
    const [valueMaxInteraction, setvalueMaxInteraction] = useState('');
    const [stakePromotium, setStakePromotium] = useState(0);

    const handleChangeMax = (e) => {
        setvalueMaxInteraction(e.target.value);
    };
    const handleChangePerInt = (e) => {
        setValuePetInt(e.target.value);
    };

    const nextStage = () => {
        setStage(prev => (prev < 4 ? prev + 1 : prev));
    };    

    useEffect(() => {
        const max = parseFloat(valueMaxInteraction);
        const per = parseFloat(valuePerInt);
      
        // Ensure both inputs are valid numbers before computing
        if (!isNaN(max) && !isNaN(per)) {
          setStakePromotium(max * per);
        } else {
          setStakePromotium(0); // Reset or leave blank if values are invalid
        }
      }, [valueMaxInteraction, valuePerInt]);

  return (
    <>
      <div className="CreatePostBackdrop" onClick={() => closePostMenu(false)} />
        <motion.div
            initial={{ scale: 0.9, opacity: 0, x: "-50%", y: "-50%"}}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            className="CreatePost"
        >
            <div className="CreatePostHeading">
                <h1 className="CreatePostHeaderTag">Create Post</h1>
                <svg onClick={()=>{closePostMenu(false)}}
                        className="CloseButton"
                        width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z" fill="#fafafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fafafa"></path> </g></svg>
            </div>

            <div className="bodyPost">
                <div className="progressWrapper">
                    <div className="progress">
                        <div className="line">
                            <div className="lin2" style={{
                                width:
                                stage === 1 ? "0%" :
                                stage === 2 ? "33.33%" :
                                stage === 3 ? "66.66%" : 
                                stage === 4 ? "100%" : "0%",
                                transition: "width 0.4s ease-in-out",
                            }}></div>
                        </div>
                        <span className={`dot ${stage >= 1 ? 'active' : ''}`}>1</span>
                        <span className={`dot ${stage >= 2 ? 'active' : ''}`}>2</span> 
                        {/* {`dot ${stage >= 2 ? 'active' : ''}`} */}
                        <span className={`dot ${stage >= 3 ? 'active' : ''}`}>3</span>
                        <span className={`dot ${stage >= 4 ? 'active' : ''}`}>4</span>
                    </div>
                    <div className="progressNames">
                        <p className={`progressNameHeading ${stage >= 1 ? 'active' : ''}`}>Post Type</p>
                        <p className={`progressNameHeading ${stage >= 2 ? 'active' : ''}`}>Post Information</p>
                        <p className={`progressNameHeading ${stage >= 3 ? 'active' : ''}`}>Approve Token</p>
                        <p className={`progressNameHeading ${stage >= 4 ? 'active' : ''}`}>Confirmation</p>
                    </div>
                </div>
                
                {stage === 1 && (
                    <div className="card-selector">
                        <label className={`card ${selectedType === 'A' ? 'selected' : ''}`}>
                            <input
                            type="radio"
                            name="postType"
                            value="A"
                            checked={selectedType === 'A'}
                            onChange={() => setSelectedType('A')}
                            />
                            <div className="TextSection">
                                <h3 className='PostHeader'>Ordinary Post</h3>
                                <p className='PostDescription'>Post Type Ordinary allows you to publish a standard post without requiring a challenge period or staking mechanism. 
                                    It's best suited for general updates, announcements, or open ended content where interaction limits and incentives 
                                    are optional but available.</p>
                            </div>
                            <div className="illustrationsSection">
                                <img width={"120px"} height={"120px"} src={imgOrdinary} alt="" />
                            </div>
                        </label>

                        <label className={`card ${selectedType === 'B' ? 'selected' : ''}`}>
                            <input
                            type="radio"
                            name="postType"
                            value="B"
                            checked={selectedType === 'B'}
                            onChange={() => setSelectedType('B')}
                            />
                            <div className="TextSection">
                                <h3 className='PostHeader'>Challenge Post</h3>
                                <p className='PostDescription'>Post Type Challenge introduces an advanced configuration that includes both a staking requirement and a challenge period. 
                                    Users must stake tokens to publish this post, which ensures greater commitment and accountability. During the challenge 
                                    period, others can dispute the content if necessary.
                                </p>
                            </div>
                            <div className="illustrationsSection">
                                <img width={"120px"} height={"120px"} src={imgChallenge} alt="" />
                            </div>
                        </label>
                    </div>
                )}

                {stage === 2 && (
                    <div>
                        {selectedType === 'A' && (
                            <div className='inputFieldsA'>
                                <div className="TitleWrapper">
                                    <label htmlFor="Title" className='Title'>Title</label>
                                    <input type="text" name="Title" id="TitleInput" required/>
                                </div>
                                <div className="descriptionWrapper">
                                    <label htmlFor="Description" className='Description'>Description:</label>
                                    <textarea
                                        style={{resize: 'none'}}
                                        required
                                        id="DescriptionInput"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        rows={5}
                                        cols={19}
                                    />
                                </div>
                                <div className='SocialInteractions'>
                                    <div className="FacebookInteraction">
                                        <label htmlfor="Facebook" className='Facebook'>
                                            <input type="checkbox" id="FacebookInput" name="Facebook"/>
                                            <svg width="2.75rem" height="2.75rem" className="fblogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook">
                                                <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
                                                <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
                                            </svg>
                                        </label>
                                    </div>
                                    <div className="XTwitterInteractoin">
                                        <label htmlfor="X" className='XTwitter'>
                                            <input type="checkbox" id="XInput" name="X"/>
                                            <svg className="xLogo" width="3rem" height="3rem"  xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fillRule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
                                                <path fill="#fff" d="M256 0c141.384 0 256 114.616 256 256 0 141.384-114.616 256-256 256C114.616 512 0 397.384 0 256 0 114.616 114.616 0 256 0zm62.64 157.549h33.401l-72.974 83.407 85.85 113.495h-67.222l-52.645-68.837-60.244 68.837h-33.422l78.051-89.212-82.352-107.69h68.924l47.59 62.916 55.043-62.916zm-11.724 176.908h18.509L205.95 176.494h-19.861l120.827 157.963z"/>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                                <div className='maxInteraction'>
                                    <label className='maxInt'>
                                        Maximum Interactions:
                                    </label>
                                    <input className='MaxIntInput' type="number" value={valueMaxInteraction} onChange={handleChangeMax} min="1" required/>
                                </div>
                                <div className='rewardPerInteraction'>
                                    <label className='rewardPIntLabel'>
                                        Reward Per Interaction:
                                    </label>
                                    <input className='rewardPIntInput' type="number" value={valuePerInt} onChange={handleChangePerInt} min="1" required/>
                                </div>
                                {/* For the purpose of TimeStamp we need to record that as well it will be implemented during backend connectivity */}
                                {/* Beside that We also need to write functions for input Fields */}
                                <div className="stakePromotium">
                                    <span>Stake Promotium: <span style={{color: 'white'}}>{stakePromotium}</span></span>
                                </div>
                            </div>
                        )}

                        {selectedType === 'B' && (
                            <div>
                                
                            </div>
                        )}
                    </div>
                )}
                {stage === 3 && (
                    <div>

                    </div>
                )}
            </div>
                
            <button className='NextBTN' onClick={nextStage}>Continue</button>
      </motion.div>
    </>
  );
};

export default CreatePost;