
Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {

    "use strict";

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/es6");

    $stateProvider
        .state('es6', {
            url: "/es6",
            controller : "es6Ctrl as es6Ctrl",
            templateUrl: "modules/es6/es6.html"
        });
}

module.exports = Router;
