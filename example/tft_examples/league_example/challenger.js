const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftChallenger = () => {
  tft.League.challenger().then((response) => {
    console.log(response);
  });
};

module.exports = getTftChallenger;
