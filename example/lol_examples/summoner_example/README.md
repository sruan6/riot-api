# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames=gg');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });
const summonerName = 'Summoner Name';
const accId = 'Account Id';
const puuid = 'puuid';
const summonerId = 'Summoner Id';

async function getSummonerByName(name) {
  const response = await lol.Summoner.summonerByName(name);
  console.log(response);
}

async function getSummonerByAccId(id) {
  const response = await lol.Summoner.summonerByAccId(id);
  console.log(response);
}

async function getSummonerByPuuid(id) {
  const response = await lol.Summoner.summonerByPuuid(id);
  console.log(response);
}

async function getSummonerById(id) {
  const response = await lol.Summoner.summonerById(id);
  console.log(response);
}

getSummonerByName(summonerName);
getSummonerByAccId(accId);
getSummonerByPuuid(puuid);
getSummonerById(summonerId);
```
