"use strict";
angular.module('chegg-panel-widgets',
    [
        'ngSanitize',
        'ui.bootstrap',
        'chart.js',
        'jsonFormatter'
    ]
).config(["ChartJsProvider",
    function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            colours: ['#FF5252', '#FF8A80'],
            responsive: true,
            animation: false
        });
    }
]);