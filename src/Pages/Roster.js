import React from 'react'
import './Styles/Roster.css';
import MaterialTable from 'material-table';




const RosterPage = () => {
    const [state, setState] = React.useState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Total Fantasy Points', field: 'totalpoints', type: 'numeric' },
          { title: 'Points', field: 'points', type: 'numeric' },
          { title: 'Rebounds', field: 'rebounds', type: 'numeric' },
          { title: 'Assists', field: 'assists', type: 'numeric' },
          { title: 'Steals', field: 'steals', type: 'numeric' },
          { title: 'Blocks', field: 'blocks', type: 'numeric' },
          { title: 'Turnovers', field: 'turnovers', type: 'numeric' },
          { title: 'Field Goals Made', field: 'fgm', type: 'numeric' },
          { title: 'Field Goals Attempted', field: 'fga', type: 'numeric' },
          { title: 'Free Throws Made', field: 'ftm', type: 'numeric' },
          { title: 'Free Throws Attempted', field: 'fta', type: 'numeric' },
          { title: '3 Pointers Made', field: 'threepm', type: 'numeric' },
          { title: '3 Pointers Attempted', field: 'threepa', type: 'numeric' },

        ],
        data: [
          { name: 'Lebron James', totalpoints: 40, points: 28, rebounds: 6, assists: 5, steals: 2.3, blocks: 1, turnovers: 3.1, fgm: 12, fga: 21, ftm: 6, fta: 9, threepm: 3, threepa: 5, birthYear: 1987 },
          { name: 'Kevin Durant', totalpoints: 30, points: 28, rebounds: 6, assists: 5, steals: 2.3, blocks: 1, turnovers: 3.1, fgm: 12, fga: 21, ftm: 6, fta: 9, threepm: 3, threepa: 5, birthYear: 1987 },


        ],
      });
    return (
        <>
        <div className = "nav">
            <div className = "navbarText">
                <strong>NBA Stats App</strong> 
            </div>
            <ul className = "navbarLinks">
                <li className = "link"> <a className = "navbarText" href="../nba-stats-app"> Search a Player </a></li>
                <li className = "link"> <a className = "navbarText" href="/roster"> My Roster </a></li>
                <li className = "link"> <a className = "navbarText" href="a"> About </a></li>
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
            columns={state.columns}
            data={state.data}
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
                    }, 600);
                }),
            }}
            />

        </>
    )
    
}

export default RosterPage