
//map is object
function FantasyCalculation(value, playerStats){
    let res = {
        points: 0,
        assists: 0,
        rebounds: 0,
        steals: 0,
        blocks: 0,
        TOs: 0,
        FGM: 0,
        FGA: 0,
        FTM: 0,
        FTA: 0
    }
    res.points = value.points * playerStats["pts"];
    res.rebounds = value.rebounds * playerStats["reb"];
    res.assists = value.assists * playerStats["ast"];
    res.steals = value.steals * playerStats["stl"];
    res.TOs = value.TOs * playerStats["turnover"];
    res.FGM = value.FGM * playerStats["fgm"];
    res.FGA = value.FGA * playerStats["fga"];
    res.FTA = value.FTA * playerStats["fta"];
    res.FTM = value.FTM * playerStats["ftm"];
    return res;
}

export default FantasyCalculation;