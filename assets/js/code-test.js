//Setting rates table
var app = angular.module('myApp',[]).controller('myData',function($scope){
  $scope.names = [
                  {"name": "Big Guy Financial", "apy": "0.75%","earnings": "$376.41"},
                  {"name": "URBank", "apy": "0.87%", "earnings": "$436.89"},
                  {"name": "Dewey, Cheatam & Howe", "apy": "0.01%", "earnings": "$5.00"},
                  {"name": "First Onion", "apy": "0.01%","earnings": "$5.00"},
                  {"name": "Bank of Everywhere","apy": "0.01%","earnings": "$5.00"}
                ];
});
