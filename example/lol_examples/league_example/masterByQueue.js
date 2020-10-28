const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getMasterByQueue = (id) => {
  lol.League.masterByQueue(id).then((response) => {
    console.log(response);
  });
};

module.exports = getMasterByQueue;
