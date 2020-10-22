const axios = require('axios')

// SUMMONER-V4
const summoner = function(region, apikey) {
        this.summonerByName = async function(SN) {
            const { data } = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-name/${SN}?api_key=${apikey}`);
            return data
        };
        this.summonerByAccId = async function(AccId) {
            const { data } = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-account/${AccId}?api_key=${apikey}`);
            return data
        };
        this.summonerByPuuid = async function(Puuid) {
            const { data } = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/by-puuid/${Puuid}?api_key=${apikey}`);
            return data
        };
        this.summonerById = async function(Id) {
            const { data } = await axios.get(`https://${region[0]}/lol/summoner/v4/summoners/${Id}?api_key=${apikey}`);
            return data
        }
}

module.exports = summoner