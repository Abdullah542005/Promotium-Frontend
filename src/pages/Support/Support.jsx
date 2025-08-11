import "./Support.css"
import {motion} from "framer-motion"
import { useForm } from "@formspree/react"
import { toast,Toaster } from "sonner"
export default function Support(){ 
    const [state,handleSubmit] = useForm('mldlakro')
    return(
         <div className="SupportPage"> 
                <motion.h1 
                initial={{y:40,opacity:0}}
                animate={{y:0,opacity:1}}
               transition={{duration:0.6}}
                className="SHead">Having trouble Using <span style={{color:"#01A1CD"}}>Promotium</span> </motion.h1>
              <div>
                 <motion.h2 
                 initial={{y:40,opacity:0}}
                 animate={{y:0,opacity:1}}
               transition={{duration:0.6,delay:0.2}}
                style={{textAlign:"center",fontSize:"1.1em"}}>Send us a Message, We will solve your issue right away.</motion.h2>
               
                <motion.form
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.6,delay:0.4}}
                onSubmit={handleSubmit}
                className="SendMessage">
                    <span>
                        <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ffffff"></path> </g></svg>
                        <h1>Contact Us</h1>
                    </span>
                    <div className="SMName">
                        <span>
                            <label>First Name</label>
                            <input id="firstname" name="firstname" placeholder="Abdullah" type="text" required></input>
                        </span>
                        <span>
                            <label>Last Name</label>
                            <input id="lastname" name="lastname" type="text" placeholder="Imran" required></input>
                        </span>
                    </div>
                    <div className="SMEmail">
                         <label>Email</label>
                         <input id="email" name="email" type="email" placeholder="@gmail.com"></input>
                    </div>

                    <div className="SMEmail">
                         <label>EVM Address</label>
                         <input id="address" name="address" type="text" placeholder="0xc00...090A9"></input>
                    </div>

                     <div className="SMEmail">
                         <label>Subject</label>
                         <select id="subject" name="subject" required>
                             <option>Technical Problem</option>
                             <option>FeedBack</option>
                             <option>Collaboration</option>
                             <option>Other</option>
                         </select>
                    </div>

                     <div className="SMEmail">
                         <label>Message</label>
                         <textarea id="message" name="message" required></textarea>
                    </div>
                    <button 
                      onClick={()=>{
                        if(state.submitting)
                        toast.success("Message Sent", {duration:4000})
                      }}
                    className="SMSendBtn">Send Message</button>
                </motion.form>

                <div className="SLinks">
                    <motion.h1
                     initial={{y:40,opacity:0}}
                     whileInView={{y:0,opacity:1}}
                     viewport={{once:true}}
                    transition={{duration:0.6}}
                    >Follow Us On</motion.h1>
                    <span>
                        <motion.svg
                          initial={{x:40,opacity:0}}
                         whileInView={{x:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:0.6,delay:0.1}}
                        onClick={()=>{window.open('https://x.com/PromotiumDapp','_blank')}} width="44px" height="44px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></motion.svg>
                        <motion.svg
                           initial={{x:40,opacity:0}}
                         whileInView={{x:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:0.6,delay:0.2}}
                        onClick={()=>{window.open('https://x.com/PromotiumDapp','_blank')}} width="44px" height="44px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle> <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path> </g></motion.svg>
                        <motion.svg 
                        initial={{x:40,opacity:0}}
                         whileInView={{x:0,opacity:1}}
                        viewport={{once:true}}
                        transition={{duration:0.6,delay:0.3}}
                        onClick={()=>{window.open('https://x.com/PromotiumDapp','_blank')}} width="44px" height="44px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path> </g></motion.svg>
                    </span>
                </div>

                <div className="SLinks">
                    <motion.h1
                       initial={{y:40,opacity:0}}
                      whileInView={{y:0,opacity:1}}
                      viewport={{once:true}}
                      transition={{duration:0.6}}
                    >Support Promotium's Developement</motion.h1>
                    <motion.h2
                       initial={{y:40,opacity:0}}
                     whileInView={{y:0,opacity:1}}
                     viewport={{once:true}}
                    transition={{duration:0.6, delay:0.2}}
                    >EVM: 0xa428e6F74718b3f1B3F7881e0c8129bfD45F0Ed5</motion.h2>
                </div>

              </div>
          <Toaster position="top-right"/>
         </div>
    )
}