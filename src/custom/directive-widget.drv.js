"use strict";

angular
    .module('panel-widgets')
    .directive('directiveWidget', [directiveWidget]);

function directiveWidget() {
    return {
        templateUrl: 'panel-widgets/src/templates/directive-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@',
            directive: '=',
            config: '='
        }
    };
}