const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const spectatorActiveGamesById = (id) => {
  lol.Spectator.activeGamesById(id).then((response) => {
    console.log(response);
  });
};

module.exports = spectatorActiveGamesById;
