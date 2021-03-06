import React from 'react';
import './Styles/Nav.css';

const NavBar = () => {

    return(
        <div className = "nav">
            <div className = "navbarText">
            <strong>NBA Stats App</strong> 
            </div>
            <ul className = "navbarLinks">
            <li className = "link"> <a className = "navbarText" href="../nba-stats-app"> Search a Player </a></li>
            <li className = "link"> <a className = "navbarText" href="/nba-stats-app/roster"> My Roster </a></li>
            </ul>
        </div>
    );
}

export default NavBar;