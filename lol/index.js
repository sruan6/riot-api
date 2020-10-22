const region = require('../utils/utilies');
const summoner = require('./summonerV4');
const spectator = require('./spectatorV4');
const championMastery = require('./champion_masteryV4');

const lolapi = function(key) {
    this.region = region(key.region);
    this.apikey = key.apikey;
    this.Summoner = new summoner(this.region, this.apikey);
    this.Spectator = new spectator(this.region, this.apikey);
    this.ChampionMastery = new championMastery(this.region, this.apikey);
};

module.exports = lolapi;