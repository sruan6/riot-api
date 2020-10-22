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
| LA	| la1.api.riotgames.com  |
| LA	| la2.api.riotgames.com  |
| NA	| na1.api.riotgames.com  |
| OC	| oc1.api.riotgames.com  |
| TR	| tr1.api.riotgames.com  |
| RU	| ru.api.riotgames.com  |