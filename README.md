# riotgames-gg

<a href="https://nodei.co/npm/riotgames-gg/"><img src="https://nodei.co/npm/riotgames-gg.png?downloads=true&downloadRank=true&stars=true"></a>
<img src="https://img.shields.io/npm/v/riotgames-gg?label=NPM">
<img src="https://img.shields.io/npm/l/riotgames-gg?label=License">
<img src="https://img.shields.io/npm/dt/riotgames-gg?label=Downloads">

Hi this is just a wrapper for riot api. Everything was built using riot api routes to make life easier for you to make api calls to riot!
This is new and if you experience something not working. Message me! Not Everything has sample demo yet. Still in working progress but the function works!

# Installation

`npm install riotgames-gg --save`
<br>
[API key here!](https://developer.riotgames.com/)

# Region

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

# Riot

```javascript
const { Riot } = require('riotgames-gg');

const riot = new Riot({ region: 'KR', apikey: 'YOUR API KEY' });

async function accountsByPuuid(puuid)(name) {
  const response = await riot.Account.accountsByPuuid(puuid);
  console.log(response);
}

getLolSummonerByName(summonerName);
```

###### List of Riot functions

- [riot.]
  - [Account.]
    - [accountsByPuuid(puuid)]
    - [accountsByRiotId(gameName,tagLine)]
    - [activeShards(game,puuid)]

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

###### List of League Of Legends functions

- [lol.](https://github.com/sruan6/riot-api/tree/main/src/lol)
  - [Champion.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_example)
    - [championRotations()](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_example/sample.js)
  - [ChampionMastery.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/champion_mastery_example)
    - [ChampionMasteryById(id)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/champion_mastery_example/sample.js)
  - [Clash.]
    - [playersById(summonerId)]
    - [playersByAccId(accountId)]
    - [playersByPuuid(puuid)]
    - [playersByName(summonerName)]
    - [teamsByTeamId(teamId)]
    - [tournaments()]
    - [tournamentsByTeam(teamId)]
    - [tournamentsByTournamentId(tournamentId)]
  - [LeagueExp.]
    - [entriesByQueueRank(queue,tier,division,page)]
  - [League.]
    - [challengerByQueue(queue)]
    - [entriesByAccId(accountId)]
    - [entriesByQueueRank(queue,tier,division,page)]
    - [grandmasterByQueue(queue)]
    - [leaguesByLeagueId(leagueId)]
    - [leaguesByName(summonerName)]
    - [masterByQueue(queue)]
  - [Match.]
    - [matchByMatchId(matchId)]
    - [matchListsByAccountId(accountId,champion,queue,season,endTime,beginTime,endIndex,beginIndex)]
    - [timelinesByMatchId(matchId)]
    - [matchByTournamentCode(tournamentCode)]
    - [matchByMatchIdByTournamentCode)matchId,tournamentCode]
  - [Spectator.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/spectator_example)
    - [activeGamesById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/spectator_example/sample.js)
    - [activeGamesByName(summonerName)]
    - [activeGamesByPuuid(puuid)]
    - [activeGamesByAccId(accountId)]
    - [featureGames()]
  - [Status.]
    - [shardData()]
  - [Summoner.](https://github.com/sruan6/riot-api/tree/main/example/lol_examples/summoner_example)
    - [summonerByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerByPuuid(puuid)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
    - [summonerById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/lol_examples/summoner_example/sample.js)
  - [ThirdPartyCode.]
    - [thirdPartyCodeById()]
  - [Tournament.]
    - [codes()]
    - [codesByTournamentCode()]
    - [updateCodesByTournamentCode(tournamentCode)]
    - [lobbyEventByTournamentCode(tournamentCode)]
    - [providers()]
    - [tournaments()]
  - [TournamentStub.]
    - [codes()]
    - [lobbyEventByTournamentCode()]
    - [providers()]
    - [tournaments()]

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

###### List of TeamFight Tactics functions

- [tft.](https://github.com/sruan6/riot-api/tree/main/example/tft_examples)
  - [League.](https://github.com/sruan6/riot-api/tree/main/example/tft_examples/league_example)
    - [challenger()](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/challenger.js)
    - [entriesById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/entreiesById.js)
    - [entriesByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/entriesByAccId.js)
    - [entriesByPuuid(puuid)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/entriesByPuuid.js)
    - [entriesByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/entriesByName.js)
    - [entriesByTierDivision(tier,division)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/entriesByTierDivision.js)
    - [grandmaster()](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/grandmaster.js)
    - [leaguesByLeagueId(leagueId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/leaguesByLeagueId.js)
    - [leaguesById(summonerId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/leaguesById.js)
    - [leaguesByAccId(accountId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/leaguesByAccId.js)
    - [leaguesByPuuid(puuid)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/leaguesByPuuid.js)
    - [leaguesByName(summonerName)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/leaguesByName.js)
    - [master()](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/league_example/master.js)
  - [Match.](https://github.com/sruan6/riot-api/tree/main/example/tft_examples/match_example)
    - [matchesByPuuid(puuid,count)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/match_example/matchesByPuuid.js)
    - [matchesByAccId(accountId,count)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/match_example/matchesByAccId.js)
    - [matchesById(summonerId,count)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/match_example/matchesById.js)
    - [matchesByName(summonerName,count)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/match_example/matchesByName.js)
    - [matchesByMatchId(matchId)](https://github.com/sruan6/riot-api/blob/main/example/tft_examples/match_example/matchesByMatchId.js)
  - [Summoner.]
    - [summonerByName(summonerName)]
    - [summonerByAccId(accountId)]
    - [summonerByPuuid(puuid)]
    - [summonerById(summonerId)]

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

###### List of Legends of Runeterra functions

- [lor.]
  - [Match.]
    - [matchesByPuuid(puuid)]
    - [matchesByMatchId(matchId)]
  - [Ranked.]
    - [leaderboards()]

# Valorant

```javascript
const { Val } = require('riotgames-gg');

const val = new Val({ region: 'NA', apikey: 'YOUR API KEY' });

async function getValContent() {
  const response = await val.Content.contents();
  console.log(response);
}

getLorRanked();
```

###### List of Valorant functions

- [val.]
  - [Content.]
    - [contents()]
  - [Match.]
    - [matchesByMatchId(matchId)]
    - [matchlistsByPuuid(puuid)]
    - [recentMatchesByQueue(queue)]

# Contributing

If you want to join and help out. Message me and I can add you to the team! Always willing to get more help to evolve and make it better!

# Issues

Report any bug or improvements! Willing to take suggesting too!
