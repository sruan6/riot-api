const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getTimelinesByMatchId = (MatchId) => {
  lol.Match.timelinesByMatchId(MatchId).then((response) => {
    console.log(response);
  });
};

module.exports = getTimelinesByMatchId;
