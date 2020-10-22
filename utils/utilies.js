const america = 'americas.api.riotgames.com';
const asia = 'asia.api.riotgames.com'
const europe = 'europe.api.riotgames.com'

const BR1 = 'br1.api.riotgames.com'
const EUN1 = 'eun1.api.riotgames.com'
const EUW1 = 'euw1.api.riotgames.com'
const JP1 = 'jp1.api.riotgames.com'
const KR = 'kr.api.riotgames.com'
const LA1 = 'la1.api.riotgames.com'
const LA2 = 'la2.api.riotgames.com'
const NA1 = 'na1.api.riotgames.com'
const OC1 = 'oc1.api.riotgames.com'
const TR1 = 'tr1.api.riotgames.com'
const RU = 'ru.api.riotgames.com'

function region(val) {
    let region;
    if(val === 'BR') {
        region = [BR1, america]
    }
    else if(val === 'NA') {
        region = [NA1, america]
    }
    else if(val === 'EUN') {
        region = [EUN1, europe]
    }
    else if(val === 'EUW') {
        region = [EUW1, europe]
    }
    else if(val === 'JP') {
        region = [JP1, asia]
    }
    else if(val === 'KR') {
        region = [KR, asia]
    }
    else if(val === 'LAN') {
        region = [LA1, america]
    }
    else if(val === 'LAS') {
        region = [LA2, america]
    }
    else if(val === 'OCE') {
        region = [OC1, america]
    }
    else if(val === 'TR') {
        region = [TR1, europe]
    }
    else if(val === 'RU') {
        region = [RU, europe]
    }
    return region
}


module.exports = region