var kart = angular.module('kart', []);
kart.factory('kart',['$resource', function($resource) {
  return $resource('/kart.json/:id', {id: '@id'});
}]);
kart.factory("kartService", function(){
  var kart = [];
  return {
    getKart: function(){
      return kart;
    },
    addToKart: function(book) {
      kart.push(book);
    },
    buy: function(book){
      alert("Thanks for buying ", book.name)
    }
  }
});
kart.controller('KartListCtrl', ['$scope','kartService', function($scope, kartService){
  $scope.kart = kartService.getKart();
  $scope.buy = function(book) {
    kartService.buy(book);
  }
}]);