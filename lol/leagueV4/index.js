const axios = require('axios');

// LEAGUE-V4
const League = function League(region, apikey) {
    this.challengerByQueue = async (Queue) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/challengerleagues/by-queue/${Queue}?api_key=${apikey}`
            );
        return data;
    };
    this.entriesByAccId = async (AccId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/entries/by-summoner/${AccId}?api_key=${apikey}`
        );
        return data;
    };
    this.entriesByQueueRank = async (Queue, Tier, Division, Page = 1) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/entries/${Queue}/${Tier}/${Division}?page=${Page}&api_key=${apikey}`
        );
        return data;
    };
    this.grandmasterByQueue = async (Queue) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/grandmasterleagues/by-queue/${Queue}?api_key=${apikey}`
        );
        return data;
    };
    this.leaguesByLeagueId = async(LeagueId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/league/v4/leagues/${LeagueId}?api_key=${apikey}`
        );
        return data;
    };
    this.grandmasterByQueue = async (Queue) => {
        console.log("Axios failing?")
        const {data} = await axios.get(
            "https://na1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-bbca3b7c-a565-4cbb-a517-f3c751fd1934"
        );
        return data;
    };
};

            // `https://${region[0]}/lol/league/v4/masterleagues/by-queue/${Queue}?api_key=${apikey}`
module.exports = League;

