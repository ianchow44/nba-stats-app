import React, {useState} from 'react';
// import NavBar from "./Components/NavBar"
import StatsPage from './Pages/Stats.js'
import HomePage from './Pages/Home.js'
import {Route, BrowserRouter as Router} from "react-router-dom"

const App = () => {

  return (
    <Router>
      <Route path="/nba-stats-app" exact component = {HomePage}/>
      <Route path="/stat" exact component = {StatsPage}/>
    </Router>
  );
}
export default App;

