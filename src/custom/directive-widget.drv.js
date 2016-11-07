"use strict";

angular
    .module('chegg-panel-widgets')
    .directive('directiveWidget', ['$compile', directiveWidget]);

function directiveWidget($compile) {
    return {
        templateUrl: 'chegg-panel-widgets/directive-widget.html',
        restrict: 'EA',
        link: function (scope, element, attrs) {
            scope.directive = attrs.directive;
        }
    };
}