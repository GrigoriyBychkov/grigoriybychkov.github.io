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


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AppComponent_div_20_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function AppComponent_div_20_mat_option_6_Template_mat_option_onSelectionChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.getUser($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
      }
    }

    function AppComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-autocomplete", null, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_20_mat_option_6_Template, 2, 2, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r0.filteredOptions));
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
        this.title = 'poker-hustler';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.options = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.mode = 'dark mode';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUrl();
          this.initForm();
          this.initSubscription();
          this.getPlayersNames();
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
          this.router.events.subscribe(function (val) {
            if (!_this2.router.url.includes('/live')) {
              button.className = 'title';
              _this2.dataService.searchHide = false;
            } else {
              button.className = 'active';
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
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 61,
      vars: 7,
      consts: [[1, "container"], [1, "header"], [1, "header-wrapper"], [1, "left-block", 3, "routerLink"], [1, "right-block"], [1, "title", 3, "click"], ["id", "#liveLink", 1, "active"], [1, "icon", 3, "click"], ["id", "#title", 1, "card-title-wrapper", 3, "ngClass"], [1, "card-title-var"], ["id", "#subTitle", 1, "subtitle-wrapper", 3, "ngClass"], ["class", "search", 4, "ngIf"], [1, "footer"], [1, "footer-wrapper"], [1, "block"], [1, "title"], [1, "text"], [1, "email-me"], ["href", "mailto:imansiberia@icloud.com", 1, "email-me-link"], [1, "crypt-info"], [1, "item"], [1, "ps"], [1, "search"], [1, "example-form", 3, "formGroup"], ["appearance", "fill", 1, "search-form-field"], ["type", "text", "placeholder", "Search Your Favorite Poker Player", "aria-label", "Number", "matInput", "", "formControlName", "search", 1, "search-input", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Trackingpoker.com ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() {
            return ctx.routerLive(ctx.router.url);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "live stream");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_10_listener() {
            return ctx.setDarkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hustler Casino ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Updated : 01/05/2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_div_20_Template, 8, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "DISCLAIMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " *Data provided by live stream \u201Ccumlative winnings\u201D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " ** This website was intended for entertainment purposes and not to use as any financial indicator or tax purposes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " *** Players play off stream, wins and loss might are not be accurately reflected. This information is for on stream only. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Shout Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " *Shoutout to Ryan Fieldmen & Nick Vertucci for producing the stream. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " **To the regulars, thanks for making the stream fun to watch. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "donations & Sponsorship\uD83C\uDF7B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " *I created this site for the regular \u201Cchat pros\u201D in the live chat and all the millionssss of viewers! You guys keep the stream entertaining and cheers to you. All of this work is for you guys! If anyone feels... \u201Cbarry generous\u201D, I\u2019ve provided my wallets for donations! If you like to be a sponsor for this site, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " please email me here! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bitcoin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Eth");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " *This website is in no way affiliated with the show, just a fan site. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mode, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.dataService.searchHide ? "wrapper-shift" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataService.searchHide ? "Live Stream" : "Live Poker Tracker", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", !ctx.dataService.searchHide ? "wrapper-shift" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataService.searchHide);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"PT Mono\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: baseline;\n  justify-content: flex-start;\n  padding-bottom: 50px;\n}\n\n  .m-b-75 {\n  margin-bottom: 75px !important;\n}\n\n  .m-b-90 {\n  margin-bottom: 90px !important;\n}\n\n  .m-top-bottom-30 {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n  .border-like-row-wrapper {\n  width: 100%;\n  height: 2px;\n  display: flex;\n}\n\n  .border-like-row-wrapper .border-like-row {\n  background-color: #F5F3F3;\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto;\n}\n\n  .mat-paginator-outer-container {\n  background-color: #FBFCFF;\n  display: flex;\n  width: 100%;\n  margin: 0 auto;\n  justify-content: center;\n  font-size: 30px;\n}\n\n  .mat-paginator-outer-container .mat-paginator-container {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  min-height: 56px;\n  margin: 0 5px;\n  flex-wrap: wrap-reverse;\n  width: 100%;\n  max-width: 875px;\n}\n\n  .mat-paginator-outer-container .mat-paginator-icon {\n  width: 40px;\n}\n\n  body {\n  background: #656972;\n}\n\n  .mat-form-field-underline {\n  display: none;\n}\n\n  .mat-autocomplete-panel {\n  border-radius: 10px !important;\n  background: #F4F6FD;\n  border: 3px solid #E6EBFE !important;\n}\n\n  .search {\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto 126px;\n}\n\n  .search .example-form {\n  margin: 0 5px;\n}\n\n  .search .search-form-field {\n  width: 100%;\n}\n\n  .search .search-form-field .mat-form-field-flex {\n  border-radius: 10px !important;\n  background: #F4F6FD !important;\n  border: 3px solid #E6EBFE !important;\n  padding: 9px 18px 15px 18px;\n}\n\n  .search .search-form-field .mat-form-field-flex input {\n  font-weight: 700;\n  font-size: 24px;\n  color: #1F2126;\n}\n\n  .search .search-form-field .mat-form-field-flex input::-moz-placeholder {\n  color: #1F2126;\n}\n\n  .search .search-form-field .mat-form-field-flex input::placeholder {\n  color: #1F2126;\n}\n\n  .search input {\n  font-weight: 700;\n}\n\n  mat-card {\n  height: 100%;\n  margin: 0 auto;\n  padding: 65px 0 0 0 !important;\n  background-color: #FBFCFF !important;\n  max-width: 1400px;\n  width: 100%;\n}\n\n  mat-card .game-info-video-block:last-of-type {\n  border: unset !important;\n}\n\n  mat-card .game-info-video-block:first-of-type {\n  margin-top: unset !important;\n}\n\n  mat-card .game-info-video-block-wrapper {\n  margin-top: 50px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block {\n  width: 100%;\n  max-width: 875px;\n  font-size: 24px;\n  border-bottom: 2px solid #F5F3F3;\n  margin: 57px auto 0 auto;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n  display: flex;\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-size: 24px;\n  letter-spacing: 0.05em;\n  color: #000000;\n  margin-bottom: 33px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link {\n  margin-right: 66px;\n  font-weight: 700;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-date {\n  font-weight: 400;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .game-name {\n  font-weight: 400;\n  line-height: 36px;\n  margin-bottom: 28px;\n}\n\n  mat-card .game-info-video-block-wrapper .game-info-video-block .video-frame {\n  width: 100%;\n  height: 412px;\n  margin-bottom: 94px;\n}\n\n  mat-card .header {\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 22px;\n  letter-spacing: 0.05em;\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n  text-transform: uppercase;\n  margin: 0 auto 100px;\n  max-width: 875px;\n}\n\n  mat-card .header .header-wrapper {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 0 5px;\n}\n\n  mat-card .header .header-wrapper .right-block {\n  display: flex;\n  justify-content: flex-end;\n}\n\n  mat-card .header .header-wrapper .right-block .title {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: #000000;\n  cursor: pointer;\n  display: flex;\n  margin-right: 10px;\n}\n\n  mat-card .header .header-wrapper .right-block .title p.active {\n  z-index: 2;\n  position: relative;\n}\n\n  mat-card .header .header-wrapper .right-block .title p.active::before {\n  transform: translateX(7px) translateY(7px);\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .header .header-wrapper .left-block {\n  cursor: pointer;\n}\n\n  mat-card .icon {\n  margin-left: 37px;\n  font-family: \"PT Mono\", sans-serif !important;\n}\n\n  mat-card mat-card-title,   mat-card mat-card-subtitle {\n  text-align: center;\n}\n\n  mat-card mat-card-title {\n  font-weight: 700 !important;\n  margin: -4px 5px 16px 5px;\n}\n\n  mat-card mat-card-title .card-title-wrapper {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  max-width: 875px;\n  margin: 0 auto;\n  font-size: 42px;\n  line-height: 47px;\n}\n\n  mat-card mat-card-title .card-title-wrapper.wrapper-shift {\n  justify-content: center;\n}\n\n  mat-card mat-card-title .card-title-wrapper .card-title-var {\n  color: #b32a20;\n  margin-left: 20px;\n}\n\n  mat-card mat-card-subtitle {\n  width: 100%;\n  margin: 24px 5px 77px 5px !important;\n}\n\n  mat-card mat-card-subtitle .subtitle-wrapper {\n  display: flex;\n  justify-content: flex-start;\n  max-width: 875px;\n  margin: 16px auto 0;\n  width: 100%;\n  font-family: \"PT Sans Caption\", sans-serif !important;\n  font-weight: 400 !important;\n  font-size: 24px !important;\n  color: #1F2126 !important;\n}\n\n  mat-card mat-card-subtitle .subtitle-wrapper.wrapper-shift {\n  justify-content: center;\n}\n\n  mat-card mat-card-content {\n  margin: 0 5px 16px 5px;\n}\n\n  mat-card .footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  background: #F3F6F9;\n  border-top: 2px solid #F5F3F3;\n}\n\n  mat-card .footer .footer-wrapper {\n  max-width: 875px;\n  margin: 0 5px 100px 5px;\n}\n\n  mat-card .footer .footer-wrapper .block:first-child {\n  margin-top: 101px;\n}\n\n  mat-card .footer .footer-wrapper .block {\n  margin-bottom: 77px;\n}\n\n  mat-card .footer .footer-wrapper .block .title p {\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  letter-spacing: 0.05em;\n  color: #000000;\n  margin-bottom: 27px;\n  text-transform: uppercase;\n  z-index: 2;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n  mat-card .footer .footer-wrapper .block .title p::before {\n  content: \"\";\n  position: absolute;\n  transform: translateX(6px) translateY(3px);\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  mat-card .footer .footer-wrapper .block .text {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 30px;\n  color: #000000;\n}\n\n  mat-card .footer .footer-wrapper .block .email-me {\n  font-size: 20px;\n  margin-top: 24px;\n}\n\n  mat-card .footer .footer-wrapper .block .email-me .email-me-link {\n  color: #131314;\n  -webkit-text-decoration-line: unset;\n          text-decoration-line: unset;\n  z-index: 2;\n  position: relative;\n}\n\n  mat-card .footer .footer-wrapper .block .email-me .email-me-link::before {\n  content: \"\";\n  position: absolute;\n  transform: translateX(6px) translateY(3px);\n  top: 5px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #65B7F9;\n  z-index: -1;\n}\n\n  mat-card .footer .footer-wrapper .block .crypt-info {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n  margin-top: 24px;\n}\n\n  mat-card .footer .footer-wrapper .block .crypt-info .item {\n  cursor: pointer;\n  margin-right: 3px;\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 22px;\n  color: #000000;\n}\n\n  mat-card .footer .footer-wrapper .block:nth-last-of-type(1) {\n  margin-bottom: 0;\n}\n\n  mat-card .footer .footer-wrapper .ps {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  color: #000000;\n  margin-top: 76px;\n}\n\n  .table-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0 auto 42px;\n}\n\n  .table-wrapper table {\n  box-shadow: none !important;\n  padding-left: 18px;\n  width: 100%;\n  max-width: 875px;\n  margin: 0 auto 120px;\n  background-color: #FBFCFF !important;\n  font-family: \"PT Sans Caption\", sans-serif !important;\n  font-style: normal !important;\n  font-weight: 400 !important;\n  font-size: 30px !important;\n}\n\n  .table-wrapper table thead {\n  height: 35px;\n}\n\n  .table-wrapper table thead tr:first-child th {\n  border-bottom: none;\n}\n\n  .table-wrapper table tbody tr.cdk-row td.cdk-cell {\n  padding-top: 5px !important;\n}\n\n  .table-wrapper table tbody tr {\n  padding-top: 28px !important;\n  border-bottom: none !important;\n}\n\n  .table-wrapper table tbody tr td {\n  padding: 24px 5px 5px 5px !important;\n  font-family: \"PT Sans Caption\", sans-serif !important;\n  font-style: normal !important;\n  font-size: 30px !important;\n  line-height: 39px !important;\n  border-bottom: none !important;\n}\n\n  .table-wrapper table tbody tr td:first-child {\n  padding-left: 5px !important;\n  padding-right: 30px !important;\n  text-align: left;\n  min-width: 20px !important;\n  font-weight: 400;\n}\n\n  .table-wrapper table tbody tr td:nth-child(2) {\n  font-weight: 700;\n  color: #1F2126;\n}\n\n  .table-wrapper table tbody tr td:last-child {\n  text-align: right;\n  font-weight: 700;\n}\n\n  .table-wrapper table tbody tr:hover {\n  cursor: pointer;\n  background: #e5e5e5;\n}\n\n  th {\n  text-align: left;\n}\n\n  .green {\n  color: #11B479;\n}\n\n  .red {\n  color: #FD0303;\n}\n\n  .button-row {\n  display: flex;\n  max-width: 875px;\n  border-bottom: 3px solid #F5F3F3;\n  margin: 0 auto;\n}\n\n  .button-row button {\n  padding: 18px 18px 18px 12px !important;\n  margin-right: auto;\n}\n\n  .button-row button:last-child {\n  margin-right: 23px;\n}\n\n  .button-row .mat-button-wrapper {\n  font-family: \"PT Mono\", sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 32px;\n}\n\n  .button-row .active {\n  z-index: 2;\n}\n\n  .button-row .active .mat-button-wrapper {\n  font-weight: bold;\n}\n\n  .button-row .active::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n}\n\n  .button-row .user {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  font-family: \"PT Mono\", sans-serif !important;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 32px;\n  color: #1F2126;\n  margin-bottom: 17px;\n}\n\n  .name-row {\n  width: 80%;\n  display: flex;\n  margin: 0 auto 30px auto;\n  height: 50px;\n  flex-direction: column;\n}\n\n  .name-row .name-wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n\n  .see-more {\n  font-family: \"PT Sans Caption\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 31px;\n  color: #1F2126;\n  cursor: pointer;\n  z-index: 2;\n  position: relative;\n  max-width: 875px;\n  margin: 0 auto 120px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n  .see-more div {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: relative;\n}\n\n  .see-more div::before {\n  transform: translateX(6px) translateY(3px);\n  content: \"\";\n  position: absolute;\n  top: 8px;\n  left: 2px;\n  bottom: 0;\n  right: 0;\n  background: #FFC83C;\n  z-index: -1;\n  max-width: 110px;\n}\n\n@media only screen and (max-width: 414px) {\n      .m-b-90 {\n    margin-bottom: 40px !important;\n  }\n      mat-card .mat-paginator-outer-container {\n    font-size: 20px;\n  }\n      mat-card .mat-paginator-outer-container .mat-paginator-icon {\n    width: 28px;\n  }\n      mat-card .header {\n    font-size: 14px;\n    line-height: 16px;\n    margin-bottom: 50px;\n  }\n      mat-card .header .right-block .title {\n    font-size: 14px !important;\n  }\n      mat-card .card-title-wrapper {\n    font-size: 28px !important;\n    line-height: 32px !important;\n  }\n      mat-card .search {\n    margin: 0 auto 62px;\n  }\n      mat-card .search .mat-form-field-flex {\n    padding: 0 5px !important;\n  }\n      mat-card .search .mat-form-field-flex input {\n    font-size: 16px !important;\n  }\n      mat-card .button-row button {\n    padding: 5px !important;\n  }\n      mat-card .button-row button:last-child {\n    margin-right: 0;\n  }\n      mat-card .button-row .mat-button-wrapper {\n    font-size: 14px;\n  }\n      mat-card .button-row .user {\n    font-size: 20px;\n  }\n      mat-card .table-wrapper {\n    margin: 0 auto 24px;\n  }\n      mat-card .table-wrapper table {\n    padding-left: 5px;\n    margin: 0 auto 60px;\n  }\n      mat-card .table-wrapper table tbody tr {\n    padding-top: 18px !important;\n  }\n      mat-card .table-wrapper table tbody tr td {\n    padding: 12px 5px 5px 5px !important;\n    font-size: 18px !important;\n    line-height: 24px !important;\n  }\n      mat-card .footer .footer-wrapper {\n    margin: 0 5px 50px 5px;\n  }\n      mat-card .footer .footer-wrapper .block:first-child {\n    margin-top: 50px;\n  }\n      mat-card .footer .footer-wrapper .block {\n    margin-bottom: 38px;\n  }\n      mat-card .footer .footer-wrapper .block .title p {\n    font-size: 16px;\n    margin-bottom: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .text {\n    font-size: 14px;\n    line-height: 20px;\n  }\n      mat-card .footer .footer-wrapper .block .email-me {\n    font-size: 14px;\n    margin-top: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .crypt-info {\n    margin-top: 18px;\n  }\n      mat-card .footer .footer-wrapper .block .crypt-info .item {\n    font-size: 16px;\n    line-height: 20px;\n  }\n      mat-card .game-info-video-block-wrapper {\n    margin-top: 26px;\n    width: 99%;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block {\n    font-size: 16px;\n    margin: 30px auto 0 auto;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n    font-size: 16px;\n    line-height: 18px;\n    margin-bottom: 28px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .title-row .title-link {\n    margin-right: 48px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .game-name {\n    line-height: 28px;\n    margin-bottom: 18px;\n  }\n      mat-card .game-info-video-block-wrapper .game-info-video-block .video-frame {\n    width: 100%;\n    margin-bottom: 60px;\n  }\n      mat-card .see-more {\n    font-size: 18px;\n    line-height: 26px;\n    margin: 0 5px 60px;\n  }\n      .card-title-wrapper {\n    flex-wrap: wrap !important;\n    justify-content: space-evenly !important;\n  }\n      .subtitle-wrapper {\n    justify-content: center !important;\n  }\n      .card-title-var {\n    margin-left: 0 !important;\n  }\n      .header-wrapper {\n    flex-wrap: wrap;\n    justify-content: center !important;\n    line-height: 26px;\n  }\n      .mat-card-title {\n    line-height: 26px;\n  }\n      mat-card {\n    width: 96% !important;\n  }\n}\n\n  body.dark .mat-autocomplete-panel {\n  background: #131314 !important;\n  border: 3px solid #4B4D56 !important;\n}\n\n  body.dark .mat-autocomplete-panel .mat-option-text {\n  color: white !important;\n}\n\n  body.dark mat-card {\n  color: white;\n  background: #131314 !important;\n}\n\n  body.dark mat-card .border-like-row-wrapper .border-like-row {\n  background-color: #4B4D56 !important;\n}\n\n  body.dark mat-card .mat-paginator-outer-container {\n  color: white;\n  background-color: #131314;\n}\n\n  body.dark mat-card .mat-paginator-outer-container span {\n  color: white;\n}\n\n  body.dark mat-card .search {\n  color: white;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex {\n  background: #131314 !important;\n  border: 3px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input {\n  color: white !important;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input::-moz-placeholder {\n  color: #4B4D56;\n}\n\n  body.dark mat-card .search .search-form-field .mat-form-field-flex input::placeholder {\n  color: #4B4D56;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block {\n  border-bottom: 2px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block .title-row {\n  color: white !important;\n}\n\n  body.dark mat-card .game-info-video-block-wrapper .game-info-video-block:last-of-type {\n  border-bottom: unset !important;\n}\n\n  body.dark mat-card .header .header-wrapper .title {\n  color: white;\n}\n\n  body.dark mat-card mat-card-title .card-title-wrapper .card-title-var {\n  color: #b32a20;\n}\n\n  body.dark mat-card mat-card-subtitle .subtitle-wrapper {\n  color: white !important;\n}\n\n  body.dark mat-card .footer {\n  background: #131314 !important;\n  border-top: 2px solid #4B4D56 !important;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .title p {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .title p::before {\n  content: \"\";\n  position: absolute;\n  background: #131314;\n  z-index: -1;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .text {\n  color: #B2B8CF !important;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .email-me .email-me-link {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .block .email-me .email-me-link::before {\n  content: \"\";\n  position: absolute;\n  transform: translateX(6px) translateY(3px);\n  top: 5px;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: unset;\n  z-index: -1;\n}\n\n  body.dark mat-card .footer .footer-wrapper .crypt-info .item {\n  color: white;\n}\n\n  body.dark mat-card .footer .footer-wrapper .ps {\n  color: white;\n}\n\n  body.dark mat-card .table-wrapper table {\n  background-color: #131314 !important;\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr td:first-child {\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr td:nth-child(2) {\n  color: white !important;\n}\n\n  body.dark mat-card .table-wrapper table tbody tr:hover {\n  background: #4B4D56;\n}\n\n  body.dark mat-card .green {\n  color: #11B479;\n}\n\n  body.dark mat-card .red {\n  color: #FD0303;\n}\n\n  body.dark mat-card .button-row {\n  border-bottom: 3px solid #4B4D56;\n}\n\n  body.dark mat-card .button-row .active::before {\n  background: #FFC83C;\n}\n\n  body.dark mat-card .button-row .user {\n  color: white !important;\n}\n\n  body.dark mat-card .see-more {\n  color: white !important;\n}\n\n  body.dark mat-card .see-more div::before {\n  background: #FFC83C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYnkuc3UvSWRlYVByb2plY3RzL3Bva2VyLWh1c3RsZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUdFLGtDQUFBO0FDUkY7O0FEWUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7QUNURjs7QURjRTtFQUNFLDhCQUFBO0FDWEo7O0FEYUU7RUFDRSw4QkFBQTtBQ1hKOztBRGFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRGNFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDWko7O0FEY0k7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkEzQ0U7RUE0Q0YsY0FBQTtBQ1pOOztBRGlCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDZko7O0FEZ0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFqRUU7QUNrRFI7O0FEa0JJO0VBQ0UsV0FBQTtBQ2hCTjs7QURvQkU7RUFDRSxtQkFBQTtBQ2xCSjs7QURxQkU7RUFDRSxhQUFBO0FDbkJKOztBRHNCRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQ3BCSjs7QUQyQkU7RUFDRSxXQUFBO0VBQ0EsZ0JBN0ZJO0VBOEZKLG9CQUFBO0FDekJKOztBRDJCSTtFQUNFLGFBQUE7QUN6Qk47O0FENEJJO0VBQ0UsV0FBQTtBQzFCTjs7QUQ0Qk07RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQzFCUjs7QUQ0QlE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFHQSxjQUFBO0FDNUJWOztBRDhCUTtFQUNFLGNBQUE7QUM1QlY7O0FEMkJRO0VBQ0UsY0FBQTtBQzVCVjs7QUQrQ0k7RUFDRSxnQkFBQTtBQzdDTjs7QURzREU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQkFBQTtFQUVBLFdBQUE7QUN0REo7O0FEd0RJO0VBQ0Usd0JBQUE7QUN0RE47O0FEeURJO0VBQ0UsNEJBQUE7QUN2RE47O0FEMERJO0VBQ0UsZ0JBQUE7QUN4RE47O0FEMERNO0VBRUUsV0FBQTtFQUNBLGdCQTFLQTtFQTJLQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtBQ3pEUjs7QUQyRFE7RUFDRSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxlQUFBO0VBRUEsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUMxRFY7O0FENERVO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUMxRFo7O0FENkRVO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDM0RaOztBRDhEVTtFQUNFLGdCQUFBO0FDNURaOztBRGdFUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQzlEVjs7QURpRVE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDL0RWOztBRHNFSTtFQUVFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBR0EseUJBQUE7RUFDQSxvQkFBQTtFQUVBLGdCQWhQRTtBQ3dLUjs7QUQwRU07RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ3hFUjs7QUQwRVE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUN4RVY7O0FEeUVVO0VBRUUsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ3hFWjs7QUQwRVk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUN4RWQ7O0FEMkVZO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDekVkOztBRDZFUTtFQUNFLGVBQUE7QUMzRVY7O0FEa0ZJO0VBQ0UsaUJBQUE7RUFDQSw2Q0FBQTtBQ2hGTjs7QURtRkk7RUFDRSxrQkFBQTtBQ2pGTjs7QURvRkk7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FDbEZOOztBRG9GTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFuVEE7RUFvVEEsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2xGUjs7QURxRlE7RUFDRSx1QkFBQTtBQ25GVjs7QURzRlE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNwRlY7O0FEMkZJO0VBSUUsV0FBQTtFQUNBLG9DQUFBO0FDNUZOOztBRDhGTTtFQUVFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQWpWQTtFQW1WQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQzlGUjs7QURnR1E7RUFDRSx1QkFBQTtBQzlGVjs7QURtR0k7RUFDRSxzQkFBQTtBQ2pHTjs7QURvR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7QUNuR047O0FEcUdNO0VBQ0UsZ0JBaFhBO0VBaVhBLHVCQUFBO0FDbkdSOztBRHFHUTtFQUNFLGlCQUFBO0FDbkdWOztBRHNHUTtFQUNFLG1CQUFBO0FDcEdWOztBRHVHWTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDdEdkOztBRHlHWTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3ZHZDs7QUQyR1U7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDekdaOztBRDJHVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ3pHWjs7QUQwR1k7RUFDRSxjQXBhTjtFQXFhTSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDeEdkOztBRDBHWTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ3hHZDs7QUQyR1U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUN6R1o7O0FEMkdZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ3pHZDs7QUQ4R1E7RUFDRSxnQkFBQTtBQzVHVjs7QURpSFE7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxjQUFBO0VBQ0EsZ0JBQUE7QUNqSFY7O0FEd0hFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDdEhKOztBRHdISTtFQUNFLDJCQUFBO0VBSUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBemVFO0VBMGVGLG9CQUFBO0VBRUEsb0NBQUE7RUFFQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQzNITjs7QUQ4SE07RUFDRSxZQUFBO0FDNUhSOztBRCtIVTtFQUNFLG1CQUFBO0FDN0haOztBRHFJVTtFQUNFLDJCQUFBO0FDbklaOztBRHVJUTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNySVY7O0FEdUlVO0VBQ0Usb0NBQUE7RUFDQSxxREFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0FDcklaOztBRHdJVTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBRUEsZ0JBQUE7QUN2SVo7O0FEMElVO0VBQ0UsZ0JBQUE7RUFHQSxjQUFBO0FDMUlaOztBRDZJVTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUMzSVo7O0FEaUpRO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDL0lWOztBRHNKRTtFQUNFLGdCQUFBO0FDcEpKOztBRHVKRTtFQUNFLGNBN2pCSTtBQ3dhUjs7QUR3SkU7RUFDRSxjQWhrQkU7QUMwYU47O0FEeUpFO0VBQ0UsYUFBQTtFQUNBLGdCQWxrQkk7RUFta0JKLGdDQUFBO0VBQ0EsY0FBQTtBQ3ZKSjs7QUR5Skk7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0FDdkpOOztBRDBKSTtFQUNFLGtCQUFBO0FDeEpOOztBRDJKSTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUN6Sk47O0FEOEpJO0VBQ0UsVUFBQTtBQzVKTjs7QUQ4Sk07RUFDRSxpQkFBQTtBQzVKUjs7QURnS0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDOUpOOztBRGlLSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0FDaEtOOztBRHdLRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUN0S0o7O0FEd0tJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDdEtOOztBRDBLRTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBcHBCSTtFQXFwQkosb0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUN4S0o7O0FEMEtJO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBRUEsa0JBQUE7QUN6S047O0FENktJO0VBQ0UsMENBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUMzS047O0FEMExFO0VBRUk7SUFDRSw4QkFBQTtFQ3pMTjtFRDRMTTtJQUNFLGVBQUE7RUMxTFI7RUQyTFE7SUFDRSxXQUFBO0VDekxWO0VENExNO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUMxTFI7RUQ0TFU7SUFDRSwwQkFBQTtFQzFMWjtFRCtMTTtJQUNFLDBCQUFBO0lBQ0EsNEJBQUE7RUM3TFI7RURnTU07SUFDRSxtQkFBQTtFQzlMUjtFRGdNUTtJQUNFLHlCQUFBO0VDOUxWO0VEK0xVO0lBQ0UsMEJBQUE7RUM3TFo7RURtTVE7SUFDRSx1QkFBQTtFQ2pNVjtFRG1NUTtJQUNFLGVBQUE7RUNqTVY7RURtTVE7SUFDRSxlQUFBO0VDak1WO0VEb01RO0lBQ0UsZUFBQTtFQ2xNVjtFRHNNTTtJQUNFLG1CQUFBO0VDcE1SO0VEcU1RO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQ25NVjtFRHNNWTtJQUNFLDRCQUFBO0VDcE1kO0VEcU1jO0lBQ0Usb0NBQUE7SUFDQSwwQkFBQTtJQUNBLDRCQUFBO0VDbk1oQjtFRDBNUTtJQUNFLHNCQUFBO0VDeE1WO0VEeU1VO0lBQ0UsZ0JBQUE7RUN2TVo7RUR5TVU7SUFDRSxtQkFBQTtFQ3ZNWjtFRHlNYztJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQ3ZNaEI7RUQyTVk7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUN6TWQ7RUQyTVk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUN6TWQ7RUQyTVk7SUFDRSxnQkFBQTtFQ3pNZDtFRDBNYztJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ3hNaEI7RUQrTU07SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUM3TVI7RUQ4TVE7SUFDRSxlQUFBO0lBQ0Esd0JBQUE7RUM1TVY7RUQ2TVU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFQzNNWjtFRDZNWTtJQUNFLGtCQUFBO0VDM01kO0VEK01VO0lBQ0UsaUJBQUE7SUFDQSxtQkFBQTtFQzdNWjtFRGdOVTtJQUNFLFdBQUE7SUFFQSxtQkFBQTtFQy9NWjtFRG9OTTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VDbE5SO0VEdU5JO0lBQ0UsMEJBQUE7SUFDQSx3Q0FBQTtFQ3JOTjtFRHdOSTtJQUNFLGtDQUFBO0VDdE5OO0VEME5JO0lBQ0UseUJBQUE7RUN4Tk47RUQwTkk7SUFDRSxlQUFBO0lBQ0Esa0NBQUE7SUFDQSxpQkFBQTtFQ3hOTjtFRDBOSTtJQUNFLGlCQUFBO0VDeE5OO0VEMk5JO0lBQ0UscUJBQUE7RUN6Tk47QUFDRjs7QUQ4TkU7RUFDRSw4QkFBQTtFQUNBLG9DQUFBO0FDNU5KOztBRDZOSTtFQUNFLHVCQUFBO0FDM05OOztBRCtORTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQzdOSjs7QURnT007RUFDRSxvQ0FBQTtBQzlOUjs7QURrT0k7RUFDRSxZQUFBO0VBQ0EseUJBMzNCRTtBQzJwQlI7O0FEaU9NO0VBQ0UsWUFBQTtBQy9OUjs7QURzT0k7RUFDRSxZQUFBO0FDcE9OOztBRHNPUTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7QUNwT1Y7O0FEc09VO0VBQ0UsdUJBQUE7QUNwT1o7O0FEc09VO0VBQ0UsY0FBQTtBQ3BPWjs7QURtT1U7RUFDRSxjQUFBO0FDcE9aOztBRDRPTTtFQUNFLDJDQUFBO0FDMU9SOztBRDRPUTtFQUNFLHVCQUFBO0FDMU9WOztBRDZPTTtFQUNFLCtCQUFBO0FDM09SOztBRG1QUTtFQUNFLFlBQUE7QUNqUFY7O0FEeVBRO0VBQ0UsY0FBQTtBQ3ZQVjs7QUQ2UE07RUFDRSx1QkFBQTtBQzNQUjs7QUQrUEk7RUFDRSw4QkFBQTtFQUNBLHdDQUFBO0FDN1BOOztBRGtRWTtFQUNFLFlBQUE7QUNoUWQ7O0FEa1FZO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBejhCTjtFQTA4Qk0sV0FBQTtBQ2hRZDs7QURvUVU7RUFDRSx5QkFBQTtBQ2xRWjs7QURxUVk7RUFDRSxZQUFBO0FDblFkOztBRHFRWTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ25RZDs7QUR5UVU7RUFDRSxZQUFBO0FDdlFaOztBRDJRUTtFQUNFLFlBQUE7QUN6UVY7O0FEa1JNO0VBQ0Usb0NBQUE7RUFDQSx1QkFBQTtBQ2hSUjs7QURxUlk7RUFDRSx1QkFBQTtBQ25SZDs7QURxUlk7RUFDRSx1QkFBQTtBQ25SZDs7QUR1UlU7RUFDRSxtQkFBQTtBQ3JSWjs7QUQyUkk7RUFDRSxjQTdnQ0U7QUNvdkJSOztBRDRSSTtFQUNFLGNBaGhDQTtBQ3N2Qk47O0FENlJJO0VBQ0UsZ0NBQUE7QUMzUk47O0FEOFJNO0VBRUUsbUJBQUE7QUM3UlI7O0FEZ1NNO0VBRUUsdUJBQUE7QUMvUlI7O0FEb1NJO0VBQ0UsdUJBQUE7QUNsU047O0FEb1NNO0VBRUUsbUJBQUE7QUNuU1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkZ3JlZW46ICMxMUI0Nzk7XG4kcmVkOiAjRkQwMzAzO1xuJGdyYXk6ICNFM0UzRTM7XG4kYmxhY2s6ICMxMzEzMTQ7XG4kd2lkdGg6IDg3NXB4O1xuLy8kd2lkdGg6IDYwMHB4O1xuXG4qIHtcbiAgLy9mb250LXNpemU6IDE2cHg7XG4gIC8vbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZjtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG5cbjo6bmctZGVlcCB7XG4gIC5tLWItNzV7XG4gICAgbWFyZ2luLWJvdHRvbTogNzVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tYi05MHtcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4IWltcG9ydGFudDtcbiAgfVxuICAubS10b3AtYm90dG9tLTMwIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cblxuICAuYm9yZGVyLWxpa2Utcm93LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuYm9yZGVyLWxpa2Utcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUYzRjM7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogJHdpZHRoO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1vdXRlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZDRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICAvL3BhZGRpbmc6IDAgOHB4O1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICB9XG5cbiAgICAubWF0LXBhZ2luYXRvci1pY29uIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgIH1cbiAgfVxuXG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQ6ICM2NTY5NzI7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGNkZEO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNFNkVCRkUgIWltcG9ydGFudDtcblxuICAgIC5tYXQtb3B0aW9uLXRleHQge1xuICAgICAgLy9mb250LXNpemU6IDMycHg7XG4gICAgfVxuICB9XG5cbiAgLnNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTI2cHg7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAxMjZweDtcbiAgICAuZXhhbXBsZS1mb3Jte1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWZvcm0tZmllbGQge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjRGNkZEICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNFNkVCRkUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogOXB4IDE4cHggMTVweCAxOHB4O1xuICAgICAgICAvL3BhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgLy9saW5lLWhlaWdodDogNDBweDtcblxuICAgICAgICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OjpwbGFjZWhvbGRlcntcbiAgICAgICAgICBjb2xvcjogIzFGMjEyNjtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgICAgLy8gIG1hdC1sYWJlbHtcbiAgICAgIC8vICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgIC8vICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgLy8gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgLy8gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAvLyAgICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgICAgLy8gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAvL1xuICAgICAgLy8gIH1cbiAgICAgIC8vfVxuXG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIC8vZm9udC1zaXplOiAyNHB4O1xuICAgIH1cblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcblxuICAgIH1cbiAgfVxuXG4gIG1hdC1jYXJkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogNjVweCAwIDAgMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZDRkYgIWltcG9ydGFudDtcblxuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIC8vbWF4LXdpZHRoOiAxMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrOmxhc3Qtb2YtdHlwZSB7XG4gICAgICBib3JkZXI6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdhbWUtaW5mby12aWRlby1ibG9jazpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sge1xuICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0Y1RjNGMztcbiAgICAgICAgbWFyZ2luOiA1N3B4IGF1dG8gMCBhdXRvO1xuICAgICAgICAvL21hcmdpbi10b3A6IDU3cHg7XG4gICAgICAgIC50aXRsZS1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIENhcHRpb24nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzNweDtcblxuICAgICAgICAgIC50aXRsZS1saW5rIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZS1saW5rOjpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDdweCkgdHJhbnNsYXRlWSg3cHgpO1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUtZGF0ZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5nYW1lLW5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aWRlby1mcmFtZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA0MTJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA5NHB4O1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5oZWFkZXIge1xuICAgICAgLy9mb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyYXk7XG4gICAgICAvL3BhZGRpbmc6IDE5cHggMCAxM3B4IDM0cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMTAwcHg7XG4gICAgICAvL21hcmdpbjogMCBhdXRvIDcwcHg7XG4gICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcblxuICAgICAgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcblxuICAgICAgICAucmlnaHQtYmxvY2t7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgICAgICAgICAgcC5hY3RpdmUge1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHAuYWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoN3B4KSB0cmFuc2xhdGVZKDdweCk7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmxlZnQtYmxvY2t7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzN3B4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtdGl0bGUsIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICBtYXQtY2FyZC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IC00cHggNXB4IDE2cHggNXB4O1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiAxNnB4IWltcG9ydGFudDtcbiAgICAgIC5jYXJkLXRpdGxlLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDQycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xuXG5cbiAgICAgICAgJi53cmFwcGVyLXNoaWZ0IHtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkLXRpdGxlLXZhciB7XG4gICAgICAgICAgY29sb3I6ICNiMzJhMjA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgLy9mb250LXNpemU6IDIycHggIWltcG9ydGFudDtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtc3VidGl0bGUge1xuXG4gICAgICAvL21hcmdpbi10b3A6IDE2cHghaW1wb3J0YW50O1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiA3N3B4IWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAyNHB4IDVweCA3N3B4IDVweCAhaW1wb3J0YW50O1xuXG4gICAgICAuc3VidGl0bGUtd3JhcHBlciB7XG4gICAgICAgIC8vbWFyZ2luOiAwIDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXgtd2lkdGg6ICR3aWR0aDtcbiAgICAgICAgLy9tYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG8gMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBDYXB0aW9uJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzFGMjEyNiAhaW1wb3J0YW50O1xuXG4gICAgICAgICYud3JhcHBlci1zaGlmdCB7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMCA1cHggMTZweCA1cHg7XG4gICAgfVxuXG4gICAgLmZvb3RlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogI0YzRjZGOTtcbiAgICAgIC8vcGFkZGluZzogNTFweCA1MXB4IDIwcHggNDZweDtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjRjVGM0YzO1xuICAgICAgLy9iYWNrZ3JvdW5kOiAjNjU2OTcyO1xuICAgICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgICAgIG1hcmdpbjogMCA1cHggMTAwcHggNXB4O1xuXG4gICAgICAgIC5ibG9jazpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYmxvY2sge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc3cHg7XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBDYXB0aW9uJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZW1haWwtbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICAgICAgLmVtYWlsLW1lLWxpbmt7XG4gICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bnNldDtcbiAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVtYWlsLW1lLWxpbms6OmJlZm9yZXtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjVCN0Y5O1xuICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNyeXB0LWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuXG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgTW9ubycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJsb2NrOm50aC1sYXN0LW9mLXR5cGUoMSkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLnBzIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1BUIE1vbm8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNzZweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgLnRhYmxlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0byA0MnB4O1xuXG4gICAgdGFibGUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgLy9wYWRkaW5nOiAwIDVweCAwIDE4cHg7XG4gICAgICAvL21hcmdpbjogMCA1cHggMCAxOHB4O1xuICAgICAgLy9tYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmctbGVmdDogMThweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgICBtYXJnaW46IDAgYXV0byAxMjBweDtcbiAgICAgIC8vbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQ0ZGICFpbXBvcnRhbnQ7XG5cbiAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBDYXB0aW9uJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xuICAgICAgLy9saW5lLWhlaWdodDogMzlweCFpbXBvcnRhbnQ7XG5cbiAgICAgIHRoZWFkIHtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuXG4gICAgICAgIHRyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICB0aCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0Ym9keSB7XG4gICAgICAgIHRyLmNkay1yb3cge1xuICAgICAgICAgIC8vcGFkZGluZy10b3A6IDI4cHghaW1wb3J0YW50O1xuICAgICAgICAgIHRkLmNkay1jZWxsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0ciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDI4cHghaW1wb3J0YW50O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAvL21hcmdpbi1ib3R0b206IDI4cHghaW1wb3J0YW50O1xuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI0cHggNXB4IDVweCA1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUFQgU2FucyBDYXB0aW9uJywgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHghaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHghaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRkOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAvL2hlaWdodDogMzlweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgLy9mb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgY29sb3I6ICMxRjIxMjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbiAgICAgICAgICAgIC8vcGFkZGluZy1yaWdodDogNTFweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cblxuICAuZ3JlZW4ge1xuICAgIGNvbG9yOiAkZ3JlZW47XG4gIH1cblxuICAucmVkIHtcbiAgICBjb2xvcjogJHJlZDtcbiAgfVxuXG4gIC5idXR0b24tcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogJHdpZHRoO1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRjVGM0YzO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8vbWFyZ2luLXJpZ2h0OiAyM3B4O1xuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMThweCAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xuICAgIH1cblxuICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICdQVCBNb25vJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAvL2xpbmUtaGVpZ2h0OiAzNnB4O1xuXG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAudXNlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBmb250LWZhbWlseTogJ1BUIE1vbm8nLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgLy9saW5lLWhlaWdodDogMzZweDtcbiAgICAgIGNvbG9yOiAjMUYyMTI2O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTdweDtcblxuICAgICAgLnVzZXItdG90YWwge1xuICAgICAgICAvL2ZvbnQtc2l6ZTogMzBweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hbWUtcm93IHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLm5hbWUtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgfVxuXG4gIC5zZWUtbW9yZSB7XG4gICAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIENhcHRpb24nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICBjb2xvcjogIzFGMjEyNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAkd2lkdGg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMTIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC8vbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZGl2IHtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIC8vbWF4LXdpZHRoOiAxMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIH1cblxuICAgIGRpdjo6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpIHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIGxlZnQ6IDJweDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgbWF4LXdpZHRoOiAxMTBweDtcbiAgICB9XG4gIH1cblxuICAvLy5zZWUtbW9yZTo6YmVmb3JlIHtcbiAgLy8gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICAvLyAgICBjb250ZW50OiBcIlwiO1xuICAvLyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8vICAgIHRvcDogOHB4O1xuICAvLyAgICBsZWZ0OiAycHg7XG4gIC8vICAgIGJvdHRvbTogMDtcbiAgLy8gICAgcmlnaHQ6IDA7XG4gIC8vICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gIC8vICAgIHotaW5kZXg6IC0xO1xuICAvL31cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICAgIDo6bmctZGVlcCB7XG4gICAgICAubS1iLTkwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweCFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBtYXQtY2FyZCB7XG4gICAgICAgIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lcntcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgLm1hdC1wYWdpbmF0b3ItaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcntcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAucmlnaHQtYmxvY2t7XG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQtdGl0bGUtd3JhcHBlcntcbiAgICAgICAgICBmb250LXNpemU6IDI4cHghaW1wb3J0YW50O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2h7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjJweDtcblxuICAgICAgICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLXJvd3tcbiAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgLy9saW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0byAyNHB4O1xuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gNjBweDtcbiAgICAgICAgICAgIC8vZm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxOHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlcntcbiAgICAgICAgICAuZm9vdGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDVweCA1MHB4IDVweDtcbiAgICAgICAgICAgIC5ibG9jazpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvY2t7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gICAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmVtYWlsLW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY3J5cHQtaW5mbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThweDtcbiAgICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXJ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcbiAgICAgICAgICB3aWR0aDogOTklO1xuICAgICAgICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICAgICAgICAgICAgLnRpdGxlLXJvdyB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG5cbiAgICAgICAgICAgICAgLnRpdGxlLWxpbmsge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDhweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ2FtZS1uYW1lIHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52aWRlby1mcmFtZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAvL2hlaWdodDogMzUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNlZS1tb3JlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDVweCA2MHB4O1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuc3VidGl0bGUtd3JhcHBlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG5cbiAgICAgIH1cblxuICAgICAgLmNhcmQtdGl0bGUtdmFyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXItd3JhcHBlcntcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgfVxuICAgICAgLm1hdC1jYXJkLXRpdGxle1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIH1cblxuICAgICAgbWF0LWNhcmQge1xuICAgICAgICB3aWR0aDogOTYlICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbmJvZHkuZGFya3tcbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6ICRibGFjayFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzRCNEQ1NiAhaW1wb3J0YW50O1xuICAgIC5tYXQtb3B0aW9uLXRleHR7XG4gICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuXG4gICAgfVxuICB9XG4gIG1hdC1jYXJke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAkYmxhY2sgIWltcG9ydGFudDtcblxuICAgIC5ib3JkZXItbGlrZS1yb3ctd3JhcHBlciB7XG4gICAgICAuYm9yZGVyLWxpa2Utcm93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRCNEQ1NiFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICAuc2VhcmNoIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIC5zZWFyY2gtZm9ybS1maWVsZCB7XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgICAgICBjb2xvcjogIzRCNEQ1NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciB7XG4gICAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0QjRENTYhaW1wb3J0YW50O1xuXG4gICAgICAgIC50aXRsZS1yb3cge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrOmxhc3Qtb2YtdHlwZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAuaGVhZGVyIHtcblxuICAgICAgLmhlYWRlci13cmFwcGVyIHtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICAgIG1hdC1jYXJkLXRpdGxlIHtcbiAgICAgIC5jYXJkLXRpdGxlLXdyYXBwZXIge1xuICAgICAgICAuY2FyZC10aXRsZS12YXIge1xuICAgICAgICAgIGNvbG9yOiAjYjMyYTIwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWF0LWNhcmQtc3VidGl0bGUge1xuICAgICAgLnN1YnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRibGFjayAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM0QjRENTYhaW1wb3J0YW50O1xuXG4gICAgICAuZm9vdGVyLXdyYXBwZXIge1xuICAgICAgICAuYmxvY2sge1xuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjQjJCOENGIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmVtYWlsLW1le1xuICAgICAgICAgICAgLmVtYWlsLW1lLWxpbmt7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lbWFpbC1tZS1saW5rOjpiZWZvcmV7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jcnlwdC1pbmZvIHtcbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBzIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLnRhYmxlLXdyYXBwZXIge1xuICAgICAgLy9tYXJnaW4tYm90dG9tOiA0M3B4O1xuICAgICAgdGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcblxuICAgICAgICB0Ym9keSB7XG5cbiAgICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdHI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRCNEQ1NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3JlZW4ge1xuICAgICAgY29sb3I6ICRncmVlbjtcbiAgICB9XG5cbiAgICAucmVkIHtcbiAgICAgIGNvbG9yOiAkcmVkO1xuICAgIH1cblxuICAgIC5idXR0b24tcm93IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNEI0RDU2O1xuXG5cbiAgICAgIC5hY3RpdmU6OmJlZm9yZSB7XG5cbiAgICAgICAgYmFja2dyb3VuZDogI0ZGQzgzQztcbiAgICAgIH1cblxuICAgICAgLnVzZXIge1xuXG4gICAgICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAuc2VlLW1vcmUge1xuICAgICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcblxuICAgICAgZGl2OjpiZWZvcmUge1xuXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgfVxuXG59XG59XG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG46Om5nLWRlZXAgLm0tYi03NSB7XG4gIG1hcmdpbi1ib3R0b206IDc1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubS1iLTkwIHtcbiAgbWFyZ2luLWJvdHRvbTogOTBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tLXRvcC1ib3R0b20tMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuOjpuZy1kZWVwIC5ib3JkZXItbGlrZS1yb3ctd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbjo6bmctZGVlcCAuYm9yZGVyLWxpa2Utcm93LXdyYXBwZXIgLmJvcmRlci1saWtlLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUYzRjM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjo6bmctZGVlcCAubWF0LXBhZ2luYXRvci1vdXRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQ0ZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG46Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1pbi1oZWlnaHQ6IDU2cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbn1cbjo6bmctZGVlcCAubWF0LXBhZ2luYXRvci1vdXRlci1jb250YWluZXIgLm1hdC1wYWdpbmF0b3ItaWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xufVxuOjpuZy1kZWVwIGJvZHkge1xuICBiYWNrZ3JvdW5kOiAjNjU2OTcyO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjRjRGNkZEO1xuICBib3JkZXI6IDNweCBzb2xpZCAjRTZFQkZFICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgYXV0byAxMjZweDtcbn1cbjo6bmctZGVlcCAuc2VhcmNoIC5leGFtcGxlLWZvcm0ge1xuICBtYXJnaW46IDAgNXB4O1xufVxuOjpuZy1kZWVwIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46Om5nLWRlZXAgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNGNEY2RkQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0U2RUJGRSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA5cHggMThweCAxNXB4IDE4cHg7XG59XG46Om5nLWRlZXAgLnNlYXJjaCAuc2VhcmNoLWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWZsZXggaW5wdXQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMUYyMTI2O1xufVxuOjpuZy1kZWVwIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMUYyMTI2O1xufVxuOjpuZy1kZWVwIC5zZWFyY2ggaW5wdXQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogNjVweCAwIDAgMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQ0ZGICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTQwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlcjogdW5zZXQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tdG9wOiB1bnNldCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0Y1RjNGMztcbiAgbWFyZ2luOiA1N3B4IGF1dG8gMCBhdXRvO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIC50aXRsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJQVCBTYW5zIENhcHRpb25cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMzNweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAudGl0bGUtcm93IC50aXRsZS1saW5rIHtcbiAgbWFyZ2luLXJpZ2h0OiA2NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAudGl0bGUtcm93IC50aXRsZS1saW5rOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoN3B4KSB0cmFuc2xhdGVZKDdweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAudGl0bGUtcm93IC50aXRsZS1kYXRlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAuZ2FtZS1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnZpZGVvLWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDk0cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbjogMCBhdXRvIDEwMHB4O1xuICBtYXgtd2lkdGg6IDg3NXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIDVweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAucmlnaHQtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5oZWFkZXIgLmhlYWRlci13cmFwcGVyIC5yaWdodC1ibG9jayAudGl0bGUge1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnJpZ2h0LWJsb2NrIC50aXRsZSBwLmFjdGl2ZSB7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAucmlnaHQtYmxvY2sgLnRpdGxlIHAuYWN0aXZlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoN3B4KSB0cmFuc2xhdGVZKDdweCk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5oZWFkZXItd3JhcHBlciAubGVmdC1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzN3B4O1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCBtYXQtY2FyZC10aXRsZSwgOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IC00cHggNXB4IDE2cHggNXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLXRpdGxlIC5jYXJkLXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbGluZS1oZWlnaHQ6IDQ3cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUgLmNhcmQtdGl0bGUtd3JhcHBlci53cmFwcGVyLXNoaWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtdGl0bGUgLmNhcmQtdGl0bGUtd3JhcHBlciAuY2FyZC10aXRsZS12YXIge1xuICBjb2xvcjogI2IzMmEyMDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtc3VidGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNHB4IDVweCA3N3B4IDVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIG1hdC1jYXJkLXN1YnRpdGxlIC5zdWJ0aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDE2cHggYXV0byAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMxRjIxMjYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCBtYXQtY2FyZC1zdWJ0aXRsZSAuc3VidGl0bGUtd3JhcHBlci53cmFwcGVyLXNoaWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgbWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbjogMCA1cHggMTZweCA1cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjRjNGNkY5O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI0Y1RjNGMztcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciB7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIG1hcmdpbjogMCA1cHggMTAwcHggNXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jazpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDEwMXB4O1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayB7XG4gIG1hcmdpbi1ib3R0b206IDc3cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50aXRsZSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50aXRsZSBwOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpIHRyYW5zbGF0ZVkoM3B4KTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRleHQge1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5lbWFpbC1tZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLmVtYWlsLW1lIC5lbWFpbC1tZS1saW5rIHtcbiAgY29sb3I6ICMxMzEzMTQ7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bnNldDtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAuZW1haWwtbWUgLmVtYWlsLW1lLWxpbms6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzY1QjdGOTtcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG46Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIC5pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jazpudGgtbGFzdC1vZi10eXBlKDEpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbjo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAucHMge1xuICBmb250LWZhbWlseTogXCJQVCBNb25vXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi10b3A6IDc2cHg7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gNDJweDtcbn1cbjo6bmctZGVlcCAudGFibGUtd3JhcHBlciB0YWJsZSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4NzVweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkZDRkYgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQge1xuICBoZWlnaHQ6IDM1cHg7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGhlYWQgdHI6Zmlyc3QtY2hpbGQgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyLmNkay1yb3cgdGQuY2RrLWNlbGwge1xuICBwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIge1xuICBwYWRkaW5nLXRvcDogMjhweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQge1xuICBwYWRkaW5nOiAyNHB4IDVweCA1cHggNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNhbnMgQ2FwdGlvblwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDM5cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyIHRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMzBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtaW4td2lkdGg6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMikge1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzFGMjEyNjtcbn1cbjo6bmctZGVlcCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG46Om5nLWRlZXAgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG46Om5nLWRlZXAgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5ncmVlbiB7XG4gIGNvbG9yOiAjMTFCNDc5O1xufVxuOjpuZy1kZWVwIC5yZWQge1xuICBjb2xvcjogI0ZEMDMwMztcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogODc1cHg7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjRjVGM0YzO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyBidXR0b24ge1xuICBwYWRkaW5nOiAxOHB4IDE4cHggMThweCAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjNweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgTW9ub1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAuYWN0aXZlIHtcbiAgei1pbmRleDogMjtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAuYWN0aXZlIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAuYWN0aXZlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZDODNDO1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCAuYnV0dG9uLXJvdyAudXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtZmFtaWx5OiBcIlBUIE1vbm9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMxRjIxMjY7XG4gIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG46Om5nLWRlZXAgLm5hbWUtcm93IHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG8gMzBweCBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46Om5nLWRlZXAgLm5hbWUtcm93IC5uYW1lLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG46Om5nLWRlZXAgLnNlZS1tb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2FucyBDYXB0aW9uXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgY29sb3I6ICMxRjIxMjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDg3NXB4O1xuICBtYXJnaW46IDAgYXV0byAxMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbjo6bmctZGVlcCAuc2VlLW1vcmUgZGl2IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46Om5nLWRlZXAgLnNlZS1tb3JlIGRpdjo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDZweCkgdHJhbnNsYXRlWSgzcHgpO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAycHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNGRkM4M0M7XG4gIHotaW5kZXg6IC0xO1xuICBtYXgtd2lkdGg6IDExMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xuICA6Om5nLWRlZXAgOjpuZy1kZWVwIC5tLWItOTAge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIC5tYXQtcGFnaW5hdG9yLWljb24ge1xuICAgIHdpZHRoOiAyOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuaGVhZGVyIC5yaWdodC1ibG9jayAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDMycHggIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5zZWFyY2gge1xuICAgIG1hcmdpbjogMCBhdXRvIDYycHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuc2VhcmNoIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBwYWRkaW5nOiAwIDVweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnNlYXJjaCAubWF0LWZvcm0tZmllbGQtZmxleCBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuYnV0dG9uLXJvdyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmJ1dHRvbi1yb3cgYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5idXR0b24tcm93IC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5idXR0b24tcm93IC51c2VyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjRweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHRhYmxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW46IDAgYXV0byA2MHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIge1xuICAgIHBhZGRpbmctdG9wOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAudGFibGUtd3JhcHBlciB0YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTJweCA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwIDVweCA1MHB4IDVweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jazpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGl0bGUgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAuZW1haWwtbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5jcnlwdC1pbmZvIC5pdGVtIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgd2lkdGg6IDk5JTtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMCBhdXRvO1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnRpdGxlLXJvdyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAudGl0bGUtcm93IC50aXRsZS1saW5rIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayAuZ2FtZS1uYW1lIHtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2sgLnZpZGVvLWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgbWF0LWNhcmQgLnNlZS1tb3JlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgbWFyZ2luOiAwIDVweCA2MHB4O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLmNhcmQtdGl0bGUtd3JhcHBlciB7XG4gICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHkgIWltcG9ydGFudDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIC5zdWJ0aXRsZS13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLmNhcmQtdGl0bGUtdmFyIHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIDo6bmctZGVlcCA6Om5nLWRlZXAgLmhlYWRlci13cmFwcGVyIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgfVxuICA6Om5nLWRlZXAgOjpuZy1kZWVwIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIH1cbiAgOjpuZy1kZWVwIDo6bmctZGVlcCBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDk2JSAhaW1wb3J0YW50O1xuICB9XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogIzEzMTMxNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLXRleHQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMxMzEzMTQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmJvcmRlci1saWtlLXJvdy13cmFwcGVyIC5ib3JkZXItbGlrZS1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5tYXQtcGFnaW5hdG9yLW91dGVyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxNDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLm1hdC1wYWdpbmF0b3Itb3V0ZXItY29udGFpbmVyIHNwYW4ge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zZWFyY2gge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZDogIzEzMTMxNCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDNweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0IHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zZWFyY2ggLnNlYXJjaC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNEI0RDU2O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrLXdyYXBwZXIgLmdhbWUtaW5mby12aWRlby1ibG9jayB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNEI0RDU2ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5nYW1lLWluZm8tdmlkZW8tYmxvY2std3JhcHBlciAuZ2FtZS1pbmZvLXZpZGVvLWJsb2NrIC50aXRsZS1yb3cge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmdhbWUtaW5mby12aWRlby1ibG9jay13cmFwcGVyIC5nYW1lLWluZm8tdmlkZW8tYmxvY2s6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogdW5zZXQgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCBtYXQtY2FyZC10aXRsZSAuY2FyZC10aXRsZS13cmFwcGVyIC5jYXJkLXRpdGxlLXZhciB7XG4gIGNvbG9yOiAjYjMyYTIwO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCBtYXQtY2FyZC1zdWJ0aXRsZSAuc3VidGl0bGUtd3JhcHBlciB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzEzMTMxNCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIzRCNEQ1NiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAuYmxvY2sgLnRpdGxlIHAge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5ibG9jayAudGl0bGUgcDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjMTMxMzE0O1xuICB6LWluZGV4OiAtMTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC50ZXh0IHtcbiAgY29sb3I6ICNCMkI4Q0YgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5lbWFpbC1tZSAuZW1haWwtbWUtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmZvb3RlciAuZm9vdGVyLXdyYXBwZXIgLmJsb2NrIC5lbWFpbC1tZSAuZW1haWwtbWUtbGluazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KSB0cmFuc2xhdGVZKDNweCk7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB1bnNldDtcbiAgei1pbmRleDogLTE7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5mb290ZXIgLmZvb3Rlci13cmFwcGVyIC5jcnlwdC1pbmZvIC5pdGVtIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuOjpuZy1kZWVwIGJvZHkuZGFyayBtYXQtY2FyZCAuZm9vdGVyIC5mb290ZXItd3JhcHBlciAucHMge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxNCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnRhYmxlLXdyYXBwZXIgdGFibGUgdGJvZHkgdHIgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC50YWJsZS13cmFwcGVyIHRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRCNEQ1Njtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmdyZWVuIHtcbiAgY29sb3I6ICMxMUI0Nzk7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5yZWQge1xuICBjb2xvcjogI0ZEMDMwMztcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmJ1dHRvbi1yb3cge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzRCNEQ1Njtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmJ1dHRvbi1yb3cgLmFjdGl2ZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI0ZGQzgzQztcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLmJ1dHRvbi1yb3cgLnVzZXIge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBib2R5LmRhcmsgbWF0LWNhcmQgLnNlZS1tb3JlIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgYm9keS5kYXJrIG1hdC1jYXJkIC5zZWUtbW9yZSBkaXY6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNGRkM4M0M7XG59Il19 */"]
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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"], _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _components_live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_6__["UserInfoComponent"], _components_game_info_game_info_component__WEBPACK_IMPORTED_MODULE_10__["GameInfoComponent"], _components_live_live_component__WEBPACK_IMPORTED_MODULE_19__["LiveComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"]],
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
          var _this4 = this;

          setTimeout(function () {
            return _this4.setViewVars();
          }, 0);
          this.route.params.subscribe(function (paramsId) {
            _this4.getGameInfo(paramsId.id);
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
          var _this5 = this;

          this.dataService.getGameInfo(id).subscribe(function (data) {
            // console.log(data);
            _this5.data = data;

            _this5.drawTable();

            _this5.getYouTubeLink();

            _this5.setViewVars();
          });
        }
      }, {
        key: "drawTable",
        value: function drawTable() {
          var _this6 = this;

          var newObj = [];
          this.data.players.forEach(function (player) {
            newObj.push({
              player: player.player,
              result: _this6.dataService.userScoreCalc(String(player.result))
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
          var _this7 = this;

          if (this.sortOption === 'asc') {
            this.data.players.sort(function (a, b) {
              return _this7.dataService.userScoreCalc(a.result) - _this7.dataService.userScoreCalc(b.result);
            });
          } else if (this.sortOption === 'desc') {
            this.data.players.sort(function (a, b) {
              return _this7.dataService.userScoreCalc(b.result) - _this7.dataService.userScoreCalc(a.result);
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
      consts: [[1, "game-info-video-block-wrapper"], [1, "game-info-video-block"], [1, "title-row"], [1, "title-link"], [1, "title-date"], [1, "game-name"], ["class", "video-frame", 4, "ngIf"], [1, "table-wrapper"], [1, "border-like-row-wrapper"], [1, "border-like-row"], ["mat-table", "", 1, "mat-elevation-z8", "m-b-75", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "td", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "player"], ["class", "td", "mat-cell", "", 3, "routerLink", 4, "matCellDef"], ["matColumnDef", "result"], ["class", "td", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [1, "border-like-row-wrapper", "m-top-bottom-30"], [1, "video-frame"], ["width", "100%", "height", "100%", 1, "e2e-iframe-trusted-src", 3, "src"], ["mat-header-cell", ""], ["mat-cell", "", 1, "td"], ["mat-cell", "", 1, "td", 3, "routerLink"], ["mat-cell", "", 1, "td", 3, "ngClass"], ["cdk-header-row", ""], ["cdk-row", ""]],
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r9 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r9 + 1, " ");
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
          var _this8 = this;

          this.dataService.getData().subscribe(function (data) {
            data.forEach(function (ep) {
              ep.players.forEach(function (game) {
                if (!_this8.players[game.player]) {
                  _this8.players[game.player] = {
                    result: _this8.dataService.userScoreCalc(game.result),
                    count: 1
                  };
                } else {
                  _this8.players[game.player].result += _this8.dataService.userScoreCalc(game.result);
                  _this8.players[game.player].count += 1;
                }
              });
            });

            _this8.sortData();

            _this8.data = data;

            _this8.getDisplayedColumns();
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
      consts: [[1, "button-row"], ["mat-button", "", 1, "winning-sort", 3, "ngClass", "click"], ["mat-button", "", 1, "loosing-sort", 3, "ngClass", "click"], ["mat-button", "", 1, "appearance-sort", 3, "ngClass", "click"], [1, "table-wrapper", "m-b-90"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "td", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "result"], ["class", "td", "mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 3, "routerLink", "click", 4, "cdkRowDef", "cdkRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "td"], ["mat-cell", "", 1, "td", 3, "ngClass"], ["cdk-header-row", ""], ["cdk-row", "", 3, "routerLink", "click"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_td_11_Template, 2, 1, "td", 8);

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
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
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
          var _this9 = this;

          setTimeout(function () {
            return _this9.setViewVars();
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
          var _this10 = this;

          this.dataService.getData().subscribe(function (newData) {
            _this10.data = newData.reverse();
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
        var _this11 = this;

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
          return val ? _this11.onData(val) : '';
        });
      }

      _createClass(UserInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          setTimeout(function () {
            return _this12.setViewVars();
          }, 0);
          this.route.params.subscribe(function (paramsId) {
            _this12.userId = paramsId.id;

            _this12.getUser(_this12.userId);
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
          var _this13 = this;

          this.dataService.getUserInfo(name).subscribe(function (data) {
            _this13.asyncData$.next(data);
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(httpClient) {
        _classCallCheck(this, DataService);

        this.httpClient = httpClient;
        this.searchHide = false;
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
          var _this14 = this;

          var response = {
            games: undefined,
            total: undefined
          };
          return this.httpClient.get('/assets/games_new.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var res = data.filter(function (item) {
              return _this14.isPlayerInGame(item.players, name);
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
                score: _this14.userScoreCalc(item.players.find(function (val) {
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
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
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
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
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