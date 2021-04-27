import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Styles/Home.css';
import TextField from '@material-ui/core/TextField';
import logo from '../Images/nbaLogo.png'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


function HomePage(){
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
                    <Paper component="form" className='root'>
                        <InputBase
                            className='input'
                            placeholder="Search NBA Player"
                            inputProps={{ 'aria-label': 'Search NBA Player' }}
                        />
                        <IconButton type="submit" className='iconButton' aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        
                    </Paper>
                </div>
                <form className='Points' noValidate autoComplete='off'>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
                        > 
                        </TextField>
                    </div>
                    <div className='PointsInput'>
                        <TextField
                            id=''
                            label='Points'
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