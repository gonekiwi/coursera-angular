(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

  $scope.infomessage="";
  $scope.lunch_menu="";

  $scope.check_lunch_menu = function () {

    var lunchItemsString = $scope.lunch_menu;
    console.log(lunchItemsString);
    if ( lunchItemsString.length == 0 ) {
      $scope.infomessage="Please enter data first";
    } else {
      var lunchItems = lunchItemsString.split(",");
      if ( lunchItems.length > 3 ) {
        $scope.infomessage="Too much!";
      } else {
        $scope.infomessage="Enjoy!";
      }
  }
}}

})();
