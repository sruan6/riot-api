const handleregion = require('../lib/utils/utilies');
const Rank = require('./rankedV1');
const Match = require('./matchV1');

const LorApi = function LorApi({ region, apikey }) {
  if (!apikey || apikey === '' || apikey === 'YOUR API KEY') {
    // console.error('missing apikey');
    throw new Error('missing apikey');
  }
  this.region = handleregion(region);
  this.apikey = apikey;
  this.Ranked = new Rank(this.region, this.apikey);
  this.Match = new Match(this.region, this.apikey);
};

module.exports = LorApi;
