app.controller('MainCtrl', function($scope, issueFinder) {
  // $scope.GetAllData = function () {
    // console.log("called")
    var myData = issueFinder.serverCall();
    myData.then(function (result) {
      $scope.issues = result;
    });
  // }
});

  // $scope.go = function (issue) {
  //   $scope.filters = issue;
  // };

