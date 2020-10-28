const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getEntriesByQueueRank = (Queue, Tier, Division, Page) => {
  lol.League.entriesByQueueRank(Queue, Tier, Division, Page).then(
    (response) => {
      console.log(response);
    },
  );
};

module.exports = getEntriesByQueueRank;
