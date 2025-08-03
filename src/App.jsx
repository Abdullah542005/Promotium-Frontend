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
  const location = useLocation();
  const noNavbarRoutes = ["/onboarding","/BecomeValidator","/Faucet"]
  const disableNavbar = !noNavbarRoutes.includes(location.pathname)
  return (
    <div className='App'>
     {disableNavbar && ( <Navbar />)}
      <Routes>
           <Route path="/onboarding" element={<Onboarding/>}/>
           <Route path="/BecomeValidator" element={<BecomeValidator/>}/>
           <Route path="/Faucet" element={<Faucet/>}/>
           <Route path="/Profile/:userId" element={<Profile/>}/>
           <Route path='/' element={<Dashbaord />} />
           <Route path='/ValidatorDashboard' element={<ValidatorDashoard />} />
      </Routes>
    </div>
  )
}

export default App
