app.controller('MainCtrl', ['$scope', 'issueFinder', function($scope, issueFinder) {
  var myData = issueFinder.serverCall();
  myData.then(
    function (result) {
      $scope.issues = result;
    },
    function (error) {
      console.log(error);
    }
  );
}]);

  // $scope.go = function (issue) {
  //   $scope.filters = issue;
  // };

