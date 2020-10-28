const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftSummonerById = (id) => {
    tft.Summoner.summonerById(id).then((response)=> {
        console.log(response)
    })
}

module.exports = getTftSummonerById;