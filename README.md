# Personal cli helper
Simple nodejs Cli helper


![alt text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjFjNzU5YjFhZDZjNDc5MTE5ZTA1MTA1OWEzMDM4ZGFhZjdiMDJhMSZjdD1n/CvpnHtNHITbpVBPxHo/giphy.gif "Logo Title Text 1")



## Why ?
Save time for quick access or do simple thing.
## What it can do ?
- Decode jwt token
- Find and access notes (TODO)
- Quick write a note (TODO)
## Install
- install global : access `simple-cli` folder and run `sudo npm i -g .`
- uninstall global : run `npm uninstall -g simple-cli`

Tips : You can list all globally installed Node.js modules using `npm ls -g --depth=0`

## Usage
decode jwt token
```
hey -t JWT_TOKEN
```
Tips : If you dont like `hey`, rename it from `package.json`


## Dependencies
- node >= v8

Inspirated from [Build a Command Line Application with Node.js](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs) from [David Neal](https://github.com/reverentgeek)
