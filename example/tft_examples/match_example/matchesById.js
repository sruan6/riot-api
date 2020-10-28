const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesById = (id, count) => {
  tft.Match.matchesByName(id, count).then((response) => {
    console.log(response);
  });
};

module.exports = getTftMatchesById;
