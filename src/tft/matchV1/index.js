const axios = require('axios');
const Summoner = require('../summonerV1');

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
  this.matchesByAccId = async (AccId, count) => {
    const amount = count || 20;
    const summoner = await new Summoner(region, apikey);
    const { puuid } = await summoner.summonerByAccId(AccId);
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${amount}&api_key=${apikey}`,
    );
    return data;
  };
  this.matchesById = async (id, count) => {
    const amount = count || 20;
    const summoner = await new Summoner(region, apikey);
    const { puuid } = await summoner.summonerById(id);
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${amount}&api_key=${apikey}`,
    );
    return data;
  };
  this.matchesByName = async (SN, count) => {
    const amount = count || 20;
    const summoner = await new Summoner(region, apikey);
    const { puuid } = await summoner.summonerByName(SN);
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/by-puuid/${puuid}/ids?count=${amount}&api_key=${apikey}`,
    );
    return data;
  };
  this.matchesByMatchId = async (MatchId) => {
    const { data } = await axios.get(
      `https://${region[1]}/tft/match/v1/matches/${MatchId}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Match;
