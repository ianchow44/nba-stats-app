
//map is object
function FantasyCalculation(value, playerStats){
    let res = {
        Points: 0,
        Assists: 0,
        Rebounds: 0,
        Steals: 0,
        Blocks: 0,
        TOs: 0,
        FGM: 0,
        FGA: 0,
        FTM: 0,
        FTA: 0,
        Total: 0,
    }
    res.Points = (value.points * playerStats["pts"]).toFixed(2);
    res.Rebounds = (value.rebounds * playerStats["reb"]).toFixed(2);
    res.Assists = (value.assists * playerStats["ast"]).toFixed(2);
    res.Steals = (value.steals * playerStats["stl"]).toFixed(2);
    res.Blocks = (value.blocks * playerStats["blk"]).toFixed(2);
    res.TOs = (value.TOs * playerStats["turnover"]).toFixed(2);
    res.FGM = (value.FGM * playerStats["fgm"]).toFixed(2);
    res.FGA = (value.FGA * playerStats["fga"]).toFixed(2);
    res.FTA = (value.FTA * playerStats["fta"]).toFixed(2);
    res.FTM = (value.FTM * playerStats["ftm"]).toFixed(2);
    res.Total = (+res.Points + +res.Rebounds + +res.Assists + +res.Steals + +res.Blocks + +res.TOs + +res.FGA + +res.FGM + +res.FTA + +res.FTM).toFixed(2)
    return res;
}

export default FantasyCalculation;