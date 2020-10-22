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


| PLATFORM  | HOST |
|  :---: |  :---: |
| BR  | br1.api.riotgames.com  |
| EUN  | eun1.api.riotgames.com  |
| EUW	| euw1.api.riotgames.com  |
| JP	| jp1.api.riotgames.com  |
| KR	| kr.api.riotgames.com  |
| LAN	| la1.api.riotgames.com  |
| LAS	| la2.api.riotgames.com  |
| NA	| na1.api.riotgames.com  |
| OCE	| oc1.api.riotgames.com  |
| TR	| tr1.api.riotgames.com  |
| RU	| ru.api.riotgames.com  |



| REGION | HOST |
|  :---: |  :---: |
| NA | americas.api.riotgames.com |
| BR | americas.api.riotgames.com |
| LAN | americas.api.riotgames.com |
| LAS | americas.api.riotgames.com |
| OCE | americas.api.riotgames.com |
| KR | asia.api.riotgames.com |
| JP | asia.api.riotgames.com |
| EUN | europe.api.riotgames.com |
| EUW | europe.api.riotgames.com |
| RU | europe.api.riotgames.com |