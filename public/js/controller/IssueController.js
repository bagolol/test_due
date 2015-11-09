var IssueCtrl = app.controller('IssueCtrl', ['$scope','issueFinder', function ($scope,issueFinder) {
  var loadIssues = issueFinder.getIssues();
  loadIssues.then(function(val) {
    $scope.issues = val;
    console.log($scope.issues);
  });
}]);

  // $scope.go = function (issue) {
  //   $scope.filters = issue;
  // };

