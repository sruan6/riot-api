const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getMatchByMatchId = (MatchId) => {
  lol.Match.matchByMatchId(MatchId).then((response) => {
    console.log(response);
  });
};

module.exports = getMatchByMatchId;
