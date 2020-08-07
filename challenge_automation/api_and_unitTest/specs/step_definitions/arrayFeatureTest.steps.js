const { defineFeature, loadFeature, autoBindSteps } =  require('jest-cucumber');
const feature = loadFeature('./challenge_automation/api_and_unitTest/specs/features/arrayServiceTest.feature');
const functionUnderTest = require('../../src/arrayService');


defineFeature(feature, (test) => {
    let arr1;
    let arr2;
    let expectedResult;

    beforeEach(() => {
        arr1 = '';
        arr2 = '';
        expectedResult = '';
    });

    test('Retrieve Value Intersection between 2 array', ({ given, when, then }) => {
        
        given(/^I have (\d+) array input "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            arr1 = JSON.parse(arg1);
            arr2 = JSON.parse(arg2);
        });
        
        when(/^I expected the twos first element are "(.*)"$/, (arg0) => {
            expectedResult = JSON.parse(arg0);
        });
        
        then('It should be true', () => {
            const result = functionUnderTest.extractIntersectElementArray(arr1, arr2);
            expect(result).toStrictEqual(expectedResult);
        });
    });
});