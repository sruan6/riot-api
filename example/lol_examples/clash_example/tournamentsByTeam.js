const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashTournamentsByTeam = (teamId) => {
  lol.Clash.tournamentsByTeam(teamId).then((response) => {
    console.log(response);
  });
};

module.exports = getClashTournamentsByTeam;
