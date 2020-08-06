Feature: HTTP API CRUD Test for HTTPBIN

Scenario Outline: Api Test for CRUD Request to HttpBin Server
    Given There is HttpBin Server is Up
    When I hit method <Option> data from API Server
    Then Server Response status should be <Status>

    Examples:

    | Option        | Status |
    | GET           | 200    |
    | POST          | 200    |
    | PUT           | 200    |
    | DELETE        | 200    |