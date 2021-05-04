
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
        FTA: 0,
        total: 0,
    }
    res.points = (value.points * playerStats["pts"]).toFixed(2);
    res.rebounds = (value.rebounds * playerStats["reb"]).toFixed(2);
    res.assists = (value.assists * playerStats["ast"]).toFixed(2);
    res.steals = (value.steals * playerStats["stl"]).toFixed(2);
    res.blocks = (value.blocks * playerStats["blk"]).toFixed(2);
    res.TOs = (value.TOs * playerStats["turnover"]).toFixed(2);
    res.FGM = (value.FGM * playerStats["fgm"]).toFixed(2);
    res.FGA = (value.FGA * playerStats["fga"]).toFixed(2);
    res.FTA = (value.FTA * playerStats["fta"]).toFixed(2);
    res.FTM = (value.FTM * playerStats["ftm"]).toFixed(2);
    res.total = (+res.points + +res.rebounds + +res.assists + +res.steals + +res.blocks + +res.TOs + +res.FGA + +res.FGM + +res.FTA + +res.FTM).toFixed(2)
    return res;
}

export default FantasyCalculation;