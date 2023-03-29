import React from 'react'
import ReactDOM from 'react-dom/client'
import JournalApp from './JournalApp'
import './styles.css';

import { BrowserRouter } from 'react-router-dom';
import { LoginPage } from './auth/pages/LoginPage';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {<BrowserRouter>
      <LoginPage/> 
    </BrowserRouter>}

  </React.StrictMode>,
)
