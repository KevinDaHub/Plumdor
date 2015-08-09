'use strict';

/**
 * @ngdoc function
 * @name plumdorApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the plumdorApp
 */
angular.module('plumdorApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
