var panelWidgets =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/compile.drv.js":
/*!*********************************!*\
  !*** ./src/core/compile.drv.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('panel-widgets').directive('compile', ['$compile', compile]);\n\nfunction compile($compile) {\n    return function (scope, element, attrs) {\n        scope.$watch(function (scope) {\n            // watch the 'compile' expression for changes\n            return scope.$eval(attrs.compile);\n        }, function (value) {\n            // when the 'compile' expression changes\n            // assign it into the current DOM\n            element.html(value);\n\n            // compile the new DOM and link it to the current\n            // scope.\n            // NOTE: we only compile .childNodes so that\n            // we don't get into infinite loop compiling ourselves\n            $compile(element.contents())(scope);\n        });\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/core/compile.drv.js?");

/***/ }),

/***/ "./src/core/loading.drv.js":
/*!*********************************!*\
  !*** ./src/core/loading.drv.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Loading Directive\n * @see http://tobiasahlin.com/spinkit/\n */\n\nangular.module('panel-widgets').directive('rdLoading', rdLoading);\n\nfunction rdLoading() {\n    var directive = {\n        restrict: 'AE',\n        template: '<div class=\"loading\"><div class=\"double-bounce1\"></div><div class=\"double-bounce2\"></div></div>'\n    };\n    return directive;\n};\n\n//# sourceURL=webpack://panelWidgets/./src/core/loading.drv.js?");

/***/ }),

/***/ "./src/core/widget-body.drv.js":
/*!*************************************!*\
  !*** ./src/core/widget-body.drv.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Body Directive\n */\n\nangular.module('panel-widgets').directive('rdWidgetBody', rdWidgetBody);\n\nfunction rdWidgetBody() {\n    var directive = {\n        requires: '^rdWidget',\n        scope: {\n            loading: '@?',\n            classes: '@?'\n        },\n        transclude: true,\n        template: '<div class=\"widget-body\" ng-class=\"classes\"><rd-loading ng-show=\"loading\"></rd-loading><div ng-hide=\"loading\" class=\"widget-content\" ng-transclude></div></div>',\n        restrict: 'E'\n    };\n    return directive;\n};\n\n//# sourceURL=webpack://panelWidgets/./src/core/widget-body.drv.js?");

/***/ }),

/***/ "./src/core/widget-footer.drv.js":
/*!***************************************!*\
  !*** ./src/core/widget-footer.drv.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Footer Directive\n */\n\nangular.module('panel-widgets').directive('rdWidgetFooter', rdWidgetFooter);\n\nfunction rdWidgetFooter() {\n    var directive = {\n        requires: '^rdWidget',\n        transclude: true,\n        template: '<div class=\"widget-footer\" ng-transclude></div>',\n        restrict: 'E'\n    };\n    return directive;\n};\n\n//# sourceURL=webpack://panelWidgets/./src/core/widget-footer.drv.js?");

/***/ }),

/***/ "./src/core/widget-header.drv.js":
/*!***************************************!*\
  !*** ./src/core/widget-header.drv.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Header Directive\n */\n\nangular.module('panel-widgets').directive('rdWidgetHeader', rdWidgetTitle);\n\nfunction rdWidgetTitle() {\n    var directive = {\n        requires: '^rdWidget',\n        scope: {\n            title: '@',\n            icon: '@',\n            bootstrapSizes: '@'\n        },\n        transclude: true,\n        template: '<div class=\"widget-header\"><div class=\"row\"><div class=\"pull-left\"><i class=\"fa\" ng-class=\"icon\"></i> {{title}} </div><div class=\"pull-right {{bootstrapSizes}}\" ng-transclude></div></div></div>',\n        restrict: 'E'\n    };\n    return directive;\n};\n\n//# sourceURL=webpack://panelWidgets/./src/core/widget-header.drv.js?");

/***/ }),

/***/ "./src/core/widget.drv.js":
/*!********************************!*\
  !*** ./src/core/widget.drv.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Directive\n */\n\nangular.module('panel-widgets').directive('rdWidget', rdWidget);\n\nfunction rdWidget() {\n    var directive = {\n        transclude: true,\n        template: '<div class=\"widget\" ng-transclude></div>',\n        restrict: 'EA'\n    };\n    return directive;\n\n    function link(scope, element, attrs) {\n        /* */\n    }\n};\n\n//# sourceURL=webpack://panelWidgets/./src/core/widget.drv.js?");

/***/ }),

/***/ "./src/custom/chart-widget.drv.js":
/*!****************************************!*\
  !*** ./src/custom/chart-widget.drv.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Widget Directive\n */\n\n\nangular.module('panel-widgets').directive('chartWidget', [chartWidget]);\n\nfunction chartWidget() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/chart-widget.html',\n        restrict: 'EA',\n        scope: {\n            name: '@',\n            icon: '@',\n            queryfunction: '&',\n            config: '='\n        },\n        link: function ($scope, element, attrs) {\n            $scope.chartType = $scope.config.chartType;\n            $scope.options = $scope.config.options;\n            $scope.labels = $scope.config.labels;\n            $scope.series = $scope.config.series;\n            $scope.data = $scope.config.data;\n            $scope.colors = $scope.config.colors;\n            $scope.onClick = $scope.config.onClick;\n            $scope.onHover = $scope.config.onHover;\n            $scope.datasetOverride = $scope.config.datasetOverride;\n\n            if ($scope.config.source && $scope.config.source.then) {\n                $scope.loading = true;\n                $scope.config.source.then(result => {\n                    $scope.loading = false;\n\n                    if (result.data) {\n                        $scope.labels = result.labels;\n                        $scope.series = result.series;\n                        $scope.data = result.data;\n                    } else {\n                        $scope.labels = result.map(function (item) {\n                            return item.label;\n                        });\n                        $scope.data = result.map(function (item) {\n                            return item.value;\n                        });\n                    }\n                });\n            }\n            if ($scope.config.queryfunction) {\n                $scope.config.queryfunction().then(result => {\n                    $scope.labels = result.labels;\n                    $scope.series = result.labels;\n                    $scope.data = result.data;\n                });\n            }\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/chart-widget.drv.js?");

/***/ }),

/***/ "./src/custom/directive-widget.drv.js":
/*!********************************************!*\
  !*** ./src/custom/directive-widget.drv.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('panel-widgets').directive('directiveWidget', [directiveWidget]);\n\nfunction directiveWidget() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/directive-widget.html',\n        restrict: 'EA',\n        scope: {\n            name: '@',\n            icon: '@',\n            directive: '=',\n            config: '='\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/directive-widget.drv.js?");

/***/ }),

/***/ "./src/custom/editable-field.drv.js":
/*!******************************************!*\
  !*** ./src/custom/editable-field.drv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Widget Directive\n */\n\n\nangular.module('panel-widgets').directive('editableField', [EditableField]);\n\nfunction EditableField() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/editable-field.html',\n        restrict: 'EA',\n        scope: {\n            editableValue: \"=\",\n            editableField: \"=\",\n            editableSave: \"=\",\n            row: \"=\"\n        },\n        link: function (scope) {\n            scope.undo = scope.editableValue;\n            scope.expand = false;\n            scope.status = {};\n            scope.onblur = function () {\n                scope.status.result = 'fa-spinner';\n                scope.status.resultColor = 'black';\n\n                scope.expand = false;\n                if (typeof scope.editableSave === 'function') {\n                    scope.editableSave(scope.row).then(function () {\n                        scope.status.result = 'fa-check';\n                        scope.status.resultColor = 'green';\n                    });\n                }\n            };\n            scope.onclick = function () {\n                scope.expand = true;\n            };\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/editable-field.drv.js?");

/***/ }),

/***/ "./src/custom/filters-widget.drv.js":
/*!******************************************!*\
  !*** ./src/custom/filters-widget.drv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Widget Directive\n */\n\n\nangular.module('panel-widgets').directive('filtersWidget', [filtersWidget]);\n\nfunction filtersWidget() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/filters-widget.html',\n        restrict: 'EA',\n        scope: {\n            config: \"=\",\n            filters: \"=\"\n        },\n        link: function (scope) {\n            if (scope.config) {\n                scope.config.forEach(function (item) {\n                    if (item.options && item.options.then) {\n                        item.options.then(function (data) {\n                            item.options = data;\n                        });\n                    }\n                });\n            }\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/filters-widget.drv.js?");

/***/ }),

/***/ "./src/custom/inner-json.drv.js":
/*!**************************************!*\
  !*** ./src/custom/inner-json.drv.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Created by alex on 07/04/16.\n */\n\n\n\nangular.module('panel-widgets').directive('innerJson', [innerJson]);\n\nfunction innerJson() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/inner-json.html',\n        restrict: 'EA',\n        replace: true,\n        link: function (scope, element, attrs) {\n            var json = scope.row;\n            if (attrs.prop) {\n                json = scope.row[attrs.prop];\n                if (typeof json === \"string\") {\n                    try {\n                        json = JSON.parse(scope.row[attrs.prop]);\n                    } catch (err) {\n                        console.warn(\"Couldn't parse json\");\n                    }\n                }\n            }\n            scope.json = json;\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/inner-json.drv.js?");

/***/ }),

/***/ "./src/custom/list-widget.drv.js":
/*!***************************************!*\
  !*** ./src/custom/list-widget.drv.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Widget Directive\n */\n\n\nangular.module('panel-widgets').directive('listWidget', [\"DataService\", listWidget]);\n\nfunction listWidget(DataService) {\n    var directive = {\n        templateUrl: 'panel-widgets/src/templates/list-widget.html',\n        restrict: 'EA',\n        scope: {\n            name: '@',\n            icon: '@'\n        },\n        link: function (scope, element, attrs) {\n            if (!DataService.hasOwnProperty(attrs.action)) {\n                return false;\n            }\n\n            DataService[attrs.action](attrs.param1).then(function (rows) {\n                scope.rows = rows;\n            });\n        }\n    };\n    return directive;\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/list-widget.drv.js?");

/***/ }),

/***/ "./src/custom/log-widget.drv.js":
/*!**************************************!*\
  !*** ./src/custom/log-widget.drv.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Directive\n */\n\nangular.module('panel-widgets').directive('logWidget', [logWidget]);\n\nfunction logWidget() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/log-widget.html',\n        restrict: 'EA',\n        scope: {\n            name: '@',\n            icon: '@',\n            config: '='\n        },\n        link: function ($scope, element, attrs) {\n            var MAX_LOG_LENGTH = 100;\n\n            var logId = $scope.config.foreverPid;\n            $scope.config.socket.emit('forever tail', logId, function (log) {\n                $scope.log = log;\n            });\n            $scope.config.socket.forward('forever log ' + logId, $scope);\n            $scope.$on('socket:forever log ' + logId, function (ev, data) {\n                $scope.log.push(data);\n                if ($scope.log.length > MAX_LOG_LENGTH) {\n                    $scope.log.splice(0, $scope.log.length - MAX_LOG_LENGTH);\n                }\n            });\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/log-widget.drv.js?");

/***/ }),

/***/ "./src/custom/review-widget.js":
/*!*************************************!*\
  !*** ./src/custom/review-widget.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Widget Directive\n */\n\nangular.module('panel-widgets').directive('reviewWidget', [reviewWidget]);\n\nfunction reviewWidget() {\n    return {\n        templateUrl: 'panel-widgets/src/templates/review-widget.html',\n        restrict: 'EA',\n        controller: ['$scope', '$controller', function ($scope, $controller) {\n            if ($scope.config && $scope.config.reviewController) {\n                return $controller($scope.config.reviewController, { $scope: $scope });\n            }\n        }],\n        controllerAs: 'review',\n        scope: {\n            name: '@',\n            icon: '@',\n            queryfunction: '=',\n            config: '='\n        },\n        link: function (scope, element) {\n            if (typeof scope.queryfunction !== 'function') {\n                console.error('ERROR:: List Widget: Source data malformed');\n                return false;\n            }\n            scope.fixedRowMask = scope.config && scope.config.rowsMask ? scope.config.rowsMask : [];\n\n            scope.limit = scope.config && scope.config.pageSize ? scope.config.pageSize : 20;\n            scope.maxSize = 6;\n            scope.loading = true;\n            scope.filters = {};\n\n            var lastPromise;\n            scope.pagination = function (currentPage) {\n                scope.currentPage = currentPage || scope.currentPage || 1;\n                scope.loading = true;\n                if (lastPromise) {\n                    console.log('TODO REJECT PROMISE');\n                    // lastPromise.reject();\n                }\n                lastPromise = scope.queryfunction((scope.currentPage - 1) * scope.limit, scope.limit, scope.filters);\n                lastPromise.then(function (data) {\n                    scope.loading = false;\n                    scope.totalItems = data.count;\n\n                    if (Array.isArray(data.rows)) {\n                        scope.rows = data.rows;\n                    } else if (Array.isArray(data)) {\n                        scope.rows = data;\n                    } else {\n                        console.error('ERROR:: List Widget: Source data malformed', data);\n                    }\n\n                    if (scope.rows.length === 0) {\n                        console.warn('Warning:: Empty result for:', scope.name);\n                        return;\n                    }\n\n                    if (!scope.fixedRowMask.length) {\n                        scope.fixedRowMask = Object.keys(scope.rows[0]);\n                    }\n                });\n            };\n\n            if (scope.config && scope.config.filters) {\n                scope.$watch('filters', function () {\n                    scope.pagination();\n                }, true);\n            } else {\n                scope.pagination(); // no need to init twice, $watch auto runs first time.\n            }\n\n            scope.toggleRow = function (index) {\n                angular.element(element[0].querySelector('.hiddenRow' + index)).toggleClass('collapse');\n            };\n\n            scope.refreshList = function () {\n                scope.pagination();\n            };\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/review-widget.js?");

/***/ }),

/***/ "./src/custom/value-widget.drv.js":
/*!****************************************!*\
  !*** ./src/custom/value-widget.drv.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Widget Directive\n */\n\n\nangular.module('panel-widgets').directive('valueWidget', [valueWidget]);\n\nfunction valueWidget() {\n    var iconColors = ['green', 'red', 'orange', 'blue'];\n\n    return {\n        templateUrl: 'panel-widgets/src/templates/value-widget.html',\n        restrict: 'EA',\n        scope: {\n            name: '@',\n            icon: '@',\n            source: '=',\n            key: '=',\n            color: '='\n        },\n        link: function (scope) {\n            scope.loading = true;\n            if (scope.source && scope.source.then) {\n                scope.source.then(function (result) {\n                    scope.loading = false;\n                    if (scope.key) {\n                        scope.value = result[scope.key];\n                    } else {\n                        scope.value = result;\n                    }\n                });\n            } else if (typeof scope.source === 'function') {\n                scope.source().then(function (result) {\n                    scope.loading = false;\n                    if (scope.key) {\n                        scope.value = result[scope.key];\n                    } else {\n                        scope.value = result;\n                    }\n                });\n            } else {\n                scope.loading = false;\n                scope.$watch('source', function (prev, next) {\n                    scope.value = scope.source;\n                });\n            }\n        }\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/custom/value-widget.drv.js?");

/***/ }),

/***/ "./src/filters/titleCase.fil.js":
/*!**************************************!*\
  !*** ./src/filters/titleCase.fil.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nangular.module('panel-widgets').filter('titleCase', [titleCaseFil]);\n\nfunction titleCaseFil() {\n    return function (input) {\n        var result = input.replace(/([A-Z])/g, \" $1\");\n        return result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first letter - as an example.\n    };\n}\n\n//# sourceURL=webpack://panelWidgets/./src/filters/titleCase.fil.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ \"./src/module.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _module__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _core_compile_drv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/compile.drv */ \"./src/core/compile.drv.js\");\n/* harmony import */ var _core_compile_drv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_compile_drv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_loading_drv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/loading.drv */ \"./src/core/loading.drv.js\");\n/* harmony import */ var _core_loading_drv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_loading_drv__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _core_widget_drv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/widget.drv */ \"./src/core/widget.drv.js\");\n/* harmony import */ var _core_widget_drv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_core_widget_drv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _core_widget_body_drv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/widget-body.drv */ \"./src/core/widget-body.drv.js\");\n/* harmony import */ var _core_widget_body_drv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_core_widget_body_drv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _core_widget_footer_drv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/widget-footer.drv */ \"./src/core/widget-footer.drv.js\");\n/* harmony import */ var _core_widget_footer_drv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_core_widget_footer_drv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _core_widget_header_drv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/widget-header.drv */ \"./src/core/widget-header.drv.js\");\n/* harmony import */ var _core_widget_header_drv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_core_widget_header_drv__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _custom_chart_widget_drv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom/chart-widget.drv */ \"./src/custom/chart-widget.drv.js\");\n/* harmony import */ var _custom_chart_widget_drv__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_custom_chart_widget_drv__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _custom_directive_widget_drv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom/directive-widget.drv */ \"./src/custom/directive-widget.drv.js\");\n/* harmony import */ var _custom_directive_widget_drv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_custom_directive_widget_drv__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _custom_editable_field_drv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom/editable-field.drv */ \"./src/custom/editable-field.drv.js\");\n/* harmony import */ var _custom_editable_field_drv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_custom_editable_field_drv__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _custom_filters_widget_drv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom/filters-widget.drv */ \"./src/custom/filters-widget.drv.js\");\n/* harmony import */ var _custom_filters_widget_drv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_custom_filters_widget_drv__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _custom_inner_json_drv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custom/inner-json.drv */ \"./src/custom/inner-json.drv.js\");\n/* harmony import */ var _custom_inner_json_drv__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_custom_inner_json_drv__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _custom_list_widget_drv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom/list-widget.drv */ \"./src/custom/list-widget.drv.js\");\n/* harmony import */ var _custom_list_widget_drv__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_custom_list_widget_drv__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _custom_log_widget_drv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom/log-widget.drv */ \"./src/custom/log-widget.drv.js\");\n/* harmony import */ var _custom_log_widget_drv__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_custom_log_widget_drv__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _custom_review_widget__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./custom/review-widget */ \"./src/custom/review-widget.js\");\n/* harmony import */ var _custom_review_widget__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_custom_review_widget__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _custom_value_widget_drv__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./custom/value-widget.drv */ \"./src/custom/value-widget.drv.js\");\n/* harmony import */ var _custom_value_widget_drv__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_custom_value_widget_drv__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _filters_titleCase_fil__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./filters/titleCase.fil */ \"./src/filters/titleCase.fil.js\");\n/* harmony import */ var _filters_titleCase_fil__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_filters_titleCase_fil__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _templates_chart_widget_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/chart-widget.html */ \"./src/templates/chart-widget.html\");\n/* harmony import */ var _templates_chart_widget_html__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_templates_chart_widget_html__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _templates_directive_widget_html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/directive-widget.html */ \"./src/templates/directive-widget.html\");\n/* harmony import */ var _templates_directive_widget_html__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_templates_directive_widget_html__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _templates_editable_field_html__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/editable-field.html */ \"./src/templates/editable-field.html\");\n/* harmony import */ var _templates_editable_field_html__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_templates_editable_field_html__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _templates_filters_widget_html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templates/filters-widget.html */ \"./src/templates/filters-widget.html\");\n/* harmony import */ var _templates_filters_widget_html__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_templates_filters_widget_html__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _templates_inner_json_html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./templates/inner-json.html */ \"./src/templates/inner-json.html\");\n/* harmony import */ var _templates_inner_json_html__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_templates_inner_json_html__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _templates_list_widget_html__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templates/list-widget.html */ \"./src/templates/list-widget.html\");\n/* harmony import */ var _templates_list_widget_html__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_templates_list_widget_html__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _templates_log_widget_html__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./templates/log-widget.html */ \"./src/templates/log-widget.html\");\n/* harmony import */ var _templates_log_widget_html__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_templates_log_widget_html__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _templates_page_layout_html__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./templates/page-layout.html */ \"./src/templates/page-layout.html\");\n/* harmony import */ var _templates_page_layout_html__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_templates_page_layout_html__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _templates_review_widget_html__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./templates/review-widget.html */ \"./src/templates/review-widget.html\");\n/* harmony import */ var _templates_review_widget_html__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_templates_review_widget_html__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _templates_value_widget_html__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./templates/value-widget.html */ \"./src/templates/value-widget.html\");\n/* harmony import */ var _templates_value_widget_html__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_templates_value_widget_html__WEBPACK_IMPORTED_MODULE_26__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://panelWidgets/./src/index.js?");

/***/ }),

/***/ "./src/module.js":
/*!***********************!*\
  !*** ./src/module.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import angular from \"angular\";\n// import 'angular-sanitize';\n// import 'angular-chart.js';\n// import 'angular-ui-bootstrap';\n// import 'jsonformatter';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (angular.module('panel-widgets', ['ngSanitize', 'ui.bootstrap', 'chart.js', 'jsonFormatter']).config([\"ChartJsProvider\", function (ChartJsProvider) {\n    ChartJsProvider.setOptions({\n        responsive: true,\n        animation: false,\n        scales: {\n            yAxes: [{\n                ticks: {\n                    beginAtZero: true,\n                    min: 0\n                }\n            }]\n        }\n    });\n}]).name);\n\n//# sourceURL=webpack://panelWidgets/./src/module.js?");

/***/ }),

/***/ "./src/templates/chart-widget.html":
/*!*****************************************!*\
  !*** ./src/templates/chart-widget.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-header icon={{icon}} title={{name}}></rd-widget-header><rd-widget-body ng-if=loading><rd-loading class=small-loading></rd-loading></rd-widget-body><rd-widget-body ng-if=!loading><canvas class=\"chart chart-base\" chart-type=chartType chart-data=data chart-labels=labels chart-options=options chart-series=series chart-colors=colors chart-click=onClick chart-hover=onHover chart-dataset-override=datasetOverride></canvas></rd-widget-body></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/chart-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/chart-widget.html?");

/***/ }),

/***/ "./src/templates/directive-widget.html":
/*!*********************************************!*\
  !*** ./src/templates/directive-widget.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-body ng-if=loading><rd-loading class=small-loading></rd-loading></rd-widget-body><rd-widget-body ng-if=!loading><div compile=directive config=config></div></rd-widget-body></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/directive-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/directive-widget.html?");

/***/ }),

/***/ "./src/templates/editable-field.html":
/*!*******************************************!*\
  !*** ./src/templates/editable-field.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<span ng-if=\"editableField == \\'string\\'\"><span ng-show=!expand ng-click=onclick() ng-bind=\"editableValue||\\'undefined\\'\"></span> <input ng-show=expand ng-model=$parent.editableValue ng-blur=onblur()> <i ng-if=\"status.result!=0 && !expand\" class=\"menu-icon fa {{status.result}}\" uib-tooltip={{status.error}}></i></span>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/editable-field.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/editable-field.html?");

/***/ }),

/***/ "./src/templates/filters-widget.html":
/*!*******************************************!*\
  !*** ./src/templates/filters-widget.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<div ng-repeat=\"filter in config\"><div class=col-lg-2 ng-if=\"filter.type==\\'select\\'\"><select class=\"form-control input-sm\" ng-model=filters[filter.name] ng-change=updatedFilters()><option ng-repeat=\"option in filter.options\" value={{option}}>{{option}}</select></div><div class=col-lg-3 ng-if=\"filter.type==\\'input\\'\"><input class=\"form-control input-sm\" type=text ng-change=updatedFilters() ng-model=filters[filter.name] ng-model-options=\"{ debounce: 700 }\" placeholder={{filter.placeholder}}></div><div class=\"col-lg-3 btn-group\" ng-if=\"filter.type==\\'radio\\'\"><label class=\"btn btn-sm btn-primary\" ng-repeat=\"option in filter.options\" ng-model=filters[filter.name] ng-change=updatedFilters() uib-btn-radio=option>{{option}}</label></div><div class=\"col-lg-4 btn-group\" ng-if=\"filter.type==\\'flags\\'\" ng-init=\"filters[filter.name]={}\"><label class=\"btn btn-sm btn-primary\" ng-repeat=\"option in filter.options\" uib-btn-checkbox ng-model=filters[filter.name][option] ng-change=updatedFilters()>{{option}}</label></div></div>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/filters-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/filters-widget.html?");

/***/ }),

/***/ "./src/templates/inner-json.html":
/*!***************************************!*\
  !*** ./src/templates/inner-json.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<td class=hiddenRow colspan=100><div class=\"accordian-body collapse hiddenRow{{$index}}\"><json-formatter json=json open></json-formatter></div>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/inner-json.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/inner-json.html?");

/***/ }),

/***/ "./src/templates/list-widget.html":
/*!****************************************!*\
  !*** ./src/templates/list-widget.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-header icon={{icon}} title={{name}}></rd-widget-header><rd-widget-body classes=\"medium no-padding\"><div class=table-responsive><table class=table><thead><tr ng-if=rows[0]><th ng-repeat=\"(key, value) in rows[0]\">{{key}}<tbody><tr ng-repeat=\"row in rows\"><td ng-repeat=\"value in row\">{{value}}</table></div></rd-widget-body><rd-widget-footer ng-if=showPagination><ul uib-pagination total-items=totalItems items-per-page=limit max-size=maxSize boundary-link-numbers=true ng-model=currentPage ng-change=pagination(currentPage)></ul><div class=clearfix></div></rd-widget-footer></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/list-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/list-widget.html?");

/***/ }),

/***/ "./src/templates/log-widget.html":
/*!***************************************!*\
  !*** ./src/templates/log-widget.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-header icon={{icon}} title={{name}}></rd-widget-header><rd-widget-body classes=\"large logs\"><div ng-repeat=\"msg in log track by $index\"><span ng-bind-html=\"msg | to_trusted\"></span></div></rd-widget-body></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/log-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/log-widget.html?");

/***/ }),

/***/ "./src/templates/page-layout.html":
/*!****************************************!*\
  !*** ./src/templates/page-layout.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<div class=\"row alerts-container\" data-ng-show=alerts.length><div class=col-xs-12><uib-alert data-ng-repeat=\"alert in alerts\" type={{alert.type}} close=closeAlert($index)>{{alert.msg}}</uib-alert></div></div><div class=row ng-repeat=\"row in pageLayout\"><div ng-repeat=\"widget in row\" ng-class=\"[widget.widgetClass, {\\'col-lg-12\\':!widget.widgetClass, \\'col-lg-3 col-md-6 col-xs-12\\':widget.type==\\'value\\'}]\"><value-widget ng-if=\"widget.type==\\'value\\'\" name={{widget.name}} icon={{widget.icon}} source=widget.source key=widget.key color=widget.color></value-widget><log-widget ng-if=\"widget.type==\\'log\\'\" name={{widget.name}} icon={{widget.icon}} config=widget.config></log-widget><review-widget ng-if=\"widget.type==\\'list\\'\" name={{widget.name}} icon={{widget.icon}} queryfunction=widget.queryfunction config=widget.config></review-widget><chart-widget ng-if=\"widget.type==\\'chart\\'\" name={{widget.name}} icon={{widget.icon}} queryfunction=widget.queryfunction config=widget.config></chart-widget><executor-widget ng-if=\"widget.type==\\'executor\\'\" name={{widget.name}} icon={{widget.icon}}></executor-widget><directive-widget ng-if=\"widget.type==\\'directive\\'\" name={{widget.name}} icon={{widget.icon}} directive=widget.directive config=widget.config></directive-widget></div></div>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/page-layout.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/page-layout.html?");

/***/ }),

/***/ "./src/templates/review-widget.html":
/*!******************************************!*\
  !*** ./src/templates/review-widget.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-header icon={{icon}} title={{name}} bootstrap-sizes=\"col-md-11 col-lg-10\"><filters-widget config=config.filters filters=filters></filters-widget></rd-widget-header><rd-widget-body classes=\"no-padding {{config.widgetBodyClasses}}\"><rd-loading ng-show=loading></rd-loading><div ng-hide=loading><div class=table-responsive><table class=table><thead><tr ng-if=rows[0]><th ng-repeat=\"value in fixedRowMask\">{{value | titleCase}} <span class=\"fa fa-pencil\" ng-if=config.editable[value] ng-class=icon></span><tbody><tr ng-repeat-start=\"row in rows\" ng-class=config.rowClass(row) ng-click=toggleRow($index)><td ng-repeat=\"value in fixedRowMask\"><span ng-if=\"typeof (config.customFields[value]) == function\" compile=\"config.customFields[value](row, this)\"></span> <span ng-if=config.editable[value] editable-field=config.editable[value] editable-value=row[value] editable-save=config.editableSave row=row></span> <span ng-if=\"config.customFields[value] == undefined && config.editable[value] == undefined\">{{row[value]}}</span><tr ng-repeat-end compile=config.innerDirective></table></div></div></rd-widget-body><rd-widget-footer ng-if=\"config.showPagination==undefined || config.showPagination == true\"><ul uib-pagination total-items=totalItems items-per-page=limit max-size=maxSize boundary-link-numbers=true ng-model=currentPage ng-change=pagination(currentPage)></ul></rd-widget-footer></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/review-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/review-widget.html?");

/***/ }),

/***/ "./src/templates/value-widget.html":
/*!*****************************************!*\
  !*** ./src/templates/value-widget.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var v1='<rd-widget><rd-widget-body ng-if=loading><rd-loading class=small-loading></rd-loading></rd-widget-body><rd-widget-body ng-if=!loading><div class=\"widget-icon {{color}} pull-left\"><i class=\"fa {{icon}}\"></i></div><div class=title>{{value}}</div><div class=comment>{{name}}</div></rd-widget-body></rd-widget>';\nangular.module('panel-widgets').run(['$templateCache', function ($templateCache) {$templateCache.put('panel-widgets/src/templates/value-widget.html', v1);}]);\nmodule.exports=v1\n\n//# sourceURL=webpack://panelWidgets/./src/templates/value-widget.html?");

/***/ })

/******/ })["default"];