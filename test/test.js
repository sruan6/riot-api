const lolapi = require('../lol')


// Riot Api Key
const lol = new lolapi({ region: 'na1.api.riotgames.com', apikey: 'RGAPI-7f9c27f9-8eeb-4904-b7a7-1fa3de2292d9' })

// Get League Of Legends Summoner Info By Name
async function getSummonerByName() {
    const response = await lol.summonerByName('giuttony')
    console.log(response)
}

// Get League Of Legends Summoner Info By Account ID
async function getSummonerByAccId() {
    const response = await lol.summonerByAccId('i12KcBq2qpKh9Wm9_LOIwQ8rrVM_sY8uBd6nnIngIdpKNQ')
    console.log(response)
}

// Get League Of Legends Summoner Info By Puuid
async function getSummonerByPuuid() {
    const response = await lol.summonerByPuuid('D4F5v7HicL4-GJsTZL5mn5SGkyy2nEfRo4BDWt6oKLGJ1TLtyMQDnp5isp-WF3zJf_Zq4DNEvM_Bdg')
    console.log(response)
}

// Get League Of Legends Summoner Info By Summoner Id
async function getSummonerById() {
    const response = await lol.summonerById('DGBK4eCLlPwpZXYDQqjjVXt_rKZLNdUYsUmSFrUAVg4Lmd0')
    console.log(response)
}

getSummonerByName()
// getSummonerByAccId()
// getSummonerByPuuid()
// getSummonerById()