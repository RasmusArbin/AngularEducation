'use strict';

/**
 * @ngdoc function
 * @name angularEducationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularEducationApp
 */
angular.module('angularEducationApp')
  .controller('CreateGameCtrl', ["$scope", "$http", function ($scope, $http) {
      $scope.game = { Name: "" };

      $scope.save = function () {
          $http.get("http://angulareducation.azurewebsites.net/api/games/insert?name=" + $scope.game.Name);
      };
  }]);
