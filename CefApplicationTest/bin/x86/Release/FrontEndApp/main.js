(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ccwlogo\r\n{\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNjd2xvZ29cclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"ccwlogo\">\n    <img src=\"../assets/CCW_Logo.png\" alt=\"...\">\n  </div>\n  <app-start-page></app-start-page>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/base-service */ "./src/app/shared/base-service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(translate, baseService) {
        this.title = 'startpage';
        // fallback language
        translate.setDefaultLang('en-US');
        baseService.getLanguage().subscribe(function (language) {
            translate.use(language);
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _shared_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _shared_solutionprovider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/solutionprovider.service */ "./src/app/shared/solutionprovider.service.ts");
/* harmony import */ var _shared_base_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/base-service */ "./src/app/shared/base-service.ts");
/* harmony import */ var _shared_mock_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/mock-service.service */ "./src/app/shared/mock-service.service.ts");












var serviceFactory = function () {
    var backendClient = window.cefCustomObject;
    var enviormentIsDestop = backendClient != null;
    return (enviormentIsDestop) ? new _shared_solutionprovider_service__WEBPACK_IMPORTED_MODULE_9__["SolutionproviderService"](backendClient) : new _shared_mock_service_service__WEBPACK_IMPORTED_MODULE_11__["MockServiceService"]();
};
var translateHttpLoaderFactory = function (http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_8__["StartPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: translateHttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                })
            ],
            providers: [
                { provide: _shared_base_service__WEBPACK_IMPORTED_MODULE_10__["BaseService"], useFactory: serviceFactory }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/base-service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/base-service.ts ***!
  \****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/mock-service.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/mock-service.service.ts ***!
  \************************************************/
/*! exports provided: MockServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockServiceService", function() { return MockServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MockServiceService = /** @class */ (function () {
    function MockServiceService() {
        var _this = this;
        this.onContentStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.projectList = [
            'project10.ccwsln',
            'project11.ccwsln',
            'project12.ccwsln',
        ];
        this.showStartupPage = true;
        document.addEventListener('ContentStatusChanged', function (event) {
            _this.onContentStatusChanged.emit({
                enableContent: event.detail.contentStatus
            });
        });
    }
    MockServiceService.prototype.openProject = function (projectName) {
    };
    MockServiceService.prototype.getSolutionList = function () {
        return this.projectList;
    };
    MockServiceService.prototype.getLanguage = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse('en-US'));
    };
    MockServiceService.prototype.newProject = function () {
    };
    MockServiceService.prototype.openExistingProject = function () {
    };
    MockServiceService.prototype.discoverProject = function () {
    };
    MockServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockServiceService);
    return MockServiceService;
}());



/***/ }),

/***/ "./src/app/shared/solutionprovider.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/solutionprovider.service.ts ***!
  \****************************************************/
/*! exports provided: SolutionproviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionproviderService", function() { return SolutionproviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SolutionproviderService = /** @class */ (function () {
    function SolutionproviderService(cefCustomObject) {
        var _this = this;
        this.cefCustomObject = cefCustomObject;
        this.solutionNameList = [];
        this.onContentStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showStartupPage = true;
        document.addEventListener('ContentStatusChanged', function (event) {
            _this.onContentStatusChanged.emit({
                enableContent: event.detail.contentStatus
            });
        });
    }
    SolutionproviderService.prototype.getSolutionList = function () {
        var _this = this;
        var num = 0;
        this.cefCustomObject.getSolutionList().then(function (projectName) {
            if (projectName !== '') {
                var result = JSON.parse(projectName);
                for (num = 0; num < result.length; num++) {
                    _this.solutionNameList.push(result[num]);
                }
            }
        });
        return this.solutionNameList;
    };
    SolutionproviderService.prototype.getLanguage = function () {
        var defaultLanguage = 'en-US';
        var language = this.cefCustomObject.getLanguage();
        if (language !== '') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(language));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(JSON.parse(defaultLanguage));
        }
    };
    SolutionproviderService.prototype.openProject = function (projectName) {
        this.cefCustomObject.openProject(projectName);
    };
    SolutionproviderService.prototype.newProject = function () {
    };
    SolutionproviderService.prototype.openExistingProject = function () {
    };
    SolutionproviderService.prototype.discoverProject = function () {
    };
    SolutionproviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SolutionproviderService);
    return SolutionproviderService;
}());



/***/ }),

/***/ "./src/app/start-page/start-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start-page/start-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-weight-normal{\r\n    font-size: 22px;\r\n}\r\n.main-header{\r\n    margin-left: 20px;\r\n    margin-top:5px;\r\n}\r\n.sub-header{\r\n    margin-left: 20px;\r\n}\r\n.project-link{\r\n    margin-left: 20px;\r\n    font-size: 15px;\r\n    display: inline-block;\r\n    padding-bottom: 10px;\r\n}\r\n.solutions{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n.form-check{\r\n    margin-left: 20px;\r\n    bottom: 20px;\r\n    position: absolute;\r\n    font-size: 15px;\r\n}\r\n.disableLink{\r\n    color: currentColor;\r\n    cursor: not-allowed;\r\n    opacity: 0.5;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtcGFnZS9zdGFydC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXdlaWdodC1ub3JtYWx7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLm1haW4taGVhZGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxufVxyXG4uc3ViLWhlYWRlcntcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5wcm9qZWN0LWxpbmt7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5zb2x1dGlvbnN7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5mb3JtLWNoZWNre1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmRpc2FibGVMaW5re1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/start-page/start-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/start-page/start-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron\">\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <p class=\"font-weight-normal main-header\">Project</p>\n      <p class=\"font-weight-light sub-header\">Design, configure, program, visualize and maintain your machine</p>\n      <a class=\"project-link\" href=\"#\" onclick=\"cefCustomObject.newProject();\" [class.disableLink]=\"isContentDisabled\" >{{'NewProject' | translate}}</a>\n      <br>\n      <a class=\"project-link\" href=\"#\" onclick=\"cefCustomObject.openExistingProject();\" [class.disableLink]=\"isContentDisabled\">Open Existing...</a>\n      <br>\n      <a class=\"project-link\" href=\"#\" onclick=\"cefCustomObject.discoverProject();\" [class.disableLink]=\"isContentDisabled\">Discover...</a>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <p class=\"font-weight-normal main-header\">Getting Started</p>\n      <p class=\"font-weight-light sub-header\">Access online resources</p>\n      <a class=\"project-link\" href=\"http://www.rockwellautomation.com/go/lit/ccws\" target=\"_blank\">Welcome to Connected Components Workbench</a>\n      <br>\n      <a class=\"project-link\" href=\"http://www.rockwellautomation.com/global/products-technologies/connected-components/tools/workbench.page?#tab5\" target=\"_blank\">Training Videos</a>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <p class=\"font-weight-normal main-header\">Recent</p>\n      <ul class=\"solutions\">\n        <li *ngFor=\"let projectName of solutionList\" (click)=\"onSelect(projectName)\"><a href=\"#\" class=\"project-link\">{{projectName}}</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"form-check\">\n    <input class=\"form-check-input\" id=\"setStartupPage\" type=\"checkbox\" [(ngModel)]=\"showStartupPage\" (change)=\"onSetStartupPage()\">\n    <label class=\"form-check-label\" for=\"setStartupPage\">\n      Show page on startup\n    </label>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/base-service */ "./src/app/shared/base-service.ts");



var StartPageComponent = /** @class */ (function () {
    function StartPageComponent(service) {
        var _this = this;
        this.service = service;
        this.service.onContentStatusChanged.subscribe(function (value) {
            _this.updateContent(value.enableContent);
        });
    }
    StartPageComponent.prototype.ngOnInit = function () {
        this.solutionList = this.service.getSolutionList();
        this.isContentDisabled = false;
        this.showStartupPage = this.service.showStartupPage;
    };
    StartPageComponent.prototype.onSelect = function (name) {
        this.service.openProject(name);
    };
    StartPageComponent.prototype.onSetStartupPage = function () {
        this.service.showStartupPage = this.showStartupPage;
    };
    StartPageComponent.prototype.newProject = function () {
        this.service.newProject();
    };
    StartPageComponent.prototype.openExistingProject = function () {
        this.service.openExistingProject();
    };
    StartPageComponent.prototype.discoverProject = function () {
        this.service.discoverProject();
    };
    StartPageComponent.prototype.updateContent = function (value) {
        this.isContentDisabled = value;
    };
    StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-page',
            template: __webpack_require__(/*! ./start-page.component.html */ "./src/app/start-page/start-page.component.html"),
            styles: [__webpack_require__(/*! ./start-page.component.css */ "./src/app/start-page/start-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]])
    ], StartPageComponent);
    return StartPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Web Practices\Angular\startpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map