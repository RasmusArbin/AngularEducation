'use strict';

/**
 * @ngdoc function
 * @name angularEducationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularEducationApp
 */
angular.module('angularEducationApp')
  .controller('GamesCtrl', ["$scope", "$http", function ($scope, $http) {
      $scope.games = [];
      $http.get("http://angulareducation.azurewebsites.net/api/games/getgames").success(function (games) {
          $scope.games = games;
      });
  }]);
