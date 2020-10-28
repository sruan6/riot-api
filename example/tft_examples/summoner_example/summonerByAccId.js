const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftSummonerByAccId = (id) => {
    tft.Summoner.summonerByAccId(id).then((response)=> {
        console.log(response)
    })
}

module.exports = getTftSummonerByAccId;