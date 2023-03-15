import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
        <HashRouter>
            <div className='app'>
                <App />
            </div>
           
        </HashRouter>          
    
        
       
    </React.StrictMode>
  
)