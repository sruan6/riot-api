const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const leagueExpEntriesByQueueRank = (queue, tier, division, page) => {
  lol.LeagueEXP.entriesByQueueRank(queue, tier, division, page).then(
    (response) => {
      console.log(response);
    },
  );
};

module.exports = leagueExpEntriesByQueueRank;
