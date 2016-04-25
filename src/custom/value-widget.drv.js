/**
 * Widget Directive
 */
"use strict";

angular
    .module('chegg-panel-widgets')
    .directive('valueWidget', [valueWidget]);

function valueWidget() {
    var iconColors = ['green','red','orange','blue'];

    return {
        templateUrl: 'chegg-panel-widgets/value-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@',
            source: '=',
            key: '=',
            color: '='
        },
        link: function(scope) {
            scope.loading = true;
            if (scope.source && scope.source.then) {
                scope.source.then(function (result) {
                    scope.loading = false;
                    if (scope.key) {
                        scope.value = result[scope.key];
                    } else {
                        scope.value = result;
                    }
                });
            } else if (typeof scope.source === 'function') {
                scope.source().then(function(result){
                    scope.loading = false;
                    if (scope.key) {
                        scope.value = result[scope.key];
                    } else {
                        scope.value = result;
                    }
                });
            } else {
                scope.loading = false;
                scope.$watch('source', function (prev, next) {
                    scope.value = scope.source;
                });
            }
        }
    };
}