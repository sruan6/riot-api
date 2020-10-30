const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getStatus = () => {
  lol.Status.shardData().then((response) => {
    console.log(response);
  });
};

module.exports = getStatus;
