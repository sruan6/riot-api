const { Lol } = require('../../..');

const lol = new Lol({region: 'NA', apikey: 'YOUR API KEY'});
const summonerName = "Summoner Name";
const queue = "Queue";
const accId = "Acc Id";
const tier = "Tier";
const division = "Divison";
const page = "Page";
const leagueId = "League Id";

const getChallengerByQueue = (queue) => {
    lol.League.challengerByQueue(queue).then((response) => {
      console.log(response);
    });
  };

  const getEntriesByAccId = (accId) => {
    lol.League.entriesByAccId(accId).then((response) => {
      console.log(response);
    })
  }

const getEntriesByQueueRank = (queue, tier, division, page = 1) => {
    lol.League.entriesByQueueRank(queue,tier, division, page).then((response) => {
        console.log(response);
    });
}

const getGrandmasterByQueue = (queue) => {
    lol.League.grandmasterByQueue(queue).then((response) => {
        console.log(response);
    })
}

const getLeaguesByLeagueId = (leagueId) => {
    lol.League.leaguesByLeagueId(leagueId).then((response) => {
        console.log(response);
    })
}

const getMasterByQueue = (queue) => {
    lol.League.masterByQueue(queue).then((response) => {
        console.log(response);
    })
}

const getLeaguesByName = (summonerName) => {
    lol.League.leaguesByName(summonerName).then((response) => {
        console.log(response);
    })
}

getChallengerByQueue(queue);
getEntriesByAccId(accId);
getEntriesByQueueRank(queue, tier, division, page);
getGrandmasterByQueue(queue);
getLeaguesByLeagueId(leagueId);
getMasterByQueue(queue);
getLeaguesByName(summonerName);
