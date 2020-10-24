const axios = require('axios');

// CLASH-V1
const Clash = function Clash(region, apikey) {
    this.playersByAccId = async (AccId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/players/by-summoner/${AccId}?api_key=${apikey}`
        );
        return data;
    };
    this.teamsByTeamId = async (TeamId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/teams/${TeamId}?api_key=${apikey}`
        );
        return data;
    }
    this.tournaments = async() => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/tournaments?api_key=${apikey}`
        );
        return data;
    }
    this.tournamentsByTeamId = async (TeamId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/tournaments/by-team/${TeamId}?api_key=${apikey}`
        );
        return data;
    }
    this.tournamentsByTournamentId = async (TournamentId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/clash/v1/tournaments/${TournamentId}?api_key=${apikey}`
        );
        return data;
    }
}

module.exports = Clash;