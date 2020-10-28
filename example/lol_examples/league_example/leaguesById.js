const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getLeaguesById = (id) => {
  lol.League.leaguesById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getLeaguesById;
