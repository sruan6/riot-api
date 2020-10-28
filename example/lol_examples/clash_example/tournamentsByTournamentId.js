const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashTournamentsByTournamentId = (tournamentId) => {
  lol.Clash.tournamentsByTournamentId(tournamentId).then(
    (response) => {
      console.log(response);
    },
  );
};

module.exports = getClashTournamentsByTournamentId;
