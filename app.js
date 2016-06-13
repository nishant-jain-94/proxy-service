const http = require('http');
const httpProxy = require('http-proxy');
const httpRequest = require('request');
var proxy = httpProxy.createProxyServer();
const app = require('express')();
const target = require('./target.config')

// If req.user obj is present then redirect else use next

app.use(function (req, res, next) {
    httpRequest({
        url: 'http://localhost:3031/credentials/decodeToken', method: 'GET', headers: {
            'x-access-token': req.headers['x-access-token']
        }
    }, function (error, response, body) {
        var defaultUser = {
            band: 'B2',
            work_experience_in_year: 2,
            organisation_name: 'wipro',
            preffered_language: 'en',
            country: 'India'
        };
        var user = body.object ? body.object : defaultUser;
        proxy.on('proxyReq', function (proxyReq, req, res, options) {
            console.log("Inside proxy req");
            proxyReq.setHeader('User', JSON.stringify(user));
        });
        next();
    });
});

app.use('/:service', function (req, res) {
    console.log(req.params.service);
    console.log(target[req.params.service]);
    console.log(req.user)
    proxy.web(req, res, { target: target[req.params.service] + "/" + req.params.service });
});

module.exports = app;