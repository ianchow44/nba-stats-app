import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import './Styles/Home.css';
import TextField from '@material-ui/core/TextField';
import logo from '../Images/nbaLogo.png'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";
import db from "../Database/database"
import { useLiveQuery } from "dexie-react-hooks";


function HomePage(){

    const [playerName, setplayerName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    let fantasyPointList = useLiveQuery(() => db.fantasyPoints.toArray(), []) 
    if(!fantasyPointList){
        fantasyPointList = {
            0: {
                name:""
            }
        }
    }
    console.log(fantasyPointList)
    

    if(formSubmitted){
        return <Redirect push to={`/stat/${playerName}`} />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${playerName.split(" ").join("_")}`)
        .then(async res => {
        if(res.data.data[0] === undefined){
            alert("This player is either injured or hasn't played yet!")
        } else if(res.data.data.length > 1){
            alert("Pleases specify the name more!")
        } else{
            setFormSubmitted(true);
        }
      }).catch(err => {
        console.log(err)
      })
    }

    const handleChange = (e) =>{ 
        setplayerName(e.target.value);
    }

    const handleFantasyChange = async (e) => {
        // if(fantasyPointList.length == 0){
        //     await db.fantasyPoints.add({name:"user", Points: 0, Assists: 0, Rebounds: 0, Steals: 0, Blocks: 0, TOs: 0, FGM: 0, FGA: 0, FTM: 0, FTA: 0, T: 0, TPA: 0})
        //     console.log("added")
        // }
        // let temp = {}
        // db.fantasyPoints.update('user', {Points: e.target.value});
        // console.log("here");
    }

    const handlePointsChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user", Points: 0, Assists: 0, Rebounds: 0, Steals: 0, Blocks: 0, TOs: 0, FGM: 0, FGA: 0, FTM: 0, FTA: 0, T: 0, TPA: 0})
            console.log("added")
        }
        db.fantasyPoints.update('user', {Points: e.target.value});
    }
     //console.log(fantasyPointList[0]["Points"])
    return(
        <div className='Home'>
            <div className='Heading'>
                <div className='Title'>
                    <h1 id='NBA'>
                        NBA
                    </h1>
                    <h1 id='STATS'>
                        STATS
                    </h1>
                    
                </div> 
                <div className='NBALogo'>
                    <img src={logo}></img>
                </div>

            </div>
            <div className='Glass'>
                <div className='Searchbar'>
                    <Paper component="form" className='root' onSubmit={handleSubmit}>
                        <InputBase
                            className='input'
                            placeholder="Search NBA Player"
                            inputProps={{ 'aria-label': 'Search NBA Player' }}
                            onChange={handleChange}
                        />
                        <IconButton type="submit" className='iconButton' aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
                    </Paper>
                </div>
                <div className="FantasyHeader">
                    <h3>
                        Fantasy Category Values
                    </h3>
                </div>
                <form className='Points' noValidate autoComplete='off'>
                    <div className='PointsInput'>
                        <TextField
                            defaultValue={0}
                            //value={fantasyPointList[0]["Points"]}
                            id='Points'
                            label='Points'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handlePointsChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            //defaultValue = {fantasyPointList[0]["Assists"]}
                            id='Assists'
                            label='Assists'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            //defaultValue = {fantasyPointList[0]["Rebounds"]}
                            id='Rebounds'
                            label='Rebounds'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["Steals"]}
                            id='Steals'
                            label='Steals'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["Blocks"]}
                            id='Blocks'
                            label='Blocks'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                            
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["TOs"]}
                            id='TOs'
                            label='TOs'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["FGM"]}
                            id='FGM'
                            label='FGM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["FGA"]}
                            id='FGA'
                            label='FGA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["FTM"]}
                            id='FTM'
                            label='FTM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["FTA"]}
                            id='FTA'
                            label='FTA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["TPM"]}
                            id='3PM'
                            label='3PM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        //defaultValue = {fantasyPointList[0]["TPA"]}
                            id='3PA'
                            label='3PA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFantasyChange}
                        > 
                        </TextField>
                    </div>
                </form>
            </div>
            
            <p>HomePage</p>
            <a href="/stat">Click</a>
        </div>
    )
}

export default HomePage;