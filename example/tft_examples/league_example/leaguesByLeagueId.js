const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftLeagueByLeagueId = (id) => {
  tft.League.leaguesByLeagueId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftLeagueByLeagueId;
