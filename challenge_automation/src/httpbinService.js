const supertest = require('supertest');
const api = supertest('http://httpbin.org');
const path = '/anything';

function getAnything(token, datamock) {
    return api.get(`${path}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send(JSON.stringify(datamock));
}

module.exports = {
    getAnything
};