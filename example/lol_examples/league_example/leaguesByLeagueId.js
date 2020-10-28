const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getLeaguesByLeagueId = (id) => {
  lol.League.leaguesByLeagueId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getLeaguesByLeagueId;
