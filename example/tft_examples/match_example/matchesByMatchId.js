const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesByMatchId = (matchId) => {
  tft.Match.matchesByMatchId(matchId).then((response) => {
    console.log(response);
  });
};

module.exports = getTftMatchesByMatchId;
