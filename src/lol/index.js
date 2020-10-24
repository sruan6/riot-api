const region = require('../lib/utils/utilies');
const Summoner = require('./summonerV4');
const Spectator = require('./spectatorV4');
const ChampionMastery = require('./champion_masteryV4');
const League = require('./leagueV4');
const LeagueEXP = require('./leagueEXPV4');
const Status = require('./statusV4');
const Champion = require('./championV3');
const Clash = require('./clashV1');
const Matchz = require('./matchV4');

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
  this.Status = new Status(this.region, this.apikey);
  this.Champion = new Champion(this.region, this.apikey);
  this.Clash = new Clash(this.region, this.apikey);
  this.Match = new Matchz(this.region, this.apikey);
};

module.exports = lolapi;
