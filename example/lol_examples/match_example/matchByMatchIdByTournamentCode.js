const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getMatchByMatchIdByTournamentCode = (
  MatchId,
  TournamentCode,
) => {
  lol.Match.matchByMatchIdByTournamentCode(
    MatchId,
    TournamentCode,
  ).then((response) => {
    console.log(response);
  });
};

module.exports = getMatchByMatchIdByTournamentCode;
