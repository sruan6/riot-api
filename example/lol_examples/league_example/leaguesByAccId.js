const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getLeaguesByAccId = (id) => {
  lol.League.leaguesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getLeaguesByAccId;
