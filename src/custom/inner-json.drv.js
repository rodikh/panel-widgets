/**
 * Created by alex on 07/04/16.
 */

"use strict";

angular
    .module('chegg-panel-widgets')
    .directive('innerJson', [innerJson]);

function innerJson() {
    return {
        templateUrl: 'templates/innerJson.html',
        restrict: 'EA',
        replace: true,
        link: function (scope, element, attrs) {
            var json = scope.row;
            if (attrs.prop) {
                json = scope.row[attrs.prop];
                if (typeof json === "string") {
                    try {
                        json = JSON.parse(scope.row[attrs.prop]);
                    } catch (err) {
                        console.warn("Couldn't parse json");
                    }
                }
            }
            scope.json = json;
        }
    };
}