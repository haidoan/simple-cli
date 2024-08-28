const axios = require('axios');
const getHeaders = (arr) => {
    const headers = {};
    arr.forEach((header) => {
        headers[header.key] = header.value;
    });
    return headers;
};

const http = {
    execute: async (f) => {
        try {
            console.log(f.name);
            const req = f.request;
            let config = {
                method: req.method,
                maxBodyLength: Infinity,
                url: req.url.raw,
                headers: getHeaders(req.header),
                data: req.body?.options?.raw?.language === 'json' ? JSON.parse(req.body.raw) : req.body?.raw
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data, undefined, 2));
                })
                .catch((error) => {
                    console.log('[ERROR] ', error.message);
                });

        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = http;