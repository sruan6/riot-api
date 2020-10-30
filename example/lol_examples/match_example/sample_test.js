const getMatchByMatchId = require('./matchByMatchId');
const getMatchListsByAccountId = require('./matchListsByAccountId');
const getTimelinesByMatchId = require('./timelinesByMatchId');
const getMatchByTournamentCode = require('./matchByTournamentCode');
const getMatchByMatchIdByTournamentCode = require('./matchByMatchIdByTournamentCode');

const matchId = 'Match Id';
const accId = 'Acc Id';
const champion = 'champion id';
const tournamentCode = 'Tournament Code';

getMatchByMatchId(matchId);
getMatchListsByAccountId(accId, champion);
getTimelinesByMatchId(matchId);
getMatchByTournamentCode(tournamentCode);
getMatchByMatchIdByTournamentCode(matchId, tournamentCode);
