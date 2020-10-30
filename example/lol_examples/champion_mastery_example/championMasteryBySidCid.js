const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getChampionMasteryBySidCid = (sid, cid) => {
  lol.ChampionMastery.championMasteryBySidCid(sid, cid).then(
    (response) => {
      console.log(response);
    },
  );
};

module.exports = getChampionMasteryBySidCid;
