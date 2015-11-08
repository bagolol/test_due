app.factory('issueFinder', function ($http) {
  return {
    serverCall: function () {
      return $http.get('/issues').then(function (response) {
        return response.data;
      },
      function(error) {
        return error;
      });
    }
  };
});