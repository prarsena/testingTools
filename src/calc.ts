const getSite = require("node-fetch")

function sum(a, b) {
    return a + b;
}

function multiply(a: number, b: number) {
    return a * b;
}

async function makeAPIRequest(website){
    getSite(website)
        .then(res => res.json())
        .then(obj => {
            return obj['bpi']['USD']['rate_float']
    })
}

function returnZero(x: Number){
    return 0;
}

export { sum, multiply, makeAPIRequest, returnZero };