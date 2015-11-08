var app = angular.module('issuesApp', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/issues', {
        templateUrl: 'public/partials/issues.html',
        controller: 'MainCtrl'
      });
  }]);
