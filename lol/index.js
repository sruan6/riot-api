const axios = require('axios');

const lolapi = function(key) {
    this.region = key.region;
    this.apikey = key.apikey;

    // SUMMONER-V4
    this.summonerByName = async function(SN) {
        const { data } = await axios.get(`https://${this.region}/lol/summoner/v4/summoners/by-name/${SN}?api_key=${this.apikey}`);
        return data
    };
    this.summonerByAccId = async function(AccId) {
        const { data } = await axios.get(`https://${this.region}/lol/summoner/v4/summoners/by-account/${AccId}?api_key=${this.apikey}`);
        return data
    };
    this.summonerByPuuid = async function(Puuid) {
        const { data } = await axios.get(`https://${this.region}/lol/summoner/v4/summoners/by-puuid/${Puuid}?api_key=${this.apikey}`);
        return data
    };
    this.summonerById = async function(Id) {
        const { data } = await axios.get(`https://${this.region}/lol/summoner/v4/summoners/${Id}?api_key=${this.apikey}`);
        return data
    }

    // ACCOUNT-V1
    this.accountByPuuid = async function(Puuid) {
        const { data } = await axios.get(``)
    }
}

module.exports = lolapi;