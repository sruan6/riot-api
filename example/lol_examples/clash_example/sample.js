const { Lol } = require('../../..');

const lol = new Lol({ region: 'NA', apikey: 'YOUR API KEY' });
const accId = "Account Id";

const getPlayersByAccId = (id) => {
    lol.Clash.playersByAccId(id).then((response) => {
        console.log(response);
    });
};

getPlayersByAccId(accId);