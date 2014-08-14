var controllers = angular.module('controllers', ['directives', 'services', 'ngRoute']);

controllers.controller('MainCtrl', ['$scope', 'Product',
    function ($scope, Product) {
        $scope.products = Product.getAll();

    }]);

controllers.controller('ProductCtrl', ['$scope', 'Product', '$routeParams',
    function ($scope, Product, $routeParams) {
        $scope.product = Product.get($routeParams.id);

    }]);