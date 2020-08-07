Feature: LOG IN FABELIO WEBSITE

    Scenario: Logged In with Invalid Username and Password
        Given I Open Login Page website QA FABELIO
        When I do input "dhony@gmail.com" and "password"
        And I click button login
        Then I see error "Mohon periksa kembali alamat email / password anda." on LoginPage
