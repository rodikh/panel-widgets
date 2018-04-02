/**
 * Widget Header Directive
 */

angular
    .module('panel-widgets')
    .directive('rdWidgetHeader', rdWidgetTitle);

function rdWidgetTitle() {
    var directive = {
        requires: '^rdWidget',
        scope: {
            title: '@',
            icon: '@',
            bootstrapSizes: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right {{bootstrapSizes}}" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};
