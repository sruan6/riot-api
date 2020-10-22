const axios = require('axios');

const championMastery = function(region, apikey) {
    this.championMasteryById = async (Id) => {
        const { data } = await axios.get(`https://${region[0]}/lol/champion-mastery/v4/champion-masteries/by-summoner/${Id}?api_key=${apikey}`);
        return data;
    };
};

module.exports = championMastery