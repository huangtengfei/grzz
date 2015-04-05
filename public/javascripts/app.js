angular.module('grzzApp', ['ngRoute', 'grzzApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/index', {
                templateUrl: 'partials/index.html',
                controller: 'MainCtrl'
            }).
            when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'MainCtrl'
            }).
            when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'MainCtrl'
            }).
            // If invalid route, just redirect to the main list view
            otherwise({ redirectTo: '/index' });
    }]);