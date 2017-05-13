// Create a service 
angular.module('MyApp')
    .factory('AwesomeService', ['$resource', function($resource) {
        return 'data coming from service';
    }]);