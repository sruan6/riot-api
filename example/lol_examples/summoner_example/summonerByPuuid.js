const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getSummonerByPuuid = (id) => {
  lol.Summoner.summonerByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getSummonerByPuuid;
