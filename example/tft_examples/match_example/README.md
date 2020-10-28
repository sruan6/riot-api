```javascript
const { Tft } = require('riotgames-gg');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftMatchesByName = (name, count) => {
  tft.Match.matchesByName(name, count).then((response) => {
    console.log(response);
  });
};

// default count will be 20 if undefined
getTftMatchesByName('giuttony', 40);
```

**More examples inside**
