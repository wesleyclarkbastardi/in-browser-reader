app.controller('BookController', ['$scope', '$http', '$sce', '$routeParams', function($scope, $http, $sce, $routeParams) { 
    $http.get($sce.trustAsResourceUrl("json/books.json")).then(function (response) {
      $scope.book = response.data[$routeParams.bookId];
      $scope.currentBookIndex = parseInt($routeParams.bookId); 
    });
}]);