const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftSummonerByName = (name) => {
    tft.Summoner.summonerByName(name).then((response)=> {
        console.log(response)
    })
}

module.exports = getTftSummonerByName;