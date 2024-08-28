const jwtDecode = require('jwt-decode');
const { exec } = require('child_process');
const helper = {
    cp: (input) => {
        exec(`echo ${JSON.stringify(input)} | pbcopy`, (err) => {
            if (err) {
                console.error('\x1b[31m%s\x1b[0m', '\n❌ Error copying to clipboard:', err); // Red color with icon
            } else {
                console.log('\x1b[5m\x1b[32m%s\x1b[0m', '\n✅ Curl command copied to clipboard.'); // Blinking green text with icon
            }
        });
    },
};

module.exports = helper;