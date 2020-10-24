const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });
const accId = "Account Id";
const teamId = "Team Id";
const tournamentId = "Tournament Id";

const getPlayersByAccId = (id) => {
    lol.Clash.playersByAccId(id).then((response) => {
        console.log(response);
    });
};

const getTeamsByTeamId = (id) => {
    lol.Clash.teamsByTeamId(id).then((response) => {
        console.log(response);
    });
};

const getTournaments = () => {
    lol.Clash.tournaments().then((response) => {
        console.log(response);
    });
};

const getTournamentsByTeamId = (id) => {
    lol.Clash.tournamentsByTeamId(id).then((response) => {
        console.log(response);
    });
};

const getTournamentsByTournamentId = (id) => {
    lol.Clash.tournamentsByTournamentId(id).then((response) => {
        console.log(response);
    });
};

getPlayersByAccId(accId);
getTeamsByTeamId(teamId);
getTournaments();
getTournamentsByTeamId(teamId);
getTournamentsByTournamentId(tournamentId);