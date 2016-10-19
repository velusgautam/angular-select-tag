;(function () {
  'use strict'

  angular
    .module('select')
    .controller('selectController', selectController);

  selectController.$inject = ['$scope'];

  function selectController ($scope) {
    var vm = this;
   

    activate()

    function activate () {
      $scope.hello = "hello"
    }
  }
})()
