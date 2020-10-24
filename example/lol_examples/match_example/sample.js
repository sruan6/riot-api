const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'RGAPI-b22af103-1609-4946-ae16-ed7ad97977d4' });
const matchId = "Match Id";
const accId = "Acc Id";
const champion = "champion id";
const tournamentCode = "Tournament Code";


const getMatchByMatchId = (MatchId) => {
    lol.Match.matchByMatchId(MatchId).then((response) => {
        console.log(response);
    });
};

const getMatchListsByAccountId = (AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex) => {
    lol.Match.matchListsByAccountId(AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex).then((response) => {
        console.log(response);
    });
};

const getTimelinesByMatchId = (MatchId) => {
    lol.Match.timelinesByMatchId(MatchId).then((response) => {
        console.log(response);
    });
};

const getMatchByTournamentCode = (TournamentCode) => {
    lol.Match.matchByTournamentCode(TournamentCode).then((response) => {
        console.log(response);
    })
};

const getMatchByMatchIdByTournamentCode = (MatchId, TournamentCode) => {
    lol.Match.matchByMatchIdByTournamentCode(MatchId, TournamentCode).then((response) => {
        console.log(response);
    });
};

getMatchByMatchId(matchId);
getMatchListsByAccountId(accId, champion);
getTimelinesByMatchId(matchId);
getMatchByTournamentCode(tournamentCode);
getMatchByMatchIdByTournamentCode(matchId, tournamentCode)