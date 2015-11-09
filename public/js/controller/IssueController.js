var IssueCtrl = app.controller('IssueCtrl', ['$scope','issueFinder', function ($scope,issueFinder) {
  var loadSettings = issueFinder.query();
  loadSettings.then(function(val) {
    $scope.issues = val;
  });
}]);

  // $scope.go = function (issue) {
  //   $scope.filters = issue;
  // };

