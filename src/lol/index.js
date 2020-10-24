const region = require('../lib/utils/utilies');
const Summoner = require('./summonerV4');
const Spectator = require('./spectatorV4');
const ChampionMastery = require('./champion_masteryV4');
const League = require('./leagueV4');
const LeagueEXP = require('./leagueEXPV4')

const lolapi = function lolapi(key) {
  this.region = region(key.region);
  this.apikey = key.apikey;
  this.Summoner = new Summoner(this.region, this.apikey);
  this.Spectator = new Spectator(this.region, this.apikey);
  this.ChampionMastery = new ChampionMastery(
    this.region,
    this.apikey,
  );
  this.League = new League(this.region, this.apikey);
  this.LeagueEXP = new LeagueEXP(this.region, this.apikey);
};

module.exports = lolapi;
