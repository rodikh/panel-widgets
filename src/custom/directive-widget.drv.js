"use strict";

angular
    .module('RDash')
    .directive('directiveWidget', ['$compile', directiveWidget]);

function directiveWidget($compile) {
    return {
        templateUrl: 'chegg-panel-widgets/directive-widget.html',
        restrict: 'EA',
        replace: true,
        link: function (scope, element, attrs) {
        }
    };
}