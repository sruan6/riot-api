const axios = require('axios');

const Status = function Status(region, apikey) {
  this.shardData = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/lol/status/v3/shard-data?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Status;
