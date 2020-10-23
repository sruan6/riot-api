const { Lol } = require('../../..');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerId = 'summoner id';

// Get League Of Legends Summoner Info By Name

const getLolSummonerByName = (id) => {
  lol.ChampionMastery.ChampionMasteryById(id).then((response) => {
    console.log(response);
  });
};

// Async
const getAsyncLolSummonerByName = async (id) => {
  const response = await lol.ChampionMastery.championMasteryById(id);
  console.log(response);
};

getLolSummonerByName(summonerId);
getAsyncLolSummonerByName(summonerId);
