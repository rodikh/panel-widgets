/**
 * Widget Directive
 */
"use strict";
angular
    .module('panel-widgets')
    .directive('listWidget', ["DataService", listWidget]);

function listWidget(DataService) {
    var directive = {
        templateUrl: 'panel-widgets/src/templates/list-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@'
        },
        link : function (scope, element, attrs) {
            if (!DataService.hasOwnProperty(attrs.action)) {
                return false;
            }

            DataService[attrs.action](attrs.param1).then(function(rows) {
                scope.rows = rows;
            });
        }
    };
    return directive;
}