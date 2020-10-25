# riotgames-gg

<img src="https://nodei.co/npm/riotgames-gg.png?downloads=true&downloadRank=true&stars=true">
<a href="https://nodei.co/npm/riotgames-gg/"><img src="https://nodei.co/npm/riotgames-gg.png?downloads=true&downloadRank=true&stars=true"></a>
[![NPM](https://nodei.co/npm/riotgames-gg.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/riotgames-gg/)
<img src="https://img.shields.io/npm/v/riotgames-gg?label=NPM">
<img src="https://img.shields.io/npm/l/riotgames-gg?label=License">
<img src="https://img.shields.io/npm/dt/riotgames-gg?label=Downloads">

Hi this is just a wrapper for riot api. Everything was built using riot api routes to make life easier for you to make api calls to riot!

# Installation

`npm install riotgames-gg --save`
<br>
[APIKEY!](https://developer.riotgames.com/)
<br>

# Region

<br>

| PLATFORM |     PLATFORM-HOST      |  REGION  |        REGION-HOST         |
| :------: | :--------------------: | :------: | :------------------------: |
|    BR    | br1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   EUN    | eun1.api.riotgames.com |  EUROPE  |  europe.api.riotgames.com  |
|   EUW    | euw1.api.riotgames.com |  EUROPE  |  europe.api.riotgames.com  |
|    JP    | jp1.api.riotgames.com  |   ASIA   |   asia.api.riotgames.com   |
|    KR    |  kr.api.riotgames.com  |   ASIA   |   asia.api.riotgames.com   |
|   LAN    | la1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   LAS    | la2.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|    NA    | na1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|   OCE    | oc1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
|    TR    | tr1.api.riotgames.com  |  EUROPE  |  europe.api.riotgames.com  |
|    RU    |  ru.api.riotgames.com  |  EUROPE  |  europe.api.riotgames.com  |

# Example

# League of Legends

```javascript
const { Lol } = require('riotgames-gg');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerName = 'Hide on Bush';
// Get League Of Legends Summoner Info By Name
async function getLolSummonerByName(name) {
  const response = await lol.Summoner.summonerByName(name);
  console.log(response);
}

getLolSummonerByName(summonerName);
```

<h6>List of League Of Legends functions</h6>

- [lol.](https://github.com/sruan6/riot-api/tree/main/src/lol)
  - [Champion.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_example)
    - [championRotations()](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_example/sample.js)
  - [Summoner.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/summoner_example)
    - [summonerByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByPuuid(puuid)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
  - [Specator.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/spectator_example)
  - [ChampionMastery.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_mastery_example)
    - [ChampionMasteryById(id)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_mastery_example/sample.js)

# TeamFight Tactics

```javascript
const { Tft } = require('riotgames-gg');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });
const summonerName = 'Giuttony';
// Get League Of Legends Summoner Info By Name
async function getTftSummonerByName(name) {
  const response = await tft.Summoner.summonerByName(name);
  console.log(response);
}

getTftSummonerByName(summonerName);
```

- tft.
  - Summoner.
  - Match.
  - League.

# Legends of Runeterra

```javascript
const { Lor } = require('riotgames-gg');

const lor = new lor({ region: 'NA', apikey: 'YOUR API KEY' });
// Get League Of Legends Summoner Info By Name
async function getLorRanked() {
  const response = await lor.Ranked.leaderboards();
  console.log(response);
}

getLorRanked();
```

- lor.
  - Ranked.
  - Match.

# Contributing

If you want to join and help out. Message me and I can add you to the team! Always willing to get more help to evolve and make it better!

# Issues

Report any bug or improvements! Willing to take suggesting too!
