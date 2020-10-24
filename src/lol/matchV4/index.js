const axios = require('axios');

// MATCH-V4
const Match = function Match(region, apikey) {
    this.matchByMatchId = async (MatchId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matches/${MatchId}?api_key=${apikey}`
        );
        return data;
    }
    this.matchListsByAccountId = async (AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex) => {
        const newChamp = Champion ? `champion=${Champion}&` : "";
        const newQueue = Queue ? `queue=${Queue}&` : "";
        const newSeason = Season ? `season=${Season}&` : "";
        const newEndTime = endTime ? `endTime=${endTime}&` : "";
        const newBeginTime = beginTime ? `beginTime=${beginTime}&` : "";
        const newEndIndex = endIndex ? `endIndex=${endIndex}&` : "";
        const newBeginIndex = beginIndex ? `beginIndex=${beginIndex}&` : "";
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matchlists/by-account/${AccId}?${newChamp}${newQueue}${newSeason}${newEndTime}${newBeginTime}${newEndIndex}${newBeginIndex}api_key=${apikey}`
        )
        return data;
    }
    this.timelinesByMatchId = async (MatchId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/timelines/by-match/${MatchId}?api_key=${apikey}`
        )
        return data;
    }
    this.matchByTournamentCode = async (TournamentCode) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matches/by-tournament-code/${TournamentCode}/ids?api_key=${apikey}`
        )
        return data;
    }
    this.matchByMatchIdByTournamentCode = async (MatchId, TournamentCode) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matches/${MatchId}/by-tournament-code/${TournamentCode}?api_key=${apikey}`
        );
        return data;
    }
}

module.exports = Match;