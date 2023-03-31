#!/usr/bin/env node
const jwtDecode = require('jwt-decode');
var yargs = require('yargs');
const fs = require('fs')
const data = require('./data/data.json');
const { option } = require('yargs');

const parseJwt = (token) => {
    if(typeof token !== 'string') {
        throw new Error('Invalid token type')
    }
    console.log('\nDecode Jwt token');
    const decoded = jwtDecode(token);
    decoded.iat = new Date(decoded.iat * 1000);
    decoded.exp = new Date(decoded.exp * 1000);
    console.log(decoded);
};

const main = () => {
    try {
        const options = {}
        for(const option of data) {
            options[option.command] = option.content
        }
        var argv = yargs.usage('This is my awesome program')
            .options(options).argv;

        if (argv.t) {
            parseJwt(argv.t)
        } else {
            yargs.showHelp();
            console.log('\n\nInspecting options');
            console.dir(argv);
        }
    } catch (err) {
        console.log(`[ERR]: ${err.message}`)
    }
}

main()