const express = require('express');

const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

server.get('/', (req,res) => {
    res.send(`<h1>Server.....Starting`)
})

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(err);
});

module.exports = server;