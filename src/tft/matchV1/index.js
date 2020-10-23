const axios = require('axios');

// TFT-MATCH-V1
const Match = function Match(region, apikey) {
  this.matchesByPuuid = async (Puuid, count) => {
    // default count is 20
    const amount = count || 20;
    // The AMERICAS routing value serves NA, BR, LAN, LAS, and OCE. The ASIA routing value serves KR and JP. The EUROPE routing value serves EUNE, EUW, TR, and RU.
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/by-puuid/${Puuid}/ids?count=${amount}&api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Match;
