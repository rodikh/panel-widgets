"use strict";

angular
    .module('chegg-panel-widgets')
    .directive('directiveWidget', [directiveWidget]);

function directiveWidget() {
    return {
        templateUrl: 'chegg-panel-widgets/directive-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@',
            directive: '=',
            config: '='
        }
    };
}