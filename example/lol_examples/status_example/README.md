# **🎮League of Legends🎮**

```javascript
const { Lol } = require('riotgames-gg');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getStatus = () => {
  lol.Status.shardData().then((response) => {
    console.log(response);
  });
};

getStatus();
```
