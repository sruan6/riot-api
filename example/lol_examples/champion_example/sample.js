const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });

const getChampionRotations = () => {
    lol.Champion.championRotations().then((response) => {
        console.log(response);
    })
}

getChampionRotations();