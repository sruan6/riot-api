# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames-gg');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getChampionRotations = () => {
  lol.Champion.championRotations().then((response) => {
    console.log(response);
  });
};

getChampionRotations();
```
