const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesByAccId = (id) => {
  tft.Match.matchesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftMatchesByAccId;
