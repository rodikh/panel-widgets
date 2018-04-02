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
            queryfunction: '=',
            config: '='
        },
        link: function ($scope, element, attrs) {
            $scope.labels = [9, 8, 7, 6, 5, 4, 3, 2, 1];
            $scope.series = [];
            $scope.data = [];

            if ($scope.config.queryfunction) {

            }

            function updateLog(log) {
                // TODO: clean this up, make generalized
                //console.log('chart log', log);
                var i = 0;
                var series = [];
                for (var key in log) {
                    series.push(key);
                    $scope.data[i] = log[key].active;
                    i++;
                }
                $scope.series = series;
            }

            if ($scope.config.socketEvent) {
                $scope.config.socket.emit($scope.config.socketEvent+' tail', function (log) {
                    updateLog(log);

                });
                $scope.config.socket.forward($scope.config.socketEvent+' log', $scope);
                $scope.$on('socket:'+$scope.config.socketEvent+' log', function (ev, log) {
                    updateLog(log);
                });
            }
        }
    };
}