import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserProvider } from "react-router-dom"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserProvider>
      <App />
    </BrowserProvider>
  </React.StrictMode>,
)
