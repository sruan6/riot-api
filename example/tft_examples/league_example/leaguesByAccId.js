const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftLeagueByAccId = (id) => {
  tft.League.leaguesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftLeagueByAccId;