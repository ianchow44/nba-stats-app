import React, {useState} from 'react';
// import NavBar from "./Components/NavBar"
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import FantasyCalculation from "../Functions/FantasyCalc"

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


  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
    },

    item1: {
      marginLeft: "200px"
    },

    text: {
      alignContent: 'center', 
      display: "inline-block",
      marginLeft: "10px",
      marginRight: "10px",
    },
    topContainer: {
      display: "flex",
      flexDirection: "row",

    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
        display: "inline-block"
      },
    },
  }));


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
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName.split(" ").join("_")}`)
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

  const classes = useStyles();  

  return (
    <div>
      <div>
        <div>
          NBA Stats App
        </div>
        <div className = {classes.topContainer}>
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                label = "Player Name"
                type="text"
                value={value}
                onChange={handleChange}
                placeholder="please enter players name"
                className = {classes.text}
              />
              <br/>
              <TextField
                label = "Points Worth"
                type="text"
                value={pointsValue}
                onChange={(event) => { setpointsValue(event.target.value) }}
                placeholder="Points Worth"
                className = {classes.text}
              />
              <TextField
                label = "Assists Worth"
                type="text"
                value={assistsValue}
                onChange={(event) => { setassistsValue(event.target.value) }}
                placeholder="Assists Worth"
                className = {classes.text}
              />
              <TextField
                label = "Rebounds Worth"
                type="text"
                value={reboundsValue}
                onChange={(event) => { setreboundsValue(event.target.value) }}
                placeholder="Rebounds Worth"
                className = {classes.text}
              />
              <TextField
                label = "Steals Worth"
                type="text"
                value={stealsValue}
                onChange={(event) => { setstealsValue(event.target.value) }}
                placeholder="Steals Worth"
                className = {classes.text}
              />
              <TextField
                label = "Blocks Worth"
                type="text"
                value={blocksValue}
                onChange={(event) => { setblocksValue(event.target.value) }}
                placeholder="Blocks Worth"
                className = {classes.text}
              />
              <TextField
                label = "Turnovers Worth"
                type="text"
                value={turnoversValue}
                onChange={(event) => { setturnoversValue(event.target.value) }}
                placeholder="Turnovers Worth"
                className = {classes.text}
              />
              <TextField
                label = "FGM Worth"
                type="text"
                value={fgmValue}
                onChange={(event) => { setfgmValue(event.target.value) }}
                placeholder="FGM Worth"
                className = {classes.text}
              />
              <TextField
                label = "FGA Worth"
                type="text"
                value={fgaValue}
                onChange={(event) => { setfgaValue(event.target.value) }}
                placeholder="FGA Worth"
                className = {classes.text}
              />
              <TextField
                label = "FTM Worth"
                type="text"
                value={ftmValue}
                onChange={(event) => { setftmValue(event.target.value) }}
                placeholder="FTM Worth"
                className = {classes.text}
              />
              <TextField
                label = "FTA Worth"
                type="text"
                value={ftaValue}
                onChange={(event) => { setftaValue(event.target.value) }}
                placeholder="FTA Worth"
                className = {classes.text}
              />
              <div className={classes.root}>
                <Button 
                  variant="contained" 
                  type="submit" 
                  value="Submit" 
                  color="primary" 
                 
                >Submit</Button>
              </div>
            </form>
          </div>
        </div>
        <div className = {classes.container}>
          <div>
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
            Shooting Percentages
            <br/>
            Field Goal Percentage: {playerStats["fg_pct"]}
            <br/>
            Three Point Field Goal Percentage: {playerStats["fg3_pct"]}
            <br/>
            Free Throw Percentage: {playerStats["ft_pct"]}
            <br/> 
          </div>
          <div className = {classes.item1}>
            Fantasy Points: {playerStats['pts']*5}
            
          </div>
        </div>
        
      </div>
      <Button
      variant="contained" 
      type="submit" 
      value="Submit" 
      color="primary" 
    
        onClick={handleTest}
      >
          Test
      </Button>
    </div>
  );
}
export default StatsPage;