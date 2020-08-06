Feature: HTTP API CRUD Test for HTTPBIN
 
Scenario: Api Test for Get Request to HttpBin Server
    Given There is HttpBin Server is Up
    When I hit method get data from API Server
    Then Server Response status should be "200"