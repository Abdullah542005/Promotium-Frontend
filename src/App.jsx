import './App.css'
import { Route, Routes } from 'react-router-dom'
import Onboarding from './pages/onboarding/Onboarding'
import Dashbaord from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Faucet from './pages/Faucet/Faucet'
import BecomeValidator from './pages/BecomeValidator/BecomeValidator'

function App() {
  const TestingUser =
    {
      personalAccount: true,
      isFollowing: true,
      imgSrc: "",
      username: "Abdullah542005",
      numberOfPosts: 1,
      numberOfFollowers: 1280,
      numberOfFollowing: 150,
      name: "Abdullah Imran",
      walletAddress: "0xA1B2C3D4E5F678901234567890ABCDEF12345678",
      about: "مصروف🐺",
      facebookURL: "facebook.com/i.faiixal",
      twitterURL: "x.com/iFaiixal"
    }

  return (
    <div className='App'>
      {/* <Navbar /> */}
      <Routes>
           <Route path="/onboarding" element={<Onboarding/>}/>
           <Route path="/BecomeValidator" element={<BecomeValidator/>}/>
           <Route path="/Faucet" element={<Faucet/>}/>
           <Route path="/Profile" element={<Profile User={TestingUser}/>}/>
           <Route path='/' element={<Dashbaord />} />
      </Routes>
    </div>
  )
}

export default App
