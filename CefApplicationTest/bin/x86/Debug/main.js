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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modules.component */ "./src/app/modules/modules.component.ts");
/* harmony import */ var _module_detail_module_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-detail/module-detail.component */ "./src/app/module-detail/module-detail.component.ts");
/* harmony import */ var _moduleimporter_moduleimporter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduleimporter/moduleimporter.component */ "./src/app/moduleimporter/moduleimporter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'modules', component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_2__["ModulesComponent"] },
    { path: '', redirectTo: '/modules', pathMatch: 'full' },
    { path: 'detail/:id', component: _module_detail_module_detail_component__WEBPACK_IMPORTED_MODULE_3__["ModuleDetailComponent"] },
    { path: 'newModules', component: _module_detail_module_detail_component__WEBPACK_IMPORTED_MODULE_3__["ModuleDetailComponent"] },
    { path: 'importmodule', component: _moduleimporter_moduleimporter_component__WEBPACK_IMPORTED_MODULE_4__["ModuleimporterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <h1 class=\"display-4\">Module Profile Tool</h1>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'moduleprofiletool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modules.component */ "./src/app/modules/modules.component.ts");
/* harmony import */ var _shared_module_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/module.service */ "./src/app/shared/module.service.ts");
/* harmony import */ var _module_detail_module_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module-detail/module-detail.component */ "./src/app/module-detail/module-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _moduleimporter_moduleimporter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduleimporter/moduleimporter.component */ "./src/app/moduleimporter/moduleimporter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__["ModulesComponent"],
                _module_detail_module_detail_component__WEBPACK_IMPORTED_MODULE_6__["ModuleDetailComponent"],
                _moduleimporter_moduleimporter_component__WEBPACK_IMPORTED_MODULE_8__["ModuleimporterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [
                _shared_module_service__WEBPACK_IMPORTED_MODULE_5__["ModuleService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/module-detail/module-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/module-detail/module-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS1kZXRhaWwvbW9kdWxlLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/module-detail/module-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/module-detail/module-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\r\n<form #form=\"ngForm\" autocomplete=\"off\" novalidate>\r\n  <input type=\"hidden\" name=\"ModuleID\" [(ngModel)]=\"moduleService.currentSelectedModule.ModuleID\">\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputVendorName\">Vendor Name</label>\r\n      <input name=\"VendorName\" #VendorName=\"ngModel\" class=\"form-control\" id=\"inputVendorName\" [(ngModel)]=\"moduleService.currentSelectedModule.VendorName\" required>\r\n      <small class=\"text-danger\" [class.d-none]=\"VendorName.valid || VendorName.untouched\">Vendor Name is required</small>\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputModuleID\">Module ID</label>\r\n      <input name=\"ModuleID\" #ModuleID=\"ngModel\" class=\"form-control\" id=\"inputModuleID\" [(ngModel)]=\"moduleService.currentSelectedModule.ModuleID\" required>\r\n      <small class=\"text-danger\" [hidden]=\"ModuleID.valid || ModuleID.untouched\">Module ID is required</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputProductCode\">Product Code</label>\r\n      <input name=\"ProductCode\" #ProductCode=\"ngModel\"  pattern=\"^\\d{3}$\" class=\"form-control\" id=\"inputProductCode\" [(ngModel)]=\"moduleService.currentSelectedModule.ProductCode\" required>\r\n      <div *ngIf=\"ProductCode.errors && (ProductCode.invalid && ProductCode.touched)\">\r\n        <small *ngIf=\"ProductCode.errors.required\" class=\"text-danger\">Product Code is required</small>\r\n        <small *ngIf=\"ProductCode.errors.pattern\" class=\"text-danger\">Product Code must be 3 characters</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputCatalogName\">Catalog Name</label>\r\n      <input name=\"CatalogName\" #CatalogName=\"ngModel\" class=\"form-control\" id=\"inputCatalogName\" [(ngModel)]=\"moduleService.currentSelectedModule.CatalogName\" required>\r\n      <small class=\"text-danger\" [hidden]=\"CatalogName.valid || CatalogName.untouched\">Catalog Name is required</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputModuleRevision\">Module Revision</label>\r\n      <input name=\"ModuleRevision\" #ModuleRevision=\"ngModel\" class=\"form-control\" id=\"inputModuleRevision\" [(ngModel)]=\"moduleService.currentSelectedModule.ModuleRevision\" required>\r\n      <small class=\"text-danger\" [hidden]=\"ModuleRevision.valid || ModuleRevision.untouched\">Module Revision is required</small>\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n      <label for=\"inputProfileRevision\">Profile Revision</label>\r\n      <input name=\"ProfileRevision\" #ProfileRevision=\"ngModel\" class=\"form-control\" id=\"inputProfileRevision\" [(ngModel)]=\"moduleService.currentSelectedModule.ProfileRevision\" required>\r\n      <small class=\"text-danger\" [hidden]=\"ProfileRevision.valid || ProfileRevision.untouched\">Profile Revision is required</small>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-3\">\r\n    </div>\r\n    <div class=\"form-group col-md-3\">\r\n      <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-primary btn-block\">Submit</button>\r\n    </div>\r\n    <div class=\"form-group col-md-3\">\r\n        <button type=\"reset\" class=\"btn btn-lg btn-warning btn-block\">Reset</button>\r\n    </div>\r\n    <div class=\"form-group col-md-3\">\r\n        <button (click)=\"goBack()\" class=\"btn btn-lg btn-info btn-block\">Go Back</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/module-detail/module-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/module-detail/module-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: ModuleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleDetailComponent", function() { return ModuleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/module.service */ "./src/app/shared/module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuleDetailComponent = /** @class */ (function () {
    function ModuleDetailComponent(route, moduleService, location) {
        this.route = route;
        this.moduleService = moduleService;
        this.location = location;
    }
    ModuleDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    ModuleDetailComponent.prototype.getHero = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        if (id === 0) {
            this.createNewModule = true;
        }
        else {
            this.createNewModule = false;
        }
        this.moduleService.currentSelectedModule = Object.assign({}, this.moduleService.getModule(id));
    };
    ModuleDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ModuleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-detail',
            template: __webpack_require__(/*! ./module-detail.component.html */ "./src/app/module-detail/module-detail.component.html"),
            styles: [__webpack_require__(/*! ./module-detail.component.css */ "./src/app/module-detail/module-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ModuleDetailComponent);
    return ModuleDetailComponent;
}());



/***/ }),

/***/ "./src/app/moduleimporter/moduleimporter.component.css":
/*!*************************************************************!*\
  !*** ./src/app/moduleimporter/moduleimporter.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-horizontal{\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlaW1wb3J0ZXIvbW9kdWxlaW1wb3J0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZWltcG9ydGVyL21vZHVsZWltcG9ydGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ob3Jpem9udGFse1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/moduleimporter/moduleimporter.component.html":
/*!**************************************************************!*\
  !*** ./src/app/moduleimporter/moduleimporter.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<form class=\"form-horizontal\">\n  <div>\n    <div>\n      <img src=\"../../assets/file-upload.png\" class=\"img-fluid\">\n    </div>\n    <div>\n      <span>Choose file</span>\n      <input type=\"file\">\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/moduleimporter/moduleimporter.component.ts":
/*!************************************************************!*\
  !*** ./src/app/moduleimporter/moduleimporter.component.ts ***!
  \************************************************************/
/*! exports provided: ModuleimporterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleimporterComponent", function() { return ModuleimporterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/module.service */ "./src/app/shared/module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModuleimporterComponent = /** @class */ (function () {
    function ModuleimporterComponent(moduleService) {
        this.moduleService = moduleService;
    }
    ModuleimporterComponent.prototype.ngOnInit = function () {
    };
    ModuleimporterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moduleimporter',
            template: __webpack_require__(/*! ./moduleimporter.component.html */ "./src/app/moduleimporter/moduleimporter.component.html"),
            styles: [__webpack_require__(/*! ./moduleimporter.component.css */ "./src/app/moduleimporter/moduleimporter.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], ModuleimporterComponent);
    return ModuleimporterComponent;
}());



/***/ }),

/***/ "./src/app/modules/modules.component.css":
/*!***********************************************!*\
  !*** ./src/app/modules/modules.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\r\n  background-color: #CFD8DC !important;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REMgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/modules.component.html":
/*!************************************************!*\
  !*** ./src/app/modules/modules.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbtron\">\r\n  <br>\r\n  <div class=\"form-row\">\r\n    <div class=\"form-group col-md-2\">\r\n      <button title=\"Create an UP or Expansion module\" routerLink=\"/newModules\" class=\"btn btn-primary btn-block\">Create Module</button>\r\n    </div>\r\n    <div class=\"form-group col-md-6\">\r\n    </div>\r\n    <div class=\"form-group col-md-2\">\r\n      <button title=\"Import a module from local disk\" class=\"btn btn-primary btn-block\" routerLink=\"/importmodule\">Import</button>\r\n    </div>\r\n    <div class=\"form-group col-md-2\">\r\n      <button [disabled]=\"!currentModule\" title=\"Download a module to local disk\" class=\"btn btn-primary btn-block\">Download</button>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Vendor Name</th>\r\n        <th scope=\"col\">Module ID</th>\r\n        <th scope=\"col\">Product Code</th>\r\n        <th scope=\"col\">Catalog Name</th>\r\n        <th scope=\"col\">Module Revision</th>\r\n        <th scope=\"col\">Profile Revision</th>\r\n        <th scope=\"col\">Action</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let mod of moduleList\" [class.selected]=\"mod === currentModule\">\r\n        <td (click)=\"onSelect(mod)\">{{mod.VendorName}}</td>\r\n        <td (click)=\"onSelect(mod)\">{{mod.ModuleID}}</td>\r\n        <td (click)=\"onSelect(mod)\">{{mod.ProductCode}}</td>\r\n        <td (click)=\"onSelect(mod)\">{{mod.CatalogName}}</td>\r\n        <td (click)=\"onSelect(mod)\">{{mod.ModuleRevision}}</td>\r\n        <td (click)=\"onSelect(mod)\">{{mod.ProfileRevision}}</td>\r\n        <td><span style=\"margin-left: 5px\"><button title=\"Edit Module\" routerLink=\"/detail/{{mod.Id}}\" class=\"btn btn-sm btn-primary\">E</button></span><span style=\"margin-left: 5px\"><button title=\"Delete Module\" (click)=\"onDelete(mod.Id)\" class=\"btn btn-sm btn-danger\">X</button></span></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/modules.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/modules.component.ts ***!
  \**********************************************/
/*! exports provided: ModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesComponent", function() { return ModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/module.service */ "./src/app/shared/module.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModulesComponent = /** @class */ (function () {
    function ModulesComponent(service) {
        this.service = service;
    }
    ModulesComponent.prototype.ngOnInit = function () {
        this.moduleList = this.service.getModules();
    };
    ModulesComponent.prototype.onSelect = function (mod) {
        this.currentModule = mod;
        this.service.currentSelectedModule = Object.assign({}, mod);
    };
    ModulesComponent.prototype.onDelete = function (id) {
        if (confirm('Are you sure delete this module?')) {
            console.dir(id);
            this.service.deleteModule(id);
            this.moduleList = this.service.getModules();
        }
        ;
    };
    ModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modules',
            template: __webpack_require__(/*! ./modules.component.html */ "./src/app/modules/modules.component.html"),
            styles: [__webpack_require__(/*! ./modules.component.css */ "./src/app/modules/modules.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_module_service__WEBPACK_IMPORTED_MODULE_1__["ModuleService"]])
    ], ModulesComponent);
    return ModulesComponent;
}());



/***/ }),

/***/ "./src/app/shared/module.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/module.service.ts ***!
  \******************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModuleService = /** @class */ (function () {
    function ModuleService() {
        this.moduleList = [
            { Id: 1, VendorName: "Spectrum Controls", ModuleID: "NA", ProductCode: 114, CatalogName: "2085-IF4OF4-SC", ModuleRevision: "1.1", ProfileRevision: "1" },
            { Id: 2, VendorName: "Spectrum Controls", ModuleID: "NA", ProductCode: 115, CatalogName: "2085-OB32-SC", ModuleRevision: "1.1", ProfileRevision: "1" },
            { Id: 3, VendorName: "Spectrum Controls", ModuleID: "NA", ProductCode: 116, CatalogName: "2085-OBV32-SC", ModuleRevision: "1.1", ProfileRevision: "1" }
        ];
    }
    ModuleService.prototype.getModules = function () {
        return this.moduleList;
    };
    ModuleService.prototype.getModule = function (id) {
        return this.moduleList.find(function (mod) { return mod.Id === id; });
    };
    ModuleService.prototype.deleteModule = function (id) {
    };
    ModuleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModuleService);
    return ModuleService;
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

module.exports = __webpack_require__(/*! F:\Web Pactices\Angular\moduleprofiletool\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map