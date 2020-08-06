const { defineFeature, loadFeature, autoBindSteps } =  require('jest-cucumber');
const feature = loadFeature('./challenge_automation/specs/features/httpbinServiceTest.feature');
const httpService = require('../../src/httpbinService');


defineFeature(feature, (test) => {
    let api;
    let resp;
    let dataReturnMock;
    let expectedResult;

    beforeEach(() => {
        api = '';
        resp = '';
        expectedResult = '';
    });

    test('Api Test for Get Request to HttpBin Server', ({ given, when, then }) => {
        
        given(/^There is HttpBin Server is Up$/, () => {
            api = httpService;
            dataReturnMock = { data: 'DATA SUCCESS RETRIEVED' };
        });
        
        when(/^I hit method get data from API Server$/, async() => {
            resp = await api.getAnything('', dataReturnMock);
        });
        
        then(/^Server Response status should be "(.*)"$/, (arg0) => {
            const { status, body } = resp;
            
            expect(status).toEqual(JSON.parse(arg0));
            expect(body.data).toStrictEqual(JSON.stringify(dataReturnMock));
            expect(body.method).toEqual('GET');
            expect(body.url).toEqual('http://httpbin.org/anything');
        });
    });
});