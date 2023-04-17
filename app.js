const express = require("express");

const HOST = 'localhost';
const PORT = 3010;

const app = express();

app.use('/',(req, res, next) => {
    res.send(`<html><body><h1>Hello! from Node JS</h1></body></html>`);
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});