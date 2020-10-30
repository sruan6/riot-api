const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const spectatorFeatureGames = () => {
  lol.Spectator.featureGames().then((response) => {
    console.log(response);
  });
};

module.exports = spectatorFeatureGames;
