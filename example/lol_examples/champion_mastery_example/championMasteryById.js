const { Lol } = require('../../..');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerId = 'summoner id';

const getChampionMasteryById = (id) => {
  lol.championMasteryById(id).then((response) => {
    console.log(response);
  });
};

// Async
const getAsyncChampionMasteryById = async (id) => {
  const response = await lol.ChampionMastery.championMasteryById(id);
  console.log(response);
};

getChampionMasteryById(summonerId);
getAsyncChampionMasteryById(summonerId);
