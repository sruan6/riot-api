const america = 'americas.api.riotgames.com';
const asia = 'asia.api.riotgames.com';
const europe = 'europe.api.riotgames.com';

const BR1 = 'br1.api.riotgames.com';
const EUN1 = 'eun1.api.riotgames.com';
const EUW1 = 'euw1.api.riotgames.com';
const JP1 = 'jp1.api.riotgames.com';
const KR = 'kr.api.riotgames.com';
const LA1 = 'la1.api.riotgames.com';
const LA2 = 'la2.api.riotgames.com';
const NA1 = 'na1.api.riotgames.com';
const OC1 = 'oc1.api.riotgames.com';
const TR1 = 'tr1.api.riotgames.com';
const RU = 'ru.api.riotgames.com';

module.exports = (val) => {
  if (val === undefined) {
    return [NA1, america];
  }
  if (val === 'BR') {
    return [BR1, america];
  }
  if (val === 'NA') {
    return [NA1, america];
  }
  if (val === 'EUN') {
    return [EUN1, europe];
  }
  if (val === 'EUW') {
    return [EUW1, europe];
  }
  if (val === 'JP') {
    return [JP1, asia];
  }
  if (val === 'KR') {
    return [KR, asia];
  }
  if (val === 'LAN') {
    return [LA1, america];
  }
  if (val === 'LAS') {
    return [LA2, america];
  }
  if (val === 'OCE') {
    return [OC1, america];
  }
  if (val === 'TR') {
    return [TR1, europe];
  }
  if (val === 'RU') {
    return [RU, europe];
  }
  // console.error(`region does not exist \n please use ${list}`);
  throw new Error('region does not exist');
};
