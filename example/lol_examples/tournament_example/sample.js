const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const tournamentCode = "Tournament Code";

const getCodes = () => {
    lol.Tournament.codes().then((response) => {
        console.log(response);
    });
};

const getCodesByTournamentCode = (code) => {
    lol.Tournament.codesByTournamentCode(code).then((response) => {
        console.log(response);
    });
};

const getUpdateCodesByTournamentCode = (code) => {
    lol.Tournament.updateCodesByTournamentCode(code).then((response) => {
        console.log(response);
    });
};

const getLobbyEventByTournamentCode = (code) => {
    lol.Tournament.lobbyEventByTournamentCode(code).then((response) =>{
        console.log(response);
    });
};

const getProviders = () => {
    lol.Tournament.providers().then((response) => {
        console.log(response);
    });
};

const getTournaments = () => {
    lol.Tournament.tournaments().then((response) => {
        console.log(response);
    });
};

getCodes();
getCodesByTournamentCode(tournamentCode);
getUpdateCodesByTournamentCode(tournamentCode);
getLobbyEventByTournamentCode(tournamentCode);
getProviders();
getTournaments();