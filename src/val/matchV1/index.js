const axios = require('axios');

const Match = function Match(region, apikey) {
  this.matchesByMatchId = async (matchId) => {
    const { data } = await axios.get(
      `https://${region[0]}/val/match/v1/matches/${matchId}?api_key=${apikey}`,
    );
    return data;
  };
  this.matchlistsByPuuid = async (puuid) => {
    const { data } = await axios.get(
      `https//${region[0]}/val/match/v1/matchlists/by-puuid/${puuid}?api_key=${apikey}`,
    );
    return data;
  };
  this.recentMatchesByQueue = async (queue) => {
    const { data } = await axios.get(
      `https://${region[0]}/val/match/v1/recent-matches/by-queue/${queue}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Match;
