const axios = require('axios');

// tournament-stub-v4
const TournamentStub = function TournamentStub(region, apikey) {
  this.codes = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/codes?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.lobbyEventByTournamentCode = async (TournamentCode, input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/lobby-events/by-code/${TournamentCode}?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.providers = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/providers?api_key=${apikey}`,
      input,
    );
    return data;
  };
  this.tournaments = async (input) => {
    const { data } = await axios.post(
      `https://${region[1]}/lol/tournament-stub/v4/tournaments`,
      input,
    );
    return data;
  };
};

module.exports = TournamentStub;
