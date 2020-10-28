const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashPlayersById = (id) => {
  lol.Clash.playersById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getClashPlayersById;
