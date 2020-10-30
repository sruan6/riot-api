const spectatorActiveGamesById = require('./activeGamesById');
const spectatorActiveGamesByName = require('./activeGamesByName');
const spectatorActiveGamesByPuuid = require('./activeGamesByPuuid');
const spectatorActiveGamesByAccId = require('./activeGamesByAccId');
const spectatorFeatureGames = require('./featureGames');

const summonerId = 'Summoner Id';
const summonerName = 'Summoner Name';
const puuid = 'puuid';
const accountId = 'Account Id';

spectatorActiveGamesById(summonerId);
spectatorActiveGamesByName(summonerName);
spectatorActiveGamesByPuuid(puuid);
spectatorActiveGamesByAccId(accountId);
spectatorFeatureGames();
