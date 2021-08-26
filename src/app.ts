const getSite = require("node-fetch")


async function makeAPIRequest(){
    getSite('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(obj => {
            return obj['bpi']['USD']['rate_float']
        })
}

makeAPIRequest()