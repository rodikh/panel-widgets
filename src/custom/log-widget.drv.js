/**
 * Widget Directive
 */

angular
    .module('chegg-panel-widgets')
    .directive('logWidget', ['mySocket', logWidget]);

function logWidget(mySocket) {
    return {
        templateUrl: 'chegg-panel-widgets/log-widget.html',
        restrict: 'EA',
        scope: {
            name: '@',
            icon: '@',
            config: '='
        },
        link: function ($scope, element, attrs) {
            var MAX_LOG_LENGTH = 100;

            var logId = $scope.config.foreverPid;
            mySocket.emit('forever tail', logId, function (log) {
                $scope.log = log;
            });
            mySocket.forward('forever log ' + logId, $scope);
            $scope.$on('socket:forever log ' + logId, function (ev, data) {
                $scope.log.push(data);
                if ($scope.log.length > MAX_LOG_LENGTH) {
                    $scope.log.splice(0, $scope.log.length - MAX_LOG_LENGTH);
                }
            });
        }
    };
}