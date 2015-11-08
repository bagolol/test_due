var app = angular.module('issuesApp', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/issues', {
        templateUrl: 'public/partials/table.html',
        controller: 'MainCtrl'
      });
  }]);
