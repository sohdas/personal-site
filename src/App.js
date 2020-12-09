import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
      <Router>
        <Navbar/>
        <div id="body-wrapper">
          <Switch>
            <Route path="/">
              <Home/>
            </Route>
            <Route path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
