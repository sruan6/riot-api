const getChampionMasteryById = require('./championMasteryById');
const getChampionMasteryBySidCid = require('./championMasteryBySidCid');
const getScoresById = require('./scoresById');

const summonerId = 'Summoner Id';
const championId = 'Champion Id';

getChampionMasteryById(summonerId);
getChampionMasteryBySidCid(summonerId, championId);
getScoresById(summonerId);
