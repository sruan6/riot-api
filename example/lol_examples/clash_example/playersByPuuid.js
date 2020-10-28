const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getClashPlayersBypuuid = (id) => {
  lol.Clash.playersByPuuid(id).then((response) => {
    console.log(response);
  });
};

module.exports = getClashPlayersBypuuid;
