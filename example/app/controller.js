;(function () {
  'use strict'

  angular
    .module('angular-select')
    .controller('selectController', selectController);

  selectController.$inject = ['$scope',];

  function selectController ($scope) {
    var vm = this;
   

    activate()

    function activate () {
      $scope.data = ["Saab", "Volvo", "BMW","mmm","aa","ooo"];
      $scope.modelData = "Saab";
    }
  }
})()
