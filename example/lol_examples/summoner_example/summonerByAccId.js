const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getSummonerByAccId = (id) => {
  lol.Summoner.summonerByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getSummonerByAccId;
