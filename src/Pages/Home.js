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
import { Button } from '@material-ui/core';


function HomePage(){

    const [playerName, setplayerName] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    var fantasyPointList = useLiveQuery(() => db.fantasyPoints.toArray(), []) 
    console.log(fantasyPointList)
    if(!fantasyPointList){
        return(
            <div>
                
            </div>
        );
    }

    
    

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
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {Points: e.target.value});
    }

    const handleBlocksChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {Blocks: e.target.value});
    }

    const handleAssitsChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {Assists: e.target.value});
    }

    const handleReboundsChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {Rebounds: e.target.value});
    }

    const handleStealsChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {Steals: e.target.value});
    }

    const handleTOsChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {TOs: e.target.value});
    }

    const handleFGMChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {FGM: e.target.value});
    }

    const handleFGAChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {FGA: e.target.value});
    }

    const handleFTMChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {FTM: e.target.value});
    }

    const handleFTAChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {FTA: e.target.value});
    }

    const handleTPMChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {TPM: e.target.value});
    }

    const handleTPAChange = async (e) => {
        console.log(fantasyPointList)
        if(fantasyPointList.length == 0){
            await db.fantasyPoints.add({name:"user"})
            
        }
        console.log(e.target.value)
        db.fantasyPoints.update('user', {TPA: e.target.value});
    }

    

    const test = (e) => {
        db.fantasyPoints.clear();
    }
    console.log(fantasyPointList[0])
    return(
        <div className='Home'>

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
                            defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["Points"] : null}
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
                            defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["Assists"] : null}
                            id='Assists'
                            label='Assists'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleAssitsChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["Rebounds"] : null}
                            id='Rebounds'
                            label='Rebounds'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleReboundsChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["Steals"] : null}
                            id='Steals'
                            label='Steals'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleStealsChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["Blocks"] : null}
                            id='Blocks'
                            label='Blocks'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleBlocksChange}
                            
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["TOs"] : null}
                            id='TOs'
                            label='TOs'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleTOsChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["FGM"] : null}
                            id='FGM'
                            label='FGM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFGMChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["FGA"] : null}
                            id='FGA'
                            label='FGA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFGAChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["FTM"] : null}
                            id='FTM'
                            label='FTM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFTMChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["FTA"] : null}
                            id='FTA'
                            label='FTA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleFTAChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["TPM"] : null}
                            id='3PM'
                            label='3PM'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleTPMChange}
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                        defaultValue = {fantasyPointList[0] ? fantasyPointList[0]["TPA"] : null}
                            id='3PA'
                            label='3PA'
                            type="number"
                            variant="filled"
                            color="primary"
                            className="InputClass"
                            size='small'
                            onChange={handleTPAChange}
                        > 
                        </TextField>
                    </div>
                </form>
            </div>
            
            <p>HomePage</p>
            <a href="/stat">Click</a>
            <Button
            onClick={test}>Button</Button>
        </div>
    )
}

export default HomePage;