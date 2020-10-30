const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getSummonerById = (id) => {
  lol.Summoner.summonerById(id).then((response) => {
    console.log(response);
  });
};

const summonerName = 'Summoner Name';
const accId = 'Account Id';
const puuid = 'puuid';
const summonerId = 'Summoner Id';

getSummonerByName(summonerName);
getSummonerByAccId(accId);
getSummonerByPuuid(puuid);
getSummonerById(summonerId);
