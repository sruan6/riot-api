const { Lol } = require('../../..');

const lol = new Lol({region: 'NA', apikey: 'YOUR API KEY'});
const queue = "RANKED_SOLO_5x5";
const tier = "CHALLENGER";
const division = "I";
const page = "1";

const getEntriesByQueueRank = (queue, tier, division, page = 1) => {
    lol.LeagueEXP.entriesByQueueRank(queue,tier, division, page).then((response) => {
        console.log(response);
    });
}

getEntriesByQueueRank(queue, tier, division, page);