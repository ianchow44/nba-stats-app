import React, {useState} from 'react';
import axios from "axios";
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const App = () => {

  const [playerName, setplayerName] = useState(null)
  const [playerStats, setplayerStats] = useState({})
  const [value] = useState()

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(playerName)
    if (!playerName || playerName.length < 1) {
      alert("Please type player's name!")
    } 
    else {
      getPlayerId()
    }
  }

  const handleChange = (event) => {
    setplayerName(event.target.value)
  }

  const getPlayerId = (playerId) => {
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

  const getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      setplayerStats(res.data.data[0])
    }).catch(err => {
      console.log(err)
    })
  }

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>

        <h1>
          NBA Stats App
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input 
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="please enter players name"
            />
          </label>
          <input type="submit" value="Submit"/>
        </form>
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
        <h2>
        Shooting Percentages
        </h2>
        Field Goal Percentage: {playerStats["fg_pct"]}
        <br/>
        Three Point Field Goal Percentage: {playerStats["fg3_pct"]}
        <br/>
        Free Throw Percentage: {playerStats["ft_pct"]}
        <br/> 
      </div>
   
  );
}
export default App;

