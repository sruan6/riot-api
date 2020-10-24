const axios = require('axios');

const Match = function Match(region, apikey) {
    this.matchByMatchId = async (MatchId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matches/${MatchId}?api_key=${apikey}`
        )
        return data;
    }
    this.matchListsByAccountId = async (AccId, Champion, Queue, Season, endTime, beginTime, endIndex, beginIndex) => {
        // const newChamp = Champion ? `champion=${Champion}` ? null;
        const newChamp = `champion=${Champion}&` || null;
        const newQueue = `queue=${Queue}&` || null;
        const newSeason = `season=${Season}&` || null;
        const newEndTime = `endTime=${endTime}&` || null;
        const newBeginTime = `beginTime=${beginTime}&` || null;
        const newEndIndex = `endIndex=${endIndex}&` || null;
        const newBeginIndex = `beginIndex=${beginIndex}&` || null;
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matchlists/by-account/
            ${AccId}?
            ${newChamp}
            ${newQueue}
            ${newSeason}
            ${newEndTime}
            ${newBeginTime}
            ${newEndIndex}
            ${newBeginIndex}
            api_key=${apikey}`
        )
        return data;
    }
}

module.exports = Match;