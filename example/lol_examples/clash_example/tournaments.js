const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashTournaments = () => {
  lol.Clash.tournaments().then((response) => {
    console.log(response);
  });
};

module.exports = getClashTournaments;
