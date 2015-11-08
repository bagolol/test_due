app.directive('issueInfo', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'public/partials/issues.html'
  };
});