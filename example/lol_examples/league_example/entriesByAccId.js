const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getEntriesByAccId = (id) => {
  lol.League.entriesByAccId(id).then((response) => {
    console.log(response);
  });
};

module.exports = getEntriesByAccId;
