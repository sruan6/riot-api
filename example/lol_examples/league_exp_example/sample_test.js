const leagueExpEntriesByQueueRank = require('./entriesByQueueRank');

const queue = 'RANKED_SOLO_5x5';
const tier = 'CHALLENGER';
const division = 'I';
const page = '1';

leagueExpEntriesByQueueRank(queue, tier, division, page);
