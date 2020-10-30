const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getMatchListsByAccountId = (
  AccId,
  Champion,
  Queue,
  Season,
  endTime,
  beginTime,
  endIndex,
  beginIndex,
) => {
  lol.Match.matchListsByAccountId(
    AccId,
    Champion,
    Queue,
    Season,
    endTime,
    beginTime,
    endIndex,
    beginIndex,
  ).then((response) => {
    console.log(response);
  });
};

module.exports = getMatchListsByAccountId;
