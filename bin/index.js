#! /usr/bin/env node

const axios = require('axios');

var arguments = process.argv.splice(2, process.argv.length - 1).join(' ');
console.log(arguments);

axios.get(`https://viacep.com.br/ws/${arguments}/json`)
    .then(response => {
        console.log(response.data);
    })