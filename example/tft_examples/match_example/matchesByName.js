const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesByName = (name, count) => {
  tft.Match.matchesByName(name, count).then((response) => {
    console.log(response);
  });
};

module.exports = getTftMatchesByName;