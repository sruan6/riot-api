const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMaster = () => {
  tft.League.master().then((response) => {
    console.log(response);
  });
};

module.exports = getTftMaster;