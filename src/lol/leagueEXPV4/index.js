const axios = require('axios');

// LEAGUE EXP-V4
const LeagueEXP = function LeagueEXP(region, apikey) {
  this.entriesByQueueRank = async (queue, tier, division, page) => {
    const currentQueue = queue || 'RANKED_SOLO_5x5';
    const currentTier = tier || 'CHALLENGER';
    const currentDivision = division || 'I';
    const currentPage = page || 1;
    const { data } = await axios.get(
      `https://${region[0]}/lol/league-exp/v4/entries/${currentQueue}/${currentTier}/${currentDivision}?page=${currentPage}&api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = LeagueEXP;
