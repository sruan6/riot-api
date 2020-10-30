const handleregion = require('../lib/utils/utilies');
const Match = require('./matchV1');
const Summoner = require('./summonerV1');
const League = require('./leagueV1');

const Tftapi = function Tftapi({ region, apikey }) {
  if (!apikey || apikey === '' || apikey === 'YOUR API KEY') {
    // console.error('missing apikey');
    throw new Error('missing apikey');
  }
  this.region = handleregion(region);
  this.apikey = apikey;
  this.Summoner = new Summoner(this.region, this.apikey);
  this.Match = new Match(this.region, this.apikey);
  this.League = new League(this.region, this.apikey);
};

module.exports = Tftapi;
