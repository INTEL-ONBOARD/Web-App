import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './home/Home.jsx'
import './index.css'

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path='/home'><Home/></Route>
      </Switch>
    </Router>
    <Home />

  </StrictMode>,
)
