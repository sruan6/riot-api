const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftEntriesByRank = (tier, division) => {
  tft.League.entriesByTierDivision(tier, division).then(
    (response) => {
      console.log(response);
    },
  );
};

module.exports = getTftEntriesByRank;
