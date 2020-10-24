const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });
const puuid = 'puuid';
const accountId = 'account id';
const summonerName = 'summoner name';
const number = 40;

const getTftMatchesByPuuid = (id) => {
  tft.Match.matchesByPuuid(id).then((response) => {
    console.log(response);
  });
};

const getTftMatchesByAccId = (id) => {
  tft.Match.matchesByAccId(id).then((response) => {
    console.log(response);
  });
};

const getTftMatchesByName = (name, count) => {
  tft.Match.matchesByName(name, count).then((response) => {
    console.log(response);
  });
};

getTftMatchesByName(summonerName, number);
getTftMatchesByAccId(accountId);
getTftMatchesByPuuid(puuid);
