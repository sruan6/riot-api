const axios = require('axios');

const ChampionMastery = function ChampionMastery(region, apikey) {
  this.championMasteryById = async (summonerId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${apikey}`,
    );
    return data;
  };
  this.championMasteryBySidCid = async (summonerId, championId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}/by-champion/${championId}?api_key=${apikey}`,
    );
    return data;
  };
  this.scoresById = async (summonerId) => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/champion-mastery/v4/scores/by-summoner/${summonerId}?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = ChampionMastery;
