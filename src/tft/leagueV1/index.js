const axios = require('axios');

const League = function League(region, apikey) {
  this.challenger = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/challenger?api_key=${apikey}`,
    );
    return data;
  };
  this.entriesById = async (Id) => {
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${Id}?api_key=${apikey}`,
    );
    return data;
  };
  // use Account Id to get tft data MY OWN
  this.entriesByAccId = async (AccId) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-account/${AccId}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  // use Puuid to get tft data MY OWN
  this.entriesByPuuid = async (Puuid) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-puuid/${Puuid}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  // use Summoner Name to get tft data MY OWN
  this.entriesByName = async (SN) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-name/${SN}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    return data;
  };
  this.entriesByTierDivision = async (Tier, Division) => {
    const tier = Tier || 'DIAMOND';
    const division = Division || 'I';
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/${tier}/${division}?page=1&api_key=${apikey}`,
    );
    return data;
  };
  this.grandmaster = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/grandmaster?api_key=${apikey}`,
    );
    return data;
  };
  this.leaguesByLeagueId = async (LeagueId) => {
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/leagues/${LeagueId}?api_key=${apikey}`,
    );
    return data;
  };
  // My own functionality added

  // START HERE
  this.leaguesById = async (Id) => {
    const res = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${Id}?api_key=${apikey}`,
    );
    const { leagueId } = res.data[0];
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/leagues/${leagueId}?api_key=${apikey}`,
    );
    return data;
  };
  this.leaguesByAccId = async (AccId) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-account/${AccId}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const res = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    const { leagueId } = res.data[0];
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/leagues/${leagueId}?api_key=${apikey}`,
    );
    return data;
  };
  this.leaguesByPuuid = async (Puuid) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-puuid/${Puuid}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const res = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    const { leagueId } = res.data[0];
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/leagues/${leagueId}?api_key=${apikey}`,
    );
    return data;
  };
  this.leaguesByName = async (SN) => {
    const response = await axios.get(
      `https://${region[0]}/tft/summoner/v1/summoners/by-name/${SN}?api_key=${apikey}`,
    );
    const { id } = response.data;
    const res = await axios.get(
      `https://${region[0]}/tft/league/v1/entries/by-summoner/${id}?api_key=${apikey}`,
    );
    const { leagueId } = res.data[0];
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/leagues/${leagueId}?api_key=${apikey}`,
    );
    return data;
  };
  // END HERE
  this.master = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/tft/league/v1/master?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = League;
