const { Tft } = require('../../..');

const tft = new Tft({ region: 'NA', apikey: 'YOUR API KEY' });

const getTftChallenger = () => {
  tft.League.challenger().then((response) => {
    console.log(response);
  });
};

const getTftEntriesById = (id) => {
  tft.League.entriesById(id).then((response) => {
    console.log(response);
  });
};

const getTftEntriesByAccId = (id) => {
  tft.League.entriesByAccId(id).then((response) => {
    console.log(response);
  });
};

const getTftEntriesByPuuid = (id) => {
  tft.League.entriesByPuuid(id).then((response) => {
    console.log(response);
  });
};

const getTftEntriesByName = (name) => {
  tft.League.leaguesByName(name).then((response) => {
    console.log(response);
  });
};

const getTftEntriesByRank = (tier, division) => {
  tft.League.entriesByTierDivision(tier, division).then(
    (response) => {
      console.log(response);
    },
  );
};

const getTftGrandmaster = () => {
  tft.League.grandmaster().then((response) => {
    console.log(response);
  });
};

const getTftLeagueByLeagueId = (id) => {
  tft.League.leaguesByLeagueId(id).then((response) => {
    console.log(response);
  });
};

const getTftLeagueById = (id) => {
  tft.League.leaguesById(id).then((response) => {
    console.log(response);
  });
};

const getTftLeagueByAccId = (id) => {
  tft.League.leaguesByAccId(id).then((response) => {
    console.log(response);
  });
};

const getTftLeagueByPuuid = (id) => {
  tft.League.leaguesByPuuid(id).then((response) => {
    console.log(response);
  });
};

const getTftLeagueByName = (name) => {
  tft.League.leaguesByName(name).then((response) => {
    console.log(response);
  });
};

const getTftMaster = () => {
  tft.League.master().then((response) => {
    console.log(response);
  });
};

const summonerId = '';
const accountId = '';
const puuid = '';
const summonerName = '';
const Tier = '';
const Division = '';
const leagueId = '';

getTftChallenger();
getTftEntriesById(summonerId);
getTftEntriesByAccId(accountId);
getTftEntriesByPuuid(puuid);
getTftEntriesByName(summonerName);
getTftEntriesByRank(Tier, Division);
getTftGrandmaster();
getTftLeagueByLeagueId(leagueId);
getTftLeagueById(summonerId);
getTftLeagueByAccId(accountId);
getTftLeagueByPuuid(puuid);
getTftLeagueByName(summonerName);
getTftMaster();
