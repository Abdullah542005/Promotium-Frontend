import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Onboarding from './pages/onboarding/Onboarding'
import Dashbaord from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Faucet from './pages/Faucet/Faucet'
import BecomeValidator from './pages/BecomeValidator/BecomeValidator'
import ValidatorDashoard from './pages/ValdiatorDashboard/ValidatorDashboard'
import OnboardingAuth from './pages/onboarding/OnboardingAuth'
import Support from './pages/Support/Support'
import promotiumLogo from  "./assets/Images/PromotiumLogo.svg"
import {motion} from "framer-motion"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setIsLoading } from './redux/slices/web'
function App() {
  const location = useLocation();
  const noNavbarRoutes = ["/onboarding","/BecomeValidator","/Faucet"]
  const disableNavbar = !noNavbarRoutes.includes(location.pathname)
  const dispatch = useDispatch();
  const [animationStep,setAnimationStep] = useState(1)
  useEffect(()=>{
    setTimeout(()=>{setAnimationStep(2)},2500)
    setTimeout(()=>{setAnimationStep(3); dispatch(setIsLoading(false))},4000)
  },[])

  return (
    <div className='App'>
     <div style={animationStep == 3?{display:"none"}:{}}  className="StartingAnimation">
         <div>
             <img src={promotiumLogo}></img>
             {animationStep == 2 && (<span className='SAText'>
              <motion.h1
               initial={{x:-100}}
               animate={{x:0}}
               transition={{duration:1,ease:"easeOut"}}
              >romotium</motion.h1>
            </span>)}
            {animationStep == 1 && ( <div className='SALoader'><motion.div
               initial={{width:"0%"}}
               animate={{width:"100%"}}
               transition={{duration:2,delay:0.2,ease:"easeOut"}}
            ></motion.div></div>)}
         </div>
     </div>

     {disableNavbar && ( <Navbar />)}
      <Routes>
           <Route path="/onboarding" element={<Onboarding/>}/>
           <Route path="/BecomeValidator" element={<BecomeValidator/>}/>
           <Route path="/Faucet" element={<Faucet/>}/>
           <Route path="/Profile/:userId" element={<Profile/>}/>
           <Route path='/' element={<Dashbaord />} />
           <Route path='/ValidatorDashboard' element={<ValidatorDashoard />} />
           <Route path='/onboarding/success' element={<OnboardingAuth />} />
           <Route path='/Support' element={<Support />} />
      </Routes>
    </div>
  )
}

export default App
