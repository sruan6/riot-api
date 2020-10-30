# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames=gg');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerName = 'Hide on Bush';
// Get League Of Legends Summoner Info By Name
async function getActiveGamesByName(name) {
  const response = await lol.Spectator.activeGamesByName(name);
  console.log(response);
}

getActiveGamesByName(summonerName);
```

<h6><b>More Example Inside...</b></h6>
