(function() {
  'use strict';

  angular
    .module('assetengineupload')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, Upload) {
    var vm = this;

    vm.title = "FiLu";

    vm.result = {
    	success: false
    }

    vm.uploadFiles = function(file, errFiles) {
    	// console.log(file);
        vm.f = file;
        vm.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                url: 'http://localhost:3000/srv/image',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                    vm.result = response.data;
                    // console.log(vm.result);
                });
            }, function (response) {
                if (response.status > 0)
                    vm.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 *
                                         evt.loaded / evt.total));
            });
        }
    }

  }
})();
