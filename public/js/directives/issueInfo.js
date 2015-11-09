app.directive('issueInfo', function() {
  return {
    restrict: 'E',
    scope: {
      issue: '='
    },
    templateUrl: 'public/partials/issues.html'
  };
});