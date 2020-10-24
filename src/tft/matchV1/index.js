const axios = require('axios');

// TFT-MATCH-V1
const Match = function Match(region, apikey) {
  this.matchesByPuuid = async (Puuid, count) => {
    // default count is 20
    const amount = count || 20;
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/by-puuid/${Puuid}/ids?count=${amount}&api_key=${apikey}`,
    );
    return data;
  };
};



module.exports = Match;
