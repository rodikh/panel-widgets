/**
 * Widget Directive
 */

angular
    .module('chegg-panel-widgets')
    .directive('reviewWidget', [reviewWidget]);

function reviewWidget() {
    return {
        templateUrl: 'chegg-panel-widgets/review-widget.html',
        restrict: 'EA',
        controller: ['$scope', '$controller', function ($scope, $controller) {
            if ($scope.config && $scope.config.reviewController) {
                return $controller($scope.config.reviewController, {$scope: $scope});
            }
        }],
        controllerAs: 'review',
        scope: {
            name: '@',
            icon: '@',
            queryfunction: '=',
            config: '='
        },
        link: function (scope, element) {
            if (typeof scope.queryfunction !== 'function') {
                console.error('ERROR:: List Widget: Source data malformed');
                return false;
            }
            scope.fixedRowMask = (scope.config && scope.config.rowsMask) ? scope.config.rowsMask : [];

            scope.limit = (scope.config && scope.config.pageSize) ? scope.config.pageSize : 20;
            scope.maxSize = 6;
            scope.loading = true;
            scope.filters = {};

            scope.pagination = function (currentPage) {
                scope.currentPage = currentPage || (scope.currentPage || 1);
                scope.loading = true;
                scope.queryfunction((scope.currentPage - 1) * scope.limit, scope.limit, scope.filters).then(function (data) {
                    scope.loading = false;
                    scope.totalItems = data.count;

                    if (Array.isArray(data.rows)) {
                        scope.rows = data.rows;
                    } else if (Array.isArray(data)) {
                        scope.rows = data;
                    } else {
                        console.error('ERROR:: List Widget: Source data malformed', data);
                    }

                    if (scope.rows.length === 0) {
                        console.warn('Warning:: Empty result for:', scope.name);
                        return;
                    }

                    if (!scope.fixedRowMask.length) {
                        scope.fixedRowMask = Object.keys(scope.rows[0]);
                    }

                });
            };

            if (scope.config && scope.config.filters) {
                scope.$watch('filters', function () {
                    scope.pagination();
                }, true);
            } else {
                scope.pagination();         // no need to init twice, $watch auto runs first time.
            }

            scope.toggleRow = function (index) {
                angular.element(element[0].querySelector('.hiddenRow' + index)).toggleClass('collapse');
            };
        }
    };
}