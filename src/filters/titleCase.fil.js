"use strict";

angular.module('chegg-panel-widgets')
    .filter('titleCase', [titleCaseFil]);

function titleCaseFil() {
    return function(input) {
        var result = input.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter - as an example.
    };
}