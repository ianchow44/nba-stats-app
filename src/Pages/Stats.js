import React, {useState} from 'react';
// import NavBar from "./Components/NavBar"
import { Button } from '@material-ui/core';
import axios from "axios";
import FantasyCalculation from "../Functions/FantasyCalc"
import {useParams} from "react-router-dom";
import './Styles/Stats.css';
import db from "../Database/database"
import NavBar from './Nav';



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
  const [fantasyValues, setFantasyValues] = useState({})
  const [firstLoad, setfirstLoad] = useState(true);
  const [secondLoad, setSecondLoad] = useState(false);

  const getFantasyPoints = async(playerStats2) => {
    const value = await db.fantasyPoints.get("user");
    let value2 = {
      points: value.Points,
        assists: value.Assists,
        rebounds: value.Rebounds,
        steals: value.Steals,
        blocks: value.Blocks,
        TOs: value.TOs,
        FGM: value.FGM,
        FGA: value.FGA,
        FTM: value.FTM,
        FTA: value.FTA
    }
    let res = FantasyCalculation(value2, playerStats2);
    setFantasyValues(res);
    console.log(res);
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
        console.log(res.data.data[0])
        setplayerName(res.data.data[0].first_name + " " + res.data.data[0].last_name)
        await getPlayerStats(res.data.data[0].id)
        }
      }).catch(err => {
        console.log(err)
      })
    }

  const getPlayerStats = async (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
    .then(async res => {
      setplayerStats(res.data.data[0])
      getFantasyPoints(res.data.data[0]);
    }).catch(err => {
      console.log(err)
    })
  }

  const addToRoster = () => {
    // console.log(playerName);
    // console.log(fantasyValues);
    db.roster.put({name: playerName, Points: fantasyValues.Points, Assists: fantasyValues.Assists, Rebounds: fantasyValues.Rebounds, Steals: fantasyValues.Steals, Blocks: fantasyValues.Blocks, TOs: fantasyValues.TOs, FGM: fantasyValues.FGM, FGA: fantasyValues.FGA, FTM: fantasyValues.FTM, FTA: fantasyValues.FTA, TPM: fantasyValues.TPM, TPA: fantasyValues.TPA, Total: fantasyValues.Total})
  }

  const {search} = useParams();
  console.log(search);
  if(firstLoad){
    console.log("here")
    getPlayerId(search);
    setfirstLoad(false);
  }
   
  return (
    <>
      <NavBar/>

      <div className = "playerName">
        {playerName}
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
          Points: {fantasyValues["Points"]}
          <br />
          Rebounds: {fantasyValues["Rebounds"]}
          <br />
          Assists: {fantasyValues["Assists"]}
          <br />
          Steals: {fantasyValues["Steals"]}
          <br />
          Blocks: {fantasyValues["Blocks"]}
          <br />
          Turnovers: {fantasyValues["TOs"]}
          <br />
          Field Goals Made: {fantasyValues["FGM"]}
          <br />
          Field Goals Attempted: {fantasyValues["FGA"]}
          <br />
          Free Throws Made: {fantasyValues["FTM"]}
          <br/>
          Free Throws Attempted: {fantasyValues["FTA"]}
          <br/>

        </div>
      </div>
      <div className = "totalPoints">
        Total Fantasy Points: {fantasyValues["Total"]}
      </div>
      <Button
        onClick={addToRoster}
      >
        Add
      </Button>
    </>
  );
}
export default StatsPage;