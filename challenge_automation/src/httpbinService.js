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

function deleteAnything(token, datamock) {
    return api.delete(`${path}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send(JSON.stringify(datamock));
}

function postAnything(token, datamock) {
    return api.post(`${path}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send(JSON.stringify(datamock));
}

function putAnything(token, datamock) {
    return api.put(`${path}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', token)
        .send(JSON.stringify(datamock));
}

module.exports = {
    getAnything,
    deleteAnything,
    postAnything,
    putAnything
};