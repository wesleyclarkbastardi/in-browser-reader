app.controller('BookshelfController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
  $http.get($sce.trustAsResourceUrl("json/books.json")).then(function (response) {
    $scope.myBooks = response.data;
  });
}]);