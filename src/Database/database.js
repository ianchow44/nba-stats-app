import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
    fantasyPoints: "name, Points, Assists, Rebounds, Steals, Blocks, TOs, FGM, FGA, FTM, FTA, TPM, TPA"
});

export default db;

//, Points, Assists, Rebounds, Steals, Blocks, TOs, FGM, FGA, FTM, FTA, TPM, TPA
//Points: 0, Assists: 0, Rebounds: 0, Steals: 0, Blocks: 0, TOs: 0, FGM: 0, FGA: 0, FTM: 0, FTA: 0, T: 0, TPA: 0