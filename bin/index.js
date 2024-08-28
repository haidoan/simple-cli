#!/usr/bin/env node
var yargs = require('yargs');
const fs = require('fs');
const commands = require('./data/command.json');
const { option } = require('yargs');
const http = require('./http');
const util = require('./util');
const apis = require('./data/postman.json').item;

const alias = {
    't': 't',
    'token': 't',
    'c': 'c',
    'curl': 'c',
    'm': 'm',
    'm2m': 'm',
    'e': 'e',
    'execute': 'e',
    'f': 'f',
    'find': 'f',
    'l': 'l',
    'list': 'l',
    's': 's',
    'show': 's',
};

const main = () => {
    try {
        const options = {};
        for (const option of commands) {
            options[option.command] = option.content;
        }
        var argv = yargs.usage('This is my awesome program').options(options).argv;
        const keys = Object.keys(argv);
        switch (alias[keys[1]]) {
            case 't':
                util.parseJwt(argv.t);
                break;
            case 'c':
                util.toCurl(apis[parseInt(argv.c)].request);
                break;
            case 'e':
                http.execute(apis[parseInt(argv.e)]);
                break;
            case 'f':
                for (let i = 0; i < apis.length; i++) {
                    if (apis[i].name.toLowerCase().includes(argv.f.toLowerCase())) {
                        console.log(`${i}: ${apis[i].name}`);
                    }
                }
                break;
            case 'l':
                console.log('List all available apis:\n');
                apis.forEach((api, index) => {
                    if (argv.l === 'dev' && api.request.url?.raw.includes('deca-dev')) {
                        console.log('\x1b[34m%s\x1b[0m', `${index}: ${api.name}`); // Blue color
                    } else if (argv.l === 'prod' && api.request.url?.raw.includes('deca.cloud')) {
                        console.log('\x1b[32m%s\x1b[0m', `${index}: ${api.name}`); // Green color
                    } else {
                        console.log(`${index}: ${api.name}`);
                    }
                });
                break;
            case 's':
                const api = apis[parseInt(argv.s)];
                console.log(JSON.stringify(api, null, 2));
                util.toCurl(api.request);
                break;
            default:
                yargs.showHelp();
                console.log('\n\nInspecting options');
                console.dir(argv);
        }

    } catch (err) {
        console.log(`[ERR]: ${err.message}`);
    }
};

main();;