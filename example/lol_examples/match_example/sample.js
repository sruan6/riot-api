const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'RGAPI-b22af103-1609-4946-ae16-ed7ad97977d4' });

console.log(lol.Match);

const getMatchByMatchId = (MatchId) => {
    lol.Match.matchByMatchId(MatchId).then((response) => {
        console.log(response);
    });
};

const getMatchListsByAccountId = (AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex) => {
    lol.Match.matchListsByAccountId(AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex).then((response) => {
        console.log(response);
    });
};

getMatchByMatchId("3619280699");
// getMatchListsByAccountId()