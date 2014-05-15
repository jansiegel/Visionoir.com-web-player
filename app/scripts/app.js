'use strict';

var visioPlayerApp = angular
.module('visioPlayerApp', [
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
