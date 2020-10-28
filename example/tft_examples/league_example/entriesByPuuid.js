const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftEntriesByPuuid = (id) => {
  tft.League.entriesByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftEntriesByPuuid;