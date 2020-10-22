const region = require('../lib/utils/utilies');
const Account = require('./accountV1');

const Riotapi = function RiotAPi(key) {
  this.region = region(key.region);
  this.apikey = key.apikey;
  this.Account = new Account(this.region, this.apikey);
};

module.exports = Riotapi;
