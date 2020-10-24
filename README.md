# riotgames-api

Hi this is just a wrapper for riot api. Everything was built using riot api routes to make life easier for you to make api calls to riot!

# Installation

Install npm package
<br>
`npm install riot-api --save`
<br>
Then get api key here [Riot!](https://developer.riotgames.com/)
<br>

<h1 align="center">region</h1>
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

<h1 align="center">Example</h1>

<h1 align="center">🎮<b>League of Legends</b>🎮</h1>

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

<h1 align="center">🎮<b>TeamFight Tactics</b>🎮</h1>

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

<h1 align="center">🎮<b>Legends of Runeterra</b>🎮</h1>

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
- [x] lol-champion-v3
  - [x] /lol/platform/v3/champion-rotations
- [x] lol-clash-v1
  - [x] /lol/clash/v1/players/by-summoner/{summonerId}
  - [x] /lol/clash/v1/teams/{teamId}
  - [x] /lol/clash/v1/tournaments
  - [x] /lol/clash/v1/tournaments/by-team/{teamId}
  - [x] /lol/clash/v1/tournaments/{tournamentId}
- [x] lol-league-exp-v4
  - [x] /lol/league-exp/v4/entries/{queue}/{tier}/{division}
- [x] lol-league-v4
  - [x] /lol/league/v4/challengerleagues/by-queue/{queue}
  - [x] /lol/league/v4/entries/by-summoner/{encryptedSummonerId}
  - [x] /lol/league/v4/entries/{queue}/{tier}/{division}
  - [x] /lol/league/v4/grandmasterleagues/by-queue/{queue}
  - [x] /lol/league/v4/leagues/{leagueId}
  - [x] /lol/league/v4/masterleagues/by-queue/{queue}
- [x] lol-status-v3
  - [x] /lol/status/v3/shard-data
- [x] lor-match-v1
  - [x] /lor/match/v1/matches/by-puuid/{puuid}/ids
  - [x] /lor/match/v1/matches/{matchId}
- [x] lor-ranked-v1
  - [x] /lor/ranked/v1/leaderboards
- [x] lol-match-v4
  - [x] /lol/match/v4/matches/{matchId}
  - [x] /lol/match/v4/matchlists/by-account/{encryptedAccountId}
  - [x] /lol/match/v4/timelines/by-match/{matchId}
  - [x] /lol/match/v4/matches/by-tournament-code/{tournamentCode}/ids
  - [x] /lol/match/v4/matches/{matchId}/by-tournament-code/{tournamentCode}
- [x] lol-spectator-v4
  - [x] /lol/spectator/v4/active-games/by-summoner/{encryptedSummonerId}
  - [x] /lol/spectator/v4/featured-games
- [x] lol-summoner-v4
  - [x] /lol/summoner/v4/summoners/by-account/{encryptedAccountId}
  - [x] /lol/summoner/v4/summoners/by-name/{summonerName}
  - [x] /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}
  - [x] /lol/summoner/v4/summoners/{encryptedSummonerId}
- [x] tft-league-v1
  - [x] /tft/league/v1/challenger
  - [x] /tft/league/v1/entries/by-summoner/{encryptedSummonerId}
  - [x] /tft/league/v1/entries/{tier}/{division}
  - [x] /tft/league/v1/grandmaster
  - [x] /tft/league/v1/leagues/{leagueId}
  - [x] /tft/league/v1/master
- [x] tft-match-v1
  - [x] /tft/match/v1/matches/by-puuid/{puuid}/ids
  - [x] /tft/match/v1/matches/{matchId}
- [x] tft-summoner-v1
  - [x] /tft/summoner/v1/summoners/by-account/{encryptedAccountId}
  - [x] /tft/summoner/v1/summoners/by-name/{summonerName}
  - [x] /tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}
  - [x] /tft/summoner/v1/summoners/{encryptedSummonerId}
- [x] lol-third-party-code-v4
  - [x] /lol/platform/v4/third-party-code/by-summoner/{encryptedSummonerId}
- [x] lol-tournament-stub-v4
  - [x] /lol/tournament-stub/v4/codes
  - [x] /lol/tournament-stub/v4/lobby-events/by-code/{tournamentCode}
  - [x] /lol/tournament-stub/v4/providers
  - [x] /lol/tournament-stub/v4/tournaments
- [ ] lol-tournament-v4
  - [ ] /lol/tournament/v4/codes
  - [ ] /lol/tournament/v4/codes/{tournamentCode}
  - [ ] /lol/tournament/v4/codes/{tournamentCode}
  - [ ] /lol/tournament/v4/lobby-events/by-code/{tournamentCode}
  - [ ] /lol/tournament/v4/providers
  - [ ] /lol/tournament/v4/tournaments
- [x] val-content-v1
  - [x] /val/content/v1/contents
- [x] val-match-v1 (early access key only :disappointed_relieved:)
  - [x] /val/match/v1/matches/{matchId}
  - [x] /val/match/v1/matchlists/by-puuid/{puuid}
  - [x] /val/match/v1/recent-matches/by-queue/{queue}

### Future updates

- [ ] ddragon for image
- [ ] league of legend oauth

### Thank You!

<p align="center">
<img width="460" height="300" src="https://media.giphy.com/media/XRB1uf2F9bGOA/giphy.gif">
</p>
