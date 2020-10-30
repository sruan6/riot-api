const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const spectatorActiveGamesByAccId = (id) => {
  lol.Spectator.activeGamesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = spectatorActiveGamesByAccId;
