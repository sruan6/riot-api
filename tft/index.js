const region = require('../lib/utils/utilies');
const match = require('./matchV1');
const summoner = require('./summonerV1');
const league = require('./leagueV1');

const tftapi = function(key) {
    this.region = region(key.region);
    this.apikey = key.apikey;
    this.Summoner = new summoner(this.region, this.apikey);
    this.Match = new match(this.region, this.apikey);
    this.League = new league(this.region, this.apikey);
}

module.exports = tftapi;