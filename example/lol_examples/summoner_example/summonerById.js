const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getSummonerById = (id) => {
  lol.Summoner.summonerById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getSummonerById;
