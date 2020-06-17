Feature: OrangeHRM app login

Scenario Outline: OrangeHRM login page test

Given user is already on loginpage
When title of loginpage is OrangeHRM
Then user enters "<username>" and "<password>"
Then user click on login button
Then user is on homepage
Then click on admin tab and click on add button
Then user enters user details "<employeename>" and "<usernames>" and "<passwords>" and "<confirmpassword>"
Then close browser

Examples:

 | username | password |employeename  | usernames  | passwords | confirmpassword |
 |Admin     | admin123 |John Smith    | Tom_1234  | Tom_1234 | Tom_1234 		 |
 |Admin     | admin123 |John Smith    | king_1234  | King_1234 | King_1234 		 |
 |Admin     | admin123 |John Smith    | James_1234  | James_1234 | James_1234 		 |
 |Admin     | admin123 |John Smith    | Smith_1234  | Smith_1234 | Smith_1234 		 |
