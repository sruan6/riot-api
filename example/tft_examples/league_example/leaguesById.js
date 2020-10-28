const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftLeagueById = (id) => {
  tft.League.leaguesById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftLeagueById;
