app.controller('MainCtrl', function($scope, $http) {
  $http({
  method: 'GET',
  url: '/issues'
  }).then(function successCallback(response) {
    $scope.issues = response.data;
  }, function errorCallback(response) {
    console.log(response.statusText);
  });



  $scope.go = function (issue) {
    $scope.filters = issue;
  };
});
