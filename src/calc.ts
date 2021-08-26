const getSite = require("node-fetch")

function sum(a, b) {
    return a + b;
}

function multiply(a: number, b: number) {
    return a * b;
}

async function makeAPIRequest(){
    getSite('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res => res.json())
        .then(obj => {
            return obj['bpi']['USD']['rate_float']
        })
}

function returnZero(x: Number){
    return 0;
}

export { sum, multiply, makeAPIRequest, returnZero };