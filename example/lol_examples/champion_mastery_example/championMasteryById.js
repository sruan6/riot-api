const { Lol } = require('../../..');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });

const getChampionMasteryById = (id) => {
  lol.championMasteryById(id).then((response) => {
    console.log(response);
  });
};

module.exports = getChampionMasteryById;
