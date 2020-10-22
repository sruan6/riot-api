const axios = require('axios');

const spectator = function(region, apikey) {
    this.activeGamesById = async (Id) => {
        const { data } = await axios.get(`https://${region[0]}/lol/spectator/v4/active-games/by-summoner/${Id}?api_key=${apikey}`);
        return data;
    };
    // Add More Spectator option
    this.activeGamesByName = async (SN) => {
        const res = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-name/${SN}?api_key=${apikey}`);
        const { id } = res.data;
        const { data } = await axios.get(`https://${region[0]}/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${apikey}`);
        return data;
    };
    this.activeGamesByPuuid = async (Puuid) => {
        const res = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-puuid/${Puuid}?api_key=${apikey}`);
        const { id } = res.data;
        const { data } = await axios.get(`https://${region[0]}/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${apikey}`);
        return data;
    };
    this.activeGamesByAccId = async (AccId) => {
        const res = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-account/${AccId}?api_key=${apikey}`);
        const { id } = res.data;
        const { data } = await axios.get(`https://${region[0]}/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${apikey}`);
        return data;
    }
    this.featureGames = async () => {
        const { data } = await axios.get(`https://${region[0]}/lol/spectator/v4/featured-games?api_key=${apikey}`);
        return data;
    } 
}

module.exports = spectator;