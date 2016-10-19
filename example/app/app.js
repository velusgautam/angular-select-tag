; (function () {
  'use strict'
  angular.module('angular-select', ["ui.select"]).config(function ($sceProvider) {
    $sceProvider.enabled(false);
  });
})()
