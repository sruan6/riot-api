const axios = require('axios');

const Rank = function Rank(region, apikey) {
  this.leaderboards = async () => {
    const { data } = await axios.get(
      `https://${region}/lor/ranked/v1/leaderboards?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Rank;
