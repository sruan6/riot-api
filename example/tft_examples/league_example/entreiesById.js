const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftEntriesById = (id) => {
  tft.League.entriesById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftEntriesById;
