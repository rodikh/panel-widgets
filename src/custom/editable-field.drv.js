/**
 * Widget Directive
 */
"use strict";
angular
    .module('panel-widgets')
    .directive('editableField', [EditableField]);

function EditableField() {
    return {
        templateUrl: 'panel-widgets/src/templates/editable-field.html',
        restrict: 'EA',
        scope: {
            editableValue: "=",
            editableField: "=",
            editableSave: "=",
            row: "="
        },
        link: function (scope) {
            scope.undo = scope.editableValue;
            scope.expand = false;
            scope.status = {};
            scope.onblur = function() {
                scope.status.result = 'fa-spinner';
                scope.status.resultColor = 'black';

                scope.expand = false;
                if (typeof scope.editableSave === 'function') {
                    scope.editableSave(scope.row).then(function() {
                        scope.status.result = 'fa-check';
                        scope.status.resultColor = 'green';
                    });
                }
            };
            scope.onclick = function() {
                scope.expand = true;
            };
        }
    };
}