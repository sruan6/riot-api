const axios = require('axios');

const Match = function Match(region, apikey) {
    this.matchByMatchId = async (MatchId) => {
        const {data} = await axios.get(
            `https://${region[0]}/lol/match/v4/matches/${MatchId}?api_key=${apikey}`
        )
    }
    // this.matchListsByAccountId = async (AccId)
}




module.exports = Match;