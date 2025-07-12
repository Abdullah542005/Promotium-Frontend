import './App.css'
import { Route, Routes } from 'react-router-dom'
import Onboarding from './pages/onboarding/Onboarding'
import Dashbaord from './pages/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
           <Route path="/onbording" element={<Onboarding/>}/>
           <Route path='/' element={<Dashbaord />} />
      </Routes>
    </div>
  )
}

export default App
