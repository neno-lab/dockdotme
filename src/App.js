import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import TideData from './components/pages/TideData';
import Faq from './components/pages/Faq';
import ContactUs from './components/pages/ContactUs';
import Navbar from './components/Nav/Nav';

function App() {
  return (
    <Router>
    <div className='main-container'>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route exact path='/tide-data' component={TideData}/>
        <Route exact path='/faq' component={Faq}/>
        <Route exact path='/contact-us' component={ContactUs}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
