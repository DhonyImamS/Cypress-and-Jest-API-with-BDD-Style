const { defineFeature, loadFeature, autoBindSteps } =  require('jest-cucumber');
const feature = loadFeature('./challenge_automation/specs/features/httpbinServiceTest.feature');
const httpService = require('../../src/httpbinService');


defineFeature(feature, (test) => {
    let api;
    let resp;
    let dataReturnMock;
    let methodRequest;

    beforeEach(() => {
        api = '';
        resp = '';
        methodRequest = '';
        expectedResult = '';
    });

    test('Api Test for CRUD Request to HttpBin Server', ({ given, when, then }) => {
        
        given(/^There is HttpBin Server is Up$/, () => {
            api = httpService;
        });
        
        when(/^I hit method (.*) data from API Server$/, async(option) => {
            if ( option === 'GET' ) {
                methodRequest = 'GET';
                dataReturnMock = { data: 'DATA SUCCESS RETRIEVED' };
                resp = await api.getAnything('', dataReturnMock);
            }

            if ( option === 'DELETE' ) {
                methodRequest = 'DELETE';
                dataReturnMock = { data: 'DATA SUCCESS DELETED' };
                resp = await api.deleteAnything('', dataReturnMock);
            }

            if ( option === 'POST' ) {
                methodRequest = 'POST';
                dataReturnMock = { data: 'DATA SUCCESS UPDATED' };
                resp = await api.postAnything('', dataReturnMock);
            }

            if ( option === 'PUT' ) {
                methodRequest = 'PUT';
                dataReturnMock = { data: 'DATA SUCCESS CREATED' };
                resp = await api.putAnything('', dataReturnMock);
            }
            
        });
        
        then(/^Server Response status should be (.*)$/, (arg0) => {
            const { status, body } = resp;

            expect(status).toEqual(JSON.parse(arg0));
            expect(body.data).toStrictEqual(JSON.stringify(dataReturnMock));
            expect(body.method).toEqual(methodRequest);
            expect(body.url).toEqual('http://httpbin.org/anything');
        });
    });
});