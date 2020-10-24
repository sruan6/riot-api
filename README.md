# riotgames-api

Hi this is just a wrapper for riot api. Everything was built using riot api routes to make life easier for you to make api calls to riot!

# Installation

Install npm package
<br>
`npm install riot-api --save`
<br>
Then get api key here [Riot!](https://developer.riotgames.com/)

# Examples

# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames-api');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerName = 'Hide on Bush';
// Get League Of Legends Summoner Info By Name
async function getLolSummonerByName(name) {
  const response = await lol.Summoner.summonerByName(name);
  console.log(response);
}

getLolSummonerByName(summonerName);
```

- lol.
  - [Summoner.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/summoner_example)
    - [summonerByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    -
  - Specator.
  - ChampionMastery.

# **🎮TeamFight Tactics🎮**

```javascript
const { Tft } = require('riotgames-api');

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

# **🎮Legends of Runeterra🎮**

```javascript
const { Lor } = require('riotgames-api');

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

### List of api to finish

- [x] riot-account-v1
  - [x] /riot/account/v1/accounts/by-puuid/{puuid}
  - [x] /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}
  - [x] /riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}
- [x] lol-champion-mastery-v4
  - [x] /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}
  - [x] /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}/by-champion/{championId}
  - [x] /lol/champion-mastery/v4/scores/by-summoner/{encryptedSummonerId}
- [ ] lol-champion-v3
  - [ ] /lol/platform/v3/champion-rotations
- [ ] lol-clash-v1
  - [ ] documentation
- [x] lol-league-exp-v4
  - [ ] documentation
- [x] lol-league-v4
  - [ ] documentation
- [x] lol-status-v3
  - [ ] documentation
- [x] lor-match-v1
  - [ ] documentation
- [x] lor-ranked-v1
  - [ ] documentation
- [ ] lol-match-v4
  - [ ] documentation
- [x] lol-spectator-v4
  - [ ] documentation
- [x] lol-summoner-v4
  - [ ] documentation
- [x] tft-league-v1
  - [ ] documentation
- [x] tft-match-v1
  - [ ] documentation
- [x] tft-summoner-v1
  - [ ] documentation
- [ ] lol-third-party-code-v4
  - [ ] documentation
- [ ] lol-tournament-stub-v4
  - [ ] documentation
- [ ] lol-tournament-v4
  - [ ] documentation
- [x] val-content-v1
  - [ ] documentation
- [ ] val-match-v1 (No access yet :disappointed_relieved:)
  - [ ] documentation

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

### Future updates

- [ ] ddragon for image
- [ ] league of legend oauth

### Thank You!

![myImage](https://media.giphy.com/media/XRB1uf2F9bGOA/giphy.gif)
