import React, {useState} from 'react';
// import NavBar from "./Components/NavBar"
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import FantasyCalculation from "../Functions/FantasyCalc"
import {useParams} from "react-router-dom";
import './Styles/Stats.css';

const StatsPage = () => {

  const [playerName, setplayerName] = useState(null)
  const [playerStats, setplayerStats] = useState({})
  const [value] = useState()
  const [pointsValue, setpointsValue] = useState()
  const [assistsValue, setassistsValue] = useState()
  const [reboundsValue, setreboundsValue] = useState()
  const [stealsValue, setstealsValue] = useState()
  const [blocksValue, setblocksValue] = useState()
  const [turnoversValue, setturnoversValue] = useState()
  const [fgmValue, setfgmValue] = useState()
  const [fgaValue, setfgaValue] = useState()
  const [ftmValue, setftmValue] = useState()
  const [ftaValue, setftaValue] = useState()
  const [firstLoad, setfirstLoad] = useState(true);





  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(playerName)
    if (!playerName || playerName.length < 1) {
      alert("Please type player's name!")
    } 
    else {
      await getPlayerId()
    }
    let value2 = {
      points: pointsValue,
        assists: assistsValue,
        rebounds: reboundsValue,
        steals: stealsValue,
        blocks: blocksValue,
        TOs: turnoversValue,
        FGM: fgmValue,
        FGA: fgaValue,
        FTM: ftmValue,
        FTA: ftaValue
    }
    let res = FantasyCalculation(value2, playerStats);
    console.log(res)
  }

  const handleTest = () => {
    let value2 = {
      points: pointsValue,
        assists: assistsValue,
        rebounds: reboundsValue,
        steals: stealsValue,
        blocks: blocksValue,
        TOs: turnoversValue,
        FGM: fgmValue,
        FGA: fgaValue,
        FTM: ftmValue,
        FTA: ftaValue
    }
    let res = FantasyCalculation(value2, playerStats);
    console.log(res)
  }


  const handleChange = (event) => {
    setplayerName(event.target.value)
    
  }

  const getPlayerId = async (playerId) => {
    console.log(playerId)
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerId.split(" ").join("_")}`)
    .then(async res => {
    if(res.data.data[0] === undefined){
      alert("This player is either injured or hasn't played yet!")
    } else if(res.data.data.length > 1){
      alert("Pleases specify the name more!")
      } else{
        await getPlayerStats(res.data.data[0].id)
        }
      }).catch(err => {
        console.log(err)
      })
    }

    // const geteFG = () => {
      // this.setState({testing:(this.state.playerStats["fgm"] + (0.5 * this.state.playerStats["fg3m"])) / (this.state.playerStats["fga"])})
    //   setTesting(playerStats["fgm"] + (0.5 * playerStats["fg3m"])) / (playerStats["fga"])
    // }

  const getPlayerStats = async (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      setplayerStats(res.data.data[0])
    }).catch(err => {
      console.log(err)
    })
  }



  const {search} = useParams();
  console.log(search);
  if(firstLoad){
    getPlayerId(search);
    setfirstLoad(false);
  }
  
  


  return (
    <>
      <div className = "nav">
        <div className = "navbarText">
         <strong>NBA Stats App</strong> 
        </div>
        <ul className = "navbarLinks">
          <li className = "link"> <a className = "navbarText" href="../nba-stats-app"> Search a Player </a></li>
          <li className = "link"> <a className = "navbarText" href="a"> My Roster </a></li>
          <li className = "link"> <a className = "navbarText" href="a"> About </a></li>
        </ul>
      </div>

      <div className = "playerName">
        PUT SEARCHED PLAYER NAME HERE
      </div>

      <div className = "container">
        <div className = "regularStats">
          <strong> NBA Stats </strong>
          <br/>
          <br/>
          Points: {playerStats["pts"]}
          <br />
          Rebounds: {playerStats["reb"]}
          <br />
          Assists: {playerStats["ast"]}
          <br />
          Steals: {playerStats["stl"]}
          <br />
          Blocks: {playerStats["blk"]}
          <br />
          Turnovers: {playerStats["turnover"]}
          <br />
          Field Goals Made: {playerStats["fgm"]}
          <br />
          Field Goals Attempted: {playerStats["fga"]}
          <br />
          Free Throws Made: {playerStats["ftm"]}
          <br/>
          Free Throws Attempted: {playerStats["fta"]}
          <br/>
          <br/>
          <strong> Shooting Percentages</strong>
          <br/>
          Field Goal Percentage: {playerStats["fg_pct"]}
          <br/>
          Three Point Field Goal Percentage: {playerStats["fg3_pct"]}
          <br/>
          Free Throw Percentage: {playerStats["ft_pct"]}
          <br/> 
        </div>
        <div className = "regularStats">
          <strong> Fantasy Points </strong>
          <br/>
          <br/>
          Points: 
          <br />
          Rebounds: 
          <br />
          Assists: 
          <br />
          Steals: 
          <br />
          Blocks: 
          <br />
          Turnovers: 
          <br />
          Field Goals Made: 
          <br />
          Field Goals Attempted: 
          <br />
          Free Throws Made: 
          <br/>
          Free Throws Attempted: 
          <br/>

        </div>
      </div>
      <div className = "totalPoints">
        Total Fantasy Points: 
      </div>
    </>
  );
}
export default StatsPage;