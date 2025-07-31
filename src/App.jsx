import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Onboarding from './pages/onboarding/Onboarding'
import Dashbaord from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Faucet from './pages/Faucet/Faucet'
import BecomeValidator from './pages/BecomeValidator/BecomeValidator'
import ValidatorDashoard from './pages/ValdiatorDashboard/ValidatorDashboard'

function App() {
  const TestingUser =
    {
      personalAccount: true,
      isFollowing: true,
      imgSrc: "",
      username: "@abdullah542005",
      numberOfPosts: 1,
      numberOfFollowers: 1280,
      numberOfFollowing: 150,
      name: "Abdullah Imran",
      walletAddress: "0xA1B....567C8",
      about: "مصروف🐺",
      facebookURL: "facebook.com/i.faiixal",
      twitterURL: "x.com/iFaiixal"
    }
  const location = useLocation();
  const noNavbarRoutes = ["/onboarding","/Becomevalidator","/Faucet"]
  const disableNavbar = !noNavbarRoutes.includes(location.pathname)
  return (
    <div className='App'>
     {disableNavbar && ( <Navbar />)}
      <Routes>
           <Route path="/onboarding" element={<Onboarding/>}/>
           <Route path="/BecomeValidator" element={<BecomeValidator/>}/>
           <Route path="/Faucet" element={<Faucet/>}/>
           <Route path="/Profile" element={<Profile User={TestingUser}/>}/>
           <Route path='/' element={<Dashbaord />} />
           <Route path='/ValidatorDashboard' element={<ValidatorDashoard />} />
      </Routes>
    </div>
  )
}

export default App
