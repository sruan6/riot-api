const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftEntriesByAccId = (id) => {
  tft.League.entriesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftEntriesByAccId;
