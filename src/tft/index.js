const region = require('../lib/utils/utilies');
const Match = require('./matchV1');
const Summoner = require('./summonerV1');
const League = require('./leagueV1');

const Tftapi = function Tftapi(key) {
  this.region = region(key.region);
  this.apikey = key.apikey;
  this.Summoner = new Summoner(this.region, this.apikey);
  this.Match = new Match(this.region, this.apikey);
  this.League = new League(this.region, this.apikey);
};

module.exports = Tftapi;
