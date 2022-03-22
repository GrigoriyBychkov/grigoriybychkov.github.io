function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-info/user-info.component */
    "./src/app/components/user-info/user-info.component.ts");
    /* harmony import */


    var _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/game-info/game-info.component */
    "./src/app/components/game-info/game-info.component.ts");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _components_live_live_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/live/live.component */
    "./src/app/components/live/live.component.ts");

    var routes = [{
      path: '',
      component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }, {
      path: 'user-info',
      component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    }, {
      path: 'user-info/:id',
      component: _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_2__["UserInfoComponent"]
    }, {
      path: 'game-info',
      redirectTo: 'live',
      pathMatch: 'full'
    }, {
      path: 'game-info/:id',
      redirectTo: 'live/:id',
      pathMatch: 'full'
    }, {
      path: 'live',
      component: _components_live_live_component__WEBPACK_IMPORTED_MODULE_5__["LiveComponent"]
    }, {
      path: 'live/:id',
      component: _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_3__["GameInfoComponent"]
    }, {
      path: '*',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AppComponent_div_36_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function AppComponent_div_36_mat_option_6_Template_mat_option_onSelectionChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.getUser($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
      }
    }

    function AppComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_36_mat_option_6_Template, 2, 2, "mat-option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r1.filteredOptions));
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(dataService, fb, router) {
        _classCallCheck(this, AppComponent);

        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.options = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mode = 'dark mode';
        this.lastUpdate = '';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUrl();
          this.initForm();
          this.initSubscription();
          this.getPlayersNames();
          this.getUpdateDate();
          this.setDarkMode(localStorage.darkMode);
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            search: undefined
          });
        }
      }, {
        key: "initSubscription",
        value: function initSubscription() {
          var _this = this;

          this.filteredOptions = this.form.get('search').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (val) {
            return _this._filter(val);
          }));
        }
      }, {
        key: "getUrl",
        value: function getUrl() {
          var _this2 = this;

          var button = document.getElementById('#liveLink');
          var button2 = document.getElementById('#liveLinkMobile');
          this.router.events.subscribe(function (val) {
            if (!_this2.router.url.includes('/live')) {
              button.className = 'title';
              button2.className = 'title';
              _this2.dataService.searchHide = false;
            } else {
              button.className = 'active';
              button2.className = 'active';
              _this2.dataService.searchHide = true;
            }
          });
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "getPlayersNames",
        value: function getPlayersNames() {
          var _this3 = this;

          this.dataService.getPlayersNames().subscribe(function (data) {
            return _this3.options = _toConsumableArray(data);
          });
        }
      }, {
        key: "getUser",
        value: function getUser($event) {
          // console.log($event);
          this.router.navigate(['/user-info', $event.source.value]).then();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "setDarkMode",
        value: function setDarkMode(mode) {
          // const container = document.getElementsByTagName('mat-card')[0];
          var container = document.body;

          if (!mode) {
            mode = localStorage.darkMode === 'true' ? 'false' : 'true';
          }

          localStorage.darkMode = mode;

          if (mode === 'true') {
            container.className += ' dark';
            this.mode = 'bright mode';
          } else {
            container.className = container.className.replace('dark', '');
            this.mode = 'dark mode';
          }
        }
      }, {
        key: "routerLive",
        value: function routerLive(url) {
          if (url.includes('/live')) {
            this.router.navigate(['/']).then();
          } else {
            this.router.navigate(['/live']).then();
          }
        }
      }, {
        key: "getUpdateDate",
        value: function getUpdateDate() {
          var _this4 = this;

          this.dataService.getUpdateDate().subscribe(function (val) {
            return _this4.lastUpdate = val;
          });
          console.log('this.lastUpdate ', this.lastUpdate);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 77,
      vars: 14,
      consts: [[1, "container"], ["autosize", "", 1, "sidebar-container"], ["mode", "side", "position", "end"], ["drawer", ""], [1, "title", 3, "click"], ["id", "#liveLinkMobile", 1, "active"], [1, "icon", 3, "click"], [1, "header"], [1, "header-wrapper"], [1, "left-block", 3, "routerLink"], [1, "right-block-mobile"], [1, "mobile-icon-search", 3, "click"], [1, "menu-icon"], [1, "mobile-icon-menu", 3, "click"], [1, "right-block", 3, "ngClass"], ["id", "#liveLink", 1, "active"], ["id", "#title", 1, "card-title-wrapper", 3, "ngClass"], [1, "card-title-var"], ["id", "#subTitle", 1, "subtitle-wrapper", 3, "ngClass"], ["class", "search", 4, "ngIf"], [1, "footer"], [1, "footer-wrapper"], [1, "block"], [1, "title"], [1, "text"], [1, "email-me"], ["href", "mailto:itsbryandesigns@gmail.com", 1, "email-me-link"], [1, "crypt-info"], [1, "item"], [1, "ps"], [1, "search"], [1, "example-form", 3, "formGroup"], ["appearance", "fill", 1, "search-form-field"], ["type", "text", "placeholder", "Search Your Favorite Poker Player", "aria-label", "Number", "matInput", "", "formControlName", "search", 1, "search-input", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-drawer", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_6_listener() {
            return ctx.routerLive(ctx.router.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "live stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_9_listener() {
            return ctx.setDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_17_listener() {
            return ctx.dataService.mobileSearchHide = !ctx.dataService.mobileSearchHide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_22_listener() {
            return ctx.routerLive(ctx.router.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "live stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_25_listener() {
            return ctx.setDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hustler Casino ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AppComponent_div_36_Template, 8, 5, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DISCLAIMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " *Data provided by live stream \u201Ccumulative winnings\u201D and basic math. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " ** This website was intended for entertainment purposes and not to use as any financial indicator or tax purposes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " *** Players play off stream, wins and loss might are not be accurately reflected. This information is for on stream only. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Shout Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " *Shout out to Nick Vertucci & Ryan Feldman & Team for producing a great stream! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " **To the regulars, thanks for making the stream fun to watch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "donations & Sponsorship\uD83C\uDF7B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " *I created this site for the regular \u201Cchat pros\u201D in the live chat and all the millionssss of viewers! You guys keep the stream entertaining and cheers to you. All of this work is for you guys! If anyone feels... \u201Cbarry generous\u201D, I\u2019ve provided my wallets for donations! If you like to be a sponsor for this site, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " please email me here! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Bitcoin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Eth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " *This website is in no way affiliated with the show, just a fan site. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !ctx.dataService.mobileSearchHide ? "tp.com" : "trackingpoker.com", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dataService.mobileMenuHide ? "" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.dataService.searchHide ? "wrapper-shift" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataService.searchHide ? "Live Stream" : "Live Poker Tracker", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.dataService.searchHide ? "wrapper-shift" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Updated : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 10, ctx.lastUpdate, "shortDate" || false), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.searchHide);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"PT Mono\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: baseline;\n  justify-content: flex-start;\n  padding-bottom: 50px;\n}\n\n  .m-b-75 {\n  margin-bottom: 75px !important;\n}\n\n  .m-b-90 {\n  margin-bottom: 90px !important;\n}\n\n  .m-top-bottom-30 {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n  .border-like-row-wrapper {\n  width: 100%;\n  height: 2px;\n  display: flex;\n}\n\n  .border-like-row-wrapper .border-like-row {\n  background-color: #F5F3F3;\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto;\n}\n\n  .mat-paginator-outer-container {\n  background-color: #FBFCFF;\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  justify-content: center;\n  font-size: 30px;\n}\n\n  .mat-paginator-outer-container .mat-paginator-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-height: 56px;\n  margin: 0 5px;\n  flex-wrap: wrap-reverse;\n  width: 100%;\n  max-width: 875px;\n}\n\n  .mat-paginator-outer-container .mat-paginator-icon {\n  width: 40px;\n}\n\n  body {\n  background: #656972;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n  .mat-autocomplete-panel {\n  border-radius: 10px !important;\n  background: #F4F6FD;\n  border: 3px solid #E6EBFE !important;\n}\n\n  mat-form-field.mat-focused .mat-form-field-flex {\n  border-color: #FFC83C !important;\n}\n\n  .search {\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto 126px;\n}\n\n  .search .example-form {\n  margin: 0 5px;\n}\n\n  .search .search-form-field {\n  width: 100%;\n}\n\n  .search .search-form-field .mat-form-field-flex {\n  border-radius: 10px;\n  background: #F4F6FD;\n  border: 3px solid #E6EBFE;\n  padding: 9px 18px 15px 18px;\n}\n\n  .search .search-form-field .mat-form-field-flex input {\n  font-weight: 400;\n  font-size: 20px;\n  color: #1F2126;\n  margin-left: 10px;\n}\n\n  .search .search-form-field .mat-form-field-flex input::-moz-placeholder {\n  color: #1F2126;\n}\n\n  .search .search-form-field .mat-form-field-flex input::placeholder {\n  color: #1F2126;\n}\n\n  .search input {\n  font-weight: 700;\n}\n\n  mat-card {\n  height: 100%;\n  margin: 0 auto;\n  padding: 65px 0 0 0 !important;\n  background-color: #FBFCFF !important;\n  max-width: 1400px;\n  width: 100%;\n}\n\n  mat-card .game-info-video-block:last-of-type {\n  border: unset !important;\n}\n\n  mat-card .game-info-video-block:first-of-type {\n  margin-top: unset !important;\n}\n\n  mat-card .game-info-video-block-wrapper {\n  margin-top: 50px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block {\n  width: 100%;\n  max-width: 875px;\n  font-size: 24px;\n  border-bottom: 2px solid #F5F3F3;\n  margin: 57px auto 0 auto;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n  display: flex;\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-size: 24px;\n  letter-spacing: 0.05em;\n  color: #000000;\n  margin-bottom: 33px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link {\n  margin-right: 66px;\n  font-weight: 700;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-date {\n  font-weight: 400;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .game-name {\n  font-weight: 400;\n  line-height: 36px;\n  margin-bottom: 28px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .video-frame {\n  width: 100%;\n  height: 412px;\n  margin-bottom: 94px;\n}\n\n  mat-card .sidebar-container .mat-drawer {\n  border: unset;\n  background-color: inherit;\n  margin-right: 10px;\n}\n\n  mat-card .sidebar-container .mat-drawer .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n  mat-card .sidebar-container .title {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #000000;\n  cursor: pointer;\n  display: flex;\n}\n\n  mat-card .sidebar-container .title p {\n  position: relative;\n}\n\n  mat-card .sidebar-container .title p.active {\n  z-index: 2;\n}\n\n  mat-card .sidebar-container .title p.active::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .sidebar-container .title p:hover {\n  color: #FFC83C;\n}\n\n  mat-card .sidebar-container .icon {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-family: \"PT Mono\", sans-serif !important;\n}\n\n  mat-card .sidebar-container .icon:hover {\n  color: #FFC83C;\n}\n\n  mat-card .header {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  margin: 0 auto 100px;\n  max-width: 875px;\n}\n\n  mat-card .header .header-wrapper {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n  mat-card .header .header-wrapper .right-block {\n  display: flex;\n  justify-content: flex-end;\n}\n\n  mat-card .header .header-wrapper .right-block .title {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #000000;\n  cursor: pointer;\n  display: flex;\n  margin-right: 10px;\n}\n\n  mat-card .header .header-wrapper .right-block .title p.active {\n  z-index: 2;\n  position: relative;\n  margin-right: 10px;\n}\n\n  mat-card .header .header-wrapper .right-block .title p.active::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .header .header-wrapper .right-block .title p:hover {\n  color: #FFC83C;\n}\n\n  mat-card .header .header-wrapper .right-block .icon {\n  cursor: pointer;\n  font-family: \"PT Mono\", sans-serif !important;\n}\n\n  mat-card .header .header-wrapper .right-block .icon:hover {\n  color: #FFC83C;\n}\n\n  mat-card .header .header-wrapper .left-block {\n  cursor: pointer;\n}\n\n  mat-card .header .header-wrapper .left-block:hover {\n  color: #FFC83C;\n}\n\n  mat-card mat-card-title,   mat-card mat-card-subtitle {\n  text-align: center;\n}\n\n  mat-card mat-card-title {\n  font-weight: 700 !important;\n  margin: -4px 5px 16px 5px;\n}\n\n  mat-card mat-card-title .card-title-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  max-width: 875px;\n  margin: 0 auto;\n  font-size: 42px;\n  line-height: 47px;\n}\n\n  mat-card mat-card-title .card-title-wrapper.wrapper-shift {\n  justify-content: center;\n}\n\n  mat-card mat-card-title .card-title-wrapper .card-title-var {\n  color: #b32a20;\n  margin-left: 20px;\n}\n\n  mat-card mat-card-subtitle {\n  width: 100%;\n  margin: 24px 5px 77px 5px !important;\n}\n\n  mat-card mat-card-subtitle .subtitle-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  max-width: 875px;\n  margin: 16px auto 0;\n  width: 100%;\n  font-family: \"PT Mono\", sans-serif !important;\n  font-weight: 400 !important;\n  font-size: 20px;\n  color: #1F2126 !important;\n}\n\n  mat-card mat-card-subtitle .subtitle-wrapper.wrapper-shift {\n  justify-content: center;\n}\n\n  mat-card mat-card-content {\n  margin: 0 5px 16px 5px;\n}\n\n  mat-card .footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background: #F3F6F9;\n  border-top: 2px solid #F5F3F3;\n}\n\n  mat-card .footer .footer-wrapper {\n  max-width: 875px;\n  margin: 0 5px 100px 5px;\n}\n\n  mat-card .footer .footer-wrapper .block:first-child {\n  margin-top: 101px;\n}\n\n  mat-card .footer .footer-wrapper .block {\n  margin-bottom: 77px;\n}\n\n  mat-card .footer .footer-wrapper .block .title p {\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: 0.05em;\n  color: #000000;\n  margin-bottom: 27px;\n  text-transform: uppercase;\n  z-index: 2;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n  mat-card .footer .footer-wrapper .block .title p::before {\n  content: \"\";\n  position: absolute;\n  transform: translateX(6px) translateY(3px);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .footer .footer-wrapper .block .text {\n  font-family: \"PT Mono\", sans-serif;\n  font-size: 14px;\n  line-height: 30px;\n  color: #000000;\n}\n\n  mat-card .footer .footer-wrapper .block .text .email-me .email-me-link {\n  color: #131314;\n  -webkit-text-decoration-line: unset;\n          text-decoration-line: unset;\n  z-index: 2;\n  position: relative;\n}\n\n  mat-card .footer .footer-wrapper .block .text .email-me .email-me-link::before {\n  content: \"\";\n  position: absolute;\n  transform: translateX(6px) translateY(3px);\n  top: 5px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #65B7F9;\n  z-index: -1;\n}\n\n  mat-card .footer .footer-wrapper .block .crypt-info {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  margin-top: 24px;\n}\n\n  mat-card .footer .footer-wrapper .block .crypt-info .item {\n  cursor: pointer;\n  margin-right: 3px;\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 22px;\n  color: #000000;\n}\n\n  mat-card .footer .footer-wrapper .block:nth-last-of-type(1) {\n  margin-bottom: 0;\n}\n\n  mat-card .footer .footer-wrapper .ps {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 76px;\n}\n\n  .table-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0 auto 42px;\n}\n\n  .table-wrapper table {\n  box-shadow: none !important;\n  padding-left: 18px;\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto 120px;\n  background-color: #FBFCFF !important;\n  font-family: \"PT Sans Caption\", sans-serif !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-size: 20px;\n}\n\n  .table-wrapper table thead {\n  height: 35px;\n}\n\n  .table-wrapper table thead tr:first-child th {\n  border-bottom: none;\n}\n\n  .table-wrapper table tbody tr.cdk-row td.cdk-cell {\n  padding-top: 5px !important;\n}\n\n  .table-wrapper table tbody tr {\n  padding-top: 28px !important;\n  border-bottom: none !important;\n}\n\n  .table-wrapper table tbody tr td {\n  padding: 24px 5px 5px 5px !important;\n  font-family: \"PT Sans Caption\", sans-serif !important;\n  font-style: normal !important;\n  font-size: 20px;\n  line-height: 39px !important;\n  border-bottom: none !important;\n}\n\n  .table-wrapper table tbody tr td:first-child {\n  padding-left: 5px !important;\n  text-align: left;\n  min-width: 20px;\n  font-weight: 400;\n}\n\n  .table-wrapper table tbody tr td:nth-child(2) {\n  font-weight: 700;\n  color: #1F2126;\n}\n\n  .table-wrapper table tbody tr td:last-child {\n  text-align: right;\n  font-weight: 700;\n}\n\n  .table-wrapper table tbody tr:hover {\n  cursor: pointer;\n  background: #e5e5e5;\n}\n\n  .table-wrapper table.users-list tr td:first-child {\n  width: 12px !important;\n}\n\n  .table-wrapper table.users-list tr td:nth-child(2) {\n  font-size: 20px !important;\n  font-weight: 400;\n}\n\n  th {\n  text-align: left;\n}\n\n  .green {\n  color: #11B479;\n}\n\n  .red {\n  color: #FD0303;\n}\n\n  .button-row {\n  max-width: 875px;\n  border-bottom: 3px solid #F5F3F3;\n  margin: 0 auto;\n}\n\n  .button-row button {\n  padding: 18px 18px 18px 12px !important;\n  margin-right: 30px;\n}\n\n  .button-row button:last-child {\n  margin-right: 23px;\n}\n\n  .button-row .mat-button-wrapper {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 26px;\n}\n\n  .button-row .active {\n  z-index: 2;\n}\n\n  .button-row .active .mat-button-wrapper {\n  font-weight: 700;\n}\n\n  .button-row .active::before {\n  content: \"\";\n  position: absolute;\n  top: 85%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  .button-row .user {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  font-family: \"PT Mono\", sans-serif !important;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  color: #1F2126;\n  margin-bottom: 17px;\n}\n\n  .name-row {\n  width: 80%;\n  display: flex;\n  margin: 0 auto 30px auto;\n  height: 50px;\n  flex-direction: column;\n}\n\n  .name-row .name-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n\n  .see-more {\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 31px;\n  color: #1F2126;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n  max-width: 875px;\n  margin: 0 auto 120px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n  .see-more div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n}\n\n  .see-more div::before {\n  transform: translateX(6px) translateY(3px);\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 2px;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n  max-width: 110px;\n}\n\n@media only screen and (max-width: 414px) {\n      .m-b-90 {\n    margin-bottom: 40px !important;\n  }\n      mat-card mat-card-subtitle {\n    margin-bottom: 30px !important;\n  }\n      mat-card .mat-paginator-outer-container {\n    font-size: 20px;\n  }\n      mat-card .mat-paginator-outer-container .mat-paginator-icon {\n    width: 28px;\n  }\n      mat-card .header {\n    font-size: 14px;\n    line-height: 16px;\n    margin-bottom: 50px;\n    align-content: flex-start;\n  }\n      mat-card .header .header-wrapper {\n    align-items: center;\n    margin: 0 20px;\n  }\n      mat-card .header .header-wrapper .right-block {\n    display: none;\n  }\n      mat-card .header .header-wrapper .right-block .title {\n    font-size: 14px;\n  }\n      mat-card .header .header-wrapper .right-block-mobile {\n    display: flex;\n  }\n      mat-card .header .header-wrapper .right-block-mobile .mobile-icon-search {\n    margin-right: 18px;\n  }\n      mat-card .header .header-wrapper .right-block-mobile .mobile-icon-search .menu-icon {\n    width: 24px;\n    height: 24px;\n    background-color: #131314;\n    -webkit-mask-image: url('211817_search_strong_icon.svg');\n    mask-image: url('211817_search_strong_icon.svg');\n    -webkit-mask-size: cover;\n            mask-size: cover;\n    color: #5A5D67;\n    margin-bottom: 0;\n  }\n      mat-card .header .header-wrapper .right-block-mobile .mobile-icon-menu .menu-icon {\n    width: 24px;\n    height: 24px;\n    background-color: #131314;\n    -webkit-mask-image: url('326672_menu_icon.svg');\n    mask-image: url('326672_menu_icon.svg');\n    -webkit-mask-size: cover;\n            mask-size: cover;\n    color: #5A5D67;\n    margin-bottom: 0;\n  }\n      mat-card .card-title-wrapper {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n      mat-card .search {\n    margin: 0 auto 30px;\n  }\n      mat-card .search .mat-form-field-flex {\n    padding: 0 5px !important;\n  }\n      mat-card .search .mat-form-field-flex input {\n    font-size: 16px !important;\n  }\n      mat-card .button-row button {\n    padding: 5px !important;\n  }\n      mat-card .button-row button:last-child {\n    margin-right: 0;\n  }\n      mat-card .button-row .mat-button-wrapper {\n    font-size: 14px;\n  }\n      mat-card .button-row .user {\n    font-size: 20px;\n  }\n      mat-card .table-wrapper {\n    margin: 0 auto 24px;\n  }\n      mat-card .table-wrapper .bottom-border-mobile {\n    display: none;\n  }\n      mat-card .table-wrapper table.users-list tr td {\n    font-size: 14px !important;\n  }\n      mat-card .table-wrapper table.users-list tr td:nth-child(2) {\n    font-size: 14px !important;\n  }\n      mat-card .table-wrapper table {\n    padding-left: 5px;\n    margin: 0 auto 60px;\n  }\n      mat-card .table-wrapper table thead {\n    height: 10px;\n  }\n      mat-card .table-wrapper table tbody tr {\n    padding-top: 18px !important;\n  }\n      mat-card .table-wrapper table tbody tr td {\n    padding: 12px 5px 5px 5px !important;\n    font-size: 18px !important;\n    line-height: 24px !important;\n  }\n      mat-card .footer .footer-wrapper {\n    margin: 0 15px 50px 15px;\n  }\n      mat-card .footer .footer-wrapper .block:first-child {\n    margin-top: 50px;\n  }\n      mat-card .footer .footer-wrapper .block {\n    margin-bottom: 38px;\n  }\n      mat-card .footer .footer-wrapper .block .title p {\n    font-size: 14px;\n    margin-bottom: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .text {\n    font-size: 14px;\n    line-height: 20px;\n  }\n      mat-card .footer .footer-wrapper .block .email-me {\n    font-size: 14px;\n    margin-top: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .crypt-info {\n    margin-top: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .crypt-info .item {\n    font-size: 16px;\n    line-height: 20px;\n  }\n      mat-card .game-info-video-block-wrapper {\n    margin-top: 26px;\n    width: 99%;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block {\n    font-size: 16px;\n    margin: 30px auto 0 auto;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n    font-size: 16px;\n    line-height: 18px;\n    margin-bottom: 28px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link {\n    margin-right: 48px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .game-name {\n    line-height: 28px;\n    margin-bottom: 18px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .video-frame {\n    width: 100%;\n    margin-bottom: 60px;\n  }\n      mat-card .see-more {\n    font-size: 18px;\n    line-height: 26px;\n    margin: 0 5px 60px;\n  }\n      .card-title-wrapper.wrapper-shift {\n    justify-content: center;\n  }\n      .subtitle-wrapper {\n    justify-content: center !important;\n    font-size: 14px !important;\n    display: none !important;\n  }\n      .subtitle-wrapper.wrapper-shift {\n    display: block !important;\n    justify-content: center;\n  }\n      .card-title-var {\n    margin-left: 0 !important;\n  }\n      .mat-card-title {\n    line-height: 26px;\n  }\n      mat-card {\n    width: 96% !important;\n    padding: 20px 0 0 0 !important;\n  }\n}\n\n  body.dark .mat-autocomplete-panel {\n  background: #131314 !important;\n  border: 3px solid #4B4D56 !important;\n}\n\n  body.dark .mat-autocomplete-panel .mat-option-text {\n  color: white !important;\n}\n\n  body.dark mat-card {\n  color: white !important;\n  background: #131314 !important;\n}\n\n  body.dark mat-card .sidebar-container {\n  background-color: #131314;\n  color: white !important;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer {\n  background-color: #131314;\n  margin-right: 10px;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer .mat-drawer-inner-container {\n  overflow: hidden;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer .mat-drawer-inner-container .icon {\n  color: white;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer-content {\n  background-color: #131314;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer-content .right-block-mobile .mobile-icon-search .menu-icon {\n  background-color: white;\n  color: white;\n}\n\n  body.dark mat-card .sidebar-container .mat-drawer-content .right-block-mobile .mobile-icon-menu .menu-icon {\n  background-color: white;\n  color: white;\n}\n\n  body.dark mat-card .sidebar-container .title {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: white !important;\n  cursor: pointer;\n  display: flex;\n}\n\n  body.dark mat-card .sidebar-container .title p {\n  position: relative;\n}\n\n  body.dark mat-card .sidebar-container .title p.active {\n  z-index: 2;\n}\n\n  body.dark mat-card .sidebar-container .title p.active::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  body.dark mat-card .sidebar-container .title p:hover {\n  color: #FFC83C;\n}\n\n  body.dark mat-card .sidebar-container .icon {\n  text-transform: uppercase;\n  cursor: pointer;\n  font-family: \"PT Mono\", sans-serif !important;\n}\n\n  body.dark mat-card .sidebar-container .icon:hover {\n  color: #FFC83C;\n}\n\n  body.dark mat-card .border-like-row-wrapper .border-like-row {\n  background-color: #4B4D56 !important;\n}\n\n  body.dark mat-card .mat-paginator-outer-container {\n  color: white;\n  background-color: #131314;\n}\n\n  body.dark mat-card .mat-paginator-outer-container span {\n  color: white;\n}\n\n  body.dark mat-card .search {\n  color: white;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex {\n  background: #131314 !important;\n  border: 3px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input {\n  color: white !important;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input::-moz-placeholder {\n  color: #4B4D56;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input::placeholder {\n  color: #4B4D56;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block {\n  border-bottom: 2px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n  color: white !important;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block:last-of-type {\n  border-bottom: unset !important;\n}\n\n  body.dark mat-card .header .header-wrapper .title {\n  color: white;\n}\n\n  body.dark mat-card mat-card-title .card-title-wrapper .card-title-var {\n  color: #b32a20;\n}\n\n  body.dark mat-card mat-card-subtitle .subtitle-wrapper {\n  color: white !important;\n}\n\n  body.dark mat-card .footer {\n  background: #131314 !important;\n  border-top: 2px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .title p {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .title p::before {\n  content: \"\";\n  position: absolute;\n  background: #131314;\n  z-index: -1;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .text {\n  color: #B2B8CF !important;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .text .email-me {\n  white-space: nowrap;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .text .email-me .email-me-link {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .crypt-info .item {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .ps {\n  color: white;\n}\n\n  body.dark mat-card .table-wrapper table {\n  background-color: #131314 !important;\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr td:first-child {\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr td:nth-child(2) {\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr:hover {\n  background: #4B4D56;\n}\n\n  body.dark mat-card .green {\n  color: #11B479;\n}\n\n  body.dark mat-card .red {\n  color: #FD0303;\n}\n\n  body.dark mat-card .button-row {\n  border-bottom: 3px solid #4B4D56;\n}\n\n  body.dark mat-card .button-row .active::before {\n  background: #FFC83C;\n}\n\n  body.dark mat-card .button-row .user {\n  color: white !important;\n}\n\n  body.dark mat-card .see-more {\n  color: white !important;\n}\n\n  body.dark mat-card .see-more div::before {\n  background: #FFC83C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYnkuc3UvSWRlYVByb2plY3RzL3Bva2VyLWh1c3RsZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUdFLGtDQUFBO0FDUkY7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQ1RGOztBRGNFO0VBQ0UsOEJBQUE7QUNYSjs7QURjRTtFQUNFLDhCQUFBO0FDWko7O0FEZUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDYko7O0FEZ0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDZEo7O0FEZ0JJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBN0NFO0VBOENGLGNBQUE7QUNkTjs7QURtQkU7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ2pCSjs7QURtQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQXBFRTtBQ2tEUjs7QURxQkk7RUFDRSxXQUFBO0FDbkJOOztBRHVCRTtFQUNFLG1CQUFBO0FDckJKOztBRHdCRTtFQUNFLGFBQUE7QUN0Qko7O0FEeUJFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FDdkJKOztBRCtCSTtFQUNFLGdDQUFBO0FDN0JOOztBRGlDRTtFQUNFLFdBQUE7RUFDQSxnQkF0R0k7RUF1R0osb0JBQUE7QUMvQko7O0FEaUNJO0VBQ0UsYUFBQTtBQy9CTjs7QURrQ0k7RUFDRSxXQUFBO0FDaENOOztBRGtDTTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDaENSOztBRGtDUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ2pDVjs7QURvQ1E7RUFDRSxjQUFBO0FDbENWOztBRGlDUTtFQUNFLGNBQUE7QUNsQ1Y7O0FEdUNJO0VBQ0UsZ0JBQUE7QUNyQ047O0FEOENFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBRUEsaUJBQUE7RUFFQSxXQUFBO0FDOUNKOztBRGdESTtFQUNFLHdCQUFBO0FDOUNOOztBRGlESTtFQUNFLDRCQUFBO0FDL0NOOztBRGtESTtFQUNFLGdCQUFBO0FDaEROOztBRGtETTtFQUVFLFdBQUE7RUFDQSxnQkF0S0E7RUF1S0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7QUNqRFI7O0FEbURRO0VBQ0UsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbERWOztBRG9EVTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDbERaOztBRHFEVTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ25EWjs7QURzRFU7RUFDRSxnQkFBQTtBQ3BEWjs7QUR3RFE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUN0RFY7O0FEeURRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3ZEVjs7QUQ4RE07RUFFRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQzdEUjs7QUQ4RFE7RUFDRSxnQkFBQTtBQzVEVjs7QUQrRE07RUFFRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQzlEUjs7QURnRVE7RUFDRSxrQkFBQTtBQzlEVjs7QURnRVE7RUFDRSxVQUFBO0FDOURWOztBRGlFUTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQy9EVjs7QURrRVE7RUFDRSxjQUFBO0FDaEVWOztBRG9FTTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZDQUFBO0FDbkVSOztBRHNFTTtFQUNFLGNBQUE7QUNwRVI7O0FEd0VJO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFHQSx5QkFBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBclNFO0FDMk5SOztBRDRFTTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDMUVSOztBRDRFUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQzFFVjs7QUQ0RVU7RUFFRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDM0VaOztBRDZFWTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDM0VkOztBRDhFWTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQzVFZDs7QUQrRVk7RUFDRSxjQUFBO0FDN0VkOztBRGlGVTtFQUVFLGVBQUE7RUFDQSw2Q0FBQTtBQ2hGWjs7QURtRlU7RUFDRSxjQUFBO0FDakZaOztBRHNGUTtFQUNFLGVBQUE7QUNwRlY7O0FEdUZRO0VBQ0UsY0FBQTtBQ3JGVjs7QUQ0Rkk7RUFDRSxrQkFBQTtBQzFGTjs7QUQ2Rkk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FDM0ZOOztBRDZGTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkF6WEE7RUEwWEEsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQzNGUjs7QUQ4RlE7RUFDRSx1QkFBQTtBQzVGVjs7QUQrRlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUM3RlY7O0FEb0dJO0VBSUUsV0FBQTtFQUNBLG9DQUFBO0FDckdOOztBRHVHTTtFQUVFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQXZaQTtFQXlaQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDdkdSOztBRHlHUTtFQUNFLHVCQUFBO0FDdkdWOztBRDRHSTtFQUNFLHNCQUFBO0FDMUdOOztBRDZHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFFQSw2QkFBQTtBQzVHTjs7QUQ4R007RUFDRSxnQkF0YkE7RUF1YkEsdUJBQUE7QUM1R1I7O0FEOEdRO0VBQ0UsaUJBQUE7QUM1R1Y7O0FEK0dRO0VBQ0UsbUJBQUE7QUM3R1Y7O0FEZ0hZO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUMvR2Q7O0FEa0hZO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDaEhkOztBRG9IVTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2xIWjs7QUR1SGM7RUFDRSxjQXhlUjtFQXllUSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDckhoQjs7QUR3SGM7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUN0SGhCOztBRDJIVTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ3pIWjs7QUQySFk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDekhkOztBRDhIUTtFQUNFLGdCQUFBO0FDNUhWOztBRGdJUTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUdBLGNBQUE7RUFDQSxnQkFBQTtBQ2hJVjs7QUR1SUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNySUo7O0FEdUlJO0VBQ0UsMkJBQUE7RUFJQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkEvaUJFO0VBZ2pCRixvQkFBQTtFQUVBLG9DQUFBO0VBRUEscURBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQzFJTjs7QUQ2SU07RUFDRSxZQUFBO0FDM0lSOztBRDhJVTtFQUNFLG1CQUFBO0FDNUlaOztBRG9KVTtFQUNFLDJCQUFBO0FDbEpaOztBRHNKUTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNwSlY7O0FEc0pVO0VBQ0Usb0NBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7QUNwSlo7O0FEdUpVO0VBQ0UsNEJBQUE7RUFFQSxnQkFBQTtFQUVBLGVBQUE7RUFFQSxnQkFBQTtBQ3hKWjs7QUQySlU7RUFDRSxnQkFBQTtFQUdBLGNBQUE7QUMzSlo7O0FEOEpVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQzVKWjs7QURrS1E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNoS1Y7O0FEdUtRO0VBQ0Usc0JBQUE7QUNyS1Y7O0FEdUtRO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ3JLVjs7QURnTEU7RUFDRSxnQkFBQTtBQzlLSjs7QURpTEU7RUFDRSxjQXBwQkk7QUNxZVI7O0FEa0xFO0VBQ0UsY0F2cEJFO0FDdWVOOztBRG1MRTtFQUVFLGdCQXpwQkk7RUEwcEJKLGdDQUFBO0VBQ0EsY0FBQTtBQ2xMSjs7QURvTEk7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FDbExOOztBRHFMSTtFQUNFLGtCQUFBO0FDbkxOOztBRHNMSTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNwTE47O0FEd0xJO0VBQ0UsVUFBQTtBQ3RMTjs7QUR3TE07RUFDRSxnQkFBQTtBQ3RMUjs7QUQwTEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDeExOOztBRDJMSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0FDMUxOOztBRGtNRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNoTUo7O0FEa01JO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDaE1OOztBRG9NRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBMXVCSTtFQTJ1Qkosb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNsTUo7O0FEb01JO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBRUEsa0JBQUE7QUNuTU47O0FEdU1JO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNyTU47O0FEb05FO0VBRUk7SUFDRSw4QkFBQTtFQ25OTjtFRHVOTTtJQUNFLDhCQUFBO0VDck5SO0VEd05NO0lBQ0UsZUFBQTtFQ3ROUjtFRHdOUTtJQUNFLFdBQUE7RUN0TlY7RUQ0Tk07SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VDMU5SO0VENE5RO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0VDMU5WO0VENE5VO0lBQ0UsYUFBQTtFQzFOWjtFRDROWTtJQUNFLGVBQUE7RUMxTmQ7RUQ4TlU7SUFDRSxhQUFBO0VDNU5aO0VEOE5ZO0lBQ0Usa0JBQUE7RUM1TmQ7RUQ4TmM7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQWgwQlY7SUFpMEJVLHdEQUFBO0lBQ0EsZ0RBQUE7SUFDQSx3QkFBQTtZQUFBLGdCQUFBO0lBSUEsY0FBQTtJQUNBLGdCQUFBO0VDL05oQjtFRHFPYztJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBajFCVjtJQWsxQlUsK0NBQUE7SUFDQSx1Q0FBQTtJQUNBLHdCQUFBO1lBQUEsZ0JBQUE7SUFHQSxjQUFBO0lBQ0EsZ0JBQUE7RUNyT2hCO0VENk9NO0lBQ0UsMEJBQUE7SUFDQSw0QkFBQTtFQzNPUjtFRDhPTTtJQUNFLG1CQUFBO0VDNU9SO0VEOE9RO0lBQ0UseUJBQUE7RUM1T1Y7RUQ4T1U7SUFDRSwwQkFBQTtFQzVPWjtFRGtQUTtJQUNFLHVCQUFBO0VDaFBWO0VEbVBRO0lBQ0UsZUFBQTtFQ2pQVjtFRG9QUTtJQUNFLGVBQUE7RUNsUFY7RURzUFE7SUFDRSxlQUFBO0VDcFBWO0VEd1BNO0lBQ0UsbUJBQUE7RUN0UFI7RUR1UFE7SUFDRSxhQUFBO0VDclBWO0VEeVBZO0lBQ0UsMEJBQUE7RUN2UGQ7RUR5UFk7SUFDRSwwQkFBQTtFQ3ZQZDtFRDRQUTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUMxUFY7RUQ0UFU7SUFDRSxZQUFBO0VDMVBaO0VENlBZO0lBQ0UsNEJBQUE7RUMzUGQ7RUQ2UGM7SUFDRSxvQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsNEJBQUE7RUMzUGhCO0VEbVFRO0lBQ0Usd0JBQUE7RUNqUVY7RURtUVU7SUFDRSxnQkFBQTtFQ2pRWjtFRG9RVTtJQUNFLG1CQUFBO0VDbFFaO0VEcVFjO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDblFoQjtFRHVRWTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ3JRZDtFRHdRWTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ3RRZDtFRHlRWTtJQUNFLGdCQUFBO0VDdlFkO0VEeVFjO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VDdlFoQjtFRCtRTTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQzdRUjtFRCtRUTtJQUNFLGVBQUE7SUFDQSx3QkFBQTtFQzdRVjtFRCtRVTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLG1CQUFBO0VDN1FaO0VEK1FZO0lBQ0Usa0JBQUE7RUM3UWQ7RURpUlU7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VDL1FaO0VEa1JVO0lBQ0UsV0FBQTtJQUVBLG1CQUFBO0VDalJaO0VEdVJNO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNyUlI7RUQ2Uk07SUFDRSx1QkFBQTtFQzNSUjtFRCtSSTtJQUNFLGtDQUFBO0lBQ0EsMEJBQUE7SUFDQSx3QkFBQTtFQzdSTjtFRDhSTTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUM1UlI7RURnU0k7SUFDRSx5QkFBQTtFQzlSTjtFRGtTSTtJQUNFLGlCQUFBO0VDaFNOO0VEbVNJO0lBQ0UscUJBQUE7SUFDQSw4QkFBQTtFQ2pTTjtBQUNGOztBRHVTSTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7QUNyU047O0FEdVNNO0VBQ0UsdUJBQUE7QUNyU1I7O0FEMFNJO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQ3hTTjs7QUR5U007RUFDRSx5QkE1aUNBO0VBNmlDQSx1QkFBQTtBQ3ZTUjs7QUR3U1E7RUFFRSx5QkFoakNGO0VBaWpDRSxrQkFBQTtBQ3ZTVjs7QUR3U1U7RUFDRSxnQkFBQTtBQ3RTWjs7QUR1U1k7RUFDRSxZQUFBO0FDclNkOztBRHlTUTtFQUNFLHlCQTFqQ0Y7QUNteEJSOztBRDBTYztFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ3hTaEI7O0FENlNjO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDM1NoQjs7QURnVFE7RUFFRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUMvU1Y7O0FEaVRVO0VBQ0Usa0JBQUE7QUMvU1o7O0FEaVRVO0VBQ0UsVUFBQTtBQy9TWjs7QURrVFU7RUFDRSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNoVFo7O0FEbVRVO0VBQ0UsY0FBQTtBQ2pUWjs7QURxVFE7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtBQ3BUVjs7QUR1VFE7RUFDRSxjQUFBO0FDclRWOztBRDBUUTtFQUNFLG9DQUFBO0FDeFRWOztBRDRUTTtFQUNFLFlBQUE7RUFDQSx5QkFub0NBO0FDeTBCUjs7QUQ0VFE7RUFDRSxZQUFBO0FDMVRWOztBRCtUTTtFQUNFLFlBQUE7QUM3VFI7O0FEZ1VVO0VBQ0UsOEJBQUE7RUFDQSxvQ0FBQTtBQzlUWjs7QURnVVk7RUFDRSx1QkFBQTtBQzlUZDs7QURpVVk7RUFDRSxjQUFBO0FDL1RkOztBRDhUWTtFQUNFLGNBQUE7QUMvVGQ7O0FEdVVRO0VBQ0UsMkNBQUE7QUNyVVY7O0FEdVVVO0VBQ0UsdUJBQUE7QUNyVVo7O0FEeVVRO0VBQ0UsK0JBQUE7QUN2VVY7O0FEK1VVO0VBQ0UsWUFBQTtBQzdVWjs7QURxVlU7RUFDRSxjQUFBO0FDblZaOztBRHlWUTtFQUNFLHVCQUFBO0FDdlZWOztBRDJWTTtFQUNFLDhCQUFBO0VBQ0Esd0NBQUE7QUN6VlI7O0FEOFZjO0VBQ0UsWUFBQTtBQzVWaEI7O0FEK1ZjO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBcHRDUjtFQXF0Q1EsV0FBQTtBQzdWaEI7O0FEaVdZO0VBQ0UseUJBQUE7QUMvVmQ7O0FEaVdjO0VBQ0UsbUJBQUE7QUMvVmhCOztBRGdXZ0I7RUFDRSxZQUFBO0FDOVZsQjs7QURpWFk7RUFDRSxZQUFBO0FDL1dkOztBRG1YVTtFQUNFLFlBQUE7QUNqWFo7O0FEMFhRO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ3hYVjs7QUQ2WGM7RUFDRSx1QkFBQTtBQzNYaEI7O0FEOFhjO0VBQ0UsdUJBQUE7QUM1WGhCOztBRGdZWTtFQUNFLG1CQUFBO0FDOVhkOztBRG9ZTTtFQUNFLGNBNXhDQTtBQzA1QlI7O0FEcVlNO0VBQ0UsY0EveENGO0FDNDVCTjs7QURzWU07RUFDRSxnQ0FBQTtBQ3BZUjs7QUR1WVE7RUFFRSxtQkFBQTtBQ3RZVjs7QUR5WVE7RUFFRSx1QkFBQTtBQ3hZVjs7QUQ2WU07RUFDRSx1QkFBQTtBQzNZUjs7QUQ2WVE7RUFFRSxtQkFBQTtBQzVZViIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRncmVlbjogIzExQjQ3OTtcbiRyZWQ6ICNGRDAzMDM7XG4kZ3JheTogI0UzRTNFMztcbiRibGFjazogIzEzMTMxNDtcbiR3aWR0aDogODc1cHg7XG4vLyR3aWR0aDogNjAwcHg7XG5cbioge1xuICAvL2ZvbnQtc2l6ZTogMTZweDtcbiAgLy9saW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cblxuOjpuZy1kZWVwIHtcbiAgLm0tYi03NSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tYi05MCB7XG4gICAgbWFyZ2luLWJvdHRvbTogOTBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm0tdG9wLWJvdHRvbS0zMCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG5cbiAgLmJvcmRlci1saWtlLXJvdy13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmJvcmRlci1saWtlLXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGM0YzO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQ0ZGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuXG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICAvL3BhZGRpbmc6IDAgOHB4O1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1pY29uIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICM2NTY5NzI7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNkZEO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFNkVCRkUgIWltcG9ydGFudDtcblxuICAgIC5tYXQtb3B0aW9uLXRleHQge1xuICAgICAgLy9mb250LXNpemU6IDMycHg7XG4gICAgfVxuICB9XG5cbiAgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJvcmRlci1jb2xvcjogI0ZGQzgzQyAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogJHdpZHRoO1xuICAgIG1hcmdpbjogMCBhdXRvIDEyNnB4O1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTI2cHg7XG4gICAgLmV4YW1wbGUtZm9ybSB7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNkZEO1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRTZFQkZFO1xuICAgICAgICBwYWRkaW5nOiA5cHggMThweCAxNXB4IDE4cHg7XG4gICAgICAgIC8vcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogIzFGMjEyNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAvL2ZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG5cbiAgICB9XG4gIH1cblxuICBtYXQtY2FyZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDY1cHggMCAwIDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQ0ZGICFpbXBvcnRhbnQ7XG5cbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAvL21heC13aWR0aDogMTEwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmdhbWUtaW5mby12aWRlby1ibG9jazpsYXN0LW9mLXR5cGUge1xuICAgICAgYm9yZGVyOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2s6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIHtcbiAgICAgICAgLy9kaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGNUYzRjM7XG4gICAgICAgIG1hcmdpbjogNTdweCBhdXRvIDAgYXV0bztcbiAgICAgICAgLy9tYXJnaW4tdG9wOiA1N3B4O1xuICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBDYXB0aW9uJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgLy9saW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMzcHg7XG5cbiAgICAgICAgICAudGl0bGUtbGluayB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDY2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUtbGluazo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3cHgpIHRyYW5zbGF0ZVkoN3B4KTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlLWRhdGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZ2FtZS1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudmlkZW8tZnJhbWUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNDEycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOTRweDtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItY29udGFpbmVye1xuICAgICAgLm1hdC1kcmF3ZXJ7XG4gICAgICAgIC8vZGlzcGxheTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAubWF0LWRyYXdlci1pbm5lci1jb250YWluZXJ7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgLy9mb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxcHg7XG4gICAgICAgIHB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIHAuYWN0aXZlIHtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgcC5hY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNGRkM4M0M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmljb24ge1xuICAgICAgICAvL21hcmdpbi1sZWZ0OiAzN3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaWNvbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRkZDODNDO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgLy9mb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXk7XG4gICAgICAvL3BhZGRpbmc6IDE5cHggMCAxM3B4IDM0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgICAvL21hcmdpbjogMCBhdXRvIDcwcHg7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcblxuICAgICAgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcblxuICAgICAgICAucmlnaHQtYmxvY2sge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAgICAgcC5hY3RpdmUge1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcC5hY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg3cHgpIHRyYW5zbGF0ZVkoN3B4KTtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkM4M0M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgLy9tYXJnaW4tbGVmdDogMzdweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pY29uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZDODNDO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLmxlZnQtYmxvY2sge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWZ0LWJsb2NrOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI0ZGQzgzQztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBtYXQtY2FyZC10aXRsZSwgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogLTRweCA1cHggMTZweCA1cHg7XG4gICAgICAvL21hcmdpbi1ib3R0b206IDE2cHghaW1wb3J0YW50O1xuICAgICAgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG5cblxuICAgICAgICAmLndyYXBwZXItc2hpZnQge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtdGl0bGUtdmFyIHtcbiAgICAgICAgICBjb2xvcjogI2IzMmEyMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAvL2ZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG5cbiAgICAgIC8vbWFyZ2luLXRvcDogMTZweCFpbXBvcnRhbnQ7XG4gICAgICAvL21hcmdpbi1ib3R0b206IDc3cHghaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDI0cHggNXB4IDc3cHggNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgIC5zdWJ0aXRsZS13cmFwcGVyIHtcbiAgICAgICAgLy9tYXJnaW46IDAgNXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1heC13aWR0aDogJHdpZHRoO1xuICAgICAgICAvL21hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW46IDE2cHggYXV0byAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6ICMxRjIxMjYgIWltcG9ydGFudDtcblxuICAgICAgICAmLndyYXBwZXItc2hpZnQge1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICBtYXJnaW46IDAgNXB4IDE2cHggNXB4O1xuICAgIH1cblxuICAgIC5mb290ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQ6ICNGM0Y2Rjk7XG4gICAgICAvL3BhZGRpbmc6IDUxcHggNTFweCAyMHB4IDQ2cHg7XG4gICAgICBib3JkZXItdG9wOiAycHggc29saWQgI0Y1RjNGMztcbiAgICAgIC8vYmFja2dyb3VuZDogIzY1Njk3MjtcbiAgICAgIC5mb290ZXItd3JhcHBlciB7XG4gICAgICAgIG1heC13aWR0aDogJHdpZHRoO1xuICAgICAgICBtYXJnaW46IDAgNXB4IDEwMHB4IDVweDtcblxuICAgICAgICAuYmxvY2s6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3N3B4O1xuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BUIFNhbnMgQ2FwdGlvbicsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHA6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgTW9ubycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuXG4gICAgICAgICAgICAuZW1haWwtbWUge1xuICAgICAgICAgICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgLy9tYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgICAuZW1haWwtbWUtbGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5zZXQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZW1haWwtbWUtbGluazo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzY1QjdGOTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jcnlwdC1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcblxuICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ1BUIE1vbm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ibG9jazpudGgtbGFzdC1vZi10eXBlKDEpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cblxuICAgICAgICAucHMge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgTW9ubycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgLy9mb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgLy9saW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3NnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAudGFibGUtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDQycHg7XG5cbiAgICB0YWJsZSB7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAvL3BhZGRpbmc6IDAgNXB4IDAgMThweDtcbiAgICAgIC8vbWFyZ2luOiAwIDVweCAwIDE4cHg7XG4gICAgICAvL21hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEyMHB4O1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZDRkYgIWltcG9ydGFudDtcblxuICAgICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIENhcHRpb24nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDM5cHghaW1wb3J0YW50O1xuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGhlaWdodDogMzVweDtcblxuICAgICAgICB0cjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgdGgge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGJvZHkge1xuICAgICAgICB0ci5jZGstcm93IHtcbiAgICAgICAgICAvL3BhZGRpbmctdG9wOiAyOHB4IWltcG9ydGFudDtcbiAgICAgICAgICB0ZC5jZGstY2VsbCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHIge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogMjhweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgcGFkZGluZzogMjRweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIENhcHRpb24nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIC8vcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIC8vbWF4LXdpZHRoOiAwO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgLy9oZWlnaHQ6IDM5cHghaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0ZDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIC8vZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgLy9saW5lLWhlaWdodDogMzlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgICAgICAgICAvL3BhZGRpbmctcmlnaHQ6IDUxcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cjpob3ZlciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0YWJsZS51c2Vycy1saXN0IHtcbiAgICAgIHRyIHtcbiAgICAgICAgdGQ6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgd2lkdGg6IDEycHghaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAvL3BhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuZ3JlZW4ge1xuICAgIGNvbG9yOiAkZ3JlZW47XG4gIH1cblxuICAucmVkIHtcbiAgICBjb2xvcjogJHJlZDtcbiAgfVxuXG4gIC5idXR0b24tcm93IHtcbiAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNGNUYzRjM7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLy9tYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDE4cHggMThweCAxOHB4IDEycHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICB9XG5cbiAgICBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XG4gICAgfVxuXG4gICAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgICBmb250LWZhbWlseTogJ1BUIE1vbm8nLCBzYW5zLXNlcmlmO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIC8vbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aXZlOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogODUlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cblxuICAgIC51c2VyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGZvbnQtZmFtaWx5OiAnUFQgTW9ubycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgY29sb3I6ICMxRjIxMjY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xuXG4gICAgICAudXNlci10b3RhbCB7XG4gICAgICAgIC8vZm9udC1zaXplOiAzMHB4IWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubmFtZS1yb3cge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAubmFtZS13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICB9XG5cbiAgLnNlZS1tb3JlIHtcbiAgICBmb250LWZhbWlseTogJ1BUIFNhbnMgQ2FwdGlvbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICBtYXJnaW46IDAgYXV0byAxMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLy9tYXJnaW4tbGVmdDogYXV0bztcbiAgICBkaXYge1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgLy9tYXgtd2lkdGg6IDExMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgfVxuXG4gICAgZGl2OjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgbGVmdDogMnB4O1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICBtYXgtd2lkdGg6IDExMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vLnNlZS1tb3JlOjpiZWZvcmUge1xuICAvLyAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gIC8vICAgIGNvbnRlbnQ6IFwiXCI7XG4gIC8vICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gICAgdG9wOiA4cHg7XG4gIC8vICAgIGxlZnQ6IDJweDtcbiAgLy8gICAgYm90dG9tOiAwO1xuICAvLyAgICByaWdodDogMDtcbiAgLy8gICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgLy8gICAgei1pbmRleDogLTE7XG4gIC8vfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgIC5tLWItOTAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgICAgICAgLm1hdC1wYWdpbmF0b3ItaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1hdC1kcmF3ZXJ7XG5cbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gICAgICAgICAgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcblxuICAgICAgICAgICAgLnJpZ2h0LWJsb2NrIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmlnaHQtYmxvY2stbW9iaWxlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAubW9iaWxlLWljb24tc2VhcmNoIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG5cbiAgICAgICAgICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy8yMTE4MTdfc2VhcmNoX3N0cm9uZ19pY29uLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgbWFzay1pbWFnZTogdXJsKCcuLi9hc3NldHMvMjExODE3X3NlYXJjaF9zdHJvbmdfaWNvbi5zdmcnKTtcbiAgICAgICAgICAgICAgICAgIG1hc2stc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAvL2NvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvMjExODE3X3NlYXJjaF9zdHJvbmdfaWNvbi5zdmcnKTtcbiAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNUE1RDY3O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAubW9iaWxlLWljb24tbWVudSB7XG5cbiAgICAgICAgICAgICAgICAubWVudS1pY29uIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgICAgICAgICAgICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvMzI2NjcyX21lbnVfaWNvbi5zdmdcIik7XG4gICAgICAgICAgICAgICAgICBtYXNrLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvMzI2NjcyX21lbnVfaWNvbi5zdmdcIik7XG4gICAgICAgICAgICAgICAgICBtYXNrLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvMzI2NjcyX21lbnVfaWNvbi5zdmdcIik7XG4gICAgICAgICAgICAgICAgICAvL2JhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzVBNUQ2NztcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZC10aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcblxuICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi1yb3cge1xuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51c2VyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjRweDtcbiAgICAgICAgICAuYm90dG9tLWJvcmRlci1tb2JpbGV7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZS51c2Vycy1saXN0IHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDYwcHg7XG4gICAgICAgICAgICAvL2ZvbnQtc2l6ZTogMThweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0aGVhZHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggNXB4IDVweCA1cHggIWltcG9ydGFudDs7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4IDUwcHggMTVweDtcblxuICAgICAgICAgICAgLmJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJsb2NrIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzhweDtcblxuICAgICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmVtYWlsLW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5jcnlwdC1pbmZvIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuXG4gICAgICAgICAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgICAgICAgd2lkdGg6IDk5JTtcblxuICAgICAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuXG4gICAgICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcblxuICAgICAgICAgICAgICAudGl0bGUtbGluayB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5nYW1lLW5hbWUge1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZpZGVvLWZyYW1lIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIC8vaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWUtbW9yZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIG1hcmdpbjogMCA1cHggNjBweDtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLXRpdGxlLXdyYXBwZXIge1xuICAgICAgICAvL2ZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG4gICAgICAgICYud3JhcHBlci1zaGlmdCB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN1YnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgICAgICYud3JhcHBlci1zaGlmdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXJkLXRpdGxlLXZhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cblxuICAgICAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICB9XG5cbiAgICAgIG1hdC1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICBib2R5LmRhcmsge1xuICAgIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICRibGFjayAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzRCNEQ1NiAhaW1wb3J0YW50O1xuXG4gICAgICAubWF0LW9wdGlvbi10ZXh0IHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtY2FyZCB7XG4gICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAuc2lkZWJhci1jb250YWluZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAgICAgLm1hdC1kcmF3ZXJ7XG4gICAgICAgICAgLy9ib3JkZXI6IHVuc2V0O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVye1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtZHJhd2VyLWNvbnRlbnR7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgICAgICAgIC5yaWdodC1ibG9jay1tb2JpbGUge1xuICAgICAgICAgICAgLm1vYmlsZS1pY29uLXNlYXJjaCB7XG4gICAgICAgICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1pY29uLW1lbnUge1xuXG4gICAgICAgICAgICAgIC5tZW51LWljb24ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIC8vZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDFweDtcbiAgICAgICAgICBwe1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLmFjdGl2ZSB7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAuYWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZDODNDO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAvL21hcmdpbi1sZWZ0OiAzN3B4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb246aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjRkZDODNDO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5ib3JkZXItbGlrZS1yb3ctd3JhcHBlciB7XG4gICAgICAgIC5ib3JkZXItbGlrZS1yb3cge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0QjRENTYgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubWF0LXBhZ2luYXRvci1vdXRlci1jb250YWluZXIge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAuc2VhcmNoIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNEI0RDU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciB7XG4gICAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAudGl0bGUtcm93IHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2s6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLmhlYWRlciB7XG5cbiAgICAgICAgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgICAgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgLmNhcmQtdGl0bGUtdmFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYjMyYTIwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIC5zdWJ0aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgICAuYmxvY2sge1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBjb2xvcjogI0IyQjhDRiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgIC5lbWFpbC1tZSB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAuZW1haWwtbWUtbGluayB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8uZW1haWwtbWUtbGluazo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAvLyAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgICAgICAgICAgLy8gIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIC8vICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIC8vICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgLy8gIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIC8vICBiYWNrZ3JvdW5kOiAjNjVCN0Y5O1xuICAgICAgICAgICAgICAgIC8vICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICAvL31cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jcnlwdC1pbmZvIHtcbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcyB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cblxuXG4gICAgICAudGFibGUtd3JhcHBlciB7XG4gICAgICAgIC8vbWFyZ2luLWJvdHRvbTogNDNweDtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgdGJvZHkge1xuXG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHI6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNEI0RDU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZ3JlZW4ge1xuICAgICAgICBjb2xvcjogJGdyZWVuO1xuICAgICAgfVxuXG4gICAgICAucmVkIHtcbiAgICAgICAgY29sb3I6ICRyZWQ7XG4gICAgICB9XG5cbiAgICAgIC5idXR0b24tcm93IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM0QjRENTY7XG5cblxuICAgICAgICAuYWN0aXZlOjpiZWZvcmUge1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyIHtcblxuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLnNlZS1tb3JlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgZGl2OjpiZWZvcmUge1xuXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfVxufVxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuOjpuZy1kZWVwIC5tLWItNzUge1xuICBtYXJnaW4tYm90dG9tOiA3NXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm0tYi05MCB7XG4gIG1hcmdpbi1ib3R0b206IDkwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubS10b3AtYm90dG9tLTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjo6bmctZGVlcCAuYm9yZGVyLWxpa2Utcm93LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLmJvcmRlci1saWtlLXJvdy13cmFwcGVyIC5ib3JkZXItbGlrZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGM0YzO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkNGRjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lciAubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtaW4taGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDAgNXB4O1xuICBmbGV4LXdyYXA6IHdyYXAtcmV2ZXJzZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODc1cHg7XG59XG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIC5tYXQtcGFnaW5hdG9yLWljb24ge1xuICB3aWR0aDogNDBweDtcbn1cbjo6bmctZGVlcCBib2R5IHtcbiAgYmFja2dyb3VuZDogIzY1Njk3Mjtcbn1cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCAubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI0Y0RjZGRDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0U2RUJGRSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZDODNDICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgYXV0byAxMjZweDtcbn1cbjo6bmctZGVlcCAuc2VhcmNoIC5leGFtcGxlLWZvcm0ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuOjpuZy1kZWVwIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjRjRGNkZEO1xuICBib3JkZXI6IDNweCBzb2xpZCAjRTZFQkZFO1xuICBwYWRkaW5nOiA5cHggMThweCAxNXB4IDE4cHg7XG59XG46Om5nLWRlZXAgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUYyMTI2O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjo6bmctZGVlcCAuc2VhcmNoIC5zZWFyY2gtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtZmxleCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzFGMjEyNjtcbn1cbjo6bmctZGVlcCAuc2VhcmNoIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDY1cHggMCAwIDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkNGRiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jazpsYXN0LW9mLXR5cGUge1xuICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jazpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogdW5zZXQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGNUYzRjM7XG4gIG1hcmdpbjogNTdweCBhdXRvIDAgYXV0bztcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAudGl0bGUtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDMzcHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyAudGl0bGUtbGluayB7XG4gIG1hcmdpbi1yaWdodDogNjZweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyAudGl0bGUtbGluazo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyAudGl0bGUtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLmdhbWUtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyOHB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIC52aWRlby1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA5NHB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAubWF0LWRyYXdlciB7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLm1hdC1kcmF3ZXIgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLnRpdGxlIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC50aXRsZSBwLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC50aXRsZSBwLmFjdGl2ZTo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC50aXRsZSBwOmhvdmVyIHtcbiAgY29sb3I6ICNGRkM4M0M7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC5pY29uIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLmljb246aG92ZXIge1xuICBjb2xvcjogI0ZGQzgzQztcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gIG1heC13aWR0aDogODc1cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgNXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIC5yaWdodC1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAucmlnaHQtYmxvY2sgLnRpdGxlIHAuYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC50aXRsZSBwLmFjdGl2ZTo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC50aXRsZSBwOmhvdmVyIHtcbiAgY29sb3I6ICNGRkM4M0M7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAucmlnaHQtYmxvY2sgLmljb246aG92ZXIge1xuICBjb2xvcjogI0ZGQzgzQztcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAubGVmdC1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAubGVmdC1ibG9jazpob3ZlciB7XG4gIGNvbG9yOiAjRkZDODNDO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLXRpdGxlLCA6Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogLTRweCA1cHggMTZweCA1cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiA0MnB4O1xuICBsaW5lLWhlaWdodDogNDdweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCBtYXQtY2FyZC10aXRsZSAuY2FyZC10aXRsZS13cmFwcGVyLndyYXBwZXItc2hpZnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCBtYXQtY2FyZC10aXRsZSAuY2FyZC10aXRsZS13cmFwcGVyIC5jYXJkLXRpdGxlLXZhciB7XG4gIGNvbG9yOiAjYjMyYTIwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDI0cHggNXB4IDc3cHggNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUgLnN1YnRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIG1hcmdpbjogMTZweCBhdXRvIDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMUYyMTI2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUgLnN1YnRpdGxlLXdyYXBwZXIud3JhcHBlci1zaGlmdCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW46IDAgNXB4IDE2cHggNXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNGNUYzRjM7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgNXB4IDEwMHB4IDVweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2s6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxMDFweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA3N3B4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGl0bGUgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnMgQ2FwdGlvblwiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDI3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGl0bGUgcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRleHQgLmVtYWlsLW1lIC5lbWFpbC1tZS1saW5rIHtcbiAgY29sb3I6ICMxMzEzMTQ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bnNldDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGV4dCAuZW1haWwtbWUgLmVtYWlsLW1lLWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzY1QjdGOTtcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIC5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jazpudGgtbGFzdC1vZi10eXBlKDEpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAucHMge1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDc2cHg7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gNDJweDtcbn1cbjo6bmctZGVlcCAudGFibGUtd3JhcHBlciB0YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZDRkYgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRoZWFkIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRoZWFkIHRyOmZpcnN0LWNoaWxkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ci5jZGstcm93IHRkLmNkay1jZWxsIHtcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHtcbiAgcGFkZGluZy10b3A6IDI4cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgcGFkZGluZzogMjRweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zIENhcHRpb25cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzlweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxRjIxMjY7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlLnVzZXJzLWxpc3QgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlLnVzZXJzLWxpc3QgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46Om5nLWRlZXAgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5ncmVlbiB7XG4gIGNvbG9yOiAjMTFCNDc5O1xufVxuOjpuZy1kZWVwIC5yZWQge1xuICBjb2xvcjogI0ZEMDMwMztcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyB7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRjVGM0YzO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyBidXR0b24ge1xuICBwYWRkaW5nOiAxOHB4IDE4cHggMThweCAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjNweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAuYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAuYWN0aXZlIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOjpuZy1kZWVwIC5idXR0b24tcm93IC5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gIHotaW5kZXg6IC0xO1xufVxuOjpuZy1kZWVwIC5idXR0b24tcm93IC51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzFGMjEyNjtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbn1cbjo6bmctZGVlcCAubmFtZS1yb3cge1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0byAzMHB4IGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjo6bmctZGVlcCAubmFtZS1yb3cgLm5hbWUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjo6bmctZGVlcCAuc2VlLW1vcmUge1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zIENhcHRpb25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICBjb2xvcjogIzFGMjEyNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIG1hcmdpbjogMCBhdXRvIDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOjpuZy1kZWVwIC5zZWUtbW9yZSBkaXYge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAuc2VlLW1vcmUgZGl2OjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDJweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgei1pbmRleDogLTE7XG4gIG1heC13aWR0aDogMTEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLm0tYi05MCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIC5tYXQtcGFnaW5hdG9yLWljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrLW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIC5yaWdodC1ibG9jay1tb2JpbGUgLm1vYmlsZS1pY29uLXNlYXJjaCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrLW1vYmlsZSAubW9iaWxlLWljb24tc2VhcmNoIC5tZW51LWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiLi4vYXNzZXRzLzIxMTgxN19zZWFyY2hfc3Ryb25nX2ljb24uc3ZnXCIpO1xuICAgIG1hc2staW1hZ2U6IHVybChcIi4uL2Fzc2V0cy8yMTE4MTdfc2VhcmNoX3N0cm9uZ19pY29uLnN2Z1wiKTtcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjNUE1RDY3O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAucmlnaHQtYmxvY2stbW9iaWxlIC5tb2JpbGUtaWNvbi1tZW51IC5tZW51LWljb24ge1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogdXJsKFwiLi4vYXNzZXRzLzMyNjY3Ml9tZW51X2ljb24uc3ZnXCIpO1xuICAgIG1hc2staW1hZ2U6IHVybChcIi4uL2Fzc2V0cy8zMjY2NzJfbWVudV9pY29uLnN2Z1wiKTtcbiAgICBtYXNrLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjNUE1RDY3O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuY2FyZC10aXRsZS13cmFwcGVyIHtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnNlYXJjaCB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5zZWFyY2ggLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0IHtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5idXR0b24tcm93IGJ1dHRvbiB7XG4gICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuYnV0dG9uLXJvdyBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmJ1dHRvbi1yb3cgLm1hdC1idXR0b24td3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmJ1dHRvbi1yb3cgLnVzZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgYXV0byAyNHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgLmJvdHRvbS1ib3JkZXItbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUudXNlcnMtbGlzdCB0ciB0ZCB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZS51c2Vycy1saXN0IHRyIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHRhYmxlIHRoZWFkIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB7XG4gICAgcGFkZGluZy10b3A6IDE4cHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAgMTVweCA1MHB4IDE1cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2s6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLmVtYWlsLW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAuY3J5cHQtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAuY3J5cHQtaW5mbyAuaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xuICAgIHdpZHRoOiA5OSU7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIC50aXRsZS1yb3cge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyAudGl0bGUtbGluayB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLmdhbWUtbmFtZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIC52aWRlby1mcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5zZWUtbW9yZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgIG1hcmdpbjogMCA1cHggNjBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIC5jYXJkLXRpdGxlLXdyYXBwZXIud3JhcHBlci1zaGlmdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCAuc3VidGl0bGUtd3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCAuc3VidGl0bGUtd3JhcHBlci53cmFwcGVyLXNoaWZ0IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLmNhcmQtdGl0bGUtdmFyIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIHtcbiAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzEzMTMxNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLXRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzEzMTMxNCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxNDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLm1hdC1kcmF3ZXIgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC5tYXQtZHJhd2VyIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciAuaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC5tYXQtZHJhd2VyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLm1hdC1kcmF3ZXItY29udGVudCAucmlnaHQtYmxvY2stbW9iaWxlIC5tb2JpbGUtaWNvbi1zZWFyY2ggLm1lbnUtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAubWF0LWRyYXdlci1jb250ZW50IC5yaWdodC1ibG9jay1tb2JpbGUgLm1vYmlsZS1pY29uLW1lbnUgLm1lbnUtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLnRpdGxlIHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAudGl0bGUgcC5hY3RpdmUge1xuICB6LWluZGV4OiAyO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2lkZWJhci1jb250YWluZXIgLnRpdGxlIHAuYWN0aXZlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoN3B4KSB0cmFuc2xhdGVZKDdweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNpZGViYXItY29udGFpbmVyIC50aXRsZSBwOmhvdmVyIHtcbiAgY29sb3I6ICNGRkM4M0M7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAuaWNvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zaWRlYmFyLWNvbnRhaW5lciAuaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjRkZDODNDO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuYm9yZGVyLWxpa2Utcm93LXdyYXBwZXIgLmJvcmRlci1saWtlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjRENTYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAubWF0LXBhZ2luYXRvci1vdXRlci1jb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlYXJjaCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kOiAjMTMxMzE0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM0QjRENTYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM0QjRENTY7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0QjRENTYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jazpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAudGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIG1hdC1jYXJkLXRpdGxlIC5jYXJkLXRpdGxlLXdyYXBwZXIgLmNhcmQtdGl0bGUtdmFyIHtcbiAgY29sb3I6ICNiMzJhMjA7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIG1hdC1jYXJkLXN1YnRpdGxlIC5zdWJ0aXRsZS13cmFwcGVyIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxMzE0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGl0bGUgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50aXRsZSBwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTQ7XG4gIHotaW5kZXg6IC0xO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRleHQge1xuICBjb2xvcjogI0IyQjhDRiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRleHQgLmVtYWlsLW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50ZXh0IC5lbWFpbC1tZSAuZW1haWwtbWUtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmNyeXB0LWluZm8gLml0ZW0ge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5wcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzE0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNEI0RDU2O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZ3JlZW4ge1xuICBjb2xvcjogIzExQjQ3OTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnJlZCB7XG4gIGNvbG9yOiAjRkQwMzAzO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuYnV0dG9uLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNEI0RDU2O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuYnV0dG9uLXJvdyAuYWN0aXZlOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuYnV0dG9uLXJvdyAudXNlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuc2VlLW1vcmUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlZS1tb3JlIGRpdjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/list/list.component */
    "./src/app/components/list/list.component.ts");
    /* harmony import */


    var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/user-info/user-info.component */
    "./src/app/components/user-info/user-info.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/game-info/game-info.component */
    "./src/app/components/game-info/game-info.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _components_live_live_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/live/live.component */
    "./src/app/components/live/live.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"], _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _components_live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"], _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _components_live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game-info/game-info.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/game-info/game-info.component.ts ***!
    \*************************************************************/

  /*! exports provided: GameInfoComponent */

  /***/
  function srcAppComponentsGameInfoGameInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameInfoComponent", function () {
      return GameInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");

    function GameInfoComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.youTubeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function GameInfoComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 23);
      }
    }

    function GameInfoComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");
      }
    }

    function GameInfoComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 23);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/user-info/", a1];
    };

    function GameInfoComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r11.player));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.player, " ");
      }
    }

    function GameInfoComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 23);
      }
    }

    function GameInfoComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.result > 0 ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, item_r12.result - 0, "$", "symbol", "3.0-0"), " ");
      }
    }

    function GameInfoComponent_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
      }
    }

    function GameInfoComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13, "");
      }
    }

    var GameInfoComponent = /*#__PURE__*/function () {
      function GameInfoComponent(route, dataService, sanitizer) {
        _classCallCheck(this, GameInfoComponent);

        this.route = route;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.displayedColumns = [];
        this.isActive = {
          topWinning: true,
          notSoWinning: false,
          mostAppearances: false
        };
        this.sortOption = 'desc';
        this.youTubeLink = '';
        this._data = {
          e: undefined,
          date: undefined,
          yTitle: undefined,
          yLink: undefined,
          players: [],
          total: undefined
        };
      }

      _createClass(GameInfoComponent, [{
        key: "data",
        get: function get() {
          return this._data;
        },
        set: function set(value) {
          this._data = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          setTimeout(function () {
            return _this5.setViewVars();
          }, 0);
          this.route.params.subscribe(function (paramsId) {
            _this5.getGameInfo(paramsId.id);
          });
        } // tslint:disable-next-line:use-lifecycle-interface

      }, {
        key: "setViewVars",
        value: function setViewVars() {
          this.dataService.searchHide = true;
        }
      }, {
        key: "getGameInfo",
        value: function getGameInfo(id) {
          var _this6 = this;

          this.dataService.getGameInfo(id).subscribe(function (data) {
            // console.log(data);
            _this6.data = data;

            _this6.drawTable();

            _this6.getYouTubeLink();

            _this6.setViewVars();
          });
        }
      }, {
        key: "drawTable",
        value: function drawTable() {
          var _this7 = this;

          var newObj = [];
          this.data.players.forEach(function (player) {
            newObj.push({
              player: player.player,
              result: _this7.dataService.userScoreCalc(String(player.result))
            });
          });
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](newObj);
          this.displayedColumns = ['index', 'player', 'result'];
        }
      }, {
        key: "sortTable",
        value: function sortTable(name) {
          switch (name) {
            case 'win':
              this.isActive.topWinning = true;
              this.isActive.notSoWinning = false;
              this.sortOption = 'desc';
              this.sortData();
              break;

            case 'loose':
              this.isActive.topWinning = false;
              this.isActive.notSoWinning = true;
              this.sortOption = 'asc';
              this.sortData();
              break;

            default:
              break;
          }
        }
      }, {
        key: "sortData",
        value: function sortData() {
          var _this8 = this;

          if (this.sortOption === 'asc') {
            this.data.players.sort(function (a, b) {
              return _this8.dataService.userScoreCalc(a.result) - _this8.dataService.userScoreCalc(b.result);
            });
          } else if (this.sortOption === 'desc') {
            this.data.players.sort(function (a, b) {
              return _this8.dataService.userScoreCalc(b.result) - _this8.dataService.userScoreCalc(a.result);
            });
          }

          this.drawTable();
        }
      }, {
        key: "getYouTubeLink",
        value: function getYouTubeLink() {
          var tempLink = 'https://www.youtube.com/embed/' + this.data.yLink.split('=')[1].split('&')[0] + '?autoplay=1';
          this.youTubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(tempLink || '');
        }
      }]);

      return GameInfoComponent;
    }();

    GameInfoComponent.ɵfac = function GameInfoComponent_Factory(t) {
      return new (t || GameInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]));
    };

    GameInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameInfoComponent,
      selectors: [["app-game-info"]],
      decls: 28,
      vars: 10,
      consts: [[1, "game-info-video-block-wrapper"], [1, "game-info-video-block"], [1, "title-row"], [1, "title-link"], [1, "title-date"], [1, "game-name"], ["class", "video-frame", 4, "ngIf"], [1, "table-wrapper"], [1, "border-like-row-wrapper"], [1, "border-like-row"], ["mat-table", "", 1, "mat-elevation-z8", "m-b-75", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "td", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "player"], ["class", "td", "mat-cell", "", 3, "routerLink", 4, "matCellDef"], ["matColumnDef", "result"], ["class", "td", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [1, "border-like-row-wrapper", "m-top-bottom-30", "bottom-border-mobile"], [1, "video-frame"], ["width", "100%", "height", "100%", 1, "e2e-iframe-trusted-src", 3, "src"], ["mat-header-cell", ""], ["mat-cell", "", 1, "td"], ["mat-cell", "", 1, "td", 3, "routerLink"], ["mat-cell", "", 1, "td", 3, "ngClass"], ["cdk-header-row", ""], ["cdk-row", ""]],
      template: function GameInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameInfoComponent_div_10_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GameInfoComponent_th_16_Template, 1, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, GameInfoComponent_td_17_Template, 2, 1, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GameInfoComponent_th_19_Template, 1, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GameInfoComponent_td_20_Template, 2, 4, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GameInfoComponent_th_22_Template, 1, 0, "th", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GameInfoComponent_td_23_Template, 3, 7, "td", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GameInfoComponent_tr_24_Template, 1, 0, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GameInfoComponent_tr_25_Template, 2, 1, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.e, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, ctx.data.date, "shortDate"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.yTitle, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.youTubeLink);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkRow"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1pbmZvL2dhbWUtaW5mby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game-info',
          templateUrl: './game-info.component.html',
          styleUrls: ['./game-info.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppComponentsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ListComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
      }
    }

    function ListComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, i_r9 + 1, "2.0-0"), " ");
      }
    }

    function ListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
      }
    }

    function ListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r10.name, " (", item_r10.count, ") ");
      }
    }

    function ListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 14);
      }
    }

    function ListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r11.result > 0 ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, item_r11.result - 0, "$", "symbol", "3.0-0"), " ");
      }
    }

    function ListComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/user-info/", a1];
    };

    function ListComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tr_19_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.scrollTop();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r12.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r12, " ");
      }
    }

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(dataService) {
        _classCallCheck(this, ListComponent);

        this.dataService = dataService;
        this.displayedColumns = [];
        this.players = {};
        this.playersGameCount = {};
        this.sortOption = 'desc';
        this.isActive = {
          topWinning: true,
          notSoWinning: false,
          mostAppearances: false
        };
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this9 = this;

          this.dataService.getData().subscribe(function (data) {
            data.forEach(function (ep) {
              ep.players.forEach(function (game) {
                if (!_this9.players[game.player]) {
                  _this9.players[game.player] = {
                    result: _this9.dataService.userScoreCalc(game.result),
                    count: 1
                  };
                } else {
                  _this9.players[game.player].result += _this9.dataService.userScoreCalc(game.result);
                  _this9.players[game.player].count += 1;
                }
              });
            });

            _this9.sortData();

            _this9.data = data;

            _this9.getDisplayedColumns();
          });
        }
      }, {
        key: "sortData",
        value: function sortData() {
          var pl = [];

          for (var _i = 0, _Object$keys = Object.keys(this.players); _i < _Object$keys.length; _i++) {
            var name = _Object$keys[_i];
            pl.push({
              name: name,
              result: +this.players[name].result,
              count: this.players[name].count
            });
          }

          if (this.sortOption === 'asc') {
            pl.sort(function (a, b) {
              return +a.result - +b.result;
            });
          } else if (this.sortOption === 'desc') {
            pl.sort(function (a, b) {
              return +b.result - +a.result;
            });
          } else if (this.sortOption === 'count') {
            pl.sort(function (a, b) {
              return +b.count - +a.count;
            });
          }

          var newPl = pl.slice(0, 20);
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](newPl);
        }
      }, {
        key: "getDisplayedColumns",
        value: function getDisplayedColumns() {
          if (this.data) {
            this.displayedColumns = ['index', 'name', 'result'];
          }
        }
      }, {
        key: "sortTable",
        value: function sortTable(name) {
          switch (name) {
            case 'win':
              this.isActive.topWinning = true;
              this.isActive.notSoWinning = false;
              this.isActive.mostAppearances = false;
              this.sortOption = 'desc';
              this.sortData();
              break;

            case 'loose':
              this.isActive.topWinning = false;
              this.isActive.notSoWinning = true;
              this.isActive.mostAppearances = false;
              this.sortOption = 'asc';
              this.sortData();
              break;

            case 'appearance':
              this.isActive.topWinning = false;
              this.isActive.notSoWinning = false;
              this.isActive.mostAppearances = true;
              this.sortOption = 'count';
              this.sortData();
              break;

            default:
              break;
          }
        }
      }, {
        key: "scrollTop",
        value: function scrollTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      decls: 20,
      vars: 6,
      consts: [[1, "button-row"], ["mat-button", "", 1, "winning-sort", 3, "ngClass", "click"], ["mat-button", "", 1, "loosing-sort", 3, "ngClass", "click"], ["mat-button", "", 1, "appearance-sort", 3, "ngClass", "click"], [1, "table-wrapper", "m-b-90"], ["mat-table", "", 1, "mat-elevation-z8", "users-list", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "td", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "result"], ["class", "td", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 3, "routerLink", "click", 4, "cdkRowDef", "cdkRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "td"], ["mat-cell", "", 1, "td", 3, "ngClass"], ["cdk-header-row", ""], ["cdk-row", "", 3, "routerLink", "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_1_listener() {
            return ctx.sortTable("win");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Top Winning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_3_listener() {
            return ctx.sortTable("loose");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Not So Winning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_5_listener() {
            return ctx.sortTable("appearance");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Regulars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_th_10_Template, 1, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_td_11_Template, 3, 4, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ListComponent_th_13_Template, 1, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_td_14_Template, 2, 2, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListComponent_th_16_Template, 1, 0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ListComponent_td_17_Template, 3, 7, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ListComponent_tr_18_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ListComponent_tr_19_Template, 2, 4, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isActive.topWinning ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isActive.notSoWinning ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isActive.mostAppearances ? "active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkRow"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/live/live.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/live/live.component.ts ***!
    \***************************************************/

  /*! exports provided: LiveComponent */

  /***/
  function srcAppComponentsLiveLiveComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LiveComponent", function () {
      return LiveComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function LiveComponent_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getYoutubeLink(item_r1.yLink), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/live/", a1];
    };

    function LiveComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LiveComponent_div_1_div_9_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, item_r1.e));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.e, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, item_r1.date, "shortDate"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.yTitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.yLink);
      }
    }

    var LiveComponent = /*#__PURE__*/function () {
      function LiveComponent(dataService, sanitizer) {
        _classCallCheck(this, LiveComponent);

        this.dataService = dataService;
        this.sanitizer = sanitizer;
        this.toShow = 3;
        this._data = [{
          e: undefined,
          date: undefined,
          yTitle: undefined,
          yLink: undefined,
          players: [],
          total: undefined
        }];
      }

      _createClass(LiveComponent, [{
        key: "data",
        get: function get() {
          return this._data;
        },
        set: function set(value) {
          this._data = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          setTimeout(function () {
            return _this10.setViewVars();
          }, 0);
          this.getData();
        }
      }, {
        key: "setViewVars",
        value: function setViewVars() {
          this.dataService.searchHide = true;
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this11 = this;

          this.dataService.getData().subscribe(function (newData) {
            _this11.data = newData.reverse();
          });
        }
      }, {
        key: "getYoutubeLink",
        value: function getYoutubeLink(link) {
          var tempLink = 'https://www.youtube.com/embed/' + link.split('=')[1].split('&')[0] + '?autoplay=1';
          return this.sanitizer.bypassSecurityTrustResourceUrl(tempLink || '');
        }
      }]);

      return LiveComponent;
    }();

    LiveComponent.ɵfac = function LiveComponent_Factory(t) {
      return new (t || LiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    LiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LiveComponent,
      selectors: [["app-live"]],
      decls: 5,
      vars: 1,
      consts: [[1, "game-info-video-block-wrapper"], ["class", "game-info-video-block", 4, "ngFor", "ngForOf"], [1, "see-more", 3, "click"], [1, "game-info-video-block"], [1, "title-row"], [1, "title-link", 3, "routerLink"], [1, "title-date"], [1, "game-name"], ["class", "video-frame", 4, "ngIf"], [1, "video-frame"], ["width", "100%", "height", "100%", 1, "e2e-iframe-trusted-src", 3, "src"]],
      template: function LiveComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LiveComponent_div_1_Template, 10, 10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LiveComponent_Template_div_click_2_listener() {
            return ctx.toShow = ctx.toShow + 3;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.slice(0, ctx.toShow));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGl2ZS9saXZlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-live',
          templateUrl: './live.component.html',
          styleUrls: ['./live.component.scss']
        }]
      }], function () {
        return [{
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-info/user-info.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-info/user-info.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppComponentsUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");

    function UserInfoComponent_div_7_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function UserInfoComponent_div_7_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r9.date, "MM/dd/yy"), " ");
      }
    }

    function UserInfoComponent_div_7_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function UserInfoComponent_div_7_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.e, " ");
      }
    }

    function UserInfoComponent_div_7_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
      }
    }

    function UserInfoComponent_div_7_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r12.score > 0 ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](2, 2, item_r12.score - 0, "$", "symbol", "3.0-0"), " ");
      }
    }

    function UserInfoComponent_div_7_tr_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/live", a1];
    };

    function UserInfoComponent_div_7_tr_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", row_r13.e ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, row_r13.e) : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r13, "");
      }
    }

    function UserInfoComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserInfoComponent_div_7_th_4_Template, 1, 0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserInfoComponent_div_7_td_5_Template, 3, 4, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserInfoComponent_div_7_th_7_Template, 1, 0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserInfoComponent_div_7_td_8_Template, 2, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserInfoComponent_div_7_th_10_Template, 1, 0, "th", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserInfoComponent_div_7_td_11_Template, 3, 7, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserInfoComponent_div_7_tr_12_Template, 1, 0, "tr", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserInfoComponent_div_7_tr_13_Template, 2, 4, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-paginator", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkHeaderRowDef", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkRowDefColumns", ctx_r0.displayedColumns);
      }
    }

    var UserInfoComponent = /*#__PURE__*/function () {
      function UserInfoComponent(route, dataService) {
        var _this12 = this;

        _classCallCheck(this, UserInfoComponent);

        this.route = route;
        this.dataService = dataService;
        this.user = {};
        this.userData = {
          games: undefined,
          total: undefined
        };
        this.displayedColumns = [];
        this.asyncData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.total = 0;
        this.sortOption = 'desc';
        this.isActive = {
          topWinning: true,
          notSoWinning: false,
          mostAppearances: false
        };
        this.asyncData$.subscribe(function (val) {
          return val ? _this12.onData(val) : '';
        });
      }

      _createClass(UserInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          setTimeout(function () {
            return _this13.setViewVars();
          }, 0);
          this.route.params.subscribe(function (paramsId) {
            _this13.userId = paramsId.id;

            _this13.getUser(_this13.userId);
          });
        }
      }, {
        key: "setViewVars",
        value: function setViewVars() {
          this.dataService.searchHide = false;
        }
      }, {
        key: "getUser",
        value: function getUser(name) {
          var _this14 = this;

          this.dataService.getUserInfo(name).subscribe(function (data) {
            _this14.asyncData$.next(data);
          });
        } // private initSubscriptions() {
        //   this.subscribtions$.add({
        //     // this.route.params.subscribe(paramsId => {
        //     //   this.userId = paramsId.id;
        //     //   this.getUser(this.userId);
        //     // })
        //   });
        // }

      }, {
        key: "onData",
        value: function onData(val) {
          this.userData = val;
          this.total = this.dataService.userScoreCalc(this.userData.total);

          if (this.userData.games) {
            this.sortTable('date');
          }
        }
      }, {
        key: "getTable",
        value: function getTable(data) {
          // data.push({
          //   title: 'Total',
          //   score: this.total,
          // });
          // @ts-ignore
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
          this.displayedColumns = ['date', 'e', 'score'];
          this.setPaginator();
        }
      }, {
        key: "sortTable",
        value: function sortTable(name) {
          switch (name) {
            case 'win':
              this.isActive.topWinning = true;
              this.isActive.notSoWinning = false;
              this.sortOption = 'desc';
              this.sortData();
              break;

            case 'date':
              this.isActive.topWinning = true;
              this.isActive.notSoWinning = false;
              this.sortOption = 'date';
              this.sortData();
              break;

            case 'loose':
              this.isActive.topWinning = false;
              this.isActive.notSoWinning = true;
              this.sortOption = 'asc';
              this.sortData();
              break;

            default:
              break;
          }
        }
      }, {
        key: "sortData",
        value: function sortData() {
          var pure = this.userData.games.filter(function (item) {
            return item.title !== 'Total';
          });

          if (this.sortOption === 'asc') {
            pure.sort(function (a, b) {
              return +a.score - +b.score;
            });
          } else if (this.sortOption === 'desc') {
            pure.sort(function (a, b) {
              return +b.score - +a.score;
            });
          } else if (this.sortOption === 'date') {
            pure.sort(function (a, b) {
              return moment__WEBPACK_IMPORTED_MODULE_4__(new Date(b.date)).diff(moment__WEBPACK_IMPORTED_MODULE_4__(new Date(a.date)));
            });
          }

          this.getTable(pure);
        }
      }, {
        key: "setPaginator",
        value: function setPaginator() {
          this.dataSource.paginator = this.paginator;
        }
      }]);

      return UserInfoComponent;
    }();

    UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) {
      return new (t || UserInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]));
    };

    UserInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserInfoComponent,
      selectors: [["app-user-info"]],
      viewQuery: function UserInfoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 8,
      vars: 9,
      consts: [[1, "button-row"], [1, "user"], [1, "user-name"], [1, "user-total", 3, "ngClass"], [4, "ngIf"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "td", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "e"], ["matColumnDef", "score"], ["class", "td", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 3, "routerLink", 4, "cdkRowDef", "cdkRowDefColumns"], ["hidePageSize", "", "pageSize", "20", "aria-label", "Select page of periodic elements"], [1, "border-like-row"], ["mat-header-cell", ""], ["mat-cell", "", 1, "td"], ["mat-cell", "", 1, "td", 3, "ngClass"], ["cdk-header-row", ""], ["cdk-row", "", 3, "routerLink"]],
      template: function UserInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserInfoComponent_div_7_Template, 16, 3, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.total > 0 ? "green" : "red");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](6, 4, ctx.total, "$", "symbol", "3.0-0"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkRow"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-info',
          templateUrl: './user-info.component.html',
          styleUrls: ['./user-info.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/data.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/data.service.ts ***!
    \******************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppServicesDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(httpClient) {
        _classCallCheck(this, DataService);

        this.httpClient = httpClient;
        this.searchHide = false;
        this.mobileSearchHide = true;
        this.mobileMenuHide = true;
      }

      _createClass(DataService, [{
        key: "userScoreCalc",
        value: function userScoreCalc(str) {
          var _a;

          if (!str) {
            return 0;
          }

          var data = str.replace('$', '').split(',');

          if (data[1]) {
            return +(data[0] + data[1]);
          } else {
            return (_a = +str.replace('$', '')) !== null && _a !== void 0 ? _a : 0;
          }
        }
      }, {
        key: "getData",
        value: function getData() {
          return this.httpClient.get('/assets/games_new.json');
        }
      }, {
        key: "getUpdateDate",
        value: function getUpdateDate() {
          return this.httpClient.get('/assets/games_new.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data.sort(function (a, b) {
              return moment__WEBPACK_IMPORTED_MODULE_2__(new Date(b.date)).diff(moment__WEBPACK_IMPORTED_MODULE_2__(new Date(a.date)));
            })[0].date;
          }));
        }
      }, {
        key: "getPlayersNames",
        value: function getPlayersNames() {
          return this.httpClient.get('/assets/games_new.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var players = [];
            data.forEach(function (competition) {
              competition.players.forEach(function (game) {
                if (!players.includes(game.player)) {
                  players.push(game.player);
                }
              });
            });
            return players;
          }));
        }
      }, {
        key: "getGameInfo",
        value: function getGameInfo(id) {
          return this.httpClient.get('/assets/games_new.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            return data.find(function (item) {
              return item.e === id;
            }) || null;
          }));
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo(name) {
          var _this15 = this;

          var response = {
            games: undefined,
            total: undefined
          };
          return this.httpClient.get('/assets/games_new.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var res = data.filter(function (item) {
              return _this15.isPlayerInGame(item.players, name);
            });

            if (!res) {
              return [];
            }

            response.games = [];
            res.forEach(function (item, index) {
              response.games.push({
                e: item.e,
                title: item.yTitle,
                date: item.date,
                score: _this15.userScoreCalc(item.players.find(function (val) {
                  return val.player === name;
                }).result) || 0
              });
            });
            var total = response.games.reduce(function (sum, curr) {
              return sum += +curr.score;
            }, 0);
            response.total = String(total);
            return response;
          }));
        }
      }, {
        key: "isPlayerInGame",
        value: function isPlayerInGame(game, playerName) {
          var res = game.find(function (item) {
            return item.player === playerName;
          });
          return !!res;
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gby.su/IdeaProjects/poker-hustler/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map