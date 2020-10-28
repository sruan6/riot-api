const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftSummonerByPuuid = (id) => {
  tft.Summoner.summonerByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getTftSummonerByPuuid;
