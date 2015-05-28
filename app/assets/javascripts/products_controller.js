var app = angular.module('app', ['ngResource', 'ngRoute','ngAnimate', 'templates','products', 'kart']);

app.config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider
	.when('/', {controller: 'ProductsController', templateUrl: 'home/_home.html',})
	.when("/kart", {
      templateUrl: "kart/kart_list.html",
      controller: "KartListCtrl"
    })
	.otherwise({
		redirectTo: '/'
	});
}])

app.controller("HeaderCtrl", function($scope, $location){
	$scope.appDetails = {
    title: "BooKart",
    tagline: "We have 1 million books for you"
  };
  $scope.nav = {};
  $scope.nav.isActive = function(path){
    if(path === $location.path()){
      return true;
    }
    return false;
  }
});

app.directive("productForm", function(){
  return {
    restrict: 'E',
    templateUrl: "products/_form.html"
  };
});

