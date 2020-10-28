const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesByPuuid = (id) => {
  tft.Match.matchesByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftMatchesByPuuid;