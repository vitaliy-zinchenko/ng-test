var directives = angular.module('directives', ['services']);

directives.directive('widget', ['User', function(User){
    return {
        restrict: 'EA',
//        replace: true,
        templateUrl: 'app/js/directives/widget.html',
        scope:{

        },
        link: function($scope, $element, $attrs){
            $scope.user = User.get();
        }
    }
}]);