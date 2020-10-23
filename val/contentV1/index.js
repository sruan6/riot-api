const axios = require('axios');

const Content = function Content(region, apikey) {
  this.contents = async () => {
    const { data } = await axios.get(
      `https://${region[0]}/val/content/v1/contents?api_key=${apikey}`,
    );
    return data;
  };
};

module.exports = Content;
