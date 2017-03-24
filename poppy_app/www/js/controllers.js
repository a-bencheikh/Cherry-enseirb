angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  //$scope.chat = Chats.get($stateParams.chatId);
})
// Controller for the Json Requet
.controller('AccountCtrl', function($scope, $http) {
  $scope.settings = {
    enableFriends: true
  };
  $http.get('data/UrlMoves.json').success(function (data) {
    $scope.primitives = data.url;
  })
  $scope.getUrl = function() {
  $http.get("http://localhost:8080/test/behave?name=" + $scope.test);
  };
});
