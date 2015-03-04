'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:PlacesCtrl
 * @description
 * # PlacesCtrl
 * Controller of the testApp
 */
angular.module('testApp'  )
   .controller('PlacesCtrl',function ($scope) {
    $scope.result1 = '';
    $scope.options1 = {
      country: 'co',
      types: 'establishment', 
    };
    $scope.details1 = '';
  });
