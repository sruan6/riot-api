const axios = require('axios');

// LEAGUE-V4
const League = function League(region, apikey) {
  this.challengerByQueue = async (Queue) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/challengerleagues/by-queue/${Queue}?api_key=${apikey}`,
    );
    return data;
  };
  this.entriesByAccId = async (AccId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/entries/by-summoner/${AccId}?api_key=${apikey}`,
    );
    return data;
  };
  this.entriesByQueueRank = async (Queue, Tier, Division, Page) => {
    const currentPage = Page || 1;
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/entries/${Queue}/${Tier}/${Division}?page=${currentPage}&api_key=${apikey}`,
    );
    return data;
  };
  this.grandmasterByQueue = async (Queue) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/grandmasterleagues/by-queue/${Queue}?api_key=${apikey}`,
    );
    return data;
  };
  this.leaguesByLeagueId = async (LeagueId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/leagues/${LeagueId}?api_key=${apikey}`,
    );
    return data;
  };
  this.grandmasterByQueue = async (Queue) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/masterleagues/by-queue/${Queue}?api_key=${apikey}`,
    );
    return data;
  };
};

// `https://${region[0]}/lol/league/v4/masterleagues/by-queue/${Queue}?api_key=${apikey}`
module.exports = League;
