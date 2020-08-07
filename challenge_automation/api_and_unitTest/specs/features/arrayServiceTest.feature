Feature: Array Intersection Function
 
Scenario: Retrieve Value Intersection between 2 array
    Given I have 2 array input "["1", "2", "3", "4", "5"]" and "["1", "3", "5", "7", "9", "10"]"
    When I expected the twos first element are "["1","3"]"
    Then It should be true