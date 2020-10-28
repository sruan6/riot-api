const axios = require('axios');
const Summoner = require('../summonerV4');

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
  this.masterByQueue = async (Queue) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/league/v4/masterleagues/by-queue/${Queue}?api_key=${apikey}`,
    );
    return data;
  };

  // My own functionality added

  // START HERE
  this.leaguesByName = async (SN) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByName(SN);
    const { leagueId } = (await this.entriesByAccId(id))[0];
    const response = await this.leaguesByLeagueId(leagueId);
    return response;
  };
  this.leaguesByAccId = async (accId) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByAccId(accId);
    const { leagueId } = (await this.entriesByAccId(id))[0];
    const response = await this.leaguesByLeagueId(leagueId);
    return response;
  };
  this.leaguesByPuuid = async (puuid) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByPuuid(puuid);
    const { leagueId } = (await this.entriesByAccId(id))[0];
    const response = await this.leaguesByLeagueId(leagueId);
    return response;
  };
  this.leaguesById = async (summonerId) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerById(summonerId);
    const { leagueId } = (await this.entriesByAccId(id))[0];
    const response = await this.leaguesByLeagueId(leagueId);
    return response;
  };
};

module.exports = League;
