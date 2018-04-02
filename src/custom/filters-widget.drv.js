/**
 * Widget Directive
 */
"use strict";
angular
    .module('panel-widgets')
    .directive('filtersWidget', [filtersWidget]);

function filtersWidget() {
    return {
        templateUrl: 'panel-widgets/src/templates/filters-widget.html',
        restrict: 'EA',
        scope: {
            config: "=",
            filters: "="
        },
        link: function (scope) {
            if (scope.config) {
                scope.config.forEach(function(item) {
                    if (item.options && item.options.then) {
                        item.options.then(function(data) {
                            item.options = data;
                        });
                    }
                });
            }
        }
    };
}