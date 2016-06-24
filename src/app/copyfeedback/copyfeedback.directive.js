(function() {
  'use strict';

  angular
    .module('assetengineupload')
    .directive('copyfeedback', copyfeedbackDirective);

  /** @ngInject */
  function copyfeedbackDirective() {
    return {
        restrict: 'AE',
        link: function link(scope, element) {

          // On click add animation class
          element.bind('click', function() {
            angular.element(".filu-copy").addClass("animate-copy");
              angular.element(".filu-copy").one('animationiteration webkitAnimationIteration', function() {
                  angular.element(this).removeClass("animate-copy");
              });
          });

        }
    };
  }
})();
