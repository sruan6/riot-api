const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });
const summonerName = 'Summoner Name';
const accId = 'Account Id';
const puuid = 'puuid';
const summonerId = 'Summoner Id';

const getSummonerByName = (name) => {
  lol.Summoner.summonerByName(name).then((response) => {
    console.log(response);
  });
};

const getSummonerByAccId = (id) => {
  lol.Summoner.summonerByAccId(id).then((response) => {
    console.log(response);
  });
};

const getSummonerByPuuid = (id) => {
  lol.Summoner.summonerByPuuid(id).then((response) => {
    console.log(response);
  });
};

const getSummonerById = (id) => {
  lol.Summoner.summonerById(id).then((response) => {
    console.log(response);
  });
};

getSummonerByName(summonerName);
getSummonerByAccId(accId);
getSummonerByPuuid(puuid);
getSummonerById(summonerId);
