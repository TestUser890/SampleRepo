$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "LoginTest",
  "description": "",
  "id": "logintest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify Login is successfull",
  "description": "",
  "id": "logintest;verify-login-is-successfull",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters creadentials",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "clicks on Sign-In button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_launches_the_application()"
});
formatter.result({
  "duration": 1080565100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_enters_creadentials()"
});
formatter.result({
  "duration": 51400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clicks_on_Sign_In_button()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 29900,
  "status": "passed"
});
});