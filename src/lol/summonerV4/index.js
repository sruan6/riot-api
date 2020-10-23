const axios = require('axios');

// SUMMONER-V4
const Summoner = function Summoner(region, apikey) {
  this.summonerByName = async (SN) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/summoner/v4/summoners/by-name/${SN}?api_key=${apikey}`,
    );
    return data;
  };
  this.summonerByAccId = async (AccId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/summoner/v4/summoners/by-account/${AccId}?api_key=${apikey}`,
    );
    return data;
  };
  this.summonerByPuuid = async (Puuid) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/summoner/v4/summoners/by-puuid/${Puuid}?api_key=${apikey}`,
    );
    return data;
  };
  this.summonerById = async (Id) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/summoner/v4/summoners/${Id}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Summoner;
