"use strict";
angular.module('chegg-panel-widgets',
    [
        'ngSanitize',
        'ui.bootstrap',
        'btford.socket-io',
        'chart.js'
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