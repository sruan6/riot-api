const axios = require('axios');

// LEAGUE EXP-V4

const LeagueEXP = function LeagueEXP(region, apikey) {
  this.entriesByQueueRank = async (Queue, Tier, Division, Page) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league-exp/v4/entries/${Queue}/${Tier}/${Division}?page=${Page}&api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = LeagueEXP;
