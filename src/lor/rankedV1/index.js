const axios = require('axios');

const Rank = function Rank(region, apikey) {
  this.leaderboards = async () => {
    const { data } = await axios.get(
      `https://${region[1]}/lor/ranked/v1/leaderboards?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Rank;
