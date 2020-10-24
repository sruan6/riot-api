const axios = require('axios');

// CLASH-V1
const Clash = function Clash(region, apikey) {
    this.playersByAccId = async (AccId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/players/by-summoner/${AccId}?api_key=${apikey}`
        );
        return data;
    };
}

module.exports = Clash;