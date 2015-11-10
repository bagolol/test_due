var IssueCtrl = app.controller('IssueCtrl', ['$scope','issueFinder', function ($scope,issueFinder) {
  var loadIssues = issueFinder.getIssues();
  loadIssues.then(function(val) {
    $scope.issues = val;
  });
   $scope.sort = function (issue) {
     $scope.filters = issue;
   };
   $scope.clearFilters = function () {
     $scope.filters = {};
     $scope.query = "";
   };
}]);

