webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Models/AdminShift.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminShift; });
var AdminShift = (function () {
    function AdminShift() {
    }
    return AdminShift;
}());

//# sourceMappingURL=AdminShift.js.map

/***/ }),

/***/ "../../../../../src/app/Models/AdminStop.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminStop; });
var AdminStop = (function () {
    function AdminStop() {
    }
    return AdminStop;
}());

//# sourceMappingURL=AdminStop.js.map

/***/ }),

/***/ "../../../../../src/app/Models/Driver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Driver; });
var Driver = (function () {
    function Driver() {
    }
    return Driver;
}());

//# sourceMappingURL=Driver.js.map

/***/ }),

/***/ "../../../../../src/app/Models/Location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=Location.js.map

/***/ }),

/***/ "../../../../../src/app/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"address\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Shipping Address</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentAddress\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentAddress\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Address 1</label>\n            <input type=\"text\" name=\"address1\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr1\">\n          </div>\n          <div class=\"form-group\">\n            <label>Address 2</label>\n            <input type=\"text\" name=\"address2\" class=\"form-control\" [(ngModel)]=\"currentAddress.addr2\">\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.city\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>State</label>\n                <input type=\"text\" name=\"state\" class=\"form-control\" [(ngModel)]=\"currentAddress.state\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"currentAddress.postalCode\">\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"currentAddress.country\">\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateAddress()\" [disabled]=\"btnDisabled\">Change Address</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/address/address.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AddressComponent = (function () {
    function AddressComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.btnDisabled = false;
    }
    AddressComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.rest.get('http://localhost:3030/api/accounts/address')];
                    case 1:
                        data = _a.sent();
                        if (JSON.stringify(data['address']) === '{}' &&
                            this.data.message === '') {
                            this.data.warning('You have not entered your shipping address. Please enter your shipping address.');
                        }
                        this.currentAddress = data['address'];
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.btnDisabled = true;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.rest.post('http://localhost:3000/api/accounts/address', this.currentAddress)];
                    case 2:
                        res = _b.sent();
                        if (!res['success']) return [3 /*break*/, 4];
                        this.data.success(res['message']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a = (_b.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        _a = this.data.error(res['message']);
                        _b.label = 5;
                    case 5:
                        _a;
                        return [3 /*break*/, 7];
                    case 6:
                        error_2 = _b.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-address',
        template: __webpack_require__("../../../../../src/app/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/address/address.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]) === "function" && _b || Object])
], AddressComponent);

var _a, _b;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__busses_loc_busses_loc_component__ = __webpack_require__("../../../../../src/app/busses-loc/busses-loc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__drivers_drivers_component__ = __webpack_require__("../../../../../src/app/drivers/drivers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__driver_driver_component__ = __webpack_require__("../../../../../src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shifts_shifts_component__ = __webpack_require__("../../../../../src/app/shifts/shifts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shift_shift_component__ = __webpack_require__("../../../../../src/app/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sms_sms_component__ = __webpack_require__("../../../../../src/app/sms/sms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__location_on_map_location_on_map_component__ = __webpack_require__("../../../../../src/app/location-on-map/location-on-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'drivers',
        component: __WEBPACK_IMPORTED_MODULE_6__drivers_drivers_component__["a" /* DriversComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'driver',
        component: __WEBPACK_IMPORTED_MODULE_7__driver_driver_component__["a" /* DriverComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'shifts',
        component: __WEBPACK_IMPORTED_MODULE_8__shifts_shifts_component__["a" /* ShiftsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'shift',
        component: __WEBPACK_IMPORTED_MODULE_9__shift_shift_component__["a" /* ShiftComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'busses',
        component: __WEBPACK_IMPORTED_MODULE_5__busses_loc_busses_loc_component__["a" /* BussesLocComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'sms',
        component: __WEBPACK_IMPORTED_MODULE_10__sms_sms_component__["a" /* SmsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'addLocation/:shiftId',
        component: __WEBPACK_IMPORTED_MODULE_12__location_on_map_location_on_map_component__["a" /* LocationOnMapComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'route/:shiftId',
        component: __WEBPACK_IMPORTED_MODULE_13__route_route_component__["a" /* RouteComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard_service__["a" /* AuthGuardService */]],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */],
    },
    {
        path: 'admin/login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
    },
    {
        path: '**',
        redirectTo: '',
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-main\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/\" class=\"navbar-brand\" style=\" padding-top: 15px; color :#caae18;  \">\n      <img src=\"./assets/img/logo.png\" alt=\"logo\" id=\"logo\">\n    </a>\n    <div  style=\" padding-top: 1%; font-size: 22px; color :#139da5;  \" >QAU Smart Ride</div>\n\n\n    <!-- <div >Admin Panel</div> -->\n    <!-- <button class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n    <div [ngbCollapse]=\"isCollapsed\" style=\"align-items: left; margin-left: 50px; padding-top: 3% \" class=\"collapse navbar-collapse flex-column\"\n      id=\"navbarNav\">\n      <!-- <div class=\"input-group w-75\">\n        <input type=\"text\" name=\"search\" class=\"form-control\" [(ngModel)]=\"searchTerm\" (keyup.enter)=\"search()\">\n        <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\n          <i class=\"fa fa-search\"></i>\n        </span>\n      </div> -->\n      <div class=\"w-100\">\n        <ul class=\"navbar-nav\" style=\"padding-left: 10%;\">\n            <li *ngIf=\"token\" class=\"nav-item\">\n                <a (click)=\"collapse()\" routerLink=\"/dashboard\" routerLinkActive=\"active\" class=\"nav-link\">Dashboard</a>\n            </li>\n          <li *ngIf=\"token\" class=\"nav-item\">\n            <a (click)=\"collapse()\" routerLink=\"/busses\" routerLinkActive=\"active\" class=\"nav-link\">Live Tracking</a>\n        </li>\n            <li  *ngIf=\"token\" class=\"nav-item\">\n                <a (click)=\"collapse()\" routerLink=\"/drivers\" routerLinkActive=\"active\" class=\"nav-link\">Drivers</a>\n              </li>\n\n          <li *ngIf=\"token\" class=\"nav-item\">\n            <a (click)=\"collapse()\" routerLink=\"/shifts\" routerLinkActive=\"active\" class=\"nav-link\">Routes</a>\n        </li>\n        <li *ngIf=\"token\" class=\"nav-item\">\n          <a (click)=\"collapse()\" routerLink=\"/sms\" routerLinkActive=\"active\" class=\"nav-link\">Messages</a>\n      </li>\n          <!-- <li *ngIf=\"token\" class=\"nav-item\">\n            <a (click)=\"collapse()\" routerLink=\"/quotes\" routerLinkActive=\"active\" class=\"nav-link\">Quotes</a>\n          </li> -->\n\n          <!-- <li  *ngIf=\"token\" class=\"nav-item\">\n            <a (click)=\"collapse()\" routerLink=\"/users\" routerLinkActive=\"active\" class=\"nav-link\">Users</a>\n          </li> -->\n          <li *ngIf=\"token\" class=\"nav-item ml-0 ml-md-auto\" ngbDropdown dropdown=\"ngbDropdown\" style =\"left:-10px;\">\n              <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n              <i class=\"fa fa-user mr-1\"></i>\n              <span>Admin</span>\n              <!-- <span *ngIf=\"data.user\">{{ data.user.name }}</span> -->\n             </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\">\n                <a  (click)=\"collapse();logout();\" class=\"dropdown-item\">\n                    <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n                  </a>\n            </div>\n            </li>\n          <!-- <li class=\"nav-item ml-0 ml-md-auto\" ngbDropdown dropdown=\"ngbDropdown\"> -->\n            <!-- <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n              <i class=\"fa fa-user mr-1\"></i>\n              <span *ngIf=\"!token\">Accounts</span> -->\n              <!-- <span *ngIf=\"data.user\">{{ data.user.name }}</span> -->\n            <!-- </a> -->\n\n            <!-- <div ngbDropdownMenu class=\"dropdown-menu\"> -->\n              <!-- <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/profile\" class=\"dropdown-item\">\n                <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n              </a>\n              <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/login\" class=\"dropdown-item\">\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n              </a>\n              <a *ngIf=\"token\" (click)=\"closeDropdown(dropdown);collapse();logout();\" class=\"dropdown-item\">\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n              </a> -->\n              <!-- <a *ngIf=\"!token\" (click)=\"closeDropdown(dropdown);collapse();\" routerLink=\"/register\" class=\"dropdown-item\">\n                <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n              </a> -->\n            <!-- </div>\n          </li> -->\n\n\n          <!-- <li class=\"nav-item ml-0 ml-md-2\">\n            <a (click)=\"collapse()\" routerLink=\"/cart\" routerLinkActive=\"active\" class=\"nav-link\">\n              <i class=\"fa fa-shopping-cart mr-1\"></i>\n            </a>\n          </li> -->\n        </ul>\n      </div>\n\n\n    </div>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n<!--\n<footer id=\"main-footer\" class=\"bg-main text-white mt-5 p-5\">\n  <div class=\"container\">\n    <p class=\"lead text-center\">Copyright &copy; BMS 2018</p>\n  </div>\n</footer> -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#searchBtn {\n  cursor: pointer;\n  border: none;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n#logo {\n  width: 50px; }\n\n.wrapper {\n  background-color: #adebeb;\n  /*background-image:  url('https://images.template.net/wp-content/uploads/2015/11/25190500/White-Light-plain-Background-Design-Download.jpg');*/\n  height: 100%;\n  /* width:80%; */ }\n\na {\n  text-decoration: none !important; }\n\n.main-header {\n  padding: 1px 0px;\n  background-color: #007872;\n  width: 100%;\n  height: 80px;\n  color: white;\n  margin-top: -10px; }\n\n.button {\n  /* background-color: #007872;  */\n  /* border: none; */\n  /* color: white; */\n  padding: 13px 18px;\n  text-align: center;\n  text-decoration: none;\n  /* display: inline-block; */\n  font-size: 12px;\n  margin: 4px 8px;\n  cursor: pointer;\n  margin-top: -60px;\n  font-weight: bolder;\n  float: right; }\n\n.sidebar-menu {\n  height: 100%;\n  /* 100% Full-height */\n  width: 20%;\n  /* 0 width - change this with JavaScript */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Stay on top */\n  top: 0;\n  /* Stay at the top */\n  left: 0;\n  background-color: #4CAFA3;\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n  padding-top: 10px;\n  /* Place content 60px from the top */\n  transition: 0.5s;\n  /* 0.5 second transition effect to slide in the sidenav */ }\n\n.side-items {\n  height: 35px;\n  /* 100% Full-height */\n  /*width: 100%; /* 0 width - change this with JavaScript */\n  color: white;\n  padding: 10px 5px 5px 50px;\n  margin: 0px 0px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: aquamarine;\n  top: 0; }\n\n/* Center the image and position the close button */\n.imgcontainer {\n  text-align: center;\n  margin: 24px 0 12px 0;\n  position: relative; }\n\nimg.avatar {\n  width: 40%;\n  height: 40%;\n  border-radius: 50%; }\n\n.main-container {\n  background-color: #e7f7f7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Component App
var AppComponent = (function () {
    function AppComponent(router, data) {
        this.router = router;
        this.data = data;
        this.searchTerm = '';
        this.isCollapsed = true;
        this.data.getProfile();
    }
    Object.defineProperty(AppComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('x-auth-token');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.closeDropdown = function (dropdown) {
        dropdown.close();
    };
    AppComponent.prototype.logout = function () {
        console.log('logOut');
        this.data.user = {};
        localStorage.clear();
        this.router.navigate(['/']);
    };
    AppComponent.prototype.search = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__ = __webpack_require__("../../../../../src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__address_address_component__ = __webpack_require__("../../../../../src/app/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userslist_userslist_component__ = __webpack_require__("../../../../../src/app/userslist/userslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_opd_popup__ = __webpack_require__("../../../../ng2-opd-popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__busses_loc_busses_loc_component__ = __webpack_require__("../../../../../src/app/busses-loc/busses-loc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__drivers_drivers_component__ = __webpack_require__("../../../../../src/app/drivers/drivers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__driver_driver_component__ = __webpack_require__("../../../../../src/app/driver/driver.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shifts_shifts_component__ = __webpack_require__("../../../../../src/app/shifts/shifts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shift_shift_component__ = __webpack_require__("../../../../../src/app/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sms_sms_component__ = __webpack_require__("../../../../../src/app/sms/sms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__location_on_map_location_on_map_component__ = __webpack_require__("../../../../../src/app/location-on-map/location-on-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_amazing_time_picker__ = __webpack_require__("../../../../amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__route_route_component__ = __webpack_require__("../../../../../src/app/route/route.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AgmCoreModule } from '@agm/core';





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_11__message_message_component__["a" /* MessageComponent */], __WEBPACK_IMPORTED_MODULE_12__registration_registration_component__["a" /* RegistrationComponent */], __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__settings_settings_component__["a" /* SettingsComponent */], __WEBPACK_IMPORTED_MODULE_16__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_18__userslist_userslist_component__["a" /* UserslistComponent */],
            __WEBPACK_IMPORTED_MODULE_20__busses_loc_busses_loc_component__["a" /* BussesLocComponent */],
            __WEBPACK_IMPORTED_MODULE_21__drivers_drivers_component__["a" /* DriversComponent */],
            __WEBPACK_IMPORTED_MODULE_22__driver_driver_component__["a" /* DriverComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shifts_shifts_component__["a" /* ShiftsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shift_shift_component__["a" /* ShiftComponent */],
            __WEBPACK_IMPORTED_MODULE_25__sms_sms_component__["a" /* SmsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__location_on_map_location_on_map_component__["a" /* LocationOnMapComponent */],
            __WEBPACK_IMPORTED_MODULE_32__route_route_component__["a" /* RouteComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_19_ng2_opd_popup__["b" /* PopupModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_27_amazing_time_picker__["a" /* AmazingTimePickerModule */],
            __WEBPACK_IMPORTED_MODULE_28__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_30__shared_navbar_navbar_module__["a" /* NavbarModule */],
            __WEBPACK_IMPORTED_MODULE_29__shared_footer_footer_module__["a" /* FooterModule */],
            __WEBPACK_IMPORTED_MODULE_31__shared_fixedplugin_fixedplugin_module__["a" /* FixedPluginModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__rest_api_service__["a" /* RestApiService */], __WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_14__auth_guard_service__["a" /* AuthGuardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        // if (localStorage.getItem('x-auth')) {
        //   return state.url.startsWith('admin/login')
        //     ? true
        //     : (this.router.navigate(['/']), false);
        // } else {
        //   return state.url.startsWith('admin/login')
        //     ? (this.router.navigate(['/']), false)
        //     : true;
        // }
        if (localStorage.getItem('x-auth-token')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
        // if (this.userService.isValid()) {
        //   return true;
        // } else {
        //   this.router.navigate(['/login'], {
        //     queryParams: {
        //       return: state.url
        //     }
        //   });
        //   return false;
        // }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/busses-loc/busses-loc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper add-padding\">\n  <div class=\"content-header clearfix\">\n  <h2 class=\"pull-left\" style=\"color:#232f3e; \">\n  Live Tracking\n  </h2>\n  </div>\n  <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\n  <div id=\"mapToUpdate\" class=\"google-map\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/busses-loc/busses-loc.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  border-style: solid;\n  border-width: 5px;\n  border-color: #007872;\n  height: 450px;\n  width: 750px;\n  float: left;\n  margin: auto; }\n\n.map-wrapper {\n  padding-left: 30%; }\n\n.map-container {\n  margin: auto; }\n\n#mapToUpdate {\n  height: 500px; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n\n.labels {\n  color: red;\n  background-color: red;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100px;\n  border: 0; }\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300; }\n\n#infowindow-content .title {\n  font-weight: bold; }\n\n#infowindow-content {\n  display: none; }\n\n#mapToUpdate #infowindow-content {\n  display: inline; }\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto; }\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px; }\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px; }\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300; }\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 100%; }\n\n#pac-input:focus {\n  border-color: #4d90fe; }\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px; }\n\n#target {\n  width: 345px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/busses-loc/busses-loc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BussesLocComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drivers_drivers_service__ = __webpack_require__("../../../../../src/app/drivers/drivers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BussesLocComponent = (function () {
    function BussesLocComponent(driversService) {
        var _this = this;
        this.driversService = driversService;
        this.drivers = [];
        this.driversLength = 0;
        this.sub = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(30000)
            .subscribe(function (val) {
            console.log('Update!');
            _this.ngOnInit();
        });
    }
    BussesLocComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mapToUpdate;
        var marker;
        var ISB = { lat: 33.738045, lng: 73.084488 };
        // https://www.iconsdb.com/icons/preview/red/bus-xxl.png
        var markerIcon = {
            url: 'https://www.freeiconspng.com/uploads/school-bus-icon-22.png',
            scaledSize: new google.maps.Size(80, 80),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(32, 65),
            labelOrigin: new google.maps.Point(40, 33)
        };
        var tempPosMap;
        this.driversService
            .getDrivers()
            .subscribe(function (u) {
            _this.drivers = u;
            console.log('drivers :' + u);
            _this.driversLength = _this.drivers.length;
            // Creating Marker For Buss/Driver
            if (_this.driversLength > 0) {
                for (var t = 0; t < _this.driversLength; t++) {
                    if (_this.drivers[t].loc) {
                        tempPosMap = {
                            lat: _this.drivers[t].loc[0],
                            lng: _this.drivers[t].loc[1]
                        };
                        break;
                    }
                }
                mapToUpdate = new google.maps.Map(document.getElementById('mapToUpdate'), {
                    center: tempPosMap,
                    zoom: 15
                });
                for (var d = 0; d < _this.driversLength; d++) {
                    if (_this.drivers[d].loc) {
                        console.log('driver Lat : ' + d + _this.drivers[d].loc[0]);
                        console.log('driver Long : ' + d + _this.drivers[d].loc[1]);
                        var tempPos = { lat: _this.drivers[d].loc[0],
                            lng: _this.drivers[d].loc[1] };
                        var driverName = _this.drivers[d].name;
                        console.log(_this.drivers[d]._id + ' : ' + _this.drivers[d].panic);
                        if (_this.drivers[d].panic === true) {
                            console.log(_this.drivers[d]._id + 'Is in Panic');
                            var markerIconPanic = {
                                url: 'https://www.iconsdb.com/icons/preview/red/bus-2-xxl.png',
                                scaledSize: new google.maps.Size(80, 80),
                                origin: new google.maps.Point(0, 0),
                                anchor: new google.maps.Point(32, 65),
                                labelOrigin: new google.maps.Point(40, 33)
                            };
                            marker = new google.maps.Marker({
                                position: tempPos,
                                map: mapToUpdate,
                                title: driverName,
                                // animation: google.maps.Animation.DROP,
                                label: { text: driverName, fontWeight: 'bold', color: 'black', fontSize: '16px' },
                                icon: markerIconPanic,
                            });
                        }
                        else {
                            marker = new google.maps.Marker({
                                position: tempPos,
                                map: mapToUpdate,
                                title: driverName,
                                // animation: google.maps.Animation.DROP,
                                label: { text: driverName, fontWeight: 'bold', color: 'black', fontSize: '16px' },
                                icon: markerIcon,
                            });
                        }
                    }
                }
            }
        });
    };
    return BussesLocComponent;
}());
BussesLocComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-busses-loc',
        template: __webpack_require__("../../../../../src/app/busses-loc/busses-loc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/busses-loc/busses-loc.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__drivers_drivers_service__["a" /* DriversService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__drivers_drivers_service__["a" /* DriversService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__drivers_drivers_service__["a" /* DriversService */]) === "function" && _a || Object])
], BussesLocComponent);

var _a;
//# sourceMappingURL=busses-loc.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "    <!-- <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-server\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Capacity</p>\n                                    105GB\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-success text-center\">\n                                    <i class=\"ti-wallet\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Revenue</p>\n                                    $1,345\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-calendar\"></i> Last day\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-danger text-center\">\n                                    <i class=\"ti-pulse\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Errors</p>\n                                    23\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> In the last hour\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-info text-center\">\n                                    <i class=\"ti-twitter-alt\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p>Followers</p>\n                                    +45\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"footer\">\n                            <hr />\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated now\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Users Behavior</h4>\n                        <p class=\"category\">24 Hours performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartHours\" class=\"ct-chart\"></div>\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Click\n                                <i class=\"fa fa-circle text-warning\"></i> Click Second Time\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-reload\"></i> Updated 3 minutes ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Email Statistics</h4>\n                        <p class=\"category\">Last Campaign Performance</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartPreferences\" class=\"ct-chart ct-perfect-fourth\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Open\n                                <i class=\"fa fa-circle text-danger\"></i> Bounce\n                                <i class=\"fa fa-circle text-warning\"></i> Unsubscribe\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-timer\"></i> Campaign sent 2 days ago\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"card \">\n                    <div class=\"header\">\n                        <h4 class=\"title\">2015 Sales</h4>\n                        <p class=\"category\">All products including Taxes</p>\n                    </div>\n                    <div class=\"content\">\n                        <div id=\"chartActivity\" class=\"ct-chart\"></div>\n\n                        <div class=\"footer\">\n                            <div class=\"chart-legend\">\n                                <i class=\"fa fa-circle text-info\"></i> Tesla Model S\n                                <i class=\"fa fa-circle text-warning\"></i> BMW 5 Series\n                            </div>\n                            <hr>\n                            <div class=\"stats\">\n                                <i class=\"ti-check\"></i> Data information certified\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n\n\n<h3 style=\"padding-left:5%; color: #232f3e; \">Dashboard</h3>\n\n<div class =\"home-wrapper\" >\n<div class=\"home-left\">\n\n\n<div class=\"features-wrapper\">\n    <div style=\"float: left;\">\n        <i class=\"fa fa-map-o fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n\n    <a routerLink=\"/busses\"><h3 style = \"color:#007872;\">TRACKING</h3> </a>\n\n<hr>\n<div  style=\"color: green; text-align:left;\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n    Running Busses\n</div>\n<div style=\"color: red; text-align:left;\">\n    <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n    Idle Busses\n</div>\n</div>\n<div class=\"features-wrapper\">\n    <div style=\"float: left;\">\n        <i class=\"fa fa-user-o fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <a routerLink=\"/drivers\"><h3 style = \"color:#007872;\">DRIVERS</h3> </a>\n\n  <hr>\n  Active Drivers on Application.\n\n  </div>\n<div class=\"features-wrapper\">\n    <div style=\"float: left;\">\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <a routerLink=\"/shifts\"><h3 style = \"color:#007872;\">ROUTES</h3> </a>\n  <hr>\n  Running & Idle Busses\n  </div>\n\n  <div class=\"features-wrapper\">\n      <div style=\"float: left;\">\n          <i class=\"fa fa-envelope-o fa-3x\" aria-hidden=\"true\"></i>\n      </div>\n      <a routerLink=\"/sms\"><h3 style = \"color:#007872;\">MESSAGE</h3> </a>\n\n    <hr>\n   Send Braodcast to All Drivers\n    </div>\n\n</div>\n<!-- <div>Some Text Here...</div> -->\n\n<div class =\"map-wrapper \">\n    <div style=\"color:#007872;\"><h3>Live Tracking Of Busses</h3></div>\n    <div style=\"color:#232f3e\">View Live Postion Of Busses On Map....\n        <a routerLink=\"/busses\">Details</a>\n    </div>\n    <!-- <hr> -->\n    <div id=\"map\" class=\"google-map\"></div>\n\n</div>\n<div class =\"chart-wrapper \">\n    <div style=\"color:#007872;\"><h3>Application Statistics</h3></div>\n    <div style=\"color:#232f3e\">Users of Application in Different Region of worlld ....\n        <a routerLink=\"/drivers\">Details</a>\n    </div>\n    <canvas id=\"line-chart\" ></canvas>\n    <!-- <hr> -->\n    <!-- <div style=\"color:red;\"><h3>Some Text Here...</h3></div> -->\n</div>\n\n<!-- <div>Some Text Here...</div> -->\n\n\n\n</div>\n<div style=\"clear: both;\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-wrapper {\n  height: auto;\n  padding-left: 5%;\n  text-align: center;\n  color: #007872; }\n\n.features-wrapper {\n  /* height: 30%;\r\n    width: 20%; 0 width - change this with JavaScript */\n  color: #007872;\n  padding: 35px 10px;\n  margin: 5px 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: turquoise;\n  background-color: white;\n  /* //float:left; */\n  border-radius: 5px;\n  /* //top: 0; */\n  text-align: center;\n  margin-bottom: 10px;\n  width: 20%;\n  float: left;\n  position: static;\n  height: 150px; }\n\n.home-left {\n  height: 100%; }\n\n.home-right {\n  height: 100%;\n  width: 50%;\n  float: left; }\n\n.map-wrapper {\n  height: 18%;\n  width: 83%;\n  color: white;\n  margin: 0% 17%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #4CAFA3;\n  float: right;\n  border-radius: 5px; }\n\n.chart-wrapper {\n  height: 18%;\n  width: 83%;\n  color: white;\n  margin: 2% 0%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #4CAFA3;\n  float: left;\n  border-radius: 5px; }\n\nagm-map {\n  border-style: solid;\n  border-width: 3px;\n  border-color: turquoise;\n  height: 300px;\n  width: 450px;\n  float: right;\n  margin: auto;\n  /* //padding-right:5px; */\n  border-radius: 5px; }\n\n#map {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as Chartist from 'chartist';

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var map;
        var marker;
        var ISB = { lat: 33.738045, lng: 73.084488 };
        map = new google.maps.Map(document.getElementById('map'), {
            center: ISB,
            zoom: 15
        });
        //https://www.iconsdb.com/icons/preview/red/bus-xxl.png
        var markerIcon = {
            url: 'https://www.freeiconspng.com/uploads/school-bus-icon-22.png',
            scaledSize: new google.maps.Size(80, 80),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(32, 65),
            labelOrigin: new google.maps.Point(40, 33)
        };
        marker = new google.maps.Marker({
            position: ISB,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: markerIcon,
        });
        new __WEBPACK_IMPORTED_MODULE_1_chart_js__(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                        label: "Africa",
                        borderColor: "#3e95cd",
                        fill: false
                    }, {
                        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                        label: "Asia",
                        borderColor: "#8e5ea2",
                        fill: false
                    }, {
                        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                        label: "Europe",
                        borderColor: "#3cba9f",
                        fill: false
                    }, {
                        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                        label: "Latin America",
                        borderColor: "#e8c3b9",
                        fill: false
                    }, {
                        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                        label: "North America",
                        borderColor: "#c45850",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: false,
                    text: 'App Users In differnt Regions Of World.'
                }
            }
        });
        //    var dataSales = {
        //   labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        //   series: [
        //      [287, 385, 490, 562, 594, 626, 698, 895, 952],
        //     [67, 152, 193, 240, 387, 435, 535, 642, 744],
        //     [23, 113, 67, 108, 190, 239, 307, 410, 410]
        //   ]
        // };
        // var optionsSales = {
        //   low: 0,
        //   high: 1000,
        //   showArea: true,
        //   height: "245px",
        //   axisX: {
        //     showGrid: false,
        //   },
        //   lineSmooth: Chartist.Interpolation.simple({
        //     divisor: 3
        //   }),
        //   showLine: true,
        //   showPoint: false,
        // };
        // var responsiveSales: any[] = [
        //   ['screen and (max-width: 640px)', {
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];
        // new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);
        // var data = {
        //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //   series: [
        //     [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        //     [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
        //   ]
        // };
        // var options = {
        //     seriesBarDistance: 10,
        //     axisX: {
        //         showGrid: false
        //     },
        //     height: "245px"
        // };
        // var responsiveOptions: any[] = [
        //   ['screen and (max-width: 640px)', {
        //     seriesBarDistance: 5,
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];
        // new Chartist.Line('#chartActivity', data, options, responsiveOptions);
        // var dataPreferences = {
        //     series: [
        //         [25, 30, 20, 25]
        //     ]
        // };
        // var optionsPreferences = {
        //     donut: true,
        //     donutWidth: 40,
        //     startAngle: 0,
        //     total: 100,
        //     showLabel: false,
        //     axisX: {
        //         showGrid: false
        //     }
        // };
        // new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
        // new Chartist.Pie('#chartPreferences', {
        //   labels: ['62%','32%','6%'],
        //   series: [62, 32, 6]
        // });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DataService = (function () {
    function DataService(router, rest) {
        var _this = this;
        this.router = router;
        this.rest = rest;
        this.message = '';
        this.messageType = 'danger';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                _this.message = '';
            }
        });
    }
    DataService.prototype.error = function (message) {
        this.messageType = 'danger';
        this.message = message;
    };
    DataService.prototype.success = function (message) {
        this.messageType = 'success';
        this.message = message;
    };
    DataService.prototype.warning = function (message) {
        this.messageType = 'warning';
        this.message = message;
    };
    DataService.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!localStorage.getItem('token')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rest.get('http://localhost:3000/api/accounts/profile')];
                    case 1:
                        data = _a.sent();
                        this.user = data['user'];
                        console.log(this.user);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]) === "function" && _b || Object])
], DataService);

var _a, _b;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper add-padding\">\n      <!-- Content Header (Page header) -->\n    <div class=\"content-header clearfix\">\n  <h2 class=\"pull-left\"  style=\"color:#232f3e\">\n  Add Driver\n  </h2>\n  <div class=\"pull-right\">\n  <button type=\"submit\" name=\"save\" class=\"btn bg-blue\" (click)=\"saveDriver()\" >\n  <i class=\"fa fa-floppy-o\"></i>\n  Save\n  </button>\n  <button type=\"submit\" name=\"save-continue\" class=\"btn bg-blue\" routerLink=\"/drivers\" routerLinkActive=\"active\" >\n    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n  Back\n  </button>\n  </div>\n  </div>\n\n      <!-- Main content -->\n      <section class=\"content\">\n        <!-- /.box -->\n            <!-- START CUSTOM TABS -->\n            <!-- Custom Tabs -->\n            <div class=\"nav-tabs-custom\">\n              <!-- <ul class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#tab_1\" data-toggle=\"tab\">Add Quote</a></li>\n              </ul> -->\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"tab_1\">\n       <div class=\"row\">\n              <div class=\"col-md-7\">\n           <!-- Horizontal Form -->\n              <!-- form start -->\n              <form class=\"form-horizontal\">\n                <div class=\"box-body\">\n                  <!-- <div class=\"form-group\">\n                    <label for=\"des\" class=\"col-sm-2 control-label\">Quote Text</label>\n                    <div class=\"col-sm-10\">\n                      <textarea class=\"form-control\" rows=\"3\" placeholder=\"Text\" name=\"qouteText\" [(ngModel)]=\"qouteText\" ></textarea>\n                    </div>\n                  </div> -->\n          <div class=\"form-group\">\n              <label for=\"authorName\" class=\"col-sm-2 control-label\">Driver Name</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"driverName\" placeholder=\"Driver Name\" name=\"driverName\" [(ngModel)]=\"name\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"authorName\" class=\"col-sm-2 control-label\">Email Adrress</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\">\n             </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"authorName\" class=\"col-sm-2 control-label\">Set Password</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n             </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"authorName\" class=\"col-sm-2 control-label\">Phone #</label>\n              <div class=\"col-sm-10\">\n                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Phone Number Here\" name=\"phone\" [(ngModel)]=\"phone\">\n             </div>\n          </div>\n          <!-- <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\">Status</label>\n                    <div class=\"col-sm-10\">\n            <div class=\"col-sm-3\">\n            <div class=\"radio\">\n                      <label>\n                        <input type=\"radio\" name=\"optionsRadiosT\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n                        Published\n                      </label>\n                    </div>\n            </div>\n            <div class=\"col-sm-3\">\n                    <div class=\"radio\">\n                      <label>\n                        <input type=\"radio\" name=\"optionsRadiosT\" id=\"optionsRadios2\" value=\"option2\">\n                        Unpublished\n                      </label>\n                    </div>\n            </div>\n            </div>\n                  </div> -->\n               </div>\n              </form>\n            <!-- /.box -->\n                  </div>\n          </div>\n            <!-- /.row -->\n                </div>\n              </div>\n              <!-- /.tab-content -->\n            </div>\n            <!-- nav-tabs-custom -->\n        <!-- END CUSTOM TABS -->\n\n       </section>\n      <!-- /.content -->\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/driver/driver.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__driver_service__ = __webpack_require__("../../../../../src/app/driver/driver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Driver__ = __webpack_require__("../../../../../src/app/Models/Driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverComponent = (function () {
    function DriverComponent(driverService, router) {
        this.driverService = driverService;
        this.router = router;
    }
    DriverComponent.prototype.ngOnInit = function () {
    };
    DriverComponent.prototype.saveDriver = function () {
        var _this = this;
        if (this.email === undefined && this.password === undefined) {
            alert('Please Provide Complete Driver Details');
        }
        else {
            this.driver = new __WEBPACK_IMPORTED_MODULE_2__Models_Driver__["a" /* Driver */]();
            this.driver.name = this.name;
            this.driver.email = this.email;
            this.driver.password = this.password;
            this.driver.phone = this.phone;
            this.driver.user_type = 'driver';
            this.driverService.addDriver(this.driver).subscribe(function (u) {
                _this.ngOnInit();
                console.log(u.status);
                _this.router.navigate(['/drivers']);
                _this.driver = null;
            });
            this.name = '';
            this.email = '';
            this.password = '';
        }
    };
    return DriverComponent;
}());
DriverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-driver',
        template: __webpack_require__("../../../../../src/app/driver/driver.component.html"),
        styles: [__webpack_require__("../../../../../src/app/driver/driver.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__driver_service__["a" /* DriverService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__driver_service__["a" /* DriverService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__driver_service__["a" /* DriverService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DriverComponent);

var _a, _b;
//# sourceMappingURL=driver.component.js.map

/***/ }),

/***/ "../../../../../src/app/driver/driver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = (function () {
    function DriverService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        console.log('x-auth-token : ', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Add new driver
    DriverService.prototype.addDriver = function (driver) {
        var body = JSON.stringify(driver);
        console.log('in service Add driver : ' + driver);
        return this.http
            .post(this.baseUrl + '/users/register', body, this.options)
            .map(this.extractData);
    };
    DriverService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return DriverService;
}());
DriverService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DriverService);

var _a;
//# sourceMappingURL=driver.service.js.map

/***/ }),

/***/ "../../../../../src/app/drivers/drivers.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper add-padding\">\n      <!-- Content Header (Page header) -->\n    <div class=\"content-header clearfix\">\n  <h2 class=\"pull-left\"  style=\"color:#232f3e\">\n  Drivers\n  </h2>\n  <div class=\"pull-right\">\n  <a  routerLink=\"/driver\" routerLinkActive=\"active\"  class=\"btn bg-blue\">\n    <i class=\"fa fa-plus-square\"></i>\n    Add new\n  </a>\n\n  </div>\n  </div>\n\n      <!-- Main content -->\n      <section class=\"content\">\n          <!-- <div class=\"panel-group\"> -->\n          <!-- <div class=\"panel panel-default\"> -->\n          <!-- <div class=\"panel-body\"> -->\n              <!-- <div > -->\n          <table id=\"example\" class=\"table table-striped table-bordered\" cellspacing=\"0\" >\n\n          <thead >\n      <tr >\n      <!-- <th  style=\"text-align:center;\" ><input id=\"selectAll\" class=\"minimal\" type=\"checkbox\"></th> -->\n      <th  > # </th>\n      <th  >User Name</th>\n      <th  >Email</th>\n      <th  >Phone # </th>\n       <th >Panic </th>\n      <th>Options </th>\n\n      </tr>\n      </thead>\n              <tbody>\n                  <tr *ngFor=\"let user of users; let i = index\">\n\n                      <!-- <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td> -->\n                      <td>{{i + 1}}</td>\n                      <td >{{user.name}} </td>\n                      <td >{{user.email}}</td>\n                      <td >{{user.phone}}</td>\n                      <td >\n\n                      <!-- {{user.panic}} -->\n                        <div *ngIf=\"user.panic\" style=\"color:red;\">In Panic</div>\n                        <div *ngIf=\"!user.panic\">Normal</div>\n                      </td>\n                      <td>\n                        <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"confirmEdit(user)\">&nbsp;&nbsp;</i>\n                        <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"confirmDelete(user)\"></i>\n                      </td>\n                    </tr>\n\n             <!-- <tr >\n                  <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                  <td >Sajid</td>\n                  <td >“Don't cry because it's over, smile because it happened.” </td>\n                  <td ><span class=\"badge bg-green\">on</span></td>\n              </tr>\n         <tr >\n                  <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                  <td >Sajid</td>\n                  <td >“Don't cry because it's over, smile because it happened.” </td>\n                  <td ><span class=\"badge bg-red\">off</span></td>\n              </tr>\n        <tr >\n                  <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                  <td >Sajid</td>\n                  <td >“Don't cry because it's over, smile because it happened.” </td>\n                  <td ><span class=\"badge bg-green\">on</span></td>\n              </tr> -->\n              </tbody>\n\n\n          </table>\n          <!-- </div> -->\n          <!-- </div> -->\n          <!-- </div> -->\n              <!-- </div> -->\n          <!-- </div> -->\n       </section>\n      <!-- /.content -->\n    </div>\n    <!-- /.content-wrapper -->\n\n    <popup #deletePopup (confirmClick)=\"deleteDriver()\">\n      <div>Are you sure, You want to Delete Driver ?</div>\n    </popup>\n\n\n    <popup  #editPopup (confirmClick)=\"editDriver()\">\n        <input   type=\"text\"  placeholder=\"Name\" name=\"name\" [(ngModel)]=\"name\" >\n        <input   type=\"text\"  placeholder=\"Email\" name=\"author\" [(ngModel)]=\"email\" >\n        <input   type=\"text\"  placeholder=\"Phone #\" name=\"author\" [(ngModel)]=\"phone\" >\n    </popup>\n\n"

/***/ }),

/***/ "../../../../../src/app/drivers/drivers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password], input[type=number] {\n  width: 73%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\ntextarea {\n  width: 73%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\n.button {\n  background-color: #232f3e;\n  border: none;\n  color: white;\n  padding: 13px 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 4px 2px;\n  cursor: pointer;\n  font-weight: bold; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/drivers/drivers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drivers_service__ = __webpack_require__("../../../../../src/app/drivers/drivers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Driver__ = __webpack_require__("../../../../../src/app/Models/Driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__ = __webpack_require__("../../../../ng2-opd-popup/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriversComponent = (function () {
    function DriversComponent(driversService, popup) {
        this.driversService = driversService;
        this.popup = popup;
        this.users = [];
        this.usersLength = 0;
        this.popup.options = {
            header: 'Confirmation',
            color: '#232f3e',
            widthProsentage: 40,
            // animationDuration: 1, // in seconds, 0 = no animation
            showButtons: true,
            confirmBtnContent: 'OK',
            cancleBtnContent: 'CANCEL',
            confirmBtnClass: 'btn btn-bold',
            cancleBtnClass: 'btn btn-bold',
        };
    }
    DriversComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driversService
            .getDrivers()
            .subscribe(function (u) {
            _this.users = u;
            console.log('users :' + u);
            _this.usersLength = _this.users.length;
            // this.categoryLoaded=true;
        });
    };
    DriversComponent.prototype.confirmEdit = function (driver) {
        console.log('driver: ' + driver.name);
        this.name = driver.name;
        this.email = driver.email;
        this.phone = driver.phone;
        this.driverIdToEdit = driver._id;
        this.editPopup.show(this.popup.options);
    };
    DriversComponent.prototype.editDriver = function () {
        var _this = this;
        // Update driver
        this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__Models_Driver__["a" /* Driver */]();
        this.tempUser._id = this.driverIdToEdit;
        this.tempUser.name = this.name;
        this.tempUser.email = this.email;
        this.tempUser.phone = this.phone;
        console.log('Edit driver : ' + this.driverIdToEdit);
        this.editPopup.hide();
        this.driversService.updateDriver(this.tempUser)
            .subscribe(function (u) {
            _this.ngOnInit();
            console.log('Update Driver API Status ' + u.status);
            _this.tempUser = null;
        });
        this.driverIdToEdit = '';
    };
    DriversComponent.prototype.confirmDelete = function (driver) {
        console.log('driver Id To delete : ' + driver._id);
        this.driverIdToDelete = driver._id;
        this.deletePopup.show(this.popup.options);
    };
    DriversComponent.prototype.deleteDriver = function () {
        var _this = this;
        //  console.log ('Delete driver Called with Title : ' + this.driverIdToDelete);
        this.deletePopup.hide();
        this.driversService
            .deleteDriver(this.driverIdToDelete)
            .subscribe(function (u) {
            _this.ngOnInit();
            console.log(u.status);
            // this.tempCategory=null;
        });
    };
    return DriversComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('editPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _a || Object)
], DriversComponent.prototype, "editPopup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deletePopup'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _b || Object)
], DriversComponent.prototype, "deletePopup", void 0);
DriversComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-drivers',
        template: __webpack_require__("../../../../../src/app/drivers/drivers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/drivers/drivers.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__drivers_service__["a" /* DriversService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__drivers_service__["a" /* DriversService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__drivers_service__["a" /* DriversService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _d || Object])
], DriversComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=drivers.component.js.map

/***/ }),

/***/ "../../../../../src/app/drivers/drivers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriversService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriversService = (function () {
    function DriversService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    DriversService.prototype.getDrivers = function () {
        // this.http.get(this.baseUrl + '/quotes', this.options ).subscribe(data => {
        //   console.log('data' + data);
        // });
        return this.http.get(this.baseUrl + '/driver', this.options)
            .map(function (res) { return res.json().object; });
    };
    // // Add new Category
    // addMarkerCategory(markerCategoryToSet  ): Observable<Response> {
    // let body = JSON.stringify(markerCategoryToSet);
    // console.log ('in service Add Category : '+ markerCategoryToSet);
    // 	return this.http
    // 		.post(this.baseUrl + '/v2.0/markerCategory' ,  body ,  this.options)
    // 		.map(this.extractData);
    //   }
    // Edit a Driver
    DriversService.prototype.updateDriver = function (driver) {
        var body = JSON.stringify(driver);
        console.log('URL : ', this.baseUrl + '/driver/' + driver._id);
        return this.http
            .patch(this.baseUrl + '/driver/' + driver._id, body, this.options)
            .map(this.extractData);
    };
    // Delete Driver
    DriversService.prototype.deleteDriver = function (driverIdToDelete) {
        var body = JSON.stringify(driverIdToDelete);
        console.log('URL : ', this.baseUrl + '/driver/' + driverIdToDelete);
        return this.http
            .delete(this.baseUrl + '/driver/' + driverIdToDelete, this.options)
            .map(this.extractData);
    };
    DriversService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return DriversService;
}());
DriversService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DriversService);

var _a;
//# sourceMappingURL=drivers.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"container-fluid d-none d-md-block\">\n    <ngb-carousel>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image1.jpg\" alt=\"first\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image2.jpg\" alt=\"second\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image3.jpg\" alt=\"third\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image4.jpg\" alt=\"fourth\" class=\"item\">\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image5.jpg\" alt=\"fifth\" class=\"item\">\n      </ng-template>\n    </ngb-carousel>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngb-carousel {\n  min-width: 1000px;\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/location-on-map/location-on-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper add-padding\">\n  <div class=\"content-header clearfix\">\n  <h2 class=\"pull-left\" style=\"color:#232f3e; \">\n  Add Stop\n  </h2>\n  <div class=\"pull-right\">\n\n      <button type=\"submit\" name=\"save-continue\" class=\"btn bg-blue\" routerLink=\"/shifts\" routerLinkActive=\"active\" >\n        <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n      Back\n      </button>\n      </div>\n  </div>\n  <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\n  <div id=\"map\" class=\"google-map\"></div>\n</div>\n\n\n<popup  #confirmStartLocMarkerPopup (confirmClick)=\"confirmStartLoc()\">\n    <h2>Set Title For Stop</h2>\n  <input   type=\"text\"  class =\"popup-inputs\" placeholder=\"Title\" name=\"startLocTitle\" [(ngModel)]=\"locTitle\" >\n    <br>\n  <input   type=\"text\"  class =\"popup-inputs\" placeholder=\"Lat\" name=\"startLocLat\" [(ngModel)]=\"locLat\" readonly>\n    <br>\n  <input   type=\"text\" class =\"popup-inputs\" placeholder=\"Long \" name=\"startLocLong\" [(ngModel)]=\"locLong\" readonly>\n    <br>\n\n</popup>\n"

/***/ }),

/***/ "../../../../../src/app/location-on-map/location-on-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  border-style: solid;\n  border-width: 5px;\n  border-color: #007872;\n  height: 450px;\n  width: 750px;\n  float: left;\n  margin: auto; }\n\n.map-wrapper {\n  padding-left: 30%; }\n\n.map-container {\n  margin: auto; }\n\n#map {\n  height: 500px; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n\n.labels {\n  color: red;\n  background-color: red;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100px;\n  border: 0; }\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300; }\n\n#infowindow-content .title {\n  font-weight: bold; }\n\n#infowindow-content {\n  display: none; }\n\n#map #infowindow-content {\n  display: inline; }\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto; }\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px; }\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px; }\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300; }\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 100%; }\n\n#pac-input:focus {\n  border-color: #4d90fe; }\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px; }\n\n#target {\n  width: 345px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/location-on-map/location-on-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationOnMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Models_AdminStop__ = __webpack_require__("../../../../../src/app/Models/AdminStop.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__ = __webpack_require__("../../../../../src/app/drivers/drivers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_on_map_service__ = __webpack_require__("../../../../../src/app/location-on-map/location-on-map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_Location__ = __webpack_require__("../../../../../src/app/Models/Location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__ = __webpack_require__("../../../../ng2-opd-popup/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocationOnMapComponent = (function () {
    function LocationOnMapComponent(driversService, route, locationOnMapService, popup, router) {
        var _this = this;
        this.driversService = driversService;
        this.route = route;
        this.locationOnMapService = locationOnMapService;
        this.popup = popup;
        this.router = router;
        this.route.params.subscribe(function (params) {
            _this.shiftId = params['shiftId'];
            console.log('Params shiftId: ' + _this.shiftId);
        });
        this.popup.options = {
            header: 'Confirmation',
            color: '#232f3e',
            widthProsentage: 40,
            // animationDuration: 1, // in seconds, 0 = no animation
            showButtons: true,
            confirmBtnContent: 'OK',
            cancleBtnContent: 'CANCEL',
            confirmBtnClass: 'btn btn-bold',
            cancleBtnClass: 'btn btn-bold',
        };
    }
    LocationOnMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var map;
        // let marker;
        var ISB = { lat: 33.738045, lng: 73.084488 };
        map = new google.maps.Map(document.getElementById('map'), {
            center: ISB,
            zoom: 11
        });
        google.maps.event.addListener(map, 'click', function (event) {
            console.log('Map startLocMap Cliked , Lat Longs : ' + event.latLng.lat() + 'longitude: ' + event.latLng.lng());
            _this.locLat = event.latLng.lat();
            _this.locLong = event.latLng.lng();
            _this.confirmStartLocMarkerPopup.show(_this.popup.options);
        });
    };
    LocationOnMapComponent.prototype.confirmStartLoc = function () {
        var _this = this;
        this.locationObj = new __WEBPACK_IMPORTED_MODULE_4__Models_Location__["a" /* Location */]();
        this.locationObj.title = this.locTitle;
        this.locationObj.loc = [];
        this.locationObj.loc[0] = this.locLat;
        this.locationObj.loc[1] = this.locLong;
        this.locationOnMapService.addLocation(this.locationObj).subscribe(function (u) {
            var payload = u.json();
            console.log('payload.status ' + payload.status);
            if (payload.status === 'success') {
                console.log('Object Id : ' + payload.object._id);
                _this.locId = payload.object._id;
                _this.adminStop = new __WEBPACK_IMPORTED_MODULE_0__Models_AdminStop__["a" /* AdminStop */]();
                _this.adminStop._shiftId = _this.shiftId;
                _this.adminStop._stopId = _this.locId;
                _this.locationOnMapService.addStop(_this.adminStop).subscribe(function (s) {
                    var stopsPayload = s.json();
                    console.log('stopsPayload.status ' + stopsPayload.status);
                    // this.ngOnInit();
                    console.log('s.status: ' + s.status);
                    if (stopsPayload.status === 'success') {
                        _this.confirmStartLocMarkerPopup.hide();
                        window.confirm('Stop Successfully Added !');
                    }
                    else {
                        window.confirm('Some Issue Occurred while Adding Stop !');
                    }
                    _this.router.navigate(['/shifts']);
                    _this.adminStop = null;
                });
            }
            else {
                window.confirm('Some Issue Occurred while Adding Stop !');
                _this.router.navigate(['/shifts']);
            }
            _this.locationObj = null;
        });
        this.locTitle = '';
        this.locLong = null;
        this.locLat = null;
    };
    return LocationOnMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('confirmStartLocMarkerPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */]) === "function" && _a || Object)
], LocationOnMapComponent.prototype, "confirmStartLocMarkerPopup", void 0);
LocationOnMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-location-on-map',
        template: __webpack_require__("../../../../../src/app/location-on-map/location-on-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/location-on-map/location-on-map.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */], __WEBPACK_IMPORTED_MODULE_3__location_on_map_service__["a" /* LocationOnMapService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__location_on_map_service__["a" /* LocationOnMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_on_map_service__["a" /* LocationOnMapService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _f || Object])
], LocationOnMapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=location-on-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/location-on-map/location-on-map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationOnMapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationOnMapService = (function () {
    function LocationOnMapService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        console.log('x-auth-token : ', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Add new Stop
    LocationOnMapService.prototype.addStop = function (stop) {
        var body = JSON.stringify(stop);
        console.log('in service Add stop : ' + stop._stopId);
        return this.http
            .post(this.baseUrl + '/riders', body, this.options);
        // .map(this.extractData);
    };
    // Add new Location
    LocationOnMapService.prototype.addLocation = function (location) {
        var body = JSON.stringify(location);
        console.log('in service Add location : ' + location);
        return this.http
            .post(this.baseUrl + '/location', body, this.options);
        // .map(this.extractData);
    };
    LocationOnMapService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return LocationOnMapService;
}());
LocationOnMapService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LocationOnMapService);

var _a;
//# sourceMappingURL=location-on-map.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"loginPage\" style= \"background:#353434; \">\n<div style=\"height:1%; width: 1%; \">\n<!-- <img src=\".././assets/img/logo1.png\" alt=\"logo\" id=\"logo\"> -->\n</div>\n\n  <div class=\"container p-5\" >\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n\n            <h4 class=\"text-center\">Login</h4>\n            <hr>\n            <form>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\n              </div>\n              <hr>\n              <button type=\"button\" style=\"background-color: #232f3e \" class=\"btn btn-primary btn-block\" (click)=\"login()\" [disabled]=\"btnDisabled\">Login</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_update_service__ = __webpack_require__("../../../../../src/app/login/session.update.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var LoginComponent = (function () {
    function LoginComponent(router, rest, data, loginService, sessionUpdateService) {
        this.router = router;
        this.rest = rest;
        this.data = data;
        this.loginService = loginService;
        this.sessionUpdateService = sessionUpdateService;
        this.email = '';
        this.password = '';
        this.btnDisabled = false;
        if (this.token) {
            router.navigate(['/dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(LoginComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem('x-auth-token');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.validate = function () {
        if (this.email) {
            if (this.password) {
                return true;
            }
            else {
                this.data.error('Password is not entered');
            }
        }
        else {
            this.data.error('Email is not entered.');
        }
    };
    LoginComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.btnDisabled = true;
                try {
                    if (this.validate()) {
                        this.loginObj = {
                            email: this.email,
                            password: this.password
                        };
                        this.loginService
                            .login(this.loginObj)
                            .subscribe(function (res) {
                            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                            headers = res.headers;
                            var payload = res.json();
                            console.log('payload.status ' + payload.status);
                            if (payload.status === 'success') {
                                console.log('Token in Header ' + headers.get('x-auth-token'));
                                if (headers.get('x-auth-token')) {
                                    _this.sessionUpdateService.updateAppTocken(headers.get('x-auth-token'));
                                    _this.router.navigate(['/dashboard']);
                                }
                                else {
                                    console.log('Failure');
                                    _this.data.error('Unable To Login, Please Enter Correct Credentials.');
                                }
                                //   this.showlogInForm=false;
                                //   /this.isLoggedIn=true;
                                //   this.router.navigateByUrl('/home');
                                //   this.sessionService.isLoggedIn();
                            }
                            else {
                                console.log('Failure');
                                _this.data.error('Unable To Login, Please Enter Correct Credentials.');
                                // this.router.navigate(['/']);
                                // this.showlogInForm=true;
                                // this.isLoggedIn=false;
                            }
                        });
                    }
                }
                catch (error) {
                    this.data.error(error['message']);
                }
                this.btnDisabled = false;
                return [2 /*return*/];
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_6__session_update_service__["a" /* SessionUpdateService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rest_api_service__["a" /* RestApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__session_update_service__["a" /* SessionUpdateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__session_update_service__["a" /* SessionUpdateService */]) === "function" && _e || Object])
], LoginComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    // baseUrl: String= 'http://localhost:3500/';
    function LoginService(http) {
        // console.log("In constructor LoginService");
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        }); // ... Set content type to JSON
        this.options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    LoginService.prototype.login = function (login) {
        var body = JSON.stringify(login);
        //  this.http
        //  .post(this.baseUrl + 'admin/login' ,  body ,  this.options).subscribe(resp => {
        //   console.log ('Token in Header resp **' + resp.headers.get('x-auth'));
        //  });
        return this.http
            .post(this.baseUrl + '/admin/login', body, this.options);
        // .map(this.extractData);
    };
    LoginService.prototype.extractData = function (res) {
        var bodyData = res.json();
        return bodyData || {};
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/session.update.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUpdateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionUpdateService = (function () {
    function SessionUpdateService() {
    }
    SessionUpdateService.prototype.setSessionUser = function (data) {
        localStorage.setItem('user', data.user);
    };
    // updateAppTocken(header:Headers) {
    SessionUpdateService.prototype.updateAppTocken = function (awtToken) {
        localStorage.setItem('x-auth-token', awtToken);
        console.log('x-auth after login :' + localStorage.getItem('x-auth-token'));
    };
    return SessionUpdateService;
}());
SessionUpdateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], SessionUpdateService);

//# sourceMappingURL=session.update.service.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"data.message\">\n  <ngb-alert [type]=\"data.messageType\" [dismissible]=\"false\">\n    {{ data.message }}\n  </ngb-alert>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageComponent = (function () {
    function MessageComponent(data) {
        this.data = data;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    return MessageComponent;
}());
MessageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-message',
        template: __webpack_require__("../../../../../src/app/message/message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message/message.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], MessageComponent);

var _a;
//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"registrationPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Registration</h4>\n            <hr>\n            <form>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Password</label>\n                <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\">\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Confirm Password</label>\n                <input type=\"password\" name=\"password1\" class=\"form-control\" [(ngModel)]=\"password1\">\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"isSeller\"> Register as Seller\n                </label>\n              </div>\n              <hr>\n              <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"register()\" [disabled]=\"btnDisabled\">Register</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var RegistrationComponent = (function () {
    function RegistrationComponent(router, data, rest) {
        this.router = router;
        this.data = data;
        this.rest = rest;
        this.name = '';
        this.email = '';
        this.password = '';
        this.password1 = '';
        this.isSeller = false;
        this.btnDisabled = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.validate = function () {
        if (this.name) {
            if (this.email) {
                if (this.password) {
                    if (this.password1) {
                        if (this.password === this.password1) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Confirmation Password is not entered');
                    }
                }
                else {
                    this.data.error('Password is not entered');
                }
            }
            else {
                this.data.error('Email is not entered.');
            }
        }
        else {
            this.data.error('Name is not entered.');
        }
    };
    RegistrationComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!this.validate()) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.rest.post('http://localhost:3000/api/accounts/signup', {
                                name: this.name,
                                email: this.email,
                                password: this.password,
                                isSeller: this.isSeller,
                            })];
                    case 2:
                        data = _a.sent();
                        if (!data['success']) return [3 /*break*/, 4];
                        localStorage.setItem('token', data['token']);
                        return [4 /*yield*/, this.data.getProfile()];
                    case 3:
                        _a.sent();
                        this.data.success('Registration successful!');
                        return [3 /*break*/, 5];
                    case 4:
                        this.data.error(data['message']);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.data.error(error_1['message']);
                        return [3 /*break*/, 7];
                    case 7:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-registration',
        template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/registration/registration.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rest_api_service__["a" /* RestApiService */]) === "function" && _c || Object])
], RegistrationComponent);

var _a, _b, _c;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/rest-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestApiService = (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.getHeaders = function () {
        var token = localStorage.getItem('token');
        return token ? new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token) : null;
    };
    RestApiService.prototype.get = function (link) {
        return this.http.get(link, { headers: this.getHeaders() }).toPromise();
    };
    RestApiService.prototype.post = function (link, body) {
        return this.http.post(link, body, { headers: this.getHeaders() }).toPromise();
    };
    return RestApiService;
}());
RestApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], RestApiService);

var _a;
//# sourceMappingURL=rest-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/route/route.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper add-padding\">\n    <div class=\"content-header clearfix\">\n    <h2 class=\"pull-left\" style=\"color:#232f3e; \">\n    Add Stop\n    </h2>\n    <div class=\"pull-right\">\n\n        <button type=\"submit\" name=\"save-continue\" class=\"btn bg-blue\" routerLink=\"/shifts\" routerLinkActive=\"active\" >\n          <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n        Back\n        </button>\n        </div>\n    </div>\n    <!-- <input id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\"> -->\n    <div id=\"map\" class=\"google-map\"></div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/route/route.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  border-style: solid;\n  border-width: 5px;\n  border-color: #007872;\n  height: 450px;\n  width: 750px;\n  float: left;\n  margin: auto; }\n\n.map-wrapper {\n  padding-left: 30%; }\n\n.map-container {\n  margin: auto; }\n\n#map {\n  height: 500px; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n\n.labels {\n  color: red;\n  background-color: red;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100px;\n  border: 0; }\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300; }\n\n#infowindow-content .title {\n  font-weight: bold; }\n\n#infowindow-content {\n  display: none; }\n\n#map #infowindow-content {\n  display: inline; }\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto; }\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px; }\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px; }\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300; }\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 100%; }\n\n#pac-input:focus {\n  border-color: #4d90fe; }\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px; }\n\n#target {\n  width: 345px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route/route.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shifts_shifts_component__ = __webpack_require__("../../../../../src/app/shifts/shifts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__ = __webpack_require__("../../../../../src/app/drivers/drivers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_service__ = __webpack_require__("../../../../../src/app/route/route.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RouteComponent = (function () {
    function RouteComponent(driversService, route, routeService, router) {
        var _this = this;
        this.driversService = driversService;
        this.route = route;
        this.routeService = routeService;
        this.router = router;
        this.flightPlanCoordinates = [];
        this.shiftLocations = [];
        this.route.params.subscribe(function (params) {
            _this.shiftId = params['shiftId'];
            console.log('Params shiftId: ' + _this.shiftId);
        });
        // Populating list of Location From ShiftsComponent
        this.shiftLocations = __WEBPACK_IMPORTED_MODULE_0__shifts_shifts_component__["a" /* ShiftsComponent */].shiftLocations;
        if (this.shiftLocations) {
            for (var i = 0; i < this.shiftLocations.length; i++) {
                console.log('Loc :' + i);
                if (this.shiftLocations[i].pickUploc) {
                    // this.flightPlanCoordinates.push ();
                    console.log('Long :' + this.shiftLocations[i].pickUploc[0]);
                    console.log('Lat :' + this.shiftLocations[i].pickUploc[1]);
                }
            }
        }
        else {
            window.confirm('No Locations Found');
            console.log('No Locations Found');
        }
    }
    RouteComponent.prototype.ngOnInit = function () {
        var map;
        var marker;
        var ISB = { lat: 33.738045, lng: 73.084488 };
        var bounds = new google.maps.LatLngBounds();
        map = new google.maps.Map(document.getElementById('map'), {
            center: ISB,
            zoom: 11
        });
        if (this.shiftLocations) {
            for (var i = 0; i < this.shiftLocations.length; i++) {
                if (this.shiftLocations[i].pickUploc) {
                    console.log('*Lat : ' + this.shiftLocations[i].pickUploc[1]);
                    console.log('*Long : ' + this.shiftLocations[i].pickUploc[0]);
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(this.shiftLocations[i].pickUploc[0], this.shiftLocations[i].pickUploc[1]),
                        map: map
                    });
                    this.flightPlanCoordinates.push(marker.getPosition());
                    bounds.extend(marker.position);
                }
            }
        }
        map.fitBounds(bounds);
        var flightPath = new google.maps.Polyline({
            map: map,
            path: this.flightPlanCoordinates,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-route',
        template: __webpack_require__("../../../../../src/app/route/route.component.html"),
        styles: [__webpack_require__("../../../../../src/app/route/route.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */], __WEBPACK_IMPORTED_MODULE_3__route_service__["a" /* RouteService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__route_service__["a" /* RouteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__route_service__["a" /* RouteService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _d || Object])
], RouteComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=route.component.js.map

/***/ }),

/***/ "../../../../../src/app/route/route.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RouteService = (function () {
    function RouteService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        console.log('x-auth-token : ', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Add new Stop
    RouteService.prototype.addStop = function (stop) {
        var body = JSON.stringify(stop);
        console.log('in service Add stop : ' + stop._stopId);
        return this.http
            .post(this.baseUrl + '/riders', body, this.options);
        // .map(this.extractData);
    };
    // Add new Location
    RouteService.prototype.addLocation = function (location) {
        var body = JSON.stringify(location);
        console.log('in service Add location : ' + location);
        return this.http
            .post(this.baseUrl + '/location', body, this.options);
        // .map(this.extractData);
    };
    RouteService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return RouteService;
}());
RouteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RouteService);

var _a;
//# sourceMappingURL=route.service.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"settings\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Account Settings</h4>\n    <hr>\n    <app-message></app-message>\n    <div *ngIf=\"!currentSettings\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentSettings\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Name</label>\n            <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"currentSettings.name\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Email</label>\n            <input type=\"email\" name=\"email\" class=\"form-control\" [(ngModel)]=\"currentSettings.email\">\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input type=\"checkbox\" name=\"isSeller\" class=\"form-check-input\" [(ngModel)]=\"currentSettings.isSeller\"> Is Seller\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">New Password</label>\n            <input type=\"password\" name=\"newPwd\" class=\"form-control\" [(ngModel)]=\"currentSettings.newPwd\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Confirm Password</label>\n            <input type=\"password\" name=\"pwdConfirm\" class=\"form-control\" [(ngModel)]=\"currentSettings.pwdConfirm\">\n          </div>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"update()\" [disabled]=\"btnDisabled\">Update</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_api_service__ = __webpack_require__("../../../../../src/app/rest-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SettingsComponent = (function () {
    function SettingsComponent(data, rest) {
        this.data = data;
        this.rest = rest;
        this.btnDisabled = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.data.user) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.data.getProfile()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.currentSettings = Object.assign({
                            newPwd: '',
                            pwdConfirm: ''
                        }, this.data.user);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.data.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SettingsComponent.prototype.validate = function (settings) {
        if (settings['name']) {
            if (settings['email']) {
                if (settings['newPwd']) {
                    if (settings['pwdConfirm']) {
                        if (settings['newPwd'] === settings['pwdConfirm']) {
                            return true;
                        }
                        else {
                            this.data.error('Passwords do not match.');
                        }
                    }
                    else {
                        this.data.error('Please enter confirmation password.');
                    }
                }
                else {
                    if (!settings['pwdConfirm']) {
                        return true;
                    }
                    else {
                        this.data.error('Please enter new password.');
                    }
                }
            }
            else {
                this.data.error('Please enter your email.');
            }
        }
        else {
            this.data.error('Please enter your name.');
        }
    };
    SettingsComponent.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.btnDisabled = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        if (!this.validate(this.currentSettings)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.rest.post('http://localhost:3000/api/accounts/profile', {
                                name: this.currentSettings['name'],
                                email: this.currentSettings['email'],
                                password: this.currentSettings['newPwd'],
                                isSeller: this.currentSettings['isSeller']
                            })];
                    case 2:
                        data = _a.sent();
                        data['success']
                            ? (this.data.getProfile(), this.data.success(data['message']))
                            : this.data.error(data['message']);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.data.error(error_2['message']);
                        return [3 /*break*/, 5];
                    case 5:
                        this.btnDisabled = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rest_api_service__["a" /* RestApiService */]) === "function" && _b || Object])
], SettingsComponent);

var _a, _b;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed-plugin\">\n    <div class=\"dropdown show-dropdown\">\n        <a href=\"#\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"dropdown-menu\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\n                </a>\n            </li>\n\n\t\t\t<li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <span class=\"badge filter badge-primary\" data-color=\"primary\"></span>\n                        <span class=\"badge filter badge-info\" data-color=\"info\"></span>\n                        <span class=\"badge filter badge-success\" data-color=\"success\"></span>\n                        <span class=\"badge filter badge-warning\" data-color=\"warning\"></span>\n                        <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FixedPluginComponent = (function () {
    function FixedPluginComponent() {
    }
    FixedPluginComponent.prototype.ngOnInit = function () {
        var $sidebar = $('.sidebar');
        var $off_canvas_sidebar = $('.off-canvas-sidebar');
        var window_width = $(window).width();
        if (window_width > 767) {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length != 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($off_canvas_sidebar.length != 0) {
                $off_canvas_sidebar.attr('data-active-color', new_color);
            }
        });
    };
    return FixedPluginComponent;
}());
FixedPluginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'fixedplugin-cmp',
        template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html")
    })
], FixedPluginComponent);

//# sourceMappingURL=fixedplugin.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedPluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FixedPluginModule = (function () {
    function FixedPluginModule() {
    }
    return FixedPluginModule;
}());
FixedPluginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__fixedplugin_component__["a" /* FixedPluginComponent */]]
    })
], FixedPluginModule);

//# sourceMappingURL=fixedplugin.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-cmp',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-panel\"></i>\n                        <p>Stats</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <i class=\"ti-bell\"></i>\n                            <p class=\"notification\">5</p>\n                            <p>Notifications</p>\n                            <b class=\"caret\"></b>\n                      </a>\n                      <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Notification 1</a></li>\n                        <li><a href=\"#\">Notification 2</a></li>\n                        <li><a href=\"#\">Notification 3</a></li>\n                        <li><a href=\"#\">Notification 4</a></li>\n                        <li><a href=\"#\">Another notification</a></li>\n                      </ul>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <i class=\"ti-settings\"></i>\n                        <p>Settings</p>\n                    </a>\n                </li>\n            </ul>\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("navbar-cmp"),
    __metadata("design:type", Object)
], NavbarComponent.prototype, "button", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navbar-cmp',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
    })
], NavbarModule);

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper add-padding\">\n    <!-- Content Header (Page header) -->\n  <div class=\"content-header clearfix\">\n<h2 class=\"pull-left\"  style=\"color:#232f3e\">\nAdd Shift\n</h2>\n<div class=\"pull-right\">\n<button type=\"submit\" name=\"save\" class=\"btn bg-blue\" (click)=\"saveShift()\" >\n<i class=\"fa fa-floppy-o\"></i>\nSave\n</button>\n<button type=\"submit\" name=\"save-continue\" class=\"btn bg-blue\" routerLink=\"/shifts\" routerLinkActive=\"active\" >\n  <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\nBack\n</button>\n</div>\n</div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <!-- /.box -->\n          <!-- START CUSTOM TABS -->\n          <!-- Custom Tabs -->\n          <div class=\"nav-tabs-custom\">\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active\" id=\"tab_1\">\n     <div class=\"row\">\n            <div class=\"col-md-7\">\n         <!-- Horizontal Form -->\n            <!-- form start -->\n            <form class=\"form-horizontal\">\n              <div class=\"box-body\">\n\n          <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\">Shift Title</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"title\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"title\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n          <div>\n              <label for=\"authorName\" class=\"col-sm-2 control-label\">Select Driver</label>\n          </div>\n\n          <select  [(ngModel)]=\"selectedDriver\" (ngModelChange)=\"chkDriverName()\" name=\"selectedDriver\">\n            <option *ngFor=\"let d of drivers\"  value={{d._id}}> {{d.name}} </option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\">Vehicle #</label>\n            <div class=\"col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"vehicle\" placeholder=\"Vehicle Number Here\" name=\"vehicle\" [(ngModel)]=\"vehicle\">\n           </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\" style= \"max-width: 20%;\">Start Location</label>\n            <button   (click)=\"showStartLocMap($event)\" >\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              Show/Hide Map\n            </button>\n            <div [hidden]=\"!openStartLocMap\" id=\"map\" class=\"google-map\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\" style= \"max-width: 20%;\">End Location</label>\n            <button  (click)=\"showEndLocMap($event)\"  >\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              Show/Hide Map\n            </button>\n            <div [hidden]=\"!openEndLocMap\" id=\"map2\" class=\"google-map\"></div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\" style= \"max-width: 20%;\">Pick Up Time</label>\n            <input atp-time-picker value=\"19:00\" [(ngModel)]=\"startTime\" name=\"startTime\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"authorName\" class=\"col-sm-2 control-label\" style= \"max-width: 20%;\">Drop Off Time</label>\n            <input atp-time-picker value=\"19:00\" [(ngModel)]=\"endTime\" name=\"endTime\" />\n        </div>\n\n\n        <!-- <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">Status</label>\n                  <div class=\"col-sm-10\">\n          <div class=\"col-sm-3\">\n          <div class=\"radio\">\n                    <label>\n                      <input type=\"radio\" name=\"optionsRadiosT\" id=\"optionsRadios1\" value=\"option1\" checked=\"\">\n                      Published\n                    </label>\n                  </div>\n          </div>\n          <div class=\"col-sm-3\">\n                  <div class=\"radio\">\n                    <label>\n                      <input type=\"radio\" name=\"optionsRadiosT\" id=\"optionsRadios2\" value=\"option2\">\n                      Unpublished\n                    </label>\n                  </div>\n          </div>\n          </div>\n                </div> -->\n             </div>\n            </form>\n          <!-- /.box -->\n                </div>\n        </div>\n          <!-- /.row -->\n              </div>\n            </div>\n            <!-- /.tab-content -->\n          </div>\n          <!-- nav-tabs-custom -->\n      <!-- END CUSTOM TABS -->\n\n     </section>\n    <!-- /.content -->\n  </div>\n\n\n  <popup  #confirmStartLocMarkerPopup (confirmClick)=\"confirmStartLoc()\">\n      <h2>Set Title For Starting Location</h2>\n    <input   type=\"text\"  class =\"popup-inputs\" placeholder=\"Title\" name=\"startLocTitle\" [(ngModel)]=\"startLocTitle\" >\n      <br>\n    <input   type=\"text\"  class =\"popup-inputs\" placeholder=\"Lat\" name=\"startLocLat\" [(ngModel)]=\"startLocLat\" readonly>\n      <br>\n    <input   type=\"text\" class =\"popup-inputs\" placeholder=\"Long \" name=\"startLocLong\" [(ngModel)]=\"startLocLong\" readonly>\n      <br>\n\n  </popup>\n  <popup  #confirmEndLocMarkerPopup (confirmClick)=\"confirmEndLoc()\">\n      <h2>Set Title For Ending Location</h2>\n      <input   type=\"text\" class =\"popup-inputs\"  placeholder=\"Title\" name=\"endLocTitle\" [(ngModel)]=\"endLocTitle\" >\n      <br>\n      <input   type=\"text\" class =\"popup-inputs\" placeholder=\"Lat\" name=\"endLocLat\" [(ngModel)]=\"endLocLat\" readonly>\n      <br>\n      <input   type=\"text\" class =\"popup-inputs\" placeholder=\"Long \" name=\"endLocLong\" [(ngModel)]=\"endLocLong\" readonly>\n       <br>\n\n  </popup>\n"

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".popup-inputs {\n  width: 73%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\nselect {\n  width: 79%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin-left: 18px; }\n\n.map-wrapper {\n  padding-left: 30%; }\n\n.map-container {\n  margin: auto; }\n\n#map {\n  height: 500px; }\n\n#map2 {\n  height: 500px; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n\n.labels {\n  color: red;\n  background-color: red;\n  font-family: \"Lucida Grande\", \"Arial\", sans-serif;\n  font-size: 10px;\n  font-weight: bold;\n  text-align: center;\n  width: 100px;\n  border: 0; }\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300; }\n\n#infowindow-content .title {\n  font-weight: bold; }\n\n#infowindow-content {\n  display: none; }\n\n#map #infowindow-content {\n  display: inline; }\n\n#target {\n  width: 345px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shift/shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shift_service__ = __webpack_require__("../../../../../src/app/shift/shift.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__ = __webpack_require__("../../../../../src/app/drivers/drivers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Models_AdminShift__ = __webpack_require__("../../../../../src/app/Models/AdminShift.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_Location__ = __webpack_require__("../../../../../src/app/Models/Location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__ = __webpack_require__("../../../../ng2-opd-popup/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShiftComponent = (function () {
    function ShiftComponent(shiftService, driversService, router, popup) {
        this.shiftService = shiftService;
        this.driversService = driversService;
        this.router = router;
        this.popup = popup;
        this.drivers = [];
        this.driversLength = 0;
        this.startTime = '08:00';
        this.endTime = '08:00';
        this.openStartLocMap = false;
        this.openEndLocMap = false;
        this.popup.options = {
            header: 'Confirmation',
            color: '#232f3e',
            widthProsentage: 40,
            // animationDuration: 1, // in seconds, 0 = no animation
            showButtons: true,
            confirmBtnContent: 'OK',
            cancleBtnContent: 'CANCEL',
            confirmBtnClass: 'btn btn-bold',
            cancleBtnClass: 'btn btn-bold',
        };
    }
    // google.maps.event.addListener(marker, 'click',
    ShiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        var startLocMap;
        var endLocMap;
        var marker;
        var ISB = { lat: 33.738045, lng: 73.084488 };
        var latlng = new google.maps.LatLng(33.738045, 73.084488);
        startLocMap = new google.maps.Map(document.getElementById('map'), {
            center: latlng,
            zoom: 11
        });
        endLocMap = new google.maps.Map(document.getElementById('map2'), {
            center: latlng,
            zoom: 11
        });
        this.driversService
            .getDrivers()
            .subscribe(function (u) {
            _this.drivers = u;
            console.log('drivers :' + u);
            _this.driversLength = _this.drivers.length;
            // this.categoryLoaded=true;
        });
        google.maps.event.addListener(startLocMap, 'click', function (event) {
            console.log('Map startLocMap Cliked , Lat Longs : ' + event.latLng.lat() + 'longitude: ' + event.latLng.lng());
            _this.startLocLat = event.latLng.lat();
            _this.startLocLong = event.latLng.lng();
            _this.confirmStartLocMarkerPopup.show(_this.popup.options);
        });
        google.maps.event.addListener(endLocMap, 'click', function (event) {
            console.log('Map endLocMap Cliked , Lat Longs : ' + event.latLng.lat() + 'longitude: ' + event.latLng.lng());
            _this.endLocLat = event.latLng.lat();
            _this.endLocLong = event.latLng.lng();
            _this.confirmEndLocMarkerPopup.show(_this.popup.options);
        });
    };
    ShiftComponent.prototype.setLoc = function (loc) {
        console.log('Set Loc Called');
    };
    ShiftComponent.prototype.chkDriverName = function () {
        console.log('Selected Driver: ' + this.selectedDriver);
    };
    ShiftComponent.prototype.showStartLocMap = function (event) {
        if (this.openStartLocMap === true) {
            this.openStartLocMap = false;
        }
        else {
            this.openStartLocMap = true;
            // close other Map
            this.openEndLocMap = false;
        }
        console.log('openStartLocMap: ' + this.openStartLocMap);
    };
    ShiftComponent.prototype.showEndLocMap = function (event) {
        if (this.openEndLocMap === true) {
            this.openEndLocMap = false;
        }
        else {
            this.openEndLocMap = true;
            //close other Map
            this.openStartLocMap = false;
        }
        console.log('openEndLocMap: ' + this.openEndLocMap);
    };
    ShiftComponent.prototype.confirmStartLoc = function () {
        var _this = this;
        this.startLocationObj = new __WEBPACK_IMPORTED_MODULE_4__Models_Location__["a" /* Location */]();
        this.startLocationObj.title = this.startLocTitle;
        this.startLocationObj.loc = [];
        this.startLocationObj.loc[0] = this.startLocLat;
        this.startLocationObj.loc[1] = this.startLocLong;
        this.shiftService.addLocation(this.startLocationObj).subscribe(function (u) {
            var payload = u.json();
            console.log('payload.status ' + payload.status);
            if (payload.status === 'success') {
                console.log('Object Id : ' + payload.object._id);
                _this.startLocId = payload.object._id;
                _this.confirmStartLocMarkerPopup.hide();
                _this.openStartLocMap = false;
            }
            _this.startLocationObj = null;
        });
        this.startLocTitle = '';
        this.startLocLong = null;
        this.startLocLat = null;
    };
    ShiftComponent.prototype.confirmEndLoc = function () {
        var _this = this;
        this.endLocationObj = new __WEBPACK_IMPORTED_MODULE_4__Models_Location__["a" /* Location */]();
        this.endLocationObj.title = this.endLocTitle;
        this.endLocationObj.loc = [];
        this.endLocationObj.loc[0] = this.endLocLat;
        this.endLocationObj.loc[1] = this.endLocLong;
        this.shiftService.addLocation(this.endLocationObj).subscribe(function (u) {
            var payload = u.json();
            console.log('payload.status ' + payload.status);
            if (payload.status === 'success') {
                console.log('Object Id : ' + payload.object._id);
                _this.endLocId = payload.object._id;
                _this.confirmEndLocMarkerPopup.hide();
                _this.openEndLocMap = false;
            }
            _this.endLocationObj = null;
        });
        this.endLocTitle = '';
        this.endLocLong = null;
        this.endLocLat = null;
    };
    ShiftComponent.prototype.saveShift = function () {
        var _this = this;
        // let tempTime;
        // tempTime= new Date();
        // console.log('tempTime: '+tempTime);
        // this.startTime;
        var startTempTime = '2018-10-15T' + this.startTime + ':00Z';
        var endTempTime = '2018-10-15T' + this.endTime + ':00Z';
        if (this.selectedDriver === undefined && this.title === undefined && this.vehicle === undefined) {
            alert('Please Provide Complete Shift Details');
        }
        else {
            this.adminShift = new __WEBPACK_IMPORTED_MODULE_3__Models_AdminShift__["a" /* AdminShift */]();
            this.adminShift.title = this.title;
            this.adminShift._driverId = this.selectedDriver;
            this.adminShift._startLocId = this.startLocId;
            this.adminShift._endLocID = this.endLocId;
            this.adminShift.vehicle = this.vehicle;
            this.adminShift.shiftStartTime = startTempTime;
            this.adminShift.shiftEndTime = endTempTime;
            this.adminShift.shiftStatus = false;
            this.shiftService.addShift(this.adminShift).subscribe(function (u) {
                _this.ngOnInit();
                console.log(u.status);
                _this.router.navigate(['/shifts']);
                _this.adminShift = null;
            });
        }
    };
    return ShiftComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('confirmStartLocMarkerPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */]) === "function" && _a || Object)
], ShiftComponent.prototype, "confirmStartLocMarkerPopup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('confirmEndLocMarkerPopup'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */]) === "function" && _b || Object)
], ShiftComponent.prototype, "confirmEndLocMarkerPopup", void 0);
ShiftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shift',
        template: __webpack_require__("../../../../../src/app/shift/shift.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shift/shift.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shift_service__["a" /* ShiftService */], __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shift_service__["a" /* ShiftService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shift_service__["a" /* ShiftService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__drivers_drivers_service__["a" /* DriversService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_opd_popup__["a" /* Popup */]) === "function" && _f || Object])
], ShiftComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=shift.component.js.map

/***/ }),

/***/ "../../../../../src/app/shift/shift.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShiftService = (function () {
    function ShiftService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        console.log('x-auth-token : ', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Add new Shift
    ShiftService.prototype.addShift = function (shift) {
        var body = JSON.stringify(shift);
        console.log('in service Add shift : ' + shift.title);
        return this.http
            .post(this.baseUrl + '/shifts', body, this.options)
            .map(this.extractData);
    };
    // Add new Location
    ShiftService.prototype.addLocation = function (location) {
        var body = JSON.stringify(location);
        console.log('in service Add location : ' + location);
        return this.http
            .post(this.baseUrl + '/location', body, this.options);
        // .map(this.extractData);
    };
    ShiftService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return ShiftService;
}());
ShiftService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShiftService);

var _a;
//# sourceMappingURL=shift.service.js.map

/***/ }),

/***/ "../../../../../src/app/shifts/shifts.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper add-padding\">\n    <!-- Content Header (Page header) -->\n  <div class=\"content-header clearfix\">\n<h2 class=\"pull-left\" style=\"color:#232f3e\">\nRoutes\n</h2>\n<div class=\"pull-right\"  >\n<a  routerLink=\"/shift\" routerLinkActive=\"active\"  class=\"btn bg-blue\">\n  <i class=\"fa fa-plus-square\"></i>\n  Add new\n</a>\n\n<!-- <button type=\"button\" id=\"delete-selected\" class=\"btn bg-red\">\n<i class=\"fa fa-trash-o\"></i>\nDelete (selected)\n</button> -->\n</div>\n</div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n        <!-- <div class=\"panel-group\">\n        <div class=\"panel panel-default\">\n        <div class=\"panel-body\"> -->\n            <!-- <div > -->\n        <table id=\"example\" class=\"table table-striped table-bordered\" cellspacing=\"0\" >\n\n        <thead >\n    <tr >\n    <!-- <th  style=\"text-align:center;\" ><input id=\"selectAll\" class=\"minimal\" type=\"checkbox\"></th> -->\n    <th  > # </th>\n    <th  >Title</th>\n    <th  >Start Time</th>\n    <th  >End Time </th>\n\n    <th> Stops </th>\n    <th> Route </th>\n     <th>Delete </th>\n\n    </tr>\n    </thead>\n            <tbody>\n                <tr *ngFor=\"let shift of shifts; let i = index\">\n\n                    <!-- <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td> -->\n                    <td>{{i + 1}}</td>\n                    <td >{{shift.title}} </td>\n                    <td >{{shift.shiftStartTime}} </td>\n                    <td >{{shift.shiftEndTime}} </td>\n                    <td>\n                     <button type=\"button\" class=\"btn btn-primary \" (click)=\"addStop(shift)\" >Add Stop</button>\n                    </td>\n                    <td>\n                       <button type=\"button\" class=\"btn btn-info \" (click)=\"viewRoute(shift)\" >View Route</button>\n                      </td>\n                     <td>\n                      <!-- <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\" (click)=\"confirmEdit(shift)\">&nbsp;&nbsp;</i> -->\n                      <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"confirmDelete(shift)\"></i>\n                    </td>\n                  </tr>\n\n           <!-- <tr >\n                <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                <td >Sajid</td>\n                <td >“Don't cry because it's over, smile because it happened.” </td>\n                <td ><span class=\"badge bg-green\">on</span></td>\n            </tr>\n       <tr >\n                <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                <td >Sajid</td>\n                <td >“Don't cry because it's over, smile because it happened.” </td>\n                <td ><span class=\"badge bg-red\">off</span></td>\n            </tr>\n      <tr >\n                <td style=\"text-align:center\" ><input type=\"checkbox\" class=\"minimal\" value=\"5\" ></td>\n                <td >Sajid</td>\n                <td >“Don't cry because it's over, smile because it happened.” </td>\n                <td ><span class=\"badge bg-green\">on</span></td>\n            </tr> -->\n            </tbody>\n\n\n        </table>\n        <!-- </div> -->\n        <!-- </div>\n        </div>\n            </div> -->\n        <!-- </div> -->\n     </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->\n<!-- <app-location-on-map></app-location-on-map> -->\n\n  <popup #deletePopup (confirmClick)=\"deleteShift()\">\n    <div>Are you sure, You want to Delete Shift ?\n    <!-- <app-location-on-map></app-location-on-map> -->\n    </div>\n    <!-- <app-location-on-map></app-location-on-map> -->\n\n  </popup>\n\n\n  <popup  #editPopup (confirmClick)=\"editShift()\">\n  </popup>\n\n"

/***/ }),

/***/ "../../../../../src/app/shifts/shifts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password], input[type=number] {\n  width: 73%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\ntextarea {\n  width: 73%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  box-sizing: border-box; }\n\n.button {\n  background-color: #232f3e;\n  border: none;\n  color: white;\n  padding: 13px 18px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 4px 2px;\n  cursor: pointer;\n  font-weight: bold; }\n\n.add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shifts/shifts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shifts_service__ = __webpack_require__("../../../../../src/app/shifts/shifts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_Driver__ = __webpack_require__("../../../../../src/app/Models/Driver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__ = __webpack_require__("../../../../ng2-opd-popup/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShiftsComponent = ShiftsComponent_1 = (function () {
    function ShiftsComponent(shiftsService, popup, router) {
        this.shiftsService = shiftsService;
        this.popup = popup;
        this.router = router;
        this.shifts = [];
        this.shiftsLength = 0;
        this.popup.options = {
            header: 'Confirmation',
            color: '#232f3e',
            widthProsentage: 40,
            // animationDuration: 1, // in seconds, 0 = no animation
            showButtons: true,
            confirmBtnContent: 'OK',
            cancleBtnContent: 'CANCEL',
            confirmBtnClass: 'btn btn-bold',
            cancleBtnClass: 'btn btn-bold',
        };
    }
    ShiftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shiftsService
            .getShifts()
            .subscribe(function (u) {
            _this.shifts = u;
            console.log('Shifts :' + u);
            _this.shiftsLength = _this.shifts.length;
            console.log('this.shifts[0]._id : ' + _this.shifts[0]._id);
            // this.categoryLoaded=true;
        });
    };
    ShiftsComponent.prototype.confirmEdit = function (driver) {
        console.log('driver: ' + driver.name);
        this.name = driver.name;
        this.email = driver.email;
        this.phone = driver.phone;
        this.driverIdToEdit = driver._id;
        this.editPopup.show(this.popup.options);
    };
    ShiftsComponent.prototype.editShift = function () {
        var _this = this;
        // Update driver
        this.tempUser = new __WEBPACK_IMPORTED_MODULE_2__Models_Driver__["a" /* Driver */]();
        this.tempUser._id = this.driverIdToEdit;
        this.tempUser.name = this.name;
        this.tempUser.email = this.email;
        this.tempUser.phone = this.phone;
        console.log('Edit driver : ' + this.driverIdToEdit);
        this.editPopup.hide();
        this.shiftsService.updateDriver(this.tempUser)
            .subscribe(function (u) {
            _this.ngOnInit();
            console.log('Update Driver API Status ' + u.status);
            _this.tempUser = null;
        });
        this.driverIdToEdit = '';
    };
    ShiftsComponent.prototype.confirmDelete = function (shift) {
        console.log('shift title To delete : ' + shift.title);
        console.log('shift Id To delete : ' + shift._id);
        this.shiftIdToDelete = shift._id;
        this.deletePopup.show(this.popup.options);
    };
    ShiftsComponent.prototype.deleteShift = function () {
        var _this = this;
        this.deletePopup.hide();
        this.shiftsService
            .deleteShift(this.shiftIdToDelete)
            .subscribe(function (u) {
            _this.ngOnInit();
            console.log(u.status);
            // this.tempCategory=null;
        });
    };
    ShiftsComponent.prototype.addStop = function (shift) {
        console.log('Add Stop To shift Id : ' + shift._id);
        this.router.navigate(['/addLocation/' + shift._id]);
    };
    ShiftsComponent.prototype.viewRoute = function (shift) {
        ShiftsComponent_1.shiftLocations = shift.listOfStops;
        this.router.navigate(['/route/' + shift._id]);
    };
    return ShiftsComponent;
}());
ShiftsComponent.shiftLocations = [];
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('editPopup'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _a || Object)
], ShiftsComponent.prototype, "editPopup", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deletePopup'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _b || Object)
], ShiftsComponent.prototype, "deletePopup", void 0);
ShiftsComponent = ShiftsComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shifts',
        template: __webpack_require__("../../../../../src/app/shifts/shifts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shifts/shifts.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shifts_service__["a" /* ShiftsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shifts_service__["a" /* ShiftsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shifts_service__["a" /* ShiftsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_opd_popup__["a" /* Popup */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _e || Object])
], ShiftsComponent);

var ShiftsComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=shifts.component.js.map

/***/ }),

/***/ "../../../../../src/app/shifts/shifts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShiftsService = (function () {
    function ShiftsService(http) {
        this.http = http;
        //baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    ShiftsService.prototype.getShifts = function () {
        // this.http.get(this.baseUrl + '/quotes', this.options ).subscribe(data => {
        //   console.log('data' + data);
        // });shifts/allShifts
        return this.http.get(this.baseUrl + '/shifts/allShifts', this.options)
            .map(function (res) { return res.json().object; });
    };
    // // Add new Category
    // addMarkerCategory(markerCategoryToSet  ): Observable<Response> {
    // let body = JSON.stringify(markerCategoryToSet);
    // console.log ('in service Add Category : '+ markerCategoryToSet);
    // 	return this.http
    // 		.post(this.baseUrl + '/v2.0/markerCategory' ,  body ,  this.options)
    // 		.map(this.extractData);
    //   }
    // Edit a Driver
    ShiftsService.prototype.updateDriver = function (driver) {
        var body = JSON.stringify(driver);
        console.log('URL : ', this.baseUrl + '/driver/' + driver._id);
        return this.http
            .patch(this.baseUrl + '/driver/' + driver._id, body, this.options)
            .map(this.extractData);
    };
    // Delete Shift
    ShiftsService.prototype.deleteShift = function (shiftIdToDelete) {
        var body = JSON.stringify(shiftIdToDelete);
        // console.log ('URL : ', this.baseUrl + '/driver/' + shiftIdToDelete);
        return this.http
            .delete(this.baseUrl + '/shifts/' + shiftIdToDelete, this.options)
            .map(this.extractData);
    };
    ShiftsService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return ShiftsService;
}());
ShiftsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ShiftsService);

var _a;
//# sourceMappingURL=shifts.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n            <div class=\"logo-img\">\n                <img src=\"../../assets/img/angular2-logo.png\" alt=\"\">\n            </div>\n            Creative Tim\n        </a>\n    </div>\n    <ul class=\"nav\">\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    <i class=\"ti-panel\"></i>\n\t\t\t\t\t<p>Stats</p>\n                </a>\n            </li>\n            <li class=\"dropdown\" *ngIf=\"isNotMobileMenu()\">\n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"ti-bell\"></i>\n                        <p class=\"notification\">5</p>\n    \t\t\t\t\t<p>Notifications</p>\n    \t\t\t\t\t<b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu\">\n                    <li><a href=\"#\">Notification 1</a></li>\n                    <li><a href=\"#\">Notification 2</a></li>\n                    <li><a href=\"#\">Notification 3</a></li>\n                    <li><a href=\"#\">Notification 4</a></li>\n                    <li><a href=\"#\">Another notification</a></li>\n                  </ul>\n            </li>\n            <li *ngIf=\"isNotMobileMenu()\">\n                <a href=\"#\">\n\t\t\t\t\t<i class=\"ti-settings\"></i>\n\t\t\t\t\t<p>Settings</p>\n                </a>\n            </li>\n            <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'dashboard', title: 'Dashboard', icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List', icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography', icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons', icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps', icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'ti-bell', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'ti-export', class: 'active-pro' },
];
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sidebar-cmp',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
    })
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sms/sms.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper add-padding\">\n    <!-- Content Header (Page header) -->\n  <div class=\"content-header clearfix\">\n<h1 class=\"pull-left\">\nSend SMS To Drivers\n</h1>\n<div class=\"pull-right\">\n<button type=\"submit\" name=\"save\" class=\"btn bg-blue\" (click)=\"sendMessage()\" >\n<i class=\"fa fa-floppy-o\"></i>\nSend\n</button>\n<!-- <button type=\"submit\" name=\"save-continue\" class=\"btn bg-blue\">\n<i class=\"fa fa-floppy-o\"></i>\nSave and Continue Edit\n</button> -->\n</div>\n</div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <!-- /.box -->\n          <!-- START CUSTOM TABS -->\n          <!-- Custom Tabs -->\n          <div class=\"nav-tabs-custom\">\n            <!-- <ul class=\"nav nav-tabs\">\n              <li class=\"active\"><a href=\"#tab_1\" data-toggle=\"tab\">Add Quote</a></li>\n            </ul> -->\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active\" id=\"tab_1\">\n     <div class=\"row\">\n            <div class=\"col-md-7\">\n         <!-- Horizontal Form -->\n            <!-- form start -->\n            <form class=\"form-horizontal\">\n              <div class=\"box-body\">\n                <div class=\"form-group\">\n                  <label for=\"des\" class=\"col-sm-2 control-label\">Message</label>\n                  <div class=\"col-sm-10\">\n                    <textarea class=\"form-control\" rows=\"8\" placeholder=\"Write your message here ...\" name=\"message\" [(ngModel)]=\"message\" ></textarea>\n                  </div>\n                </div>\n             </div>\n            </form>\n          <!-- /.box -->\n                </div>\n        </div>\n          <!-- /.row -->\n              </div>\n            </div>\n            <!-- /.tab-content -->\n          </div>\n          <!-- nav-tabs-custom -->\n      <!-- END CUSTOM TABS -->\n\n     </section>\n    <!-- /.content -->\n  </div>\n  <!-- <app-location-on-map></app-location-on-map> -->\n"

/***/ }),

/***/ "../../../../../src/app/sms/sms.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-padding {\n  padding-left: 1%;\n  padding-right: 2%;\n  padding-top: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sms/sms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sms_service__ = __webpack_require__("../../../../../src/app/sms/sms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmsComponent = (function () {
    function SmsComponent(smsService, router) {
        this.smsService = smsService;
        this.router = router;
    }
    SmsComponent.prototype.ngOnInit = function () {
    };
    SmsComponent.prototype.sendMessage = function () {
        var _this = this;
        console.log(this.message);
        // console.log (this.authorName);
        if (this.message === undefined) {
            alert('Please type your Message ');
        }
        else {
            this.smsService.sendSms(this.message).subscribe(function (u) {
                _this.ngOnInit();
                console.log(u.status);
                //  if (u.status === 'success') {
                alert('Message Sent Successfully!');
                // }
            });
            this.message = '';
        }
    };
    return SmsComponent;
}());
SmsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sms',
        template: __webpack_require__("../../../../../src/app/sms/sms.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sms/sms.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__sms_service__["a" /* SmsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sms_service__["a" /* SmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sms_service__["a" /* SmsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SmsComponent);

var _a, _b;
//# sourceMappingURL=sms.component.js.map

/***/ }),

/***/ "../../../../../src/app/sms/sms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmsService = (function () {
    function SmsService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://nameless-plateau-38782.herokuapp.com/api';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth-token', localStorage.getItem('x-auth-token'));
        // this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // Add new sendSms
    SmsService.prototype.sendSms = function (msg) {
        var obj = { message: msg };
        var body = JSON.stringify(obj);
        console.log('in service send message : ' + msg);
        return this.http
            .post(this.baseUrl + '/admin/sendSmsToAllDrivers', body, this.options)
            .map(this.extractData);
    };
    SmsService.prototype.extractData = function (res) {
        var data = res.json();
        return data || {};
    };
    return SmsService;
}());
SmsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SmsService);

var _a;
//# sourceMappingURL=sms.service.js.map

/***/ }),

/***/ "../../../../../src/app/userslist/userslist.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper add-padding\">\n  <!-- Content Header (Page header) -->\n<div class=\"content-header \">\n<h1 class=\"pull-left\">\nUsers\n</h1>\n</div>\n\n  <!-- Main content -->\n  <section class=\"content\">\n      <div class=\"form-horizontal\">\n      <div class=\"panel-group\">\n      <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n          <div >\n      <table id=\"example\" class=\"table table-striped table-bordered\" cellspacing=\"0\" >\n\n        <thead >\n          <tr >\n          <th  > # </th>\n          <th  >User Name</th>\n          <th  >Email</th>\n          <th  >Device</th>\n          <th  >Type</th>\n          </tr>\n        </thead>\n          <tbody>\n\n              <tr *ngFor=\"let user of users; let i = index\">\n                  <td>{{i + 1}}</td>\n                  <td >-</td>\n                  <td >{{user.email}}</td>\n                  <td >Iphone</td>\n                  <td >Member</td>\n              </tr>\n            <!-- <tr >\n                <td >Sajid</td>\n                <td >sajid@gmail.com</td>\n                <td >Iphone</td>\n                <td >Admin</td>\n            </tr>\n            <tr >\n              <td >Umer</td>\n                <td >sajid@gmail.com</td>\n                <td >Andriod</td>\n                <td >Admin</td>\n            </tr>\n            <tr >\n                <td >Nadeem</td>\n                <td >sajid@gmail.com</td>\n                <td >Iphone</td>\n                <td >Admin</td>\n            </tr> -->\n          </tbody>\n\n\n      </table>\n      </div>\n      </div>\n      </div>\n          </div>\n      </div>\n   </section>\n  <!-- /.content -->\n</div>\n<!-- /.content-wrapper -->\n"

/***/ }),

/***/ "../../../../../src/app/userslist/userslist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-padding {\n  padding-left: 1%;\n  padding-right: 1%;\n  padding-top: 1%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userslist/userslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserslistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userslist_service__ = __webpack_require__("../../../../../src/app/userslist/userslist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserslistComponent = (function () {
    function UserslistComponent(userslistService) {
        this.userslistService = userslistService;
        this.users = [];
        this.usersLength = 0;
    }
    UserslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userslistService
            .getUsers()
            .subscribe(function (u) {
            _this.users = u;
            console.log('Users :' + u);
            _this.usersLength = _this.users.length;
            // this.categoryLoaded=true;
        });
    };
    return UserslistComponent;
}());
UserslistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-userslist',
        template: __webpack_require__("../../../../../src/app/userslist/userslist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userslist/userslist.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__userslist_service__["a" /* UserslistService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userslist_service__["a" /* UserslistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userslist_service__["a" /* UserslistService */]) === "function" && _a || Object])
], UserslistComponent);

var _a;
//# sourceMappingURL=userslist.component.js.map

/***/ }),

/***/ "../../../../../src/app/userslist/userslist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserslistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserslistService = (function () {
    function UserslistService(http) {
        this.http = http;
        // baseUrl: String= 'https://qau-smart-ride.herokuapp.com/api';
        this.baseUrl = 'https://wtcapplications.herokuapp.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9',
        }); // ... Set content type to JSON
        this.headers.append('x-auth', localStorage.getItem('x-auth'));
        this.headers.append('user-type', 'Admin');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    UserslistService.prototype.getUsers = function () {
        // this.http.get(this.baseUrl + '/topStory', this.options ).subscribe(data => {
        //   console.log('data' + data);
        // });
        return this.http.get(this.baseUrl + '/users', this.options)
            .map(function (res) { return res.json().object; });
    };
    return UserslistService;
}());
UserslistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserslistService);

var _a;
//# sourceMappingURL=userslist.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map