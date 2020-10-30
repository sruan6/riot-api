const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getSummonerByName = (name) => {
  lol.Summoner.summonerByName(name).then((response) => {
    console.log(response);
  });
};

module.exports = getSummonerByName;
