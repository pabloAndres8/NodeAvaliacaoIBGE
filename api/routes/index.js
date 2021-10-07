const express = require('express');
const cities = require('./citiesRoute');

module.exports = server => {
    server.use(express.json());
    server.use(cities);
}