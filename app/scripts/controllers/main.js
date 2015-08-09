'use strict';

/**
 * @ngdoc function
 * @name plumdorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plumdorApp
 */
angular.module('plumdorApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
