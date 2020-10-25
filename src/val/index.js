const region = require('../lib/utils/utilies');
const Content = require('./contentV1');
const Match = require('./matchV1');

const Valapi = function Valapi(key) {
  if (!key.apikey || '' || 'YOUR API KEY') {
    // console.error('missing apikey');
    throw new Error('missing apikey');
  }
  this.region = region(key.region);
  this.apikey = key.apikey;
  this.Content = new Content(this.region, this.apikey);
  this.Match = new Match();
};

module.exports = Valapi;
