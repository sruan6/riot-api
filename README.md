# riot-api

```javascript
const lol = new lolapi({ region: 'KR', apikey: 'YOUR API KEY' })
const summonerName = 'Hide on Bush';
// Get League Of Legends Summoner Info By Name
async function getSummonerByName(name) {
    const response = await lol.Summoner.summonerByName(name);
    console.log(response);
};

getSummonerByName(summonerName);

```


| PLATFORM  | HOST | REGION | HOST |
|  :---: |  :---: | :---: | :---: |
| BR  | br1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
| EUN  | eun1.api.riotgames.com  | EUROPE | europe.api.riotgames.com |
| EUW	| euw1.api.riotgames.com  | EUROPE | europe.api.riotgames.com |
| JP	| jp1.api.riotgames.com  | ASIA | asia.api.riotgames.com |
| KR	| kr.api.riotgames.com  | ASIA | asia.api.riotgames.com |
| LAN	| la1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
| LAS	| la2.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
| NA	| na1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
| OCE	| oc1.api.riotgames.com  | AMERICAS | americas.api.riotgames.com |
| TR	| tr1.api.riotgames.com  | EUROPE | europe.api.riotgames.com |
| RU	| ru.api.riotgames.com  | EUROPE | europe.api.riotgames.com |
