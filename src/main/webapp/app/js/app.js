var testApp = angular.module('testApp', ['ngRoute', 'controllers']);

testApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
            templateUrl: 'app/js/controllers/main.html',
            controller: 'MainCtrl'
        })
        .when('/product/:id', {
            templateUrl: 'app/js/controllers/product.html',
            controller: 'ProductCtrl'
        })
        .otherwise({
            redirectTo: '/main'
        });
}]);


