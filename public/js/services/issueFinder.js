app.factory('issueFinder', ['$http', '$q', function($http, $q) {
  return {
    query: function () {
      var q = $q.defer();
      $http.get('/issues').success(function (data) {
        q.resolve(function() {
          var issues = data;
          return issues;
        });
      });
      return q.promise;
    }
  }
}]);