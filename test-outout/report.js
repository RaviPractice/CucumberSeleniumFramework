$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/RAVI/April2020/OrangeHRMBDDFramework/src/main/java/Features/users.feature");
formatter.feature({
  "line": 1,
  "name": "OrangeHRM app login",
  "description": "",
  "id": "orangehrm-app-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "OrangeHRM login page test",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of loginpage is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on admin tab and click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters user details \"\u003cemployeename\u003e\" and \"\u003cusernames\u003e\" and \"\u003cpasswords\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "employeename",
        "usernames",
        "passwords",
        "confirmpassword"
      ],
      "line": 16,
      "id": "orangehrm-app-login;orangehrm-login-page-test;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "John Smith",
        "Tom_1234",
        "Tom_1234",
        "Tom_1234"
      ],
      "line": 17,
      "id": "orangehrm-app-login;orangehrm-login-page-test;;2"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "John Smith",
        "king_1234",
        "King_1234",
        "King_1234"
      ],
      "line": 18,
      "id": "orangehrm-app-login;orangehrm-login-page-test;;3"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "John Smith",
        "James_1234",
        "James_1234",
        "James_1234"
      ],
      "line": 19,
      "id": "orangehrm-app-login;orangehrm-login-page-test;;4"
    },
    {
      "cells": [
        "Admin",
        "admin123",
        "John Smith",
        "Smith_1234",
        "Smith_1234",
        "Smith_1234"
      ],
      "line": 20,
      "id": "orangehrm-app-login;orangehrm-login-page-test;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "OrangeHRM login page test",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of loginpage is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on admin tab and click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters user details \"John Smith\" and \"Tom_1234\" and \"Tom_1234\" and \"Tom_1234\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 9000014372,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_orangehrm()"
});
formatter.result({
  "duration": 17444185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 731235542,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 5079780483,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 18838755,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_admin_tab_and_click_on_add_button()"
});
formatter.result({
  "duration": 4922700179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 26
    },
    {
      "val": "Tom_1234",
      "offset": 43
    },
    {
      "val": "Tom_1234",
      "offset": 58
    },
    {
      "val": "Tom_1234",
      "offset": 73
    }
  ],
  "location": "LoginStepDefination.user_enters_employeename_username_password_confirmpassword(String,String,String,String)"
});
formatter.result({
  "duration": 6917507370,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 812455249,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "OrangeHRM login page test",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of loginpage is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on admin tab and click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters user details \"John Smith\" and \"king_1234\" and \"King_1234\" and \"King_1234\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 7032992330,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_orangehrm()"
});
formatter.result({
  "duration": 14752568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 332262299,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 6794559894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 16419687,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_admin_tab_and_click_on_add_button()"
});
formatter.result({
  "duration": 2978382884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 26
    },
    {
      "val": "king_1234",
      "offset": 43
    },
    {
      "val": "King_1234",
      "offset": 59
    },
    {
      "val": "King_1234",
      "offset": 75
    }
  ],
  "location": "LoginStepDefination.user_enters_employeename_username_password_confirmpassword(String,String,String,String)"
});
formatter.result({
  "duration": 6325233502,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 795762500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "OrangeHRM login page test",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of loginpage is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on admin tab and click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters user details \"John Smith\" and \"James_1234\" and \"James_1234\" and \"James_1234\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6966589350,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_orangehrm()"
});
formatter.result({
  "duration": 15193984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 324422526,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 5065993386,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 9802024,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_admin_tab_and_click_on_add_button()"
});
formatter.result({
  "duration": 4736763007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 26
    },
    {
      "val": "James_1234",
      "offset": 43
    },
    {
      "val": "James_1234",
      "offset": 60
    },
    {
      "val": "James_1234",
      "offset": 77
    }
  ],
  "location": "LoginStepDefination.user_enters_employeename_username_password_confirmpassword(String,String,String,String)"
});
formatter.result({
  "duration": 6943263026,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 770366648,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "OrangeHRM login page test",
  "description": "",
  "id": "orangehrm-app-login;orangehrm-login-page-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of loginpage is OrangeHRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"Admin\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on admin tab and click on add button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters user details \"John Smith\" and \"Smith_1234\" and \"Smith_1234\" and \"Smith_1234\"",
  "matchedColumns": [
    2,
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6650872491,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_orangehrm()"
});
formatter.result({
  "duration": 26508119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefination.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 319616727,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button()"
});
formatter.result({
  "duration": 5051727916,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 9500219,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_on_admin_tab_and_click_on_add_button()"
});
formatter.result({
  "duration": 4393180928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 26
    },
    {
      "val": "Smith_1234",
      "offset": 43
    },
    {
      "val": "Smith_1234",
      "offset": 60
    },
    {
      "val": "Smith_1234",
      "offset": 77
    }
  ],
  "location": "LoginStepDefination.user_enters_employeename_username_password_confirmpassword(String,String,String,String)"
});
formatter.result({
  "duration": 6731596375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_browser()"
});
formatter.result({
  "duration": 768359228,
  "status": "passed"
});
});