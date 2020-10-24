const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });
const summonerName = 'Summoner Name';
const queue = 'Queue';
const accId = 'Acc Id';
const tier = 'Tier';
const division = 'Divison';
const page = 'Page';
const leagueId = 'League Id';

const getChallengerByQueue = (Queue) => {
  lol.League.challengerByQueue(Queue).then((response) => {
    console.log(response);
  });
};

const getEntriesByAccId = (id) => {
  lol.League.entriesByAccId(id).then((response) => {
    console.log(response);
  });
};

const getEntriesByQueueRank = (Queue, Tier, Division, Page) => {
  lol.League.entriesByQueueRank(Queue, Tier, Division, Page).then(
    (response) => {
      console.log(response);
    },
  );
};

const getGrandmasterByQueue = (Queue) => {
  lol.League.grandmasterByQueue(Queue).then((response) => {
    console.log(response);
  });
};

const getLeaguesByLeagueId = (id) => {
  lol.League.leaguesByLeagueId(id).then((response) => {
    console.log(response);
  });
};

const getMasterByQueue = (id) => {
  lol.League.masterByQueue(id).then((response) => {
    console.log(response);
  });
};

const getLeaguesByName = (name) => {
  lol.League.leaguesByName(name).then((response) => {
    console.log(response);
  });
};

getChallengerByQueue(queue);
getEntriesByAccId(accId);
getEntriesByQueueRank(queue, tier, division, page);
getGrandmasterByQueue(queue);
getLeaguesByLeagueId(leagueId);
getMasterByQueue(queue);
getLeaguesByName(summonerName);
