const region = require('../utils/utilies');
const account = require('./accountV1');

const riotapi = function(key) {
    this.region = region(key.region);
    this.apikey = key.apikey;
    this.Account = new account(this.region, this.apikey)
}

module.exports = riotapi;