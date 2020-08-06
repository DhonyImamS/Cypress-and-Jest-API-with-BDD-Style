const { defineFeature, loadFeature, autoBindSteps } =  require('jest-cucumber');
const feature = loadFeature('./challenge_automation/specs/features/httpbinServiceTest.feature');
const httpService = require('../../src/httpbinService');


defineFeature(feature, (test) => {
    let api;
    let resp;
    let expectedResult;

    beforeEach(() => {
        api = '';
        resp = '';
        expectedResult = '';
    });

    test('Api Test for Get Request to HttpBin Server', ({ given, when, then }) => {
        
        given(/^There is HttpBin Server is Up$/, () => {
            api = httpService;
        });
        
        when(/^I hit method get data from API Server$/, async() => {
            resp = await api.getAnything('');
        });
        
        then(/^Server Response status should be "(.*)"$/, (arg0) => {
            const { status, body } = resp;
            
            expect(status).toEqual(JSON.parse(arg0));
            expect(body.data).toEqual('');
            expect(body.method).toEqual('GET');
            expect(body.url).toEqual('http://httpbin.org/anything');
        });
    });
});