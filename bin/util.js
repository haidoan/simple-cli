const jwtDecode = require('jwt-decode');
const { exec } = require('child_process');
const green = '\x1b[32m%s\x1b[0m';
const helper = require('./helper');

const util = {
    parseJwt: (token) => {
        if (typeof token !== 'string') {
            throw new Error('Invalid token type');
        }
        console.log('\x1b[5m\x1b[33m%s\x1b[0m', '\n🔍 Decode Jwt token'); // Blinking yellow text with icon
        const decoded = jwtDecode(token);
        decoded.iat = new Date(decoded.iat * 1000);
        decoded.exp = new Date(decoded.exp * 1000);
        console.log(green, decoded); // Green color
    },
    toCurl: (request) => {
        console.log('\x1b[5m\x1b[33m%s\x1b[0m', '\n🔄 Convert request to curl command:'); // Blinking yellow text with icon
        const method = request.method;
        const headers = request.header.map(h => `-H "${h.key}: ${h.value}"`).join(' ');
        const url = request.url.raw;
        const body = request.body ? `-d '${request.body.raw}'` : '';

        const result = `curl -X ${method} ${headers} ${body} "${url}"`;
        console.log(green, result); // Green color\\
        helper.cp(result);
        return result;
    }
};

module.exports = util;