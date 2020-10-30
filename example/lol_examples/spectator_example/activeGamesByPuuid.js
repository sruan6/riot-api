const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const spectatorActiveGamesByPuuid = (id) => {
  lol.Spectator.activeGamesByPuuid(id).then((response) => [
    console.log(response),
  ]);
};

module.exports = spectatorActiveGamesByPuuid;
