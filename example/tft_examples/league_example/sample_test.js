const getTftChallenger = require('./challenger');
const getTftEntriesById = require('./entreiesById')
const getTftEntriesByAccId = require('./entriesByAccId')
const getTftEntriesByPuuid = require('./entriesByPuuid')
const getTftEntriesByName = require('./entriesByName')
const getTftEntriesByRank = require('./entriesByTierDivision')
const getTftGrandmaster = require('./grandmaster')
const getTftLeagueByLeagueId = require('./leaguesByLeagueId')
const getTftLeagueById = require('./leaguesById')
const getTftLeagueByAccId = require('./leaguesByAccId')
const getTftLeagueByPuuid = require('./leaguesByPuuid')
const getTftLeagueByName = require('./leaguesByName')
const getTftMaster = require('./master')

// Add Account data 

const summonerId = '';
const accountId = '';
const puuid = '';
const summonerName = '';
const Tier = '';
const Division = '';
const leagueId = '';

// Go to file to add api eky

getTftChallenger();
getTftEntriesById(summonerId);
getTftEntriesByAccId(accountId);
getTftEntriesByPuuid(puuid);
getTftEntriesByName(summonerName);
getTftEntriesByRank(Tier, Division);
getTftGrandmaster();
getTftLeagueByLeagueId(leagueId);
getTftLeagueById(summonerId);
getTftLeagueByAccId(accountId);
getTftLeagueByPuuid(puuid);
getTftLeagueByName(summonerName);
getTftMaster();
