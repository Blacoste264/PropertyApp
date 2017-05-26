(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']).value('localApi', 'http://localhost:49653/api/');

    app.config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("/signIn");

        $stateProvider
            .state('signIn', {
                url: "/signIn",
                templateUrl: "app/search/signIn.html",
                controller: "SearchController",
                controllerAs : "vm"
            })
            .state("searchGrid", {
                url: "/search.grid",
                templateUrl: "app/search/search.grid.html"
                
            })
            .state("register", {
                url: "/register",
                templateUrl: "app/user/register.html",
                controller:"UserController",
                controllerAs:"vm"
            })
    });

})();