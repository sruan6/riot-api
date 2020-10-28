const getTftSummonerByAccId = require('./summonerByAccId');
const getTftSummonerById = require('./summonerById');
const getTftSummonerByName = require('./summonerByName');
const getTftSummonerByPuuid = require('./summonerByPuuid');

const accountId = 'account id';
const summonerId = 'summoner id';
const summonerName = 'summoner name';
const puuid = 'puuid';

getTftSummonerByAccId(accountId);
getTftSummonerById(summonerId);
getTftSummonerByName(summonerName);
getTftSummonerByPuuid(puuid);
