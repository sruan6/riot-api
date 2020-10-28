const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getGrandmasterByQueue = (Queue) => {
  lol.League.grandmasterByQueue(Queue).then((response) => {
    console.log(response);
  });
};

module.exports = getGrandmasterByQueue;
