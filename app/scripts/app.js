'use strict';

/**
 * @ngdoc overview
 * @name plumdorApp
 * @description
 * # plumdorApp
 *
 * Main module of the application.
 */
angular
  .module('plumdorApp', ['ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/woning', {
        templateUrl: 'views/woning.html',
        controller: 'AboutCtrl'
      })
        .when('/leveranciers', {
            templateUrl: 'views/leveranciers.html',
            controller: 'LeverancierCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
