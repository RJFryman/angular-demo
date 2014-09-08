(function(){
  'use strict';

  angular.module('demo', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.name = 'RJFryman';
    $scope.age = 23;
    $scope.isBirthday;
    $scope.dogs = [
      {name:'fido', age:3},
      {name:'baxter', age:2},
      {name:'skip', age:6}
    ];
  }]);
})();
