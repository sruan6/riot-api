const handleregion = require('../lib/utils/utilies');
const Account = require('./accountV1');

const Riotapi = function Riotapi({ region, apikey }) {
  if (!apikey || apikey === '' || apikey === 'YOUR API KEY') {
    // console.error('missing apikey');
    throw new Error('missing apikey');
  }
  this.region = handleregion(region);
  this.apikey = apikey;
  this.Account = new Account(this.region, this.apikey);
};

module.exports = Riotapi;
