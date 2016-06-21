(function() {
  'use strict';

  angular
    .module('assetengineupload')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
