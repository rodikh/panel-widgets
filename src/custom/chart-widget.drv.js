/**
 * Widget Directive
 */
"use strict";

angular
    .module('panel-widgets')
    .directive('chartWidget', [chartWidget]);

function chartWidget() {
    return {
        templateUrl: 'panel-widgets/src/templates/chart-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@',
            queryfunction: '&',
            config: '='
        },
        link: function ($scope, element, attrs) {
            $scope.chartType = $scope.config.chartType;
            $scope.options = $scope.config.options;
            $scope.labels = $scope.config.labels;
            $scope.series = $scope.config.series;
            $scope.data = $scope.config.data;
            $scope.colors = $scope.config.colors;
            $scope.onClick = $scope.config.onClick;
            $scope.onHover = $scope.config.onHover;
            $scope.datasetOverride = $scope.config.datasetOverride;

            if ($scope.config.source && $scope.config.source.then) {
                $scope.config.source.then((result)=>{
                    if (result.data) {
                        $scope.labels = result.labels;
                        $scope.series = result.series;
                        $scope.data = result.data;
                    } else {
                        $scope.labels = result.map(function(item){return item.label});
                        $scope.data = result.map(function(item){return item.value});
                    }

                });
            }
            if ($scope.config.queryfunction) {
                $scope.config.queryfunction().then((result)=>{
                    $scope.labels = result.labels;
                    $scope.series = result.labels;
                    $scope.data = result.data;
                });
            }
        }
    };
}