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
