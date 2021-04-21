import React, {Component} from 'react';
import axios from "axios";
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      playerName: null,
      playerStats: {},
      testing: null
    }
  }

handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state.playerName)
  if (!this.state.playerName || this.state.playerName.length < 1) {
    alert("Please type player's name!")
  } 
  else {
    this.getPlayerId()
    
  }
}

handleChange = (event) => {
  const replace = event.target.value.split(" ").join("_");
  if(replace.length > 0){
    this.setState({playerName: replace})
  } 
}

// calculateFG = () => {
//   const eFG = (this.state.playerStats["fgm"] + (0.5 * this.state.playerStats["fg3m"])) / this.state.playerStats["fga"]
//   console.log(eFG)
// }

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      // console.log(res.data.data)
      if(res.data.data[0] === undefined){
        alert("This player is either injured or hasn't played yet!")
      } else if(res.data.data.length > 1){
        alert("Pleases specify the name more!")
      } else{
        await this.getPlayerStats(res.data.data[0].id)

      }
    }).catch(err => {
      console.log(err)
    })
  }

  geteFG = () => {
    this.setState({testing:(this.state.playerStats["fgm"] + (0.5 * this.state.playerStats["fg3m"])) / (this.state.playerStats["fga"])})
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      this.setState({ playerStats: res.data.data[0]})
      this.geteFG()
    }).catch(err => {
      console.log(err)
    })
  }
  
  render(){
  return (
    <div>
      <h1>
        NBA Stats App
      </h1>
     <form onSubmit={this.handleSubmit}>
       <label>
         Name
         <input 
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="please enter players name"
         />
       </label>
       <input type="submit" value="Submit"/>
     </form>
     Points: {this.state.playerStats["pts"]}
     <br />
     Rebounds: {this.state.playerStats["reb"]}
     <br />
     Assists: {this.state.playerStats["ast"]}
     <br />
     Steals: {this.state.playerStats["stl"]}
     <br />
     Blocks: {this.state.playerStats["blk"]}
     <br />
     Turnovers: {this.state.playerStats["turnover"]}
     <br />
     Field Goals Made: {this.state.playerStats["fgm"]}
     <br />
     Field Goals Attempted: {this.state.playerStats["fga"]}
     <br />
     Free Throws Made: {this.state.playerStats["ftm"]}
     <br/>
     Free Throws Attempted: {this.state.playerStats["fta"]}
     <h2>
       Shooting Percentages
     </h2>
     Field Goal Percentage: {this.state.playerStats["fg_pct"]}
     <br/>
     Three Point Field Goal Percentage: {this.state.playerStats["fg3_pct"]}
     <br/>
     Free Throw Percentage: {this.state.playerStats["ft_pct"]}
     <br/>
     Effective Field Goal Percentage: {this.state.testing}
    </div>
  );
}
}
export default App;
