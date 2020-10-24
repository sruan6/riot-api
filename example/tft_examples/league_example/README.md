```javascript
const { Tft } = require('riotgames-api');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftChallenger = () => {
  tft.League.challenger().then((response) => {
    console.log(response);
  });
};

getTftChallenger();
```

**More examples inside**
