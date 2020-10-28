const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftGrandmaster = () => {
  tft.League.grandmaster().then((response) => {
    console.log(response);
  });
};

module.exports = getTftGrandmaster;
