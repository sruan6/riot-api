const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftEntriesByName = (name) => {
  tft.League.leaguesByName(name).then((response) => {
    console.log(response);
  });
};

module.exports = getTftEntriesByName;