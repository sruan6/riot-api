const axios = require('axios');

// LEAGUE-V4
const League = function League(region, apikey) {
    this.leagueByQueue = async (Queue) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/challengerleagues/by-queue/${Queue}?api_key=${apikey}`
            );
        return data;
    };
};

module.exports = League;