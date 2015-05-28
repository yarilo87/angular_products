var products = angular.module('products',[]);
products.factory('products',['$resource', function($resource) {
  return $resource('/products.json/:id', {id: '@id'});
}]);
products.controller('ProductsController', ['$scope','products', 'kartService',
  function($scope,products, kartService) {
    $scope.products =  products.query();
    $scope.addProduct = function(){
      if(!$scope.name || $scope.name === '') { return; }
      product = products.save({name: $scope.name,color: $scope.color, price: $scope.price })
      $scope.products.push(product);
      $scope.name = '';$scope.color = ''; $scope.price = '';
    };
    $scope.addToKart = function(product) {
      console.log(product)
      kartService.addToKart(product);
    }
  }
]);