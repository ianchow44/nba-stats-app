import React, {useState} from 'react'
import './Styles/Roster.css';
import MaterialTable from 'material-table';
import db from "../Database/database"
import { useLiveQuery } from "dexie-react-hooks";



const RosterPage = () => {
    const [firstLoad, setfirstLoad] = useState(true)

    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Total Fantasy Points', field: 'Total', type: 'numeric' },
          { title: 'Points', field: 'Points', type: 'numeric' },
          { title: 'Rebounds', field: 'Rebounds', type: 'numeric' },
          { title: 'Assists', field: 'Assists', type: 'numeric' },
          { title: 'Steals', field: 'Steals', type: 'numeric' },
          { title: 'Blocks', field: 'Blocks', type: 'numeric' },
          { title: 'Turnovers', field: 'TOs', type: 'numeric' },
          { title: 'Field Goals Made', field: 'FGM', type: 'numeric' },
          { title: 'Field Goals Attempted', field: 'FGA', type: 'numeric' },
          { title: 'Free Throws Made', field: 'FTM', type: 'numeric' },
          { title: 'Free Throws Attempted', field: 'FTA', type: 'numeric' },
          { title: '3 Pointers Made', field: 'TPM', type: 'numeric' },
          { title: '3 Pointers Attempted', field: 'TPA', type: 'numeric' },

        ],
        data: [
          { name: 'Lebron James', Total: 40, Points: 28, Rebounds: 6, Assists: 5, Steals: 2.3, Blocks: 1, TOs: 3.1, FGM: 12, FGA: 21, FTM: 6, FTA: 9, TPM: 3, TPA: 5},
          { name: ' James', Total: 40, Points: 28, Rebounds: 6, Assists: 5, Steals: 2.3, Blocks: 1, TOs: 3.1, FGM: 12, FGA: 21, FTM: 6, FTA: 9, TPM: 3, TPA: 5},

        ],
      });
      var rosterList = useLiveQuery(() => db.roster.toArray(), []);
    if(!rosterList){
        return(<div></div>)
    }
     
    // console.log(firstLoad)
    // if(firstLoad){
    //     console.log("here")
    //     setState((prev) => {
            
    //         return {...prev, rosterList}
    //     });
    //     setfirstLoad(false)
    // }
    
    // console.log("yes");
    

    
    return (
        <>
        <div className = "nav">
            <div className = "navbarText">
                <strong>NBA Stats App</strong> 
            </div>
            <ul className = "navbarLinks">
                <li className = "link"> <a className = "navbarText" href="../nba-stats-app"> Search a Player </a></li>
                <li className = "link"> <a className = "navbarText" href="/nba-stats-app/roster"> My Roster </a></li>
            </ul>
        </div>

        <div className = "RosterInfo">
            <div className = "info">
                <strong > 
                    My Roster: 
                    <br/>
                </strong>
                Click the "Search a Player" button to search for a player to add you your roster. Click the trash button to remove the player from your roster.
            </div>
            <div>
            </div>
        </div>

        <br/>
        <br/>

        <MaterialTable
            title="My Roster"
            options={{
                paging: false
            }}
            localization={{ body: { editRow: { deleteText: 'Are you sure you want to remove this player from your roster?' } } }}
            columns={state.columns}
            data={rosterList}
            editable={{
                // onRowAdd: (newData) =>
                // new Promise((resolve) => {
                //     setTimeout(() => {
                //     resolve();
                //     setState((prevState) => {
                //         const data = [...prevState.data];
                //         data.push(newData);
                //         return { ...prevState, data };
                //     });
                //     }, 600);
                // }),
                // onRowUpdate: (newData, oldData) =>
                // new Promise((resolve) => {
                //     setTimeout(() => {
                //     resolve();
                //     if (oldData) {
                //         setState((prevState) => {
                //         const data = [...prevState.data];
                //         data[data.indexOf(oldData)] = newData;
                //         return { ...prevState, data };
                //         });
                //     }
                //     }, 600);
                // }),
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                    });
                    console.log(oldData.name)
                    db.roster.delete(oldData.name)
                    }, 600);
                }),
            }}
            />

        </>
    )
    
}

export default RosterPage