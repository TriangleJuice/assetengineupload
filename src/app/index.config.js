(function() {
  'use strict';

  angular
    .module('assetengineupload')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
