var app = angular.module('issuesApp', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/issues', {
      templateUrl: 'app/views/table.html',
      controller: 'IssueCtrl',
      resolve: IssueCtrl.resolve
    });
  }
]);