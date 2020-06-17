Feature: OrangeHRM login feature

#withot Examples keyword
#Scenario: OrangeHRM Login Test scenario

#Given user is already on loginpage
#When title of loginpage is OrangeHRM
#Then user enters "Admin" and "admin123"
#Then user click on login button
#Then user is on homepage
#Then close browser

#With Example keyword -DDT

Scenario Outline: OrangeHRM Login Test Scenario

Given user is already on loginpage
When title of loginpage is OrangeHRM
Then user enters "<username>" and "<password>"
Then user click on login button
Then user is on homepage
Then close browser

Examples:
 |username | password |
 |Admin    | admin123 |
 |Ravi_13246 | Ravi_13246 |



