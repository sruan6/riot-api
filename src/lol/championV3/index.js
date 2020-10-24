const axios = require('axios');

// CHAMPION-V3
const Champion = function Champion(region, apikey) {
  this.championRotations = async () => {
    const { data } = await axios.get(
      `https://${region}/lol/platform/v3/champion-rotations?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Champion;
