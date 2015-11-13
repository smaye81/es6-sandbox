require('angular');
require("angular-ui-router");
require('./scss/app.scss');

var es6Module = require("./modules/es6/es6");
var router = require("./router");

var appModule = angular.module("App", ["ui.router", es6Module.name]);

appModule.config(router);
