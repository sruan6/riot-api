const axios = require('axios');

// LEAGUE EXP-V4
const LeagueEXP = function LeagueEXP(region, apikey) {
  this.entriesByQueueRank = async (queue, tier, division, page) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page}&api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = LeagueEXP;
