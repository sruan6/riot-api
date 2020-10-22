const axios = require('axios');

const summoner = function(region, apikey) {
    // TFT-SUMMONER-V1
    this.summonerByName = async (SN) => {
        const { data } = await axios.get(`https://${region[0]}/tft/summoner/v1/summoners/by-name/${SN}?api_key=${apikey}`);
        return data
    };
    this.summonerByAccId = async (AccId) => {
        const { data } = await axios.get(`https://${region[0]}/tft/summoner/v1/summoners/by-account/${AccId}?api_key=${apikey}`);
        return data
    };
    this.summonerByPuuid = async (Puuid) => {
        const { data } = await axios.get(`https://${region[0]}/tft/summoner/v1/summoners/by-puuid/${Puuid}?api_key=${apikey}`);
        return data
    };
    this.summonerById = async (Id) => {
        const { data } = await axios.get(`https://${region[0]}/tft/summoner/v1/summoners/${Id}?api_key=${apikey}`);
        return data
    }
};


module.exports = summoner;