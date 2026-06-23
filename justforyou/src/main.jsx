import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* //so that we can do routing by url like once a btn is clicked, it will go to '/newpage' */}
    <BrowserRouter> 
    <Toaster/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
