const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashPlayersByName = (name) => {
  lol.Clash.playersByName(name).then((response) => {
    console.log(response);
  });
};

module.exports = getClashPlayersByName;
