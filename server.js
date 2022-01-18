const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ORIGIN || '*');
    next();
});

app.get('/', (req, res) => {
    const symbol = req.query['symbol'];
    const range = req.query['range'];
    const url = `https://api.kucoin.com/api/v1/market/allTickers`;
    console.log(url);
    request(url).pipe(res);
});

app.listen(port, () =>
    console.log(`StockChart app listening on port ${port}!`)
);
