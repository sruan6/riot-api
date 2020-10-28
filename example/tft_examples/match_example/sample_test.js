const getTftMatchesByName = require('./matchesByAccId');
const getTftMatchesById = require('./matchesById');
const getTftMatchesByName = require('./matchesByName')
const getTftMatchesByPuuid = require('./matchesByPuuid')
const getTftMatchesByMatchId = require('./matchesByMatchId')

const summonerId = ' summoner id'
const puuid = 'puuid';
const accountId = 'account id';
const summonerName = 'summoner name';
const number = 40;
const matchId = 'match id' 

getTftMatchesByAccId(accountId);
getTftMatchesById(summonerId);
getTftMatchesByName(summonerName, number);
getTftMatchesByPuuid(puuid);
getTftMatchesByMatchId(matchId)
