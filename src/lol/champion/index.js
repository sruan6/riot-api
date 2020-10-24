const axios = require('axios');

// CHAMPION-V3
const Champion = function Champion(region, apikey) {
    this.championRotations = async () => {
        const { data } = await axios.get(
            "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-b22af103-1609-4946-ae16-ed7ad97977d4"
            );
        return data;
    }
}

module.exports = Champion;