Feature:login feature
    As a user
    I want to login to the Contact Fox 
    So that I can have acess to the contact fox contacts
    
    Background:
     Given a user  has navigated to the login dashboard

    Scenario: Login to the ContactFox with Valid credentials
        When  the user enters the valid credentials with email "abc@gmail.com" and Password "something"
        Then the user will be naviaged to the homepage

    Scenario Outline:Login to the ContactFox with Invalid credentials
        When  the user enters the invalid credentials with email "<email>" and Password "<password>" 
        Then the user will be thrown invalid credentials "<message>"
        Examples:
        |email|password|message|
        |abcdefghij345@gmail.com|236625364|invalid Credentials!|
        |abc@g.c|something|Invalid Credentials!|

    Scenario Outline:when you input invalid email
        # Given a user has navigated to the login dashboard
        When the user enters with a "<email>"
        Then the user will thrown a "<message>"
        Examples:
        | email            | message|
        | abchefg98gmailcom |  Please enter an email address|
        | rits98.com       | Please enter an email address|
        | rira@gmail       |                             |
        | risahgdgajda36gmail.com | Please enter an email address|

    Scenario: Login to the ContactFox with Valid credentials
        When  the user logins with following credentials
         | email | password |
        |rita@gmail.com | something |
        |samikshya@gmail.com | samikshya |
        | abc@gmail.com | abcdefg |
        Then the user will be naviaged to the homepage
    