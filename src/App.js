import React, {useState} from 'react';
import StatsPage from './Pages/Stats.js'
import HomePage from './Pages/Home.js'
import RosterPage from './Pages/Roster.js'
import {Route, BrowserRouter as Router} from "react-router-dom"


const App = () => {

  return (
    <Router>
      <Route path="/nba-stats-app" exact component = {HomePage}/>
      <Route path="/stat/:search" exact component = {StatsPage}/>
      <Route path="/roster" exact component = {RosterPage}/>
    </Router>
  );
}
export default App;

