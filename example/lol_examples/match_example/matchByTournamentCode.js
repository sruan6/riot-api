const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getMatchByTournamentCode = (TournamentCode) => {
  lol.Match.matchByTournamentCode(TournamentCode).then((response) => {
    console.log(response);
  });
};

module.exports = getMatchByTournamentCode;
