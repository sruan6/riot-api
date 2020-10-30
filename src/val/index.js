const handleregion = require('../lib/utils/utilies');
const Content = require('./contentV1');
const Match = require('./matchV1');

const Valapi = function Valapi({ region, apikey }) {
  if (!apikey || apikey === '' || apikey === 'YOUR API KEY') {
    // console.error('missing apikey');
    throw new Error('missing apikey');
  }
  this.region = handleregion(region);
  this.apikey = apikey;
  this.Content = new Content(this.region, this.apikey);
  this.Match = new Match();
};

module.exports = Valapi;
