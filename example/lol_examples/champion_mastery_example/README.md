# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riot-api');

const lol = new Lol({ region: 'KR', apikey: 'YOUR API KEY' });
const summonerName = 'Hide on Bush';

// Get League Of Legends Summoner Info By Name
function getLolSummonerByName(name) {
  lol.Summoner.summonerByName(name).then((response) => {
    console.log(response);
  });
}

// Async
async function getAsyncLolSummonerByName(name) {
  const response = await lol.Summoner.summonerByName(name);
  console.log(response);
}

getLolSummonerByName(summonerName);
getAsyncLolSummonerByName(name);
```
