const getClashPlayersByAccId = require('./playersByAccId');
const getClashPlayersById = require('./playersById');
const getClashPlayersByName = require('./playersByName');
const getClashPlayersByPuuid = require('./playersByPuuid');
const getClashTeamsByTeamId = require('./teamsByTeamId');
const getClashTournaments = require('./tournaments');
const getClashTournamentsByTeam = require('./tournamentsByTeam');
const getClashTournamentsByTournamentId = require('./tournamentsByTournamentId');

const accId = 'Account Id';
const summonerId = 'Summoner Id';
const summonerName = 'Summoner Name';
const puuid = 'puuid';
const teamId = 'Team Id';
const tournamentId = 'Tournament Id';

getClashPlayersByAccId(accId);
getClashPlayersById(summonerId);
getClashPlayersByName(summonerName);
getClashPlayersByPuuid(puuid);
getClashTeamsByTeamId(teamId);
getClashTournaments();
getClashTournamentsByTeam(teamId);
getClashTournamentsByTournamentId(tournamentId);
