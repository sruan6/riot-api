const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftLeagueByPuuid = (id) => {
  tft.League.leaguesByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftLeagueByPuuid;
