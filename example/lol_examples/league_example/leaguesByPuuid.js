const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getLeaguesByPuuid = (id) => {
  lol.League.leaguesByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getLeaguesByPuuid;
