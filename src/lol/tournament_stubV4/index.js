const axios = require('axios');

// tournament-stub-v4
const TournamentStub = function TournamentStub(region, apikey) {
  this.codes = async () => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/codes?api_key=${apikey}`,
    );
    return data;
  };
  this.lobbyEventByTournamentCode = async (TournamentCode) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/lobby-events/by-code/${TournamentCode}?api_key=${apikey}`,
    );
    return data;
  };
  this.providers = async () => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/providers?api_key=${apikey}`,
    );
    return data;
  };
  this.tournaments = async () => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/tournaments`,
    );
    return data;
  };
};

module.exports = TournamentStub;
