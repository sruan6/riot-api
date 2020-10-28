const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashPlayersByAccId = (id) => {
  lol.Clash.playersByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getClashPlayersByAccId;
