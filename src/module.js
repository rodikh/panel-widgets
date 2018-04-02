// import angular from "angular";
// import 'angular-sanitize';
// import 'angular-chart.js';
// import 'angular-ui-bootstrap';
// import 'jsonformatter';

export default angular.module('panel-widgets',
    [
        'ngSanitize',
        'ui.bootstrap',
        'chart.js',
        'jsonFormatter'
    ]
).config(["ChartJsProvider",
    function (ChartJsProvider) {
        ChartJsProvider.setOptions({
            responsive: true,
            animation: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0
                    }
                }]
            }
        });
    }
]).name;