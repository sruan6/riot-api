const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getScoresById = (id) => {
  lol.ChampionMastery.scoresById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getScoresById;
