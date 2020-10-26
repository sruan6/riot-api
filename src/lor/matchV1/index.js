const axios = require('axios');

const Match = function Match(region, apikey) {
  this.matchesByPuuid = async (Puuid) => {
    const { data } = await axios.get(
      `https://${region[1]}/lor/match/v1/matches/by-puuid/${Puuid}/ids?api_key=${apikey}`,
    );
    return data;
  };
  this.matchesByMatchId = async (matchId) => {
    const { data } = await axios.get(
      `https://${region[1]}/lor/match/v1/matches/${matchId}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Match;
