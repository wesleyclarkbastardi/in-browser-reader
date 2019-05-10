app.controller('ChapterController', ['$scope', '$http', '$sce', '$routeParams', function($scope, $http, $sce, $routeParams) {
  $http.get($sce.trustAsResourceUrl("json/books.json")).then(function (response) {

      $scope.book = response.data[$routeParams.bookId];
      $scope.chapter = $scope.book.chapters[$routeParams.chapterId]

      if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
        $scope.nextChapterIndex = "#";
      }

      $scope.currentBookIndex = parseInt($routeParams.bookId);
      $scope.currentChapterIndex = parseInt($routeParams.chapterId);
      $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
  });  
}]);
  