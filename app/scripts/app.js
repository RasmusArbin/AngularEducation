'use strict';

/**
 * @ngdoc overview
 * @name angularEducationApp
 * @description
 * # angularEducationApp
 *
 * Main module of the application.
 */
angular
  .module('angularEducationApp', [
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
        templateUrl: 'views/games.html',
        controller: 'GamesCtrl',
        controllerAs: 'main'
      })
      .when('/createGame', {
        templateUrl: 'views/createGame.html',
        controller: 'CreateGameCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
