const axios = require('axios');
const Summoner = require('../summonerV4');

// CLASH-V1
const Clash = function Clash(region, apikey) {
  this.playersById = async (Id) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/players/by-summoner/${Id}?api_key=${apikey}`,
    );
    return data;
  };
  this.playersByAccId = async (AccId) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByAccId(AccId);
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/players/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  this.playersByPuuid = async (Puuid) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByPuuid(Puuid);
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/players/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  this.playersByName = async (name) => {
    const summoner = await new Summoner(region, apikey);
    const { id } = await summoner.summonerByName(name);
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/players/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  this.teamsByTeamId = async (teamId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/teams/${teamId}?api_key=${apikey}`,
    );
    return data;
  };
  this.tournaments = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/tournaments?api_key=${apikey}`,
    );
    return data;
  };
  this.tournamentsByTeam = async (teamId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/tournaments/by-team/${teamId}?api_key=${apikey}`,
    );
    return data;
  };
  this.tournamentsByTournamentId = async (tournamentId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/clash/v1/tournaments/${tournamentId}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Clash;
