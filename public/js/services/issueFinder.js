app.factory('issueFinder', ['$http', '$q', function($http, $q) {
  return {
   getIssues: function() {
     var deferred = $q.defer();
     $http.get('/issues')
       .success(function(data) {
          deferred.resolve(data);
       }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
   }
  }
}]);


