const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashTeamsByTeamId = (teamId) => {
  lol.Clash.teamsByTeamId(teamId).then((response) => {
    console.log(response);
  });
};

module.exports = getClashTeamsByTeamId;
