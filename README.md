# riot-api

# How to get started

Isn't it a pain to use the riot api documation. Typing all the http calls and understanding the whole documentation :confused:.
Well riot-api is very easy to use. Just `npm install riot-api --save` and then you can start using the prewritten functionaility!

Get the api key from [Riot!](https://developer.riotgames.com/)

### List of api to finish

- [x] riot-account-v1
- [x] lol-champion-mastery-v4
- [ ] lol-champion-v3
- [ ] lol-clash-v1
- [ ] lol-league-exp-v4
- [ ] lol-league-v4
- [ ] lol-status-v3
- [x] lor-match-v1
- [x] lor-ranked-v1
- [ ] lol-match-v4
- [x] lol-spectator-v4
- [x] lol-summoner-v4
- [x] tft-league-v1
- [x] tft-match-v1
- [x] tft-summoner-v1
- [ ] lol-third-party-code-v4
- [ ] lol-tournament-stub-v4
- [ ] lol-tournament-v4
- [x] val-content-v1
- [ ] val-match-v1 (No access yet :disappointed_relieved:)

# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riot-api');

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
  - Summoner.
    - summonerByName(summonerName)
  - Specator.
  - ChampionMastery.

# **🎮TeamFight Tactics🎮**

```javascript
const { Tft } = require('riot-api');

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
const { Lor } = require('riot-api');

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
