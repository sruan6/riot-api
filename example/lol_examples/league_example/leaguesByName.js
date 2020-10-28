const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getLeaguesByName = (name) => {
  lol.League.leaguesByName(name).then((response) => {
    console.log(response);
  });
};

module.exports = getLeaguesByName;
