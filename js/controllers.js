var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', function MyController($scope){
    $scope.artist = {
        'name':'surya',
        'title':'Mr',
        'company':'apple.com'
    }
});
