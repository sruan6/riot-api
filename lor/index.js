const region = require('../lib/utils/utilies');
const Rank = require('./rankedV1');
const Match = require('./matchV1');

const LorApi = function LorApi(key) {
  this.region = region(key.region);
  this.apikey = key.apikey;
  this.Ranked = new Rank(this.region, this.apikey);
  this.Match = new Match(this.region, this.apikey);
};

module.exports = LorApi;
