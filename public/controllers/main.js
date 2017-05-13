angular.module('MyApp')
    .controller('MainCtrl', ['$scope', 'AwesomeService',
        function($scope, AwesomeService) { // Look how the 'AwesomeService' is injected

            $scope.headingTitle = 'Welcome Home!';

        }
    ]);