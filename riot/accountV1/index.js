const axios = require('axios');

const Account = function Account(region, apikey) {
  this.accountsByPuuid = async (Puuid) => {
    const { data } = await axios.get(
      `https://${region[1]}/riot/account/v1/accounts/by-puuid/${Puuid}?api_key=${apikey}`,
    );
    return data;
  };
  this.accountsByRiotId = async (gameName, tagLine) => {
    const { data } = await axios.get(
      `https://${region[1]}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${apikey}`,
    );
    return data;
  };
  this.activeShards = async (game, Puuid) => {
    const { data } = await axios.get(
      `https://${region[1]}/riot/account/v1/active-shards/by-game/${game}/by-puuid/${Puuid}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Account;
