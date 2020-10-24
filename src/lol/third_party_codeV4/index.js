const axios = require('axios');

const ThirdPartyCode = function ThirdPartyCode(region, apikey) {
  this.thirdPartyCodeById = async (Id) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/platform/v4/third-party-code/by-summoner/${Id}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = ThirdPartyCode;
