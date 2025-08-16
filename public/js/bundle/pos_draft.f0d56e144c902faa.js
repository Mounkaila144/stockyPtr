(self["webpackChunk"] = self["webpackChunk"] || []).push([["pos_draft"],{

/***/ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/stripe.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.54.2",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// own script injection.

var stripePromise$1 = Promise.resolve().then(function () {
  return loadScript(null);
});
var loadCalled = false;
stripePromise$1["catch"](function (err) {
  if (!loadCalled) {
    console.warn(err);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now();
  return stripePromise$1.then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_easy_print__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-easy-print */ "./node_modules/vue-easy-print/src/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../utils */ "./resources/src/utils/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
var _objectSpread2;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    vueEasyPrint: vue_easy_print__WEBPACK_IMPORTED_MODULE_2__["default"],
    barcode: (vue_barcode__WEBPACK_IMPORTED_MODULE_3___default())
  },
  metaInfo: {
    title: "POS"
  },
  data: function data() {
    return {
      langs: ["en", "fr", "ar", "de", "es", "it", "Ind", "thai", "tr_ch", "sm_ch", "tur", "ru", "hn", "vn", "kr", "ba", "br"],
      stripe: {},
      stripe_key: "",
      cardElement: {},
      paymentProcessing: false,
      DraftProcessing: false,
      savedPaymentMethods: [],
      hasSavedPaymentMethod: false,
      useSavedPaymentMethod: false,
      selectedCard: null,
      card_id: '',
      is_new_credit_card: false,
      submit_showing_credit_card: false,
      totalRows_draft_sales: "",
      draft_sales: [],
      limit: "10",
      draft_sale_id: '',
      serverParams: {
        sort: {
          field: "id",
          type: "desc"
        },
        page: 1,
        perPage: 10
      },
      client_name: '',
      payment: {
        amount: "",
        account_id: "",
        received_amount: "",
        payment_method_id: "",
        notes: ""
      },
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      isLoading: true,
      load_product: true,
      GrandTotal: 0,
      total: 0,
      Ref: "",
      clients: [],
      units: [],
      warehouses: [],
      payments: [],
      products: [],
      products_pos: [],
      payment_methods: [],
      details: [],
      detail: {},
      categories: [],
      brands: [],
      accounts: [],
      pos_settings: {},
      product_currentPage: 1,
      paginated_Products: "",
      product_perPage: 8,
      product_totalRows: "",
      paginated_Brands: "",
      brand_currentPage: 1,
      brand_perPage: 3,
      paginated_Category: "",
      category_currentPage: 1,
      category_perPage: 3,
      barcodeFormat: "CODE128",
      invoice_pos: {
        sale: {
          Ref: "",
          client_name: "",
          discount: "",
          taxe: "",
          date: "",
          tax_rate: "",
          shipping: "",
          GrandTotal: "",
          paid_amount: ""
        },
        details: [],
        setting: {
          logo: "",
          CompanyName: "",
          CompanyAdress: "",
          email: "",
          CompanyPhone: ""
        }
      },
      sale: {
        warehouse_id: "",
        client_id: "",
        tax_rate: 0,
        shipping: 0,
        discount: 0,
        TaxNet: 0,
        notes: ''
      },
      client: {
        id: "",
        name: "",
        code: "",
        email: "",
        phone: "",
        country: "",
        tax_number: "",
        city: "",
        adresse: ""
      },
      category_id: "",
      brand_id: "",
      product: {
        id: "",
        code: "",
        product_type: "",
        current: "",
        quantity: "",
        check_qty: "",
        discount: "",
        DiscountNet: "",
        discount_Method: "",
        sale_unit_id: "",
        fix_stock: "",
        fix_price: "",
        name: "",
        unitSale: "",
        Net_price: "",
        Unit_price: "",
        Total_price: "",
        subtotal: "",
        product_id: "",
        detail_id: "",
        taxe: "",
        tax_percent: "",
        tax_method: "",
        product_variant_id: "",
        is_imei: "",
        imei_number: ""
      },
      sound: "/audio/Beep.wav",
      audio: new Audio("/audio/Beep.wav")
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["currentUser", "currentUserPermissions"])), {}, {
    brand_totalRows: function brand_totalRows() {
      return this.brands.length;
    },
    category_totalRows: function category_totalRows() {
      return this.categories.length;
    },
    displaySavedPaymentMethods: function displaySavedPaymentMethods() {
      if (this.hasSavedPaymentMethod) {
        return true;
      } else {
        return false;
      }
    },
    displayFormNewCard: function displayFormNewCard() {
      if (this.useSavedPaymentMethod) {
        return false;
      } else {
        return true;
      }
    },
    isSelectedCard: function isSelectedCard() {
      var _this = this;
      return function (card) {
        return _this.selectedCard === card;
      };
    },
    columns_draft_sales: function columns_draft_sales() {
      return [{
        label: this.$t("date"),
        field: "date",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Reference"),
        field: "Ref",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Customer"),
        field: "client_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("warehouse"),
        field: "warehouse_name",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Total"),
        field: "GrandTotal",
        tdClass: "text-left",
        thClass: "text-left",
        sortable: false
      }, {
        label: this.$t("Action"),
        field: "actions",
        html: true,
        tdClass: "text-right",
        thClass: "text-right",
        sortable: false
      }];
    }
  }),
  mounted: function mounted() {
    this.changeSidebarProperties();
    this.paginate_products(this.product_perPage, 0);
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(["changeSidebarProperties", "changeThemeMode", "logout"])), {}, (_objectSpread2 = {
    // ...mapGetters(["currentUser"]),
    logoutUser: function logoutUser() {
      this.$store.dispatch("logout");
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    showModal: function showModal() {
      this.$bvModal.show('open_scan');
    },
    onScan: function onScan(decodedText, decodedResult) {
      var code = decodedText;
      this.search_input = code;
      this.search();
      this.$bvModal.hide('open_scan');
    },
    Selected_PaymentMethod: function Selected_PaymentMethod(value) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(value == '1' || value == 1)) {
                _context.n = 2;
                break;
              }
              _this2.savedPaymentMethods = [];
              _this2.submit_showing_credit_card = true;
              _this2.selectedCard = null;
              _this2.card_id = '';
              // Check if the customer has saved payment methods
              _context.n = 1;
              return axios.get("/retrieve-customer?customerId=".concat(_this2.sale.client_id)).then(function (response) {
                // If the customer has saved payment methods, display them
                _this2.savedPaymentMethods = response.data.data;
                _this2.card_id = response.data.customer_default_source;
                _this2.hasSavedPaymentMethod = true;
                _this2.useSavedPaymentMethod = true;
                _this2.is_new_credit_card = false;
                _this2.submit_showing_credit_card = false;
              })["catch"](function (error) {
                // If the customer does not have saved payment methods, show the card element for them to enter their payment information
                _this2.hasSavedPaymentMethod = false;
                _this2.useSavedPaymentMethod = false;
                _this2.is_new_credit_card = true;
                _this2.card_id = '';
                setTimeout(function () {
                  _this2.loadStripe_payment();
                }, 1000);
                _this2.submit_showing_credit_card = false;
              });
            case 1:
              _context.n = 3;
              break;
            case 2:
              _this2.hasSavedPaymentMethod = false;
              _this2.useSavedPaymentMethod = false;
              _this2.is_new_credit_card = false;
            case 3:
              return _context.a(2);
          }
        }, _callee);
      }))();
    },
    show_saved_credit_card: function show_saved_credit_card() {
      this.hasSavedPaymentMethod = true;
      this.useSavedPaymentMethod = true;
      this.is_new_credit_card = false;
      this.Selected_PaymentMethod(1);
    },
    show_new_credit_card: function show_new_credit_card() {
      var _this3 = this;
      this.selectedCard = null;
      this.card_id = '';
      this.useSavedPaymentMethod = false;
      this.hasSavedPaymentMethod = false;
      this.is_new_credit_card = true;
      setTimeout(function () {
        _this3.loadStripe_payment();
      }, 500);
    },
    selectCard: function selectCard(card) {
      this.selectedCard = card;
      this.card_id = card.card_id;
    },
    loadStripe_payment: function loadStripe_payment() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var elements;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__.loadStripe)("".concat(_this4.stripe_key));
            case 1:
              _this4.stripe = _context2.v;
              elements = _this4.stripe.elements();
              _this4.cardElement = elements.create("card", {
                classes: {
                  base: "bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 p-3 leading-8 transition-colors duration-200 ease-in-out"
                }
              });
              _this4.cardElement.mount("#card-element");
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    SetLocal: function SetLocal(locale) {
      this.$i18n.locale = locale;
      this.$store.dispatch("language/setLanguage", locale);
      Fire.$emit("ChangeLanguage");
    },
    handleFullScreen: function handleFullScreen() {
      _utils__WEBPACK_IMPORTED_MODULE_4__["default"].toggleFullScreen();
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "logoutUser", function logoutUser() {
    this.logout();
  }), "Product_paginatePerPage", function Product_paginatePerPage() {
    this.paginate_products(this.product_perPage, 0);
  }), "paginate_products", function paginate_products(pageSize, pageNumber) {
    var itemsToParse = this.products;
    this.paginated_Products = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), "Product_onPageChanged", function Product_onPageChanged(page) {
    this.paginate_products(this.product_perPage, page - 1);
    this.getProducts(page);
  }), "BrandpaginatePerPage", function BrandpaginatePerPage() {
    this.paginate_Brands(this.brand_perPage, 0);
  }), "paginate_Brands", function paginate_Brands(pageSize, pageNumber) {
    var itemsToParse = this.brands;
    this.paginated_Brands = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), "BrandonPageChanged", function BrandonPageChanged(page) {
    this.paginate_Brands(this.brand_perPage, page - 1);
  }), "Category_paginatePerPage", function Category_paginatePerPage() {
    this.paginate_Category(this.category_perPage, 0);
  }), "paginate_Category", function paginate_Category(pageSize, pageNumber) {
    var itemsToParse = this.categories;
    this.paginated_Category = itemsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }), "Category_onPageChanged", function Category_onPageChanged(page) {
    this.paginate_Category(this.category_perPage, page - 1);
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Submit_Pos", function Submit_Pos() {
    var _this5 = this;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    this.$refs.create_pos.validate().then(function (success) {
      if (!success) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        if (_this5.sale.client_id == "" || _this5.sale.client_id === null) {
          _this5.makeToast("danger", _this5.$t("Choose_Customer"), _this5.$t("Failed"));
        } else if (_this5.sale.warehouse_id == "" || _this5.sale.warehouse_id === null) {
          _this5.makeToast("danger", _this5.$t("Choose_Warehouse"), _this5.$t("Failed"));
        } else {
          _this5.makeToast("danger", _this5.$t("Please_fill_the_form_correctly"), _this5.$t("Failed"));
        }
      } else {
        if (_this5.verifiedForm()) {
          Fire.$emit("pay_now");
        } else {
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        }
      }
    });
  }), "submit_Update_Detail", function submit_Update_Detail() {
    var _this6 = this;
    this.$refs.Update_Detail.validate().then(function (success) {
      if (!success) {
        return;
      } else {
        _this6.Update_Detail();
      }
    });
  }), "Submit_Payment", function Submit_Payment() {
    var _this7 = this;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    this.$refs.Add_payment.validate().then(function (success) {
      if (!success) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this7.makeToast("danger", _this7.$t("Please_fill_the_form_correctly"), _this7.$t("Failed"));
      } else {
        if (_this7.payment.amount > _this7.payment.received_amount) {
          _this7.makeToast("warning", _this7.$t("Paying_amount_is_greater_than_Received_amount"), _this7.$t("Warning"));
          _this7.payment.received_amount = 0;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        } else if (_this7.payment.amount > _this7.GrandTotal) {
          _this7.makeToast("warning", _this7.$t("Paying_amount_is_greater_than_Grand_Total"), _this7.$t("Warning"));
          _this7.payment.amount = 0;
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        } else {
          _this7.CreatePOS();
        }
      }
    });
  }), "Submit_Customer", function Submit_Customer() {
    var _this8 = this;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    this.$refs.Create_Customer.validate().then(function (success) {
      if (!success) {
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this8.makeToast("danger", _this8.$t("Please_fill_the_form_correctly"), _this8.$t("Failed"));
      } else {
        _this8.Create_Client();
      }
    });
  }), "Create_Client", function Create_Client() {
    var _this9 = this;
    axios.post("clients", {
      name: this.client.name,
      email: this.client.email,
      phone: this.client.phone,
      tax_number: this.client.tax_number,
      country: this.client.country,
      city: this.client.city,
      adresse: this.client.adresse
    }).then(function (response) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this9.makeToast("success", _this9.$t("Successfully_Created"), _this9.$t("Success"));
      _this9.Get_Client_Without_Paginate();
      _this9.$bvModal.hide("New_Customer");
    })["catch"](function (error) {
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
    });
  }), "New_Client", function New_Client() {
    this.reset_Form_client();
    this.$bvModal.show("New_Customer");
  }), "reset_Form_client", function reset_Form_client() {
    this.client = {
      id: "",
      name: "",
      email: "",
      phone: "",
      tax_number: "",
      country: "",
      city: "",
      adresse: ""
    };
  }), "Get_Client_Without_Paginate", function Get_Client_Without_Paginate() {
    var _this0 = this;
    axios.get("get_clients_without_paginate").then(function (_ref) {
      var data = _ref.data;
      return _this0.clients = data;
    });
  }), "getValidationState", function getValidationState(_ref2) {
    var dirty = _ref2.dirty,
      validated = _ref2.validated,
      _ref2$valid = _ref2.valid,
      valid = _ref2$valid === void 0 ? null : _ref2$valid;
    return dirty || validated ? valid : null;
  }), "makeToast", function makeToast(variant, msg, title) {
    this.$root.$bvToast.toast(msg, {
      title: title,
      variant: variant,
      solid: true
    });
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Selected_Warehouse", function Selected_Warehouse(value) {
    this.search_input = '';
    this.product_filter = [];
    this.Get_Products_By_Warehouse(value);
    this.getProducts(1);
  }), "onClientSelected", function onClientSelected(selectedClient) {
    this.client_name = '';
    var client = this.clients.find(function (client) {
      return client.id === selectedClient;
    });
    this.client_name = client.name;
  }), "Get_Products_By_Warehouse", function Get_Products_By_Warehouse(id) {
    var _this1 = this;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    axios.get("get_Products_by_warehouse/" + id + "?stock=" + 1 + "&is_sale=" + 1 + "&product_service=" + 1).then(function (response) {
      _this1.products_pos = response.data;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    })["catch"](function (error) {});
  }), "add_product", function add_product(code) {
    var _this10 = this;
    this.audio.play();
    if (this.details.some(function (detail) {
      return detail.code === code;
    })) {
      this.increment_qty_scanner(code);
    } else {
      if (this.details.length > 0) {
        this.order_detail_id();
      } else if (this.details.length === 0) {
        this.product.detail_id = 1;
      }
      this.details.push(this.product);
      setTimeout(function () {
        _this10.load_product = true;
      }, 300);
      if (this.product.is_imei) {
        this.Modal_Updat_Detail(this.product);
      }
    }
  }), "order_detail_id", function order_detail_id() {
    this.product.detail_id = 0;
    var len = this.details.length;
    this.product.detail_id = this.details[len - 1].detail_id + 1;
  }), "get_units", function get_units(value) {
    var _this11 = this;
    axios.get("get_units?id=" + value).then(function (_ref3) {
      var data = _ref3.data;
      return _this11.units = data;
    });
  }), "Modal_Updat_Detail", function Modal_Updat_Detail(detail) {
    var _this12 = this;
    this.detail = {};
    this.get_units(detail.product_id);
    this.detail.detail_id = detail.detail_id;
    this.detail.sale_unit_id = detail.sale_unit_id;
    this.detail.name = detail.name;
    this.detail.product_type = detail.product_type;
    this.detail.Unit_price = detail.Unit_price;
    this.detail.fix_price = detail.fix_price;
    this.detail.fix_stock = detail.fix_stock;
    this.detail.current = detail.current;
    this.detail.tax_method = detail.tax_method;
    this.detail.discount_Method = detail.discount_Method;
    this.detail.discount = detail.discount;
    this.detail.quantity = detail.quantity;
    this.detail.tax_percent = detail.tax_percent;
    this.detail.is_imei = detail.is_imei;
    this.detail.imei_number = detail.imei_number;
    setTimeout(function () {
      _this12.$bvModal.show("form_Update_Detail");
    }, 1000);
  }), "Update_Detail", function Update_Detail() {
    var _this13 = this;
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id === this.detail.detail_id) {
        // this.convert_unit();
        for (var k = 0; k < this.units.length; k++) {
          if (this.units[k].id == this.detail.sale_unit_id) {
            if (this.units[k].operator == "/") {
              this.details[i].current = this.detail.fix_stock * this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            } else {
              this.details[i].current = this.detail.fix_stock / this.units[k].operator_value;
              this.details[i].unitSale = this.units[k].ShortName;
            }
          }
        }
        if (this.details[i].current < this.details[i].quantity) {
          this.details[i].quantity = this.details[i].current;
        } else {
          this.details[i].quantity = 1;
        }
        this.details[i].Unit_price = this.detail.Unit_price;
        this.details[i].tax_percent = this.detail.tax_percent;
        this.details[i].tax_method = this.detail.tax_method;
        this.details[i].discount_Method = this.detail.discount_Method;
        this.details[i].discount = this.detail.discount;
        this.details[i].sale_unit_id = this.detail.sale_unit_id;
        this.details[i].imei_number = this.detail.imei_number;
        this.details[i].product_type = this.detail.product_type;
        if (this.details[i].discount_Method == "2") {
          //Fixed
          this.details[i].DiscountNet = this.details[i].discount;
        } else {
          //Percentage %
          this.details[i].DiscountNet = parseFloat(this.details[i].Unit_price * this.details[i].discount / 100);
        }
        if (this.details[i].tax_method == "1") {
          //Exclusive
          this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].DiscountNet);
          this.details[i].taxe = parseFloat(this.details[i].tax_percent * (this.details[i].Unit_price - this.details[i].DiscountNet) / 100);
          this.details[i].Total_price = parseFloat(this.details[i].Net_price + this.details[i].taxe);
        } else {
          //Inclusive
          this.details[i].taxe = parseFloat((this.details[i].Unit_price - this.details[i].DiscountNet) * (this.details[i].tax_percent / 100));
          this.details[i].Net_price = parseFloat(this.details[i].Unit_price - this.details[i].taxe - this.details[i].DiscountNet);
          this.details[i].Total_price = parseFloat(this.details[i].Net_price + this.details[i].taxe);
        }
        this.$forceUpdate();
      }
    }
    this.CaclulTotal();
    setTimeout(function () {
      _this13.$bvModal.hide("form_Update_Detail");
    }, 1000);
  }), "verifiedForm", function verifiedForm() {
    if (this.details.length <= 0) {
      this.makeToast("warning", this.$t("AddProductToList"), this.$t("Warning"));
      return false;
    } else {
      var count = 0;
      for (var i = 0; i < this.details.length; i++) {
        if (this.details[i].quantity == "" || this.details[i].quantity === 0 || this.details[i].quantity > this.details[i].current) {
          count += 1;
          if (this.details[i].quantity > this.details[i].current) {
            this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
            return false;
          }
        }
      }
      if (count > 0) {
        this.makeToast("warning", this.$t("AddQuantity"), this.$t("Warning"));
        return false;
      } else {
        return true;
      }
    }
  }), "print_pos", function print_pos() {
    var divContents = document.getElementById("invoice-POS").innerHTML;
    var a = window.open("", "", "height=500, width=500");
    a.document.write('<link rel="stylesheet" href="/css/pos_print.css"><html>');
    a.document.write("<body >");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    setTimeout(function () {
      a.print();
    }, 1000);
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Invoice_POS", function Invoice_POS(id) {
    var _this14 = this;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    axios.get("sales_print_invoice/" + id).then(function (response) {
      _this14.invoice_pos = response.data;
      _this14.payments = response.data.payments;
      _this14.pos_settings = response.data.pos_settings;
      setTimeout(function () {
        // Complete the animation of the  progress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this14.$bvModal.show("Show_invoice");
      }, 500);
      if (response.data.pos_settings.is_printable) {
        setTimeout(function () {
          return _this14.print_pos();
        }, 1000);
      }
    })["catch"](function () {
      // Complete the animation of the  progress bar.
      setTimeout(function () {
        return nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }, 500);
    });

    //  Add a setTimeout here
    setTimeout(function () {
      _this14.$router.push({
        name: "pos"
      });
    }, 2000);
  }), "processPayment", function processPayment() {
    var _this15 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$_this15$stripe, token, error;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _this15.paymentProcessing = true;
            _context3.n = 1;
            return _this15.stripe.createToken(_this15.cardElement);
          case 1:
            _yield$_this15$stripe = _context3.v;
            token = _yield$_this15$stripe.token;
            error = _yield$_this15$stripe.error;
            if (error) {
              _this15.paymentProcessing = false;
              nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
              _this15.makeToast("danger", _this15.$t("InvalidData"), _this15.$t("Failed"));
            } else {
              axios.post("pos/submit_sale_from_draft", {
                draft_sale_id: _this15.draft_sale_id,
                client_id: _this15.sale.client_id,
                warehouse_id: _this15.sale.warehouse_id,
                tax_rate: _this15.sale.tax_rate ? _this15.sale.tax_rate : 0,
                TaxNet: _this15.sale.TaxNet ? _this15.sale.TaxNet : 0,
                discount: _this15.sale.discount ? _this15.sale.discount : 0,
                shipping: _this15.sale.shipping ? _this15.sale.shipping : 0,
                details: _this15.details,
                GrandTotal: _this15.GrandTotal,
                payment: _this15.payment,
                account_id: _this15.payment.account_id,
                amount: parseFloat(_this15.payment.amount).toFixed(2),
                received_amount: parseFloat(_this15.payment.received_amount).toFixed(2),
                change: parseFloat(_this15.payment.received_amount - _this15.payment.amount).toFixed(2),
                token: token.id,
                is_new_credit_card: _this15.is_new_credit_card,
                selectedCard: _this15.selectedCard,
                card_id: _this15.card_id
              }).then(function (response) {
                _this15.paymentProcessing = false;
                if (response.data.success === true) {
                  // Complete the animation of theprogress bar.
                  nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                  _this15.Invoice_POS(response.data.id);
                  _this15.$bvModal.hide("Add_Payment");
                  _this15.Reset_Pos();
                }
              })["catch"](function (error) {
                _this15.paymentProcessing = false;
                // Complete the animation of theprogress bar.
                nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
                _this15.makeToast("danger", _this15.$t("InvalidData"), _this15.$t("Failed"));
              });
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  }), "CreatePOS", function CreatePOS() {
    var _this16 = this;
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    if ((this.payment.payment_method_id == "1" || this.payment.payment_method_id == 1) && this.is_new_credit_card) {
      if (this.stripe_key != "") {
        this.processPayment();
      } else {
        this.makeToast("danger", this.$t("credit_card_account_not_available"), this.$t("Failed"));
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }
    } else {
      this.paymentProcessing = true;
      axios.post("pos/submit_sale_from_draft", {
        draft_sale_id: this.draft_sale_id,
        client_id: this.sale.client_id,
        warehouse_id: this.sale.warehouse_id,
        tax_rate: this.sale.tax_rate ? this.sale.tax_rate : 0,
        TaxNet: this.sale.TaxNet ? this.sale.TaxNet : 0,
        discount: this.sale.discount ? this.sale.discount : 0,
        shipping: this.sale.shipping ? this.sale.shipping : 0,
        notes: this.sale.notes,
        details: this.details,
        GrandTotal: this.GrandTotal,
        payment: this.payment,
        amount: parseFloat(this.payment.amount).toFixed(2),
        received_amount: parseFloat(this.payment.received_amount).toFixed(2),
        change: parseFloat(this.payment.received_amount - this.payment.amount).toFixed(2),
        is_new_credit_card: this.is_new_credit_card,
        selectedCard: this.selectedCard,
        card_id: this.card_id
      }).then(function (response) {
        if (response.data.success === true) {
          // Complete the animation of theprogress bar.
          nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
          _this16.paymentProcessing = false;
          _this16.Invoice_POS(response.data.id);
          _this16.$bvModal.hide("Add_Payment");
          _this16.Reset_Pos();
        }
      })["catch"](function (error) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
        _this16.paymentProcessing = false;
        _this16.makeToast("danger", _this16.$t("InvalidData"), _this16.$t("Failed"));
      });
    }
  }), "formatNumber", function formatNumber(number, dec) {
    var value = (typeof number === "string" ? number : number.toString()).split(".");
    if (dec <= 0) return value[0];
    var formated = value[1] || "";
    if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
    while (formated.length < dec) formated += "0";
    return "".concat(value[0], ".").concat(formated);
  }), "Get_Product_Details", function Get_Product_Details(product_id, variant_id) {
    var _this17 = this;
    axios.get("/show_product_data/" + product_id + "/" + variant_id).then(function (response) {
      _this17.product.discount = 0;
      _this17.product.DiscountNet = 0;
      _this17.product.discount_Method = "2";
      _this17.product.product_id = response.data.id;
      _this17.product.product_type = response.data.product_type;
      _this17.product.name = response.data.name;
      _this17.product.Net_price = response.data.Net_price;
      _this17.product.Total_price = response.data.Total_price;
      _this17.product.Unit_price = response.data.Unit_price;
      _this17.product.taxe = response.data.tax_price;
      _this17.product.tax_method = response.data.tax_method;
      _this17.product.tax_percent = response.data.tax_percent;
      _this17.product.unitSale = response.data.unitSale;
      _this17.product.product_variant_id = variant_id;
      _this17.product.code = response.data.code;
      _this17.product.fix_price = response.data.fix_price;
      _this17.product.sale_unit_id = response.data.sale_unit_id;
      _this17.product.is_imei = response.data.is_imei;
      _this17.product.imei_number = '';
      _this17.add_product(response.data.code);
      _this17.CaclulTotal();
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    });
  }), "CaclulTotal", function CaclulTotal() {
    this.total = 0;
    for (var i = 0; i < this.details.length; i++) {
      var tax = this.details[i].taxe * this.details[i].quantity;
      this.details[i].subtotal = parseFloat(this.details[i].quantity * this.details[i].Net_price + tax);
      this.total = parseFloat(this.total + this.details[i].subtotal);
    }
    var total_without_discount = parseFloat(this.total - this.sale.discount);
    this.sale.TaxNet = parseFloat(total_without_discount * this.sale.tax_rate / 100);
    this.GrandTotal = parseFloat(total_without_discount + this.sale.TaxNet + this.sale.shipping);
    var grand_total = this.GrandTotal.toFixed(2);
    this.GrandTotal = parseFloat(grand_total);
  }), "Verified_Qty", function Verified_Qty(detail, id) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id === id) {
        if (isNaN(detail.quantity)) {
          this.details[i].quantity = detail.current;
        }
        if (detail.quantity > detail.current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
          this.details[i].quantity = detail.current;
        } else {
          this.details[i].quantity = detail.quantity;
        }
      }
    }
    this.$forceUpdate();
    this.CaclulTotal();
  }), "increment_qty_scanner", function increment_qty_scanner(code) {
    var _this18 = this;
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].code === code) {
        if (this.details[i].quantity + 1 > this.details[i].current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity++;
        }
      }
    }
    this.CaclulTotal();
    this.$forceUpdate();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    setTimeout(function () {
      _this18.load_product = true;
    }, 300);
  }), "increment", function increment(id) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id == id) {
        if (this.details[i].quantity + 1 > this.details[i].current) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity++;
        }
      }
    }
    this.CaclulTotal();
    this.$forceUpdate();
  }), "decrement", function decrement(detail, id) {
    for (var i = 0; i < this.details.length; i++) {
      if (this.details[i].detail_id == id) {
        if (detail.quantity - 1 > detail.current || detail.quantity - 1 < 1) {
          this.makeToast("warning", this.$t("LowStock"), this.$t("Warning"));
        } else {
          this.details[i].quantity--;
        }
      }
    }
    this.CaclulTotal();
    this.$forceUpdate();
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "keyup_OrderTax", function keyup_OrderTax() {
    if (isNaN(this.sale.tax_rate)) {
      this.sale.tax_rate = 0;
    } else if (this.sale.tax_rate == '') {
      this.sale.tax_rate = 0;
      this.CaclulTotal();
    } else {
      this.CaclulTotal();
    }
  }), "keyup_Discount", function keyup_Discount() {
    if (isNaN(this.sale.discount)) {
      this.sale.discount = 0;
    } else if (this.sale.discount == '') {
      this.sale.discount = 0;
      this.CaclulTotal();
    } else {
      this.CaclulTotal();
    }
  }), "keyup_Shipping", function keyup_Shipping() {
    if (isNaN(this.sale.shipping)) {
      this.sale.shipping = 0;
    } else if (this.sale.shipping == '') {
      this.sale.shipping = 0;
      this.CaclulTotal();
    } else {
      this.CaclulTotal();
    }
  }), "Verified_paidAmount", function Verified_paidAmount() {
    if (isNaN(this.payment.amount)) {
      this.payment.amount = 0;
    } else {
      if (this.payment.amount > this.payment.received_amount) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Received_amount"), this.$t("Warning"));
        this.payment.amount = 0;
      } else if (this.payment.amount > this.GrandTotal) {
        this.makeToast("warning", this.$t("Paying_amount_is_greater_than_Grand_Total"), this.$t("Warning"));
        this.payment.amount = 0;
      }
    }
  }), "Verified_Received_Amount", function Verified_Received_Amount() {
    if (isNaN(this.payment.received_amount)) {
      this.payment.received_amount = 0;
    }
  }), "delete_Product_Detail", function delete_Product_Detail(id) {
    for (var i = 0; i < this.details.length; i++) {
      if (id === this.details[i].detail_id) {
        this.details.splice(i, 1);
        this.CaclulTotal();
      }
    }
  }), "Reset_Pos", function Reset_Pos() {
    this.details = [];
    this.products = [];
    this.products_pos = [];
    this.product = {};
    this.payment = {
      amount: "",
      account_id: "",
      received_amount: "",
      payment_method_id: "",
      notes: ""
    };
    this.savedPaymentMethods = [], this.hasSavedPaymentMethod = false, this.useSavedPaymentMethod = false, this.selectedCard = null, this.card_id = '', this.is_new_credit_card = false, this.submit_showing_credit_card = false, this.sale.tax_rate = 0;
    this.sale.TaxNet = 0;
    this.sale.shipping = 0;
    this.sale.discount = 0;
    this.GrandTotal = 0;
    this.total = 0;
    this.category_id = "";
    this.brand_id = "";
    this.client_name = "";
    // this.getProducts(1);
  }), "getResultValue", function getResultValue(result) {
    return result.code + " " + "(" + result.name + ")";
  }), "SearchProduct", function SearchProduct(result) {
    if (this.load_product) {
      this.load_product = false;
      this.product = {};
      if (result.product_type == 'is_service') {
        this.product.quantity = 1;
        this.product.code = result.code;
      } else {
        this.product.code = result.code;
        this.product.current = result.qte_sale;
        this.product.fix_stock = result.qte;
        if (result.qte_sale < 1) {
          this.product.quantity = result.qte_sale;
        } else {
          this.product.quantity = 1;
        }
      }
      this.product.product_variant_id = result.product_variant_id;
      this.Get_Product_Details(result.id, result.product_variant_id);
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    } else {
      this.makeToast("warning", this.$t("Please_wait_until_the_product_is_loaded"), this.$t("Warning"));
    }
  }), "search", function search() {
    var _this19 = this;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.search_input.length < 2) {
      return this.product_filter = [];
    }
    if (this.sale.warehouse_id != "" && this.sale.warehouse_id != null) {
      this.timer = setTimeout(function () {
        var barcode = _this19.search_input.trim();
        var weight = null;
        // Check if the barcode is from a weighing scale (13 digits)
        if (barcode.length === 13 && !isNaN(barcode)) {
          // Find the product by product code
          var product = _this19.products_pos.find(function (prod) {
            return prod.code === barcode;
          });
          if (product) {
            _this19.Check_Product_Exist(product, product.id, weight);
            return;
          } else {
            var productCode = barcode.substring(0, 7); // First 7 digits → Product Code
            var _weight = parseFloat(barcode.substring(7, 12)) / 1000; // Convert weight (grams to kg)
            var _product = _this19.products_pos.find(function (prod) {
              return prod.code === productCode;
            });
            if (_product) {
              _product.quantity = _weight; // Assign weight to product
              _this19.Check_Product_Exist(_product, _product.id, _weight);
              return;
            }
          }
          _this19.makeToast("danger", "Invalid product code scanned", _this19.$t("Error"));
          _this19.search_input = '';
          _this19.$refs.product_autocomplete.value = "";
          _this19.product_filter = [];
        }
        // else{
        //   //  No product found - Display Error Alert
        //   this.makeToast("danger", "Invalid product code scanned", this.$t("Error"));
        //   this.search_input= '';
        //   this.$refs.product_autocomplete.value = "";
        //   this.product_filter = [];

        // }

        // Regular product search (for non-weighing scale barcodes)
        var product_filter = _this19.products_pos.filter(function (product) {
          return product.code === _this19.search_input || product.barcode.includes(_this19.search_input);
        });
        if (product_filter.length === 1) {
          _this19.Check_Product_Exist(product_filter[0], product_filter[0].id, weight = null);
        } else {
          _this19.product_filter = _this19.products_pos.filter(function (product) {
            return product.name.toLowerCase().includes(_this19.search_input.toLowerCase()) || product.code.toLowerCase().includes(_this19.search_input.toLowerCase()) || product.barcode.toLowerCase().includes(_this19.search_input.toLowerCase());
          });
        }
      }, 800);
    } else {
      this.makeToast("warning", this.$t("SelectWarehouse"), this.$t("Warning"));
    }
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread2, "Check_Product_Exist", function Check_Product_Exist(product, id) {
    var weight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    if (this.load_product) {
      this.load_product = false;
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
      this.product = {};
      if (product.product_type == 'is_service') {
        this.product.quantity = 1;
      } else {
        this.product.current = product.qte_sale;
        this.product.fix_stock = product.qte;

        // Check if it's a weighing scale product
        if (weight !== null) {
          this.product.quantity = weight; // Assign extracted weight
        } else {
          this.product.quantity = product.qte_sale < 1 ? product.qte_sale : 1;
        }
      }
      this.Get_Product_Details(id, product.product_variant_id);
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    } else {
      this.makeToast("warning", this.$t("Please_wait_until_the_product_is_loaded"), this.$t("Warning"));
    }
  }), "Products_by_Category", function Products_by_Category(id) {
    this.category_id = id;
    this.getProducts(1);
  }), "Products_by_Brands", function Products_by_Brands(id) {
    this.brand_id = id;
    this.getProducts(1);
  }), "getAllCategory", function getAllCategory() {
    this.category_id = "";
    this.getProducts(1);
  }), "GetAllBrands", function GetAllBrands() {
    this.brand_id = "";
    this.getProducts(1);
  }), "getProducts", function getProducts() {
    var _this20 = this;
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    // Start the progress bar.
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().start();
    nprogress__WEBPACK_IMPORTED_MODULE_0___default().set(0.1);
    axios.get("pos/get_products_pos?page=" + page + "&category_id=" + this.category_id + "&brand_id=" + this.brand_id + "&warehouse_id=" + this.sale.warehouse_id + "&stock=" + 1 + "&product_service=" + 1).then(function (response) {
      _this20.products = response.data.products;
      _this20.product_totalRows = response.data.totalRows;
      _this20.Product_paginatePerPage();
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    })["catch"](function (response) {
      // Complete the animation of theprogress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
    });
  }), "GetElementsPos", function GetElementsPos() {
    var _this21 = this;
    var id = this.$route.params.id;
    this.draft_sale_id = id;
    axios.get("pos/data_draft_convert_sale/".concat(id)).then(function (response) {
      _this21.clients = response.data.clients;
      _this21.accounts = response.data.accounts;
      _this21.warehouses = response.data.warehouses;
      _this21.categories = response.data.categories;
      _this21.brands = response.data.brands;
      _this21.payment_methods = response.data.payment_methods;
      _this21.sale = response.data.sale;
      _this21.details = response.data.details;
      _this21.client_name = response.data.client_name;
      _this21.GrandTotal = response.data.GrandTotal;
      _this21.getProducts();
      if (response.data.warehouse_id != "") {
        _this21.Get_Products_By_Warehouse(response.data.warehouse_id);
      }
      _this21.paginate_Brands(_this21.brand_perPage, 0);
      _this21.paginate_Category(_this21.category_perPage, 0);
      _this21.stripe_key = response.data.stripe_key;
      _this21.isLoading = false;
    })["catch"](function (response) {
      _this21.isLoading = false;
    });
  }))),
  //-------------------- Created Function -----\\
  created: function created() {
    var _this22 = this;
    this.GetElementsPos();
    Fire.$on("pay_now", function () {
      setTimeout(function () {
        _this22.payment.amount = _this22.formatNumber(_this22.GrandTotal, 2);
        _this22.payment.received_amount = _this22.formatNumber(_this22.GrandTotal, 2);
        _this22.payment.payment_method_id = 2;
        _this22.$bvModal.show("Add_Payment");
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_0___default().done();
      }, 500);
    });
  }
});

/***/ }),

/***/ "./node_modules/jsbarcode/bin/JsBarcode.js":
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _barcodes = __webpack_require__(/*! ./barcodes/ */ "./node_modules/jsbarcode/bin/barcodes/index.js");

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js");

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ "./node_modules/jsbarcode/bin/help/fixOptions.js");

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ "./node_modules/jsbarcode/bin/help/getRenderProperties.js");

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js");

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

var _defaults = __webpack_require__(/*! ./options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The protype of the object returned from the JsBarcode() call


// Help functions
var API = function API() {};

// The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers


// Default values


// Exceptions
// Import all the barcodes
var JsBarcode = function JsBarcode(element, text, options) {
	var api = new API();

	if (typeof element === "undefined") {
		throw Error("No element to render on was provided.");
	}

	// Variables that will be pased through the API calls
	api._renderProperties = (0, _getRenderProperties2.default)(element);
	api._encodings = [];
	api._options = _defaults2.default;
	api._errorHandler = new _ErrorHandler2.default(api);

	// If text is set, use the simple syntax (render the barcode directly)
	if (typeof text !== "undefined") {
		options = options || {};

		if (!options.format) {
			options.format = autoSelectBarcode();
		}

		api.options(options)[options.format](text, options).render();
	}

	return api;
};

// To make tests work TODO: remove
JsBarcode.getModule = function (name) {
	return _barcodes2.default[name];
};

// Register all barcodes
for (var name in _barcodes2.default) {
	if (_barcodes2.default.hasOwnProperty(name)) {
		// Security check if the propery is a prototype property
		registerBarcode(_barcodes2.default, name);
	}
}
function registerBarcode(barcodes, name) {
	API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
		var api = this;
		return api._errorHandler.wrapBarcodeCall(function () {
			// Ensure text is options.text
			options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;

			var newOptions = (0, _merge2.default)(api._options, options);
			newOptions = (0, _optionsFromStrings2.default)(newOptions);
			var Encoder = barcodes[name];
			var encoded = encode(text, Encoder, newOptions);
			api._encodings.push(encoded);

			return api;
		});
	};
}

// encode() handles the Encoder call and builds the binary string to be rendered
function encode(text, Encoder, options) {
	// Ensure that text is a string
	text = "" + text;

	var encoder = new Encoder(text, options);

	// If the input is not valid for the encoder, throw error.
	// If the valid callback option is set, call it instead of throwing error
	if (!encoder.valid()) {
		throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
	}

	// Make a request for the binary data (and other infromation) that should be rendered
	var encoded = encoder.encode();

	// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
	// Convert to [1-1, 1-2, 2, 3-1, 3-2]
	encoded = (0, _linearizeEncodings2.default)(encoded);

	// Merge
	for (var i = 0; i < encoded.length; i++) {
		encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
	}

	return encoded;
}

function autoSelectBarcode() {
	// If CODE128 exists. Use it
	if (_barcodes2.default["CODE128"]) {
		return "CODE128";
	}

	// Else, take the first (probably only) barcode
	return Object.keys(_barcodes2.default)[0];
}

// Sets global encoder options
// Added to the api by the JsBarcode function
API.prototype.options = function (options) {
	this._options = (0, _merge2.default)(this._options, options);
	return this;
};

// Will create a blank space (usually in between barcodes)
API.prototype.blank = function (size) {
	var zeroes = new Array(size + 1).join("0");
	this._encodings.push({ data: zeroes });
	return this;
};

// Initialize JsBarcode on all HTML elements defined.
API.prototype.init = function () {
	// Should do nothing if no elements where found
	if (!this._renderProperties) {
		return;
	}

	// Make sure renderProperies is an array
	if (!Array.isArray(this._renderProperties)) {
		this._renderProperties = [this._renderProperties];
	}

	var renderProperty;
	for (var i in this._renderProperties) {
		renderProperty = this._renderProperties[i];
		var options = (0, _merge2.default)(this._options, renderProperty.options);

		if (options.format == "auto") {
			options.format = autoSelectBarcode();
		}

		this._errorHandler.wrapBarcodeCall(function () {
			var text = options.value;
			var Encoder = _barcodes2.default[options.format.toUpperCase()];
			var encoded = encode(text, Encoder, options);

			render(renderProperty, encoded, options);
		});
	}
};

// The render API call. Calls the real render function.
API.prototype.render = function () {
	if (!this._renderProperties) {
		throw new _exceptions.NoElementException();
	}

	if (Array.isArray(this._renderProperties)) {
		for (var i = 0; i < this._renderProperties.length; i++) {
			render(this._renderProperties[i], this._encodings, this._options);
		}
	} else {
		render(this._renderProperties, this._encodings, this._options);
	}

	return this;
};

API.prototype._defaults = _defaults2.default;

// Prepares the encodings and calls the renderer
function render(renderProperties, encodings, options) {
	encodings = (0, _linearizeEncodings2.default)(encodings);

	for (var i = 0; i < encodings.length; i++) {
		encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
		(0, _fixOptions2.default)(encodings[i].options);
	}

	(0, _fixOptions2.default)(options);

	var Renderer = renderProperties.renderer;
	var renderer = new Renderer(renderProperties.element, encodings, options);
	renderer.render();

	if (renderProperties.afterRender) {
		renderProperties.afterRender();
	}
}

// Export to browser
if (typeof window !== "undefined") {
	window.JsBarcode = JsBarcode;
}

// Export to jQuery
/*global jQuery */
if (typeof jQuery !== 'undefined') {
	jQuery.fn.JsBarcode = function (content, options) {
		var elementArray = [];
		jQuery(this).each(function () {
			elementArray.push(this);
		});
		return JsBarcode(elementArray, content, options);
	};
}

// Export to commonJS
module.exports = JsBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/Barcode.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Barcode = function Barcode(data, options) {
	_classCallCheck(this, Barcode);

	this.data = data;
	this.text = options.text || data;
	this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is the master class,
// it does require the start code to be included in the string
var CODE128 = function (_Barcode) {
	_inherits(CODE128, _Barcode);

	function CODE128(data, options) {
		_classCallCheck(this, CODE128);

		// Get array of ascii codes from data
		var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

		_this.bytes = data.split('').map(function (char) {
			return char.charCodeAt(0);
		});
		return _this;
	}

	_createClass(CODE128, [{
		key: 'valid',
		value: function valid() {
			// ASCII value ranges 0-127, 200-211
			return (/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
			);
		}

		// The public encoding function

	}, {
		key: 'encode',
		value: function encode() {
			var bytes = this.bytes;
			// Remove the start code from the bytes and set its index
			var startIndex = bytes.shift() - 105;
			// Get start set by index
			var startSet = _constants.SET_BY_CODE[startIndex];

			if (startSet === undefined) {
				throw new RangeError('The encoding does not start with a start character.');
			}

			if (this.shouldEncodeAsEan128() === true) {
				bytes.unshift(_constants.FNC1);
			}

			// Start encode with the right type
			var encodingResult = CODE128.next(bytes, 1, startSet);

			return {
				text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
				data:
				// Add the start bits
				CODE128.getBar(startIndex) +
				// Add the encoded bits
				encodingResult.result +
				// Add the checksum
				CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) +
				// Add the end bits
				CODE128.getBar(_constants.STOP)
			};
		}

		// GS1-128/EAN-128

	}, {
		key: 'shouldEncodeAsEan128',
		value: function shouldEncodeAsEan128() {
			var isEAN128 = this.options.ean128 || false;
			if (typeof isEAN128 === 'string') {
				isEAN128 = isEAN128.toLowerCase() === 'true';
			}
			return isEAN128;
		}

		// Get a bar symbol by index

	}], [{
		key: 'getBar',
		value: function getBar(index) {
			return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
		}

		// Correct an index by a set and shift it from the bytes array

	}, {
		key: 'correctIndex',
		value: function correctIndex(bytes, set) {
			if (set === _constants.SET_A) {
				var charCode = bytes.shift();
				return charCode < 32 ? charCode + 64 : charCode - 32;
			} else if (set === _constants.SET_B) {
				return bytes.shift() - 32;
			} else {
				return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
			}
		}
	}, {
		key: 'next',
		value: function next(bytes, pos, set) {
			if (!bytes.length) {
				return { result: '', checksum: 0 };
			}

			var nextCode = void 0,
			    index = void 0;

			// Special characters
			if (bytes[0] >= 200) {
				index = bytes.shift() - 105;
				var nextSet = _constants.SWAP[index];

				// Swap to other set
				if (nextSet !== undefined) {
					nextCode = CODE128.next(bytes, pos + 1, nextSet);
				}
				// Continue on current set but encode a special character
				else {
						// Shift
						if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
							// Convert the next character so that is encoded correctly
							bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
						}
						nextCode = CODE128.next(bytes, pos + 1, set);
					}
			}
			// Continue encoding
			else {
					index = CODE128.correctIndex(bytes, set);
					nextCode = CODE128.next(bytes, pos + 1, set);
				}

			// Get the correct binary encoding and calculate the weight
			var enc = CODE128.getBar(index);
			var weight = index * pos;

			return {
				result: enc + nextCode.result,
				checksum: weight + nextCode.checksum
			};
		}
	}]);

	return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128A = function (_CODE) {
	_inherits(CODE128A, _CODE);

	function CODE128A(string, options) {
		_classCallCheck(this, CODE128A);

		return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
	}

	_createClass(CODE128A, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128B = function (_CODE) {
	_inherits(CODE128B, _CODE);

	function CODE128B(string, options) {
		_classCallCheck(this, CODE128B);

		return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
	}

	_createClass(CODE128B, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128C = function (_CODE) {
	_inherits(CODE128C, _CODE);

	function CODE128C(string, options) {
		_classCallCheck(this, CODE128C);

		return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
	}

	_createClass(CODE128C, [{
		key: 'valid',
		value: function valid() {
			return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
		}
	}]);

	return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js");

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js");

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CODE128AUTO = function (_CODE) {
	_inherits(CODE128AUTO, _CODE);

	function CODE128AUTO(data, options) {
		_classCallCheck(this, CODE128AUTO);

		// ASCII value ranges 0-127, 200-211
		if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
		} else {
			var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
		}
		return _possibleConstructorReturn(_this);
	}

	return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js");

// Match Set functions
var matchSetALength = function matchSetALength(string) {
	return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};
var matchSetBLength = function matchSetBLength(string) {
	return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};
var matchSetC = function matchSetC(string) {
	return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
};

// CODE128A or CODE128B
function autoSelectFromAB(string, isA) {
	var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
	var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

	if (untilC) {
		return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
	}

	var chars = string.match(new RegExp('^' + ranges + '+'))[0];

	if (chars.length === string.length) {
		return string;
	}

	return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
}

// CODE128C
function autoSelectFromC(string) {
	var cMatch = matchSetC(string);
	var length = cMatch.length;

	if (length === string.length) {
		return string;
	}

	string = string.substring(length);

	// Select A/B depending on the longest match
	var isA = matchSetALength(string) >= matchSetBLength(string);
	return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
}

// Detect Code Set (A, B or C) and format the string

exports["default"] = function (string) {
	var newString = void 0;
	var cLength = matchSetC(string).length;

	// Select 128C if the string start with enough digits
	if (cLength >= 2) {
		newString = _constants.C_START_CHAR + autoSelectFromC(string);
	} else {
		// Select A/B depending on the longest match
		var isA = matchSetALength(string) > matchSetBLength(string);
		newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
	}

	return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
	function (match, char) {
		return String.fromCharCode(203) + char;
	});
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// constants for internal usage
var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2;

// Special characters
var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207;

// Get set by start code
var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE);

// Get next set by code
var SWAP = exports.SWAP = {
	101: SET_A,
	100: SET_B,
	99: SET_C
};

var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105
var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105
var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105

// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4
var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]";

// 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4
var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]";

// 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1
var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)";

// CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).
var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js");

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js");

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js");

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ "./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js");

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.CODE39 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding

var CODE39 = function (_Barcode) {
	_inherits(CODE39, _Barcode);

	function CODE39(data, options) {
		_classCallCheck(this, CODE39);

		data = data.toUpperCase();

		// Calculate mod43 checksum if enabled
		if (options.mod43) {
			data += getCharacter(mod43checksum(data));
		}

		return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
	}

	_createClass(CODE39, [{
		key: "encode",
		value: function encode() {
			// First character is always a *
			var result = getEncoding("*");

			// Take every character and add the binary representation to the result
			for (var i = 0; i < this.data.length; i++) {
				result += getEncoding(this.data[i]) + "0";
			}

			// Last character is always a *
			result += getEncoding("*");

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
		}
	}]);

	return CODE39;
}(_Barcode3.default);

// All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"];

// The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function
var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

// Get the binary representation of a character by converting the encodings
// from decimal to binary
function getEncoding(character) {
	return getBinary(characterValue(character));
}

function getBinary(characterValue) {
	return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
	return characters[characterValue];
}

function characterValue(character) {
	return characters.indexOf(character);
}

function mod43checksum(data) {
	var checksum = 0;
	for (var i = 0; i < data.length; i++) {
		checksum += characterValue(data[i]);
	}

	checksum = checksum % 43;
	return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_93#Detailed_outline

var CODE93 = function (_Barcode) {
	_inherits(CODE93, _Barcode);

	function CODE93(data, options) {
		_classCallCheck(this, CODE93);

		return _possibleConstructorReturn(this, (CODE93.__proto__ || Object.getPrototypeOf(CODE93)).call(this, data, options));
	}

	_createClass(CODE93, [{
		key: 'valid',
		value: function valid() {
			return (/^[0-9A-Z\-. $/+%]+$/.test(this.data)
			);
		}
	}, {
		key: 'encode',
		value: function encode() {
			var symbols = this.data.split('').flatMap(function (c) {
				return _constants.MULTI_SYMBOLS[c] || c;
			});
			var encoded = symbols.map(function (s) {
				return CODE93.getEncoding(s);
			}).join('');

			// Compute checksum symbols
			var csumC = CODE93.checksum(symbols, 20);
			var csumK = CODE93.checksum(symbols.concat(csumC), 15);

			return {
				text: this.text,
				data:
				// Add the start bits
				CODE93.getEncoding('\xff') +
				// Add the encoded bits
				encoded +
				// Add the checksum
				CODE93.getEncoding(csumC) + CODE93.getEncoding(csumK) +
				// Add the stop bits
				CODE93.getEncoding('\xff') +
				// Add the termination bit
				'1'
			};
		}

		// Get the binary encoding of a symbol

	}], [{
		key: 'getEncoding',
		value: function getEncoding(symbol) {
			return _constants.BINARIES[CODE93.symbolValue(symbol)];
		}

		// Get the symbol for a symbol value

	}, {
		key: 'getSymbol',
		value: function getSymbol(symbolValue) {
			return _constants.SYMBOLS[symbolValue];
		}

		// Get the symbol value of a symbol

	}, {
		key: 'symbolValue',
		value: function symbolValue(symbol) {
			return _constants.SYMBOLS.indexOf(symbol);
		}

		// Calculate a checksum symbol

	}, {
		key: 'checksum',
		value: function checksum(symbols, maxWeight) {
			var csum = symbols.slice().reverse().reduce(function (sum, symbol, idx) {
				var weight = idx % maxWeight + 1;
				return sum + CODE93.symbolValue(symbol) * weight;
			}, 0);

			return CODE93.getSymbol(csum % 47);
		}
	}]);

	return CODE93;
}(_Barcode3.default);

exports["default"] = CODE93;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js":
/*!***********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CODE2 = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE3 = _interopRequireDefault(_CODE2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/Code_93#Full_ASCII_Code_93

var CODE93FullASCII = function (_CODE) {
	_inherits(CODE93FullASCII, _CODE);

	function CODE93FullASCII(data, options) {
		_classCallCheck(this, CODE93FullASCII);

		return _possibleConstructorReturn(this, (CODE93FullASCII.__proto__ || Object.getPrototypeOf(CODE93FullASCII)).call(this, data, options));
	}

	_createClass(CODE93FullASCII, [{
		key: 'valid',
		value: function valid() {
			return (/^[\x00-\x7f]+$/.test(this.data)
			);
		}
	}]);

	return CODE93FullASCII;
}(_CODE3.default);

exports["default"] = CODE93FullASCII;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// The position in the array is the (checksum) value
var SYMBOLS = exports.SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-', '.', ' ', '$', '/', '+', '%',
// Only used for csum and multi-symbols character encodings
'($)', '(%)', '(/)', '(+)',
// Start/Stop
'\xff'];

// Order matches SYMBOLS array
var BINARIES = exports.BINARIES = ['100010100', '101001000', '101000100', '101000010', '100101000', '100100100', '100100010', '101010000', '100010010', '100001010', '110101000', '110100100', '110100010', '110010100', '110010010', '110001010', '101101000', '101100100', '101100010', '100110100', '100011010', '101011000', '101001100', '101000110', '100101100', '100010110', '110110100', '110110010', '110101100', '110100110', '110010110', '110011010', '101101100', '101100110', '100110110', '100111010', '100101110', '111010100', '111010010', '111001010', '101101110', '101110110', '110101110', '100100110', '111011010', '111010110', '100110010', '101011110'];

// Multi-symbol characters (Full ASCII Code 93)
var MULTI_SYMBOLS = exports.MULTI_SYMBOLS = {
	'\x00': ['(%)', 'U'],
	'\x01': ['($)', 'A'],
	'\x02': ['($)', 'B'],
	'\x03': ['($)', 'C'],
	'\x04': ['($)', 'D'],
	'\x05': ['($)', 'E'],
	'\x06': ['($)', 'F'],
	'\x07': ['($)', 'G'],
	'\x08': ['($)', 'H'],
	'\x09': ['($)', 'I'],
	'\x0a': ['($)', 'J'],
	'\x0b': ['($)', 'K'],
	'\x0c': ['($)', 'L'],
	'\x0d': ['($)', 'M'],
	'\x0e': ['($)', 'N'],
	'\x0f': ['($)', 'O'],
	'\x10': ['($)', 'P'],
	'\x11': ['($)', 'Q'],
	'\x12': ['($)', 'R'],
	'\x13': ['($)', 'S'],
	'\x14': ['($)', 'T'],
	'\x15': ['($)', 'U'],
	'\x16': ['($)', 'V'],
	'\x17': ['($)', 'W'],
	'\x18': ['($)', 'X'],
	'\x19': ['($)', 'Y'],
	'\x1a': ['($)', 'Z'],
	'\x1b': ['(%)', 'A'],
	'\x1c': ['(%)', 'B'],
	'\x1d': ['(%)', 'C'],
	'\x1e': ['(%)', 'D'],
	'\x1f': ['(%)', 'E'],
	'!': ['(/)', 'A'],
	'"': ['(/)', 'B'],
	'#': ['(/)', 'C'],
	'&': ['(/)', 'F'],
	'\'': ['(/)', 'G'],
	'(': ['(/)', 'H'],
	')': ['(/)', 'I'],
	'*': ['(/)', 'J'],
	',': ['(/)', 'L'],
	':': ['(/)', 'Z'],
	';': ['(%)', 'F'],
	'<': ['(%)', 'G'],
	'=': ['(%)', 'H'],
	'>': ['(%)', 'I'],
	'?': ['(%)', 'J'],
	'@': ['(%)', 'V'],
	'[': ['(%)', 'K'],
	'\\': ['(%)', 'L'],
	']': ['(%)', 'M'],
	'^': ['(%)', 'N'],
	'_': ['(%)', 'O'],
	'`': ['(%)', 'W'],
	'a': ['(+)', 'A'],
	'b': ['(+)', 'B'],
	'c': ['(+)', 'C'],
	'd': ['(+)', 'D'],
	'e': ['(+)', 'E'],
	'f': ['(+)', 'F'],
	'g': ['(+)', 'G'],
	'h': ['(+)', 'H'],
	'i': ['(+)', 'I'],
	'j': ['(+)', 'J'],
	'k': ['(+)', 'K'],
	'l': ['(+)', 'L'],
	'm': ['(+)', 'M'],
	'n': ['(+)', 'N'],
	'o': ['(+)', 'O'],
	'p': ['(+)', 'P'],
	'q': ['(+)', 'Q'],
	'r': ['(+)', 'R'],
	's': ['(+)', 'S'],
	't': ['(+)', 'T'],
	'u': ['(+)', 'U'],
	'v': ['(+)', 'V'],
	'w': ['(+)', 'W'],
	'x': ['(+)', 'X'],
	'y': ['(+)', 'Y'],
	'z': ['(+)', 'Z'],
	'{': ['(%)', 'P'],
	'|': ['(%)', 'Q'],
	'}': ['(%)', 'R'],
	'~': ['(%)', 'S'],
	'\x7f': ['(%)', 'T']
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE93/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE93FullASCII = exports.CODE93 = undefined;

var _CODE = __webpack_require__(/*! ./CODE93.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93.js");

var _CODE2 = _interopRequireDefault(_CODE);

var _CODE93FullASCII = __webpack_require__(/*! ./CODE93FullASCII.js */ "./node_modules/jsbarcode/bin/barcodes/CODE93/CODE93FullASCII.js");

var _CODE93FullASCII2 = _interopRequireDefault(_CODE93FullASCII);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.CODE93 = _CODE2.default;
exports.CODE93FullASCII = _CODE93FullASCII2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Base class for EAN8 & EAN13
var EAN = function (_Barcode) {
	_inherits(EAN, _Barcode);

	function EAN(data, options) {
		_classCallCheck(this, EAN);

		// Make sure the font is not bigger than the space between the guard bars
		var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

		_this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize;

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(EAN, [{
		key: 'encode',
		value: function encode() {
			return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
		}
	}, {
		key: 'leftText',
		value: function leftText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText(from, to) {
			return this.text.substr(from, to);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode(data, structure) {
			return (0, _encoder2.default)(data, structure);
		}
	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var textOptions = { fontSize: this.fontSize };
			var guardOptions = { height: this.guardHeight };

			return [{ data: _constants.SIDE_BIN, options: guardOptions }, { data: this.leftEncode(), text: this.leftText(), options: textOptions }, { data: _constants.MIDDLE_BIN, options: guardOptions }, { data: this.rightEncode(), text: this.rightText(), options: textOptions }, { data: _constants.SIDE_BIN, options: guardOptions }];
		}
	}, {
		key: 'encodeFlat',
		value: function encodeFlat() {
			var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];

			return {
				data: data.join(''),
				text: this.text
			};
		}
	}]);

	return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode

// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit
var checksum = function checksum(number) {
	var res = number.substr(0, 12).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 3 : sum + a;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
	_inherits(EAN13, _EAN);

	function EAN13(data, options) {
		_classCallCheck(this, EAN13);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{12}$/) !== -1) {
			data += checksum(data);
		}

		// Adds a last character to the end of the barcode
		var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

		_this.lastChar = options.lastChar;
		return _this;
	}

	_createClass(EAN13, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(1, 6);
			var structure = _constants.EAN13_STRUCTURE[this.data[0]];
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(7, 6);
			return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
		}

		// The "standard" way of printing EAN13 barcodes with guard bars

	}, {
		key: 'encodeGuarded',
		value: function encodeGuarded() {
			var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this);

			// Extend data with left digit & last character
			if (this.options.displayValue) {
				data.unshift({
					data: '000000000000',
					text: this.text.substr(0, 1),
					options: { textAlign: 'left', fontSize: this.fontSize }
				});

				if (this.options.lastChar) {
					data.push({
						data: '00'
					});
					data.push({
						data: '00000',
						text: this.options.lastChar,
						options: { fontSize: this.fontSize }
					});
				}
			}

			return data;
		}
	}]);

	return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding

var EAN2 = function (_Barcode) {
	_inherits(EAN2, _Barcode);

	function EAN2(data, options) {
		_classCallCheck(this, EAN2);

		return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
	}

	_createClass(EAN2, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{2}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			// Choose the structure based on the number mod 4
			var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];
			return {
				// Start bits + Encode the two digits with 01 in between
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding

var checksum = function checksum(data) {
	var result = data.split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a * 9 : sum + a * 3;
	}, 0);
	return result % 10;
};

var EAN5 = function (_Barcode) {
	_inherits(EAN5, _Barcode);

	function EAN5(data, options) {
		_classCallCheck(this, EAN5);

		return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
	}

	_createClass(EAN5, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{5}$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];
			return {
				data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
				text: this.text
			};
		}
	}]);

	return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _EAN2 = __webpack_require__(/*! ./EAN */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js");

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml

// Calculate the checksum digit
var checksum = function checksum(number) {
	var res = number.substr(0, 7).split('').map(function (n) {
		return +n;
	}).reduce(function (sum, a, idx) {
		return idx % 2 ? sum + a : sum + a * 3;
	}, 0);

	return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
	_inherits(EAN8, _EAN);

	function EAN8(data, options) {
		_classCallCheck(this, EAN8);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{7}$/) !== -1) {
			data += checksum(data);
		}

		return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
	}

	_createClass(EAN8, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
		}
	}, {
		key: 'leftText',
		value: function leftText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
		}
	}, {
		key: 'leftEncode',
		value: function leftEncode() {
			var data = this.data.substr(0, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
		}
	}, {
		key: 'rightText',
		value: function rightText() {
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
		}
	}, {
		key: 'rightEncode',
		value: function rightEncode() {
			var data = this.data.substr(4, 4);
			return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
		}
	}]);

	return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding

var UPC = function (_Barcode) {
	_inherits(UPC, _Barcode);

	function UPC(data, options) {
		_classCallCheck(this, UPC);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{11}$/) !== -1) {
			data += checksum(data);
		}

		var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPC, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
		}
	}, {
		key: "encode",
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: "flatEncoding",
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
			result += "01010";
			result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
			result += "101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "guardedEncoding",
		value: function guardedEncoding() {
			var result = [];

			// Add the first digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(0, 1),
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101" + (0, _encoder2.default)(this.data[0], "L"),
				options: { height: this.guardHeight }
			});

			// Add the left side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
				text: this.text.substr(1, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the middle bits
			result.push({
				data: "01010",
				options: { height: this.guardHeight }
			});

			// Add the right side
			result.push({
				data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
				text: this.text.substr(6, 5),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: (0, _encoder2.default)(this.data[11], "R") + "101",
				options: { height: this.guardHeight }
			});

			// Add the last digit
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text.substr(11, 1),
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}]);

	return UPC;
}(_Barcode3.default);

// Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
	var result = 0;

	var i;
	for (i = 1; i < 11; i += 2) {
		result += parseInt(number[i]);
	}
	for (i = 0; i < 11; i += 2) {
		result += parseInt(number[i]) * 3;
	}

	return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _encoder = __webpack_require__(/*! ./encoder */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js");

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E

var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];

var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
	_inherits(UPCE, _Barcode);

	function UPCE(data, options) {
		_classCallCheck(this, UPCE);

		var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options));
		// Code may be 6 or 8 digits;
		// A 7 digit code is ambiguous as to whether the extra digit
		// is a UPC-A check or number system digit.


		_this.isValid = false;
		if (data.search(/^[0-9]{6}$/) !== -1) {
			_this.middleDigits = data;
			_this.upcA = expandToUPCA(data, "0");
			_this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
			_this.isValid = true;
		} else if (data.search(/^[01][0-9]{7}$/) !== -1) {
			_this.middleDigits = data.substring(1, data.length - 1);
			_this.upcA = expandToUPCA(_this.middleDigits, data[0]);

			if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
				_this.isValid = true;
			} else {
				// checksum mismatch
				return _possibleConstructorReturn(_this);
			}
		} else {
			return _possibleConstructorReturn(_this);
		}

		_this.displayValue = options.displayValue;

		// Make sure the font is not bigger than the space between the guard bars
		if (options.fontSize > options.width * 10) {
			_this.fontSize = options.width * 10;
		} else {
			_this.fontSize = options.fontSize;
		}

		// Make the guard bars go down half the way of the text
		_this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
		return _this;
	}

	_createClass(UPCE, [{
		key: 'valid',
		value: function valid() {
			return this.isValid;
		}
	}, {
		key: 'encode',
		value: function encode() {
			if (this.options.flat) {
				return this.flatEncoding();
			} else {
				return this.guardedEncoding();
			}
		}
	}, {
		key: 'flatEncoding',
		value: function flatEncoding() {
			var result = "";

			result += "101";
			result += this.encodeMiddleDigits();
			result += "010101";

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: 'guardedEncoding',
		value: function guardedEncoding() {
			var result = [];

			// Add the UPC-A number system digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[0],
					options: { textAlign: "left", fontSize: this.fontSize }
				});
			}

			// Add the guard bars
			result.push({
				data: "101",
				options: { height: this.guardHeight }
			});

			// Add the 6 UPC-E digits
			result.push({
				data: this.encodeMiddleDigits(),
				text: this.text.substring(1, 7),
				options: { fontSize: this.fontSize }
			});

			// Add the end bits
			result.push({
				data: "010101",
				options: { height: this.guardHeight }
			});

			// Add the UPC-A check digit beneath the quiet zone
			if (this.displayValue) {
				result.push({
					data: "00000000",
					text: this.text[7],
					options: { textAlign: "right", fontSize: this.fontSize }
				});
			}

			return result;
		}
	}, {
		key: 'encodeMiddleDigits',
		value: function encodeMiddleDigits() {
			var numberSystem = this.upcA[0];
			var checkDigit = this.upcA[this.upcA.length - 1];
			var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
			return (0, _encoder2.default)(this.middleDigits, parity);
		}
	}]);

	return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
	var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
	var expansion = EXPANSIONS[lastUpcE];

	var result = "";
	var digitIndex = 0;
	for (var i = 0; i < expansion.length; i++) {
		var c = expansion[i];
		if (c === 'X') {
			result += middleDigits[digitIndex++];
		} else {
			result += c;
		}
	}

	result = '' + numberSystem + result;
	return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
// Standard start end and middle bits
var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';

var BINARIES = exports.BINARIES = {
	'L': [// The L (left) type of encoding
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'G': [// The G type of encoding
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
	'R': [// The R (right) type of encoding
	'1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
	'O': [// The O (odd) encoding for UPC-E
	'0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
	'E': [// The E (even) encoding for UPC-E
	'0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
};

// Define the EAN-2 structure
var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

// Define the EAN-5 structure
var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG'];

// Define the EAN-13 structure
var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js");

// Encode data string
var encode = function encode(data, structure, separator) {
	var encoded = data.split('').map(function (val, idx) {
		return _constants.BINARIES[structure[idx]];
	}).map(function (val, idx) {
		return val ? val[data[idx]] : '';
	});

	if (separator) {
		var last = data.length - 1;
		encoded = encoded.map(function (val, idx) {
			return idx < last ? val + separator : val;
		});
	}

	return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js");

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js");

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js");

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js");

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js");

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js");

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericBarcode = function (_Barcode) {
	_inherits(GenericBarcode, _Barcode);

	function GenericBarcode(data, options) {
		_classCallCheck(this, GenericBarcode);

		return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
	}

	// Return the corresponding binary numbers for the data provided


	_createClass(GenericBarcode, [{
		key: "encode",
		value: function encode() {
			return {
				data: "10101010101010101010101010101010101010101",
				text: this.text
			};
		}

		// Resturn true/false if the string provided is valid for this encoder

	}, {
		key: "valid",
		value: function valid() {
			return true;
		}
	}]);

	return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(/*! ./constants */ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js");

var _Barcode2 = __webpack_require__(/*! ../Barcode */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ITF = function (_Barcode) {
	_inherits(ITF, _Barcode);

	function ITF() {
		_classCallCheck(this, ITF);

		return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
	}

	_createClass(ITF, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^([0-9]{2})+$/) !== -1;
		}
	}, {
		key: 'encode',
		value: function encode() {
			var _this2 = this;

			// Calculate all the digit pairs
			var encoded = this.data.match(/.{2}/g).map(function (pair) {
				return _this2.encodePair(pair);
			}).join('');

			return {
				data: _constants.START_BIN + encoded + _constants.END_BIN,
				text: this.text
			};
		}

		// Calculate the data of a number pair

	}, {
		key: 'encodePair',
		value: function encodePair(pair) {
			var second = _constants.BINARIES[pair[1]];

			return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
				return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
			}).join('');
		}
	}]);

	return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ITF2 = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Calculate the checksum digit
var checksum = function checksum(data) {
	var res = data.substr(0, 13).split('').map(function (num) {
		return parseInt(num, 10);
	}).reduce(function (sum, n, idx) {
		return sum + n * (3 - idx % 2 * 2);
	}, 0);

	return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
	_inherits(ITF14, _ITF);

	function ITF14(data, options) {
		_classCallCheck(this, ITF14);

		// Add checksum if it does not exist
		if (data.search(/^[0-9]{13}$/) !== -1) {
			data += checksum(data);
		}
		return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
	}

	_createClass(ITF14, [{
		key: 'valid',
		value: function valid() {
			return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
		}
	}]);

	return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/constants.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';

var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js");

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ "./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js");

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup

var MSI = function (_Barcode) {
	_inherits(MSI, _Barcode);

	function MSI(data, options) {
		_classCallCheck(this, MSI);

		return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
	}

	_createClass(MSI, [{
		key: "encode",
		value: function encode() {
			// Start bits
			var ret = "110";

			for (var i = 0; i < this.data.length; i++) {
				// Convert the character to binary (always 4 binary digits)
				var digit = parseInt(this.data[i]);
				var bin = digit.toString(2);
				bin = addZeroes(bin, 4 - bin.length);

				// Add 100 for every zero and 110 for every 1
				for (var b = 0; b < bin.length; b++) {
					ret += bin[b] == "0" ? "100" : "110";
				}
			}

			// End bits
			ret += "1001";

			return {
				data: ret,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.data.search(/^[0-9]+$/) !== -1;
		}
	}]);

	return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
	for (var i = 0; i < n; i++) {
		number = "0" + number;
	}
	return number;
}

exports["default"] = MSI;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI10 = function (_MSI) {
	_inherits(MSI10, _MSI);

	function MSI10(data, options) {
		_classCallCheck(this, MSI10);

		return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
	}

	return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1010 = function (_MSI) {
	_inherits(MSI1010, _MSI);

	function MSI1010(data, options) {
		_classCallCheck(this, MSI1010);

		data += (0, _checksums.mod10)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
	}

	return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI11 = function (_MSI) {
	_inherits(MSI11, _MSI);

	function MSI11(data, options) {
		_classCallCheck(this, MSI11);

		return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
	}

	return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js":
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MSI1110 = function (_MSI) {
	_inherits(MSI1110, _MSI);

	function MSI1110(data, options) {
		_classCallCheck(this, MSI1110);

		data += (0, _checksums.mod11)(data);
		data += (0, _checksums.mod10)(data);
		return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
	}

	return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;
function mod10(number) {
	var sum = 0;
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[i]);
		if ((i + number.length) % 2 === 0) {
			sum += n;
		} else {
			sum += n * 2 % 10 + Math.floor(n * 2 / 10);
		}
	}
	return (10 - sum % 10) % 10;
}

function mod11(number) {
	var sum = 0;
	var weights = [2, 3, 4, 5, 6, 7];
	for (var i = 0; i < number.length; i++) {
		var n = parseInt(number[number.length - 1 - i]);
		sum += weights[i % weights.length] * n;
	}
	return (11 - sum % 11) % 11;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js");

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js");

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js");

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js");

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ "./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js");

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.codabar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml

var codabar = function (_Barcode) {
	_inherits(codabar, _Barcode);

	function codabar(data, options) {
		_classCallCheck(this, codabar);

		if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
			data = "A" + data + "A";
		}

		var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

		_this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
		return _this;
	}

	_createClass(codabar, [{
		key: "valid",
		value: function valid() {
			return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
		}
	}, {
		key: "encode",
		value: function encode() {
			var result = [];
			var encodings = this.getEncodings();
			for (var i = 0; i < this.data.length; i++) {
				result.push(encodings[this.data.charAt(i)]);
				// for all characters except the last, append a narrow-space ("0")
				if (i !== this.data.length - 1) {
					result.push("0");
				}
			}
			return {
				text: this.text,
				data: result.join('')
			};
		}
	}, {
		key: "getEncodings",
		value: function getEncodings() {
			return {
				"0": "101010011",
				"1": "101011001",
				"2": "101001011",
				"3": "110010101",
				"4": "101101001",
				"5": "110101001",
				"6": "100101011",
				"7": "100101101",
				"8": "100110101",
				"9": "110100101",
				"-": "101001101",
				"$": "101100101",
				":": "1101011011",
				"/": "1101101011",
				".": "1101101101",
				"+": "1011011011",
				"A": "1011001001",
				"B": "1001001011",
				"C": "1010010011",
				"D": "1010011001"
			};
		}
	}]);

	return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/index.js":
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ "./node_modules/jsbarcode/bin/barcodes/CODE39/index.js");

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ "./node_modules/jsbarcode/bin/barcodes/CODE128/index.js");

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ "./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js");

var _ITF = __webpack_require__(/*! ./ITF/ */ "./node_modules/jsbarcode/bin/barcodes/ITF/index.js");

var _MSI = __webpack_require__(/*! ./MSI/ */ "./node_modules/jsbarcode/bin/barcodes/MSI/index.js");

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js");

var _codabar = __webpack_require__(/*! ./codabar */ "./node_modules/jsbarcode/bin/barcodes/codabar/index.js");

var _CODE3 = __webpack_require__(/*! ./CODE93/ */ "./node_modules/jsbarcode/bin/barcodes/CODE93/index.js");

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ "./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js");

exports["default"] = {
	CODE39: _CODE.CODE39,
	CODE128: _CODE2.CODE128, CODE128A: _CODE2.CODE128A, CODE128B: _CODE2.CODE128B, CODE128C: _CODE2.CODE128C,
	EAN13: _EAN_UPC.EAN13, EAN8: _EAN_UPC.EAN8, EAN5: _EAN_UPC.EAN5, EAN2: _EAN_UPC.EAN2, UPC: _EAN_UPC.UPC, UPCE: _EAN_UPC.UPCE,
	ITF14: _ITF.ITF14,
	ITF: _ITF.ITF,
	MSI: _MSI.MSI, MSI10: _MSI.MSI10, MSI11: _MSI.MSI11, MSI1010: _MSI.MSI1010, MSI1110: _MSI.MSI1110,
	pharmacode: _pharmacode.pharmacode,
	codabar: _codabar.codabar,
	CODE93: _CODE3.CODE93, CODE93FullASCII: _CODE3.CODE93FullASCII,
	GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.pharmacode = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ "./node_modules/jsbarcode/bin/barcodes/Barcode.js");

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf

var pharmacode = function (_Barcode) {
	_inherits(pharmacode, _Barcode);

	function pharmacode(data, options) {
		_classCallCheck(this, pharmacode);

		var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

		_this.number = parseInt(data, 10);
		return _this;
	}

	_createClass(pharmacode, [{
		key: "encode",
		value: function encode() {
			var z = this.number;
			var result = "";

			// http://i.imgur.com/RMm4UDJ.png
			// (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)
			while (!isNaN(z) && z != 0) {
				if (z % 2 === 0) {
					// Even
					result = "11100" + result;
					z = (z - 2) / 2;
				} else {
					// Odd
					result = "100" + result;
					z = (z - 1) / 2;
				}
			}

			// Remove the two last zeroes
			result = result.slice(0, -2);

			return {
				data: result,
				text: this.text
			};
		}
	}, {
		key: "valid",
		value: function valid() {
			return this.number >= 3 && this.number <= 131070;
		}
	}]);

	return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*eslint no-console: 0 */

var ErrorHandler = function () {
	function ErrorHandler(api) {
		_classCallCheck(this, ErrorHandler);

		this.api = api;
	}

	_createClass(ErrorHandler, [{
		key: "handleCatch",
		value: function handleCatch(e) {
			// If babel supported extending of Error in a correct way instanceof would be used here
			if (e.name === "InvalidInputException") {
				if (this.api._options.valid !== this.api._defaults.valid) {
					this.api._options.valid(false);
				} else {
					throw e.message;
				}
			} else {
				throw e;
			}

			this.api.render = function () {};
		}
	}, {
		key: "wrapBarcodeCall",
		value: function wrapBarcodeCall(func) {
			try {
				var result = func.apply(undefined, arguments);
				this.api._options.valid(true);
				return result;
			} catch (e) {
				this.handleCatch(e);

				return this.api;
			}
		}
	}]);

	return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/exceptions/exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidInputException = function (_Error) {
	_inherits(InvalidInputException, _Error);

	function InvalidInputException(symbology, input) {
		_classCallCheck(this, InvalidInputException);

		var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

		_this.name = "InvalidInputException";

		_this.symbology = symbology;
		_this.input = input;

		_this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
		return _this;
	}

	return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
	_inherits(InvalidElementException, _Error2);

	function InvalidElementException() {
		_classCallCheck(this, InvalidElementException);

		var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

		_this2.name = "InvalidElementException";
		_this2.message = "Not supported type to render on";
		return _this2;
	}

	return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
	_inherits(NoElementException, _Error3);

	function NoElementException() {
		_classCallCheck(this, NoElementException);

		var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

		_this3.name = "NoElementException";
		_this3.message = "No element to render on.";
		return _this3;
	}

	return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/fixOptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = fixOptions;


function fixOptions(options) {
	// Fix the margins
	options.marginTop = options.marginTop || options.margin;
	options.marginBottom = options.marginBottom || options.margin;
	options.marginRight = options.marginRight || options.margin;
	options.marginLeft = options.marginLeft || options.margin;

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js");

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ "./node_modules/jsbarcode/bin/options/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getOptionsFromElement(element) {
	var options = {};
	for (var property in _defaults2.default) {
		if (_defaults2.default.hasOwnProperty(property)) {
			// jsbarcode-*
			if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
				options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
			}

			// data-*
			if (element.hasAttribute("data-" + property.toLowerCase())) {
				options[property] = element.getAttribute("data-" + property.toLowerCase());
			}
		}
	}

	options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value");

	// Since all atributes are string they need to be converted to integers
	options = (0, _optionsFromStrings2.default)(options);

	return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/getRenderProperties.js":
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ "./node_modules/jsbarcode/bin/help/getOptionsFromElement.js");

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ "./node_modules/jsbarcode/bin/renderers/index.js");

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ "./node_modules/jsbarcode/bin/exceptions/exceptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
	// If the element is a string, query select call again
	if (typeof element === "string") {
		return querySelectedRenderProperties(element);
	}
	// If element is array. Recursivly call with every object in the array
	else if (Array.isArray(element)) {
			var returnArray = [];
			for (var i = 0; i < element.length; i++) {
				returnArray.push(getRenderProperties(element[i]));
			}
			return returnArray;
		}
		// If element, render on canvas and set the uri as src
		else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
				return newCanvasRenderProperties(element);
			}
			// If SVG
			else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
					return {
						element: element,
						options: (0, _getOptionsFromElement2.default)(element),
						renderer: _renderers2.default.SVGRenderer
					};
				}
				// If canvas (in browser)
				else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
						return {
							element: element,
							options: (0, _getOptionsFromElement2.default)(element),
							renderer: _renderers2.default.CanvasRenderer
						};
					}
					// If canvas (in node)
					else if (element && element.getContext) {
							return {
								element: element,
								renderer: _renderers2.default.CanvasRenderer
							};
						} else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
							return {
								element: element,
								renderer: _renderers2.default.ObjectRenderer
							};
						} else {
							throw new _exceptions.InvalidElementException();
						}
}

function querySelectedRenderProperties(string) {
	var selector = document.querySelectorAll(string);
	if (selector.length === 0) {
		return undefined;
	} else {
		var returnArray = [];
		for (var i = 0; i < selector.length; i++) {
			returnArray.push(getRenderProperties(selector[i]));
		}
		return returnArray;
	}
}

function newCanvasRenderProperties(imgElement) {
	var canvas = document.createElement('canvas');
	return {
		element: canvas,
		options: (0, _getOptionsFromElement2.default)(imgElement),
		renderer: _renderers2.default.CanvasRenderer,
		afterRender: function afterRender() {
			imgElement.setAttribute("src", canvas.toDataURL());
		}
	};
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/linearizeEncodings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = linearizeEncodings;

// Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
	var linearEncodings = [];
	function nextLevel(encoded) {
		if (Array.isArray(encoded)) {
			for (var i = 0; i < encoded.length; i++) {
				nextLevel(encoded[i]);
			}
		} else {
			encoded.text = encoded.text || "";
			encoded.data = encoded.data || "";
			linearEncodings.push(encoded);
		}
	}
	nextLevel(encodings);

	return linearEncodings;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/merge.js":
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ "./node_modules/jsbarcode/bin/help/optionsFromStrings.js":
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports["default"] = optionsFromStrings;

// Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
	var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

	for (var intOption in intOptions) {
		if (intOptions.hasOwnProperty(intOption)) {
			intOption = intOptions[intOption];
			if (typeof options[intOption] === "string") {
				options[intOption] = parseInt(options[intOption], 10);
			}
		}
	}

	if (typeof options["displayValue"] === "string") {
		options["displayValue"] = options["displayValue"] != "false";
	}

	return options;
}

/***/ }),

/***/ "./node_modules/jsbarcode/bin/options/defaults.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
var defaults = {
	width: 2,
	height: 100,
	format: "auto",
	displayValue: true,
	fontOptions: "",
	font: "monospace",
	text: undefined,
	textAlign: "center",
	textPosition: "bottom",
	textMargin: 2,
	fontSize: 20,
	background: "#ffffff",
	lineColor: "#000000",
	margin: 10,
	marginTop: undefined,
	marginBottom: undefined,
	marginLeft: undefined,
	marginRight: undefined,
	valid: function valid() {}
};

exports["default"] = defaults;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/canvas.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasRenderer = function () {
	function CanvasRenderer(canvas, encodings, options) {
		_classCallCheck(this, CanvasRenderer);

		this.canvas = canvas;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(CanvasRenderer, [{
		key: "render",
		value: function render() {
			// Abort if the browser does not support HTML5 canvas
			if (!this.canvas.getContext) {
				throw new Error('The browser does not support canvas.');
			}

			this.prepareCanvas();
			for (var i = 0; i < this.encodings.length; i++) {
				var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);

				this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
				this.drawCanvasText(encodingOptions, this.encodings[i]);

				this.moveCanvasDrawing(this.encodings[i]);
			}

			this.restoreCanvas();
		}
	}, {
		key: "prepareCanvas",
		value: function prepareCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.save();

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;

			this.canvas.height = maxHeight;

			// Paint the canvas
			ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			if (this.options.background) {
				ctx.fillStyle = this.options.background;
				ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
			}

			ctx.translate(this.options.marginLeft, 0);
		}
	}, {
		key: "drawCanvasBarcode",
		value: function drawCanvasBarcode(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.marginTop + options.fontSize + options.textMargin;
			} else {
				yFrom = options.marginTop;
			}

			ctx.fillStyle = options.lineColor;

			for (var b = 0; b < binary.length; b++) {
				var x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					ctx.fillRect(x, yFrom, options.width, options.height);
				} else if (binary[b]) {
					ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
				}
			}
		}
	}, {
		key: "drawCanvasText",
		value: function drawCanvasText(options, encoding) {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			var font = options.fontOptions + " " + options.fontSize + "px " + options.font;

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				if (options.textPosition == "top") {
					y = options.marginTop + options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.marginTop + options.fontSize;
				}

				ctx.font = font;

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					ctx.textAlign = 'left';
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					ctx.textAlign = 'right';
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						ctx.textAlign = 'center';
					}

				ctx.fillText(encoding.text, x, y);
			}
		}
	}, {
		key: "moveCanvasDrawing",
		value: function moveCanvasDrawing(encoding) {
			var ctx = this.canvas.getContext("2d");

			ctx.translate(encoding.width, 0);
		}
	}, {
		key: "restoreCanvas",
		value: function restoreCanvas() {
			// Get the canvas context
			var ctx = this.canvas.getContext("2d");

			ctx.restore();
		}
	}]);

	return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ "./node_modules/jsbarcode/bin/renderers/canvas.js");

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ "./node_modules/jsbarcode/bin/renderers/svg.js");

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ "./node_modules/jsbarcode/bin/renderers/object.js");

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = { CanvasRenderer: _canvas2.default, SVGRenderer: _svg2.default, ObjectRenderer: _object2.default };

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/object.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectRenderer = function () {
	function ObjectRenderer(object, encodings, options) {
		_classCallCheck(this, ObjectRenderer);

		this.object = object;
		this.encodings = encodings;
		this.options = options;
	}

	_createClass(ObjectRenderer, [{
		key: "render",
		value: function render() {
			this.object.encodings = this.encodings;
		}
	}]);

	return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/shared.js":
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getEncodingHeight(encoding, options) {
	return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
	if (options.displayValue && barcodeWidth < textWidth) {
		if (options.textAlign == "center") {
			return Math.floor((textWidth - barcodeWidth) / 2);
		} else if (options.textAlign == "left") {
			return 0;
		} else if (options.textAlign == "right") {
			return Math.floor(textWidth - barcodeWidth);
		}
	}
	return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
	for (var i = 0; i < encodings.length; i++) {
		var encoding = encodings[i];
		var options = (0, _merge2.default)(barcodeOptions, encoding.options);

		// Calculate the width of the encoding
		var textWidth;
		if (options.displayValue) {
			textWidth = messureText(encoding.text, options, context);
		} else {
			textWidth = 0;
		}

		var barcodeWidth = encoding.data.length * options.width;
		encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));

		encoding.height = getEncodingHeight(encoding, options);

		encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
	}
}

function getTotalWidthOfEncodings(encodings) {
	var totalWidth = 0;
	for (var i = 0; i < encodings.length; i++) {
		totalWidth += encodings[i].width;
	}
	return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
	var maxHeight = 0;
	for (var i = 0; i < encodings.length; i++) {
		if (encodings[i].height > maxHeight) {
			maxHeight = encodings[i].height;
		}
	}
	return maxHeight;
}

function messureText(string, options, context) {
	var ctx;

	if (context) {
		ctx = context;
	} else if (typeof document !== "undefined") {
		ctx = document.createElement("canvas").getContext("2d");
	} else {
		// If the text cannot be messured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font;

	// Calculate the width of the encoding
	var measureTextResult = ctx.measureText(string);
	if (!measureTextResult) {
		// Some implementations don't implement measureText and return undefined.
		// If the text cannot be measured we will return 0.
		// This will make some barcode with big text render incorrectly
		return 0;
	}
	var size = measureTextResult.width;
	return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ "./node_modules/jsbarcode/bin/renderers/svg.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
	value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(/*! ../help/merge.js */ "./node_modules/jsbarcode/bin/help/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ "./node_modules/jsbarcode/bin/renderers/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
	function SVGRenderer(svg, encodings, options) {
		_classCallCheck(this, SVGRenderer);

		this.svg = svg;
		this.encodings = encodings;
		this.options = options;
		this.document = options.xmlDocument || document;
	}

	_createClass(SVGRenderer, [{
		key: "render",
		value: function render() {
			var currentX = this.options.marginLeft;

			this.prepareSVG();
			for (var i = 0; i < this.encodings.length; i++) {
				var encoding = this.encodings[i];
				var encodingOptions = (0, _merge2.default)(this.options, encoding.options);

				var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);

				this.setGroupOptions(group, encodingOptions);

				this.drawSvgBarcode(group, encodingOptions, encoding);
				this.drawSVGText(group, encodingOptions, encoding);

				currentX += encoding.width;
			}
		}
	}, {
		key: "prepareSVG",
		value: function prepareSVG() {
			// Clear the SVG
			while (this.svg.firstChild) {
				this.svg.removeChild(this.svg.firstChild);
			}

			(0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
			var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
			var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);

			var width = totalWidth + this.options.marginLeft + this.options.marginRight;
			this.setSvgAttributes(width, maxHeight);

			if (this.options.background) {
				this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
			}
		}
	}, {
		key: "drawSvgBarcode",
		value: function drawSvgBarcode(parent, options, encoding) {
			var binary = encoding.data;

			// Creates the barcode out of the encoded binary
			var yFrom;
			if (options.textPosition == "top") {
				yFrom = options.fontSize + options.textMargin;
			} else {
				yFrom = 0;
			}

			var barWidth = 0;
			var x = 0;
			for (var b = 0; b < binary.length; b++) {
				x = b * options.width + encoding.barcodePadding;

				if (binary[b] === "1") {
					barWidth++;
				} else if (barWidth > 0) {
					this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
					barWidth = 0;
				}
			}

			// Last draw is needed since the barcode ends with 1
			if (barWidth > 0) {
				this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
			}
		}
	}, {
		key: "drawSVGText",
		value: function drawSVGText(parent, options, encoding) {
			var textElem = this.document.createElementNS(svgns, 'text');

			// Draw the text if displayValue is set
			if (options.displayValue) {
				var x, y;

				textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

				if (options.textPosition == "top") {
					y = options.fontSize - options.textMargin;
				} else {
					y = options.height + options.textMargin + options.fontSize;
				}

				// Draw the text in the correct X depending on the textAlign option
				if (options.textAlign == "left" || encoding.barcodePadding > 0) {
					x = 0;
					textElem.setAttribute("text-anchor", "start");
				} else if (options.textAlign == "right") {
					x = encoding.width - 1;
					textElem.setAttribute("text-anchor", "end");
				}
				// In all other cases, center the text
				else {
						x = encoding.width / 2;
						textElem.setAttribute("text-anchor", "middle");
					}

				textElem.setAttribute("x", x);
				textElem.setAttribute("y", y);

				textElem.appendChild(this.document.createTextNode(encoding.text));

				parent.appendChild(textElem);
			}
		}
	}, {
		key: "setSvgAttributes",
		value: function setSvgAttributes(width, height) {
			var svg = this.svg;
			svg.setAttribute("width", width + "px");
			svg.setAttribute("height", height + "px");
			svg.setAttribute("x", "0px");
			svg.setAttribute("y", "0px");
			svg.setAttribute("viewBox", "0 0 " + width + " " + height);

			svg.setAttribute("xmlns", svgns);
			svg.setAttribute("version", "1.1");

			svg.setAttribute("style", "transform: translate(0,0)");
		}
	}, {
		key: "createGroup",
		value: function createGroup(x, y, parent) {
			var group = this.document.createElementNS(svgns, 'g');
			group.setAttribute("transform", "translate(" + x + ", " + y + ")");

			parent.appendChild(group);

			return group;
		}
	}, {
		key: "setGroupOptions",
		value: function setGroupOptions(group, options) {
			group.setAttribute("style", "fill:" + options.lineColor + ";");
		}
	}, {
		key: "drawRect",
		value: function drawRect(x, y, width, height, parent) {
			var rect = this.document.createElementNS(svgns, 'rect');

			rect.setAttribute("x", x);
			rect.setAttribute("y", y);
			rect.setAttribute("width", width);
			rect.setAttribute("height", height);

			parent.appendChild(rect);

			return rect;
		}
	}]);

	return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.total {\n    font-weight: bold;\n    font-size: 14px;\n}\n.bg-selected-card{\n    background-color: #dcdfe6;\n}\n.input-with-icon {\n  display: flex;\n  align-items: center;\n}\n.scan-icon {\n  width: 50px; /* Adjust size as needed */\n  height: 50px;\n  margin-right: 8px; /* Adjust spacing as needed */\n  cursor: pointer;\n}\n\n  /* Media query*/\n@media screen and (min-width: 1350px){\n.pos-button-actions {\n      position: fixed;\n}\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_style_index_0_id_b00e3e2e_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_style_index_0_id_b00e3e2e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_style_index_0_id_b00e3e2e_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-barcode/index.js":
/*!*******************************************!*\
  !*** ./node_modules/vue-barcode/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var JsBarcode = __webpack_require__(/*! jsbarcode */ "./node_modules/jsbarcode/bin/JsBarcode.js");

var VueBarcode = {
   render: function (createElement) {
    return createElement('div', [
      createElement(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vue-barcode-element']
      }),
      createElement('div', {
        style: { display: this.valid ? 'none' : undefined }
      }, this.$slots.default),
    ]);
  },
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type:  [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions : [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
          return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
  },
  mounted: function(){
    this.$watch('$props', render, { deep: true, immediate: true });
    render.call(this);
  },
  data: function(){
    return {valid: true};
  }
};

function render(){
  var that = this;

  var settings = {
    format: this.format,
    width: this.width,
    height: this.height,
    displayValue: this.displayValue,
    text: this.text,
    fontOptions: this.fontOptions,
    font: this.font,
    textAlign: this.textAlign,
    textPosition: this.textPosition,
    textMargin: this.textMargin,
    fontSize: this.fontSize,
    background: this.background,
    lineColor: this.lineColor,
    margin: this.margin,
    marginTop: this.marginTop,
    marginBottom: this.marginBottom,
    marginLeft: this.marginLeft,
    marginRight: this.marginRight,
    flat: this.flat,
    ean128: this.ean128,
    valid: function (valid) {
      that.valid = valid;
    },
    elementTag: this.elementTag
  };

  removeUndefinedProps(settings);

  JsBarcode(this.$el.querySelector('.vue-barcode-element'), String(this.value), settings);
}

function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

module.exports = VueBarcode;


/***/ }),

/***/ "./node_modules/vue-easy-print/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vue-easy-print/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   install: () => (/* binding */ install)
/* harmony export */ });
/* harmony import */ var _lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/vue-easy-print.vue */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue");

function install(Vue) {
  Vue.component(_lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
  /* -- Add more components here -- */
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_vue_easy_print_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue":
/*!****************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-easy-print.vue?vue&type=template&id=670c23a6 */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6");
/* harmony import */ var _vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-easy-print.vue?vue&type=script&lang=js */ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.render,
  _vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "node_modules/vue-easy-print/src/lib/vue-easy-print.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/index.js??vue-loader-options!./vue-easy-print.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6":
/*!**********************************************************************************************!*\
  !*** ./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_easy_print_vue_vue_type_template_id_670c23a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib/index.js??vue-loader-options!./vue-easy-print.vue?vue&type=template&id=670c23a6 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6");


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "vue-easy-print",
    components: {},
    props: {
        // 针对分页表格模式：末尾空白行插入
        spaceRow: {
            type: Boolean,
            default: false
        },

        // 针对分页表格模式：传入的打印数据。
        tableData: {
            type: Object,
            default() {
                return undefined;
            }
        },
        // 是否显示表格
        tableShow: {
            type: Boolean,
            default: false
        },
        // 是否显示默认的打印按钮
        buttonShow: {
            type: Boolean,
            default: false
        },
        buttonClass: {
            type: String,
            default: "el-button el-button--default"
        },
        // 每页多少行
        onePageRow: {
            type: Number,
            default: 5
        },

        beforeCopy: Function,
        beforePrint: Function
    },
    data() {
        return {
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let printI = document.getElementById("easyPrintIframe");
            if (!printI) {
                printI = document.createElement("iframe");
                printI.id = "easyPrintIframe";
                printI.style.position = 'fixed'
                printI.style.width = '0'
                printI.style.height = '0'
                printI.style.top = '-100px'

                // 兼容ie
                if (
                    window.location.hostname !== document.domain &&
                    navigator.userAgent.match(/msie/i)
                ) {
                    
                    printI.src =
                        'javascript:document.write("<head><script>document.domain=\\"' +
                        document.domain +
                        '\\";</s' +
                        'cript></head><body></body>")';
                   
                }
                printI.onload = () => {
                    this.getStyle();
                }
                 
                document.body.appendChild(printI);
            }else{
                this.getStyle();
            } 
        },
        print() {
            if (typeof this.beforeCopy === "function") {
                // 检测到有复制前需要执行的功能
                this.beforeCopy();
            }

            let $iframe = document.getElementById("easyPrintIframe");
            // 复制body，打印内容
            $iframe.contentDocument.body.innerHTML = this.$refs.template.innerHTML;

            if (typeof this.beforePrint === "function") {
                // 检测到有打印前需要执行的功能
                // 比如有些二维码组件无法直接复制dom完成。
                this.beforePrint();
            }
            
            // 执行打印
            this.$nextTick(() => { 
                setTimeout(() => {
                    $iframe.contentWindow.print();
                }, 100);
             })
        },
        getStyle() {
            let printI = document.getElementById("easyPrintIframe");
            var str = "",
                styles1 = document.querySelectorAll("style");
            for (var i = 0; i < styles1.length; i++) {
                str += styles1[i].outerHTML;
            }

            printI.contentDocument.head.innerHTML = str;
            // 添加link引入
            let styles = document.querySelectorAll("link");
            for (let i = 0; i < styles.length; i++) {
                // chrome 正常，firefox不正常，能执行到，但是添加没结果
                let link = document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                if(styles[i].type) link.setAttribute("type", styles[i].type);
                else link.setAttribute("type", 'text/css');
                link.setAttribute("href", styles[i].href);
                link.setAttribute('media','all');
                printI.contentDocument.head.appendChild(link);
            }
            
        },
        getChineseNumber(currencyDigits) {
            // 转换数字到中文大写，请用prop传递给模版组件，这个函数在网上扣的。
            var MAXIMUM_NUMBER = 99999999999.99;
            // Predefine the radix characters and currency symbols for output:
            var CN_ZERO = "零";
            var CN_ONE = "壹";
            var CN_TWO = "贰";
            var CN_THREE = "叁";
            var CN_FOUR = "肆";
            var CN_FIVE = "伍";
            var CN_SIX = "陆";
            var CN_SEVEN = "柒";
            var CN_EIGHT = "捌";
            var CN_NINE = "玖";
            var CN_TEN = "拾";
            var CN_HUNDRED = "佰";
            var CN_THOUSAND = "仟";
            var CN_TEN_THOUSAND = "万";
            var CN_HUNDRED_MILLION = "亿";
            var CN_SYMBOL = ""; // 可以设置前缀 比如 人民币
            var CN_DOLLAR = "元";
            var CN_TEN_CENT = "角";
            var CN_CENT = "分";
            var CN_INTEGER = "整";

            // Variables:
            var integral; // Represent integral part of digit number.
            var decimal; // Represent decimal part of digit number.
            var outputCharacters; // The output result.
            var parts;
            var digits, radices, bigRadices, decimals;
            var zeroCount;
            var i, p, d;
            var quotient, modulus;

            // Validate input string:
            if (currencyDigits === undefined) {
                return "";
            }
            currencyDigits = currencyDigits.toString();
            if (currencyDigits == "") {
                // alert("Empty input!");
                return "";
            }
            if (currencyDigits.match(/[^,.\d]/) != null) {
                // alert("Invalid characters in the input string!");
                return "";
            }
            if (
                currencyDigits.match(
                    /^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/
                ) == null
            ) {
                // alert("Illegal format of digit number!");
                return "";
            }

            // Normalize the format of input digits:
            currencyDigits = currencyDigits.replace(/,/g, ""); // Remove comma delimiters.
            currencyDigits = currencyDigits.replace(/^0+/, ""); // Trim zeros at the beginning.
            // Assert the number is not greater than the maximum number.
            if (Number(currencyDigits) > MAXIMUM_NUMBER) {
                alert("您输入的金额太大，请重新输入!");
                return "";
            }

            // Process the coversion from currency digits to characters:
            // Separate integral and decimal parts before processing coversion:
            parts = currencyDigits.split(".");
            if (parts.length > 1) {
                integral = parts[0];
                decimal = parts[1];
                // Cut down redundant decimal digits that are after the second.
                decimal = decimal.substr(0, 2);
            } else {
                integral = parts[0];
                decimal = "";
            }
            // Prepare the characters corresponding to the digits:
            digits = new Array(
                CN_ZERO,
                CN_ONE,
                CN_TWO,
                CN_THREE,
                CN_FOUR,
                CN_FIVE,
                CN_SIX,
                CN_SEVEN,
                CN_EIGHT,
                CN_NINE
            );
            radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
            bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
            decimals = new Array(CN_TEN_CENT, CN_CENT);
            // Start processing:
            outputCharacters = "";
            // Process integral part if it is larger than 0:
            if (Number(integral) > 0) {
                zeroCount = 0;
                for (i = 0; i < integral.length; i++) {
                    p = integral.length - i - 1;
                    d = integral.substr(i, 1);
                    quotient = p / 4;
                    modulus = p % 4;
                    if (d == "0") {
                        zeroCount++;
                    } else {
                        if (zeroCount > 0) {
                            outputCharacters += digits[0];
                        }
                        zeroCount = 0;
                        outputCharacters +=
                            digits[Number(d)] + radices[modulus];
                    }
                    if (modulus == 0 && zeroCount < 4) {
                        outputCharacters += bigRadices[quotient];
                    }
                }
                outputCharacters += CN_DOLLAR;
            }
            // Process decimal part if there is:
            if (decimal != "") {
                for (i = 0; i < decimal.length; i++) {
                    d = decimal.substr(i, 1);
                    if (d != "0") {
                        outputCharacters += digits[Number(d)] + decimals[i];
                    }
                }
            }
            // Confirm and return the final output string:
            if (outputCharacters == "") {
                outputCharacters = CN_ZERO + CN_DOLLAR;
            }
            if (decimal == "") {
                outputCharacters += CN_INTEGER;
            }
            outputCharacters = CN_SYMBOL + outputCharacters;
            return outputCharacters;
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./node_modules/vue-easy-print/src/lib/vue-easy-print.vue?vue&type=template&id=670c23a6 ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.tableShow),expression:"tableShow"}],ref:"template"},[_vm._t("default",function(){return [_c('span',[_vm._v("编写你自己的打印区域组件，然后slot插入到vue-easy-print")])]},{"getChineseNumber":_vm.getChineseNumber})],2),_vm._v(" "),(_vm.buttonShow)?_c('button',{class:_vm.buttonClass,attrs:{"type":"button"},on:{"click":_vm.print}},[_c('span',[_vm._v("开始打印")])]):_vm._e()])}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pos_page"},[_c('div',{staticClass:"container-fluid p-0 app-admin-wrap layout-sidebar-large clearfix",attrs:{"id":"pos"}},[(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('b-row',[_c('b-col',{attrs:{"md":"5"}},[_c('b-card',{staticClass:"card-order",attrs:{"no-body":""}},[_c('div',{staticClass:"main-header"},[_c('div',{staticClass:"logo"},[_c('router-link',{attrs:{"to":"/app/dashboard"}},[_c('img',{attrs:{"src":'/images/'+_vm.currentUser.logo,"alt":"","width":"60","height":"60"}})])],1),_vm._v(" "),_c('div',{staticClass:"mx-auto"}),_vm._v(" "),_c('div',{staticClass:"header-part-right"},[_c('i',{staticClass:"i-Full-Screen header-icon d-none d-sm-inline-block",on:{"click":_vm.handleFullScreen}}),_vm._v(" "),_c('div',{staticClass:"dropdown"},[_c('b-dropdown',{staticClass:"m-md-2",attrs:{"id":"dropdown","text":"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"","right":"","variant":"link"}},[_c('template',{slot:"button-content"},[_c('i',{staticClass:"i-Globe text-muted header-icon",attrs:{"role":"button","id":"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),_vm._v(" "),_c('vue-perfect-scrollbar',{ref:"myData",staticClass:"dropdown-menu-left rtl-ps-none notification-dropdown ps scroll",attrs:{"settings":{ suppressScrollX: true, wheelPropagation: false }}},[_c('div',{staticClass:"menu-icon-grid"},[_c('a',{on:{"click":function($event){return _vm.SetLocal('en')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-gb",attrs:{"title":"en"}}),_vm._v(" English\n            ")]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('fr')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-fr",attrs:{"title":"fr"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("French")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('ar')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-sa",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Arabic")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('tur')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-tr",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Turkish")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('sm_ch')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-cn",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Simplified Chinese")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('thai')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-th",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Thaï")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('hn')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-in",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Hindi")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('de')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-de",attrs:{"title":"de"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("German")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('es')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-es",attrs:{"title":"es"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Spanish")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('it')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-it",attrs:{"title":"it"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Italien")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('Ind')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-id",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Indonesian")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('tr_ch')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-cn",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Traditional Chinese")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('ru')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-ru",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Russian")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('vn')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-vn",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Vietnamese")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('kr')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-kr",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Korean")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('ba')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-bd",attrs:{"title":"sa"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Bangla")])]),_vm._v(" "),_c('a',{on:{"click":function($event){return _vm.SetLocal('br')}}},[_c('i',{staticClass:"flag-icon flag-icon-squared flag-icon-pt",attrs:{"title":"pt"}}),_vm._v(" "),_c('span',{staticClass:"title-lang"},[_vm._v("Portuguese")])])])])],2)],1),_vm._v(" "),_c('div',{staticClass:"dropdown"},[_c('b-dropdown',{staticClass:"m-md-2 user col align-self-end",attrs:{"id":"dropdown-1","text":"Dropdown Button","toggle-class":"text-decoration-none","no-caret":"","variant":"link","right":""}},[_c('template',{slot:"button-content"},[_c('img',{attrs:{"src":'/images/avatar/'+_vm.currentUser.avatar,"id":"userDropdown","alt":"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown-menu-left",attrs:{"aria-labelledby":"userDropdown"}},[_c('div',{staticClass:"dropdown-header"},[_c('i',{staticClass:"i-Lock-User mr-1"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.currentUser.username))])]),_vm._v(" "),_c('router-link',{staticClass:"dropdown-item",attrs:{"to":"/app/profile"}},[_vm._v(_vm._s(_vm.$t('profil')))]),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('setting_system'))?_c('router-link',{staticClass:"dropdown-item",attrs:{"to":"/app/settings/System_settings"}},[_vm._v(_vm._s(_vm.$t('Settings')))]):_vm._e(),_vm._v(" "),_c('a',{staticClass:"dropdown-item",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.logoutUser.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.$t('logout')))])],1)],2)],1)])]),_vm._v(" "),_c('validation-observer',{ref:"create_pos"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Pos.apply(null, arguments)}}},[_c('b-card-body',[_c('b-row',[_c('b-modal',{attrs:{"hide-footer":"","id":"open_scan","size":"md","title":"Barcode Scanner"}},[_c('qrcode-scanner',{staticStyle:{"width":"100%","height":"calc(100vh - 56px)"},attrs:{"qrbox":250,"fps":10},on:{"result":_vm.onScan}})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Customer","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var valid = ref.valid;
var errors = ref.errors;
return _c('b-input-group',{staticClass:"input-customer"},[_c('v-select',{staticClass:"w-100",class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Customer'),"options":_vm.clients.map(function (clients) { return ({label: clients.name, value: clients.id}); })},on:{"input":_vm.onClientSelected},model:{value:(_vm.sale.client_id),callback:function ($$v) {_vm.$set(_vm.sale, "client_id", $$v)},expression:"sale.client_id"}}),_vm._v(" "),_c('b-input-group-append',[_c('b-button',{attrs:{"variant":"primary"},on:{"click":function($event){return _vm.New_Client()}}},[_c('span',[_c('i',{staticClass:"i-Add-User"})])])],1)],1)}}],null,false,1563927324)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"warehouse","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var valid = ref.valid;
var errors = ref.errors;
return _c('b-form-group',{staticClass:"mt-2"},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"disabled":_vm.details.length > 0,"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Warehouse'),"options":_vm.warehouses.map(function (warehouses) { return ({label: warehouses.name, value: warehouses.id}); })},on:{"input":_vm.Selected_Warehouse},model:{value:(_vm.sale.warehouse_id),callback:function ($$v) {_vm.$set(_vm.sale, "warehouse_id", $$v)},expression:"sale.warehouse_id"}})],1)}}],null,false,1940612659)})],1),_vm._v(" "),_c('b-col',{staticClass:"mt-2",attrs:{"md":"12"}},[_c('div',{staticClass:"pos-detail"},[_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"table table-striped"},[_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('ProductName')))]),_vm._v(" "),_c('th',{attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('Price')))]),_vm._v(" "),_c('th',{staticClass:"text-center",attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('Qty')))]),_vm._v(" "),_c('th',{staticClass:"text-center",attrs:{"scope":"col"}},[_vm._v(_vm._s(_vm.$t('SubTotal')))]),_vm._v(" "),_c('th',{staticClass:"text-center",attrs:{"scope":"col"}},[_c('i',{staticClass:"fa fa-trash"})])])]),_vm._v(" "),_c('tbody',[(_vm.details.length <= 0)?_c('tr',[_c('td',{attrs:{"colspan":"5"}},[_vm._v(_vm._s(_vm.$t('NodataAvailable')))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.details),function(detail,index){return _c('tr',{key:index},[_c('td',[_c('span',[_vm._v(_vm._s(detail.code))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"badge badge-success"},[_vm._v(_vm._s(detail.name))]),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('edit_product_sale'))?_c('i',{staticClass:"i-Edit text-success cursor-pointer",on:{"click":function($event){return _vm.Modal_Updat_Detail(detail)}}}):_vm._e()]),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(detail.Total_price, 2)))]),_vm._v(" "),_c('td',[_c('div',{staticClass:"quantity"},[_c('b-input-group',[_c('b-input-group-prepend',[_c('span',{staticClass:"btn btn-primary btn-sm",on:{"click":function($event){return _vm.decrement(detail ,detail.detail_id)}}},[_vm._v("-")])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(detail.quantity),expression:"detail.quantity",modifiers:{"number":true}}],staticClass:"form-control",domProps:{"value":(detail.quantity)},on:{"keyup":function($event){return _vm.Verified_Qty(detail,detail.detail_id)},"input":function($event){if($event.target.composing){ return; }_vm.$set(detail, "quantity", _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}}),_vm._v(" "),_c('b-input-group-append',[_c('span',{staticClass:"btn btn-primary btn-sm",on:{"click":function($event){return _vm.increment(detail.detail_id)}}},[_vm._v("+")])])],1)],1)]),_vm._v(" "),_c('td',{staticClass:"text-center"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(detail.subtotal.toFixed(2)))]),_vm._v(" "),_c('td',[_c('a',{attrs:{"title":"Delete"},on:{"click":function($event){return _vm.delete_Product_Detail(detail.detail_id)}}},[_c('i',{staticClass:"i-Close-Window text-25 text-danger cursor-pointer"})])])])})],2)])])])])],1),_vm._v(" "),_c('div',{staticClass:"footer_panel"},[_c('b-row',[_c('b-col',{attrs:{"md":"12"}},[_c('div',{staticClass:"grandtotal"},[_c('span',[_vm._v(_vm._s(_vm.$t("Total_Payable"))+" : "+_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.GrandTotal.toFixed(2)))])])]),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('edit_tax_discount_shipping_sale'))?_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Order Tax","rules":{ regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Tax'),"append":"%"}},[_c('b-input-group',{attrs:{"append":"%"}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"OrderTax-feedback","label":"Order Tax"},on:{"keyup":function($event){return _vm.keyup_OrderTax()}},model:{value:(_vm.sale.tax_rate),callback:function ($$v) {_vm.$set(_vm.sale, "tax_rate", _vm._n($$v))},expression:"sale.tax_rate"}})],1),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"OrderTax-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1527368817)})],1):_vm._e(),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('edit_tax_discount_shipping_sale'))?_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Discount","rules":{ regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Discount'),"append":"%"}},[_c('b-input-group',{attrs:{"append":_vm.currentUser.currency}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Discount-feedback","label":"Discount"},on:{"keyup":function($event){return _vm.keyup_Discount()}},model:{value:(_vm.sale.discount),callback:function ($$v) {_vm.$set(_vm.sale, "discount", _vm._n($$v))},expression:"sale.discount"}})],1),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Discount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,2452246776)})],1):_vm._e(),_vm._v(" "),(_vm.currentUserPermissions && _vm.currentUserPermissions.includes('edit_tax_discount_shipping_sale'))?_c('b-col',{attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Shipping","rules":{ regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Shipping')}},[_c('b-input-group',{attrs:{"append":_vm.currentUser.currency}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"Shipping-feedback","label":"Shipping"},on:{"keyup":function($event){return _vm.keyup_Shipping()}},model:{value:(_vm.sale.shipping),callback:function ($$v) {_vm.$set(_vm.sale, "shipping", _vm._n($$v))},expression:"sale.shipping"}})],1),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Shipping-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1943903941)})],1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('validation-observer',{ref:"Update_Detail"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"form_Update_Detail","title":_vm.detail.name}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.submit_Update_Detail.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Product Price","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('ProductPrice') + ' ' + '*',"id":"Price-input"}},[_c('b-form-input',{attrs:{"label":"Product Price","state":_vm.getValidationState(validationContext),"aria-describedby":"Price-feedback"},model:{value:(_vm.detail.Unit_price),callback:function ($$v) {_vm.$set(_vm.detail, "Unit_price", $$v)},expression:"detail.Unit_price"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Price-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1779724076)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Tax Method","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var valid = ref.valid;
var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('TaxMethod') + ' ' + '*'}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Method'),"options":[
                          {label: 'Exclusive', value: '1'},
                          {label: 'Inclusive', value: '2'}
                         ]},model:{value:(_vm.detail.tax_method),callback:function ($$v) {_vm.$set(_vm.detail, "tax_method", $$v)},expression:"detail.tax_method"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,2540064975)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Tax","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Tax') + ' ' + '*'}},[_c('b-input-group',{attrs:{"append":"%"}},[_c('b-form-input',{attrs:{"label":"Tax","state":_vm.getValidationState(validationContext),"aria-describedby":"Tax-feedback"},model:{value:(_vm.detail.tax_percent),callback:function ($$v) {_vm.$set(_vm.detail, "tax_percent", $$v)},expression:"detail.tax_percent"}})],1),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Tax-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,3285426138)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Discount Method","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                         var valid = ref.valid;
                         var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('Discount_Method') + ' ' + '*'}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Method'),"state":errors[0] ? false : (valid ? true : null),"options":[
                              {label: 'Percent %', value: '1'},
                              {label: 'Fixed', value: '2'}
                            ]},model:{value:(_vm.detail.discount_Method),callback:function ($$v) {_vm.$set(_vm.detail, "discount_Method", $$v)},expression:"detail.discount_Method"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,4285478530)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Discount Rate","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Discount') + ' ' + '*'}},[_c('b-form-input',{attrs:{"label":"Discount","state":_vm.getValidationState(validationContext),"aria-describedby":"Discount-feedback"},model:{value:(_vm.detail.discount),callback:function ($$v) {_vm.$set(_vm.detail, "discount", $$v)},expression:"detail.discount"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Discount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,378765320)})],1),_vm._v(" "),(_vm.detail.product_type != 'is_service')?_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Unit Sale","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                            var valid = ref.valid;
                            var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('UnitSale') + ' ' + '*'}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"placeholder":_vm.$t('Choose_Unit_Sale'),"reduce":function (label) { return label.value; },"options":_vm.units.map(function (units) { return ({label: units.name, value: units.id}); })},model:{value:(_vm.detail.sale_unit_id),callback:function ($$v) {_vm.$set(_vm.detail, "sale_unit_id", $$v)},expression:"detail.sale_unit_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,1636962053)})],1):_vm._e(),_vm._v(" "),_c('b-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.detail.is_imei),expression:"detail.is_imei"}],attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Add_product_IMEI_Serial_number')}},[_c('b-form-input',{attrs:{"label":"Add_product_IMEI_Serial_number","placeholder":_vm.$t('Add_product_IMEI_Serial_number')},model:{value:(_vm.detail.imei_number),callback:function ($$v) {_vm.$set(_vm.detail, "imei_number", $$v)},expression:"detail.imei_number"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_vm._v(_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"7"}},[_c('b-card',{staticClass:"list-grid"},[_c('b-row',[_c('b-col',{attrs:{"md":"6"}},[_c('button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-category",modifiers:{"sidebar-category":true}}],staticClass:"btn btn-outline-info mt-1 btn-block"},[_c('i',{staticClass:"i-Two-Windows"}),_vm._v("\n                "+_vm._s(_vm.$t('ListofCategory'))+"\n              ")])]),_vm._v(" "),_c('b-col',{attrs:{"md":"6"}},[_c('button',{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-brand",modifiers:{"sidebar-brand":true}}],staticClass:"btn btn-outline-info mt-1 btn-block"},[_c('i',{staticClass:"i-Library"}),_vm._v("\n                "+_vm._s(_vm.$t('ListofBrand'))+"\n              ")])]),_vm._v(" "),_c('b-col',{staticClass:"mt-2 mb-2",attrs:{"md":"12"}},[_c('div',{staticClass:"autocomplete",attrs:{"id":"autocomplete"}},[_c('div',{staticClass:"input-with-icon"},[_c('img',{staticClass:"scan-icon",attrs:{"src":"/assets_setup/scan.png","alt":"Scan"},on:{"click":_vm.showModal}}),_vm._v(" "),_c('input',{ref:"product_autocomplete",staticClass:"autocomplete-input",attrs:{"placeholder":_vm.$t('Scan_Search_Product_by_Code_Name')},on:{"input":function (e) { return _vm.search_input = e.target.value; },"keyup":function($event){return _vm.search(_vm.search_input)},"focus":_vm.handleFocus,"blur":_vm.handleBlur}})]),_vm._v(" "),_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.focused),expression:"focused"}],staticClass:"autocomplete-result-list"},_vm._l((_vm.product_filter),function(product_fil){return _c('li',{staticClass:"autocomplete-result",on:{"mousedown":function($event){return _vm.SearchProduct(product_fil)}}},[_vm._v(_vm._s(_vm.getResultValue(product_fil)))])}),0)])]),_vm._v(" "),_c('div',{staticClass:"col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2"},_vm._l((_vm.products),function(product){return _c('div',{staticClass:"card o-hidden bd-highlight m-1",on:{"click":function($event){return _vm.Check_Product_Exist(product , product.id)}}},[_c('div',{staticClass:"list-thumb d-flex"},[_c('img',{attrs:{"alt":"","src":'/images/products/'+product.image}})]),_vm._v(" "),_c('div',{staticClass:"flex-grow-1 d-bock"},[_c('div',{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"},[_c('div',{staticClass:"w-40 w-sm-100 item-title"},[_vm._v(_vm._s(product.name))]),_vm._v(" "),_c('p',{staticClass:"text-muted text-small w-15 w-sm-100 mb-2"},[_vm._v(_vm._s(product.code))]),_vm._v(" "),_c('span',{staticClass:"badge badge-primary w-15 w-sm-100 mb-2"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(product.Net_price , 2)))]),_vm._v(" "),(product.product_type != 'is_service')?_c('p',{staticClass:"m-0 text-muted text-small w-15 w-sm-100 d-none d-lg-block item-badges"},[_c('span',{staticClass:"badge badge-info"},[_vm._v(_vm._s(_vm.formatNumber(product.qte_sale , 2))+" "+_vm._s(product.unitSale))])]):_vm._e()])])])}),0)],1),_vm._v(" "),_c('b-row',{staticClass:"mb-3"},[_c('b-col',{staticClass:"mt-4",attrs:{"md":"12"}},[_c('b-pagination',{staticClass:"my-0 gull-pagination align-items-center",attrs:{"total-rows":_vm.product_totalRows,"per-page":_vm.product_perPage,"align":"center","first-text":"","last-text":""},on:{"change":_vm.Product_onPageChanged},model:{value:(_vm.product_currentPage),callback:function ($$v) {_vm.product_currentPage=$$v},expression:"product_currentPage"}},[_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"prev-text"},slot:"prev-text"},[_c('i',{staticClass:"i-Arrow-Left text-40"})]),_vm._v(" "),_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"next-text"},slot:"next-text"},[_c('i',{staticClass:"i-Arrow-Right text-40"})])])],1)],1)],1)],1),_vm._v(" "),_c('b-sidebar',{attrs:{"id":"sidebar-brand","title":_vm.$t('ListofBrand'),"bg-variant":"white","right":"","shadow":""}},[_c('div',{staticClass:"px-3 py-2"},[_c('b-row',[_c('div',{staticClass:"col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2"},[_c('div',{staticClass:"card o-hidden bd-highlight m-1",class:{ 'brand-Active' : _vm.brand_id == ''},on:{"click":function($event){return _vm.GetAllBrands()}}},[_c('div',{staticClass:"list-thumb d-flex"},[_c('img',{attrs:{"alt":"","src":'/images/no-image.png'}})]),_vm._v(" "),_c('div',{staticClass:"flex-grow-1 d-bock"},[_c('div',{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t('All_Brand')))])])])]),_vm._v(" "),_vm._l((_vm.paginated_Brands),function(brand){return _c('div',{key:brand.id,staticClass:"card o-hidden bd-highlight m-1",class:{ 'brand-Active' : brand.id === _vm.brand_id},on:{"click":function($event){return _vm.Products_by_Brands(brand.id)}}},[_c('img',{attrs:{"alt":"","src":'/images/brands/'+brand.image}}),_vm._v(" "),_c('div',{staticClass:"flex-grow-1 d-bock"},[_c('div',{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(brand.name))])])])])})],2)]),_vm._v(" "),_c('b-row',[_c('b-col',{staticClass:"mt-4",attrs:{"md":"12"}},[_c('b-pagination',{staticClass:"my-0 gull-pagination align-items-center",attrs:{"total-rows":_vm.brand_totalRows,"per-page":_vm.brand_perPage,"align":"center","first-text":"","last-text":""},on:{"change":_vm.BrandonPageChanged},model:{value:(_vm.brand_currentPage),callback:function ($$v) {_vm.brand_currentPage=$$v},expression:"brand_currentPage"}},[_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"prev-text"},slot:"prev-text"},[_c('i',{staticClass:"i-Arrow-Left text-40"})]),_vm._v(" "),_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"next-text"},slot:"next-text"},[_c('i',{staticClass:"i-Arrow-Right text-40"})])])],1)],1)],1)]),_vm._v(" "),_c('b-sidebar',{attrs:{"id":"sidebar-category","title":_vm.$t('ListofCategory'),"bg-variant":"white","right":"","shadow":""}},[_c('div',{staticClass:"px-3 py-2"},[_c('b-row',[_c('div',{staticClass:"col-md-12 d-flex flex-row flex-wrap bd-highlight list-item mt-2"},[_c('div',{staticClass:"card o-hidden bd-highlight m-1",class:{ 'brand-Active' : _vm.category_id == ''},on:{"click":function($event){return _vm.getAllCategory()}}},[_c('div',{staticClass:"list-thumb d-flex"},[_c('img',{attrs:{"alt":"","src":'/images/no-image.png'}})]),_vm._v(" "),_c('div',{staticClass:"flex-grow-1 d-bock"},[_c('div',{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(_vm.$t('All_Category')))])])])]),_vm._v(" "),_vm._l((_vm.paginated_Category),function(category){return _c('div',{key:category.id,staticClass:"card o-hidden bd-highlight m-1",class:{ 'brand-Active' : category.id === _vm.category_id},on:{"click":function($event){return _vm.Products_by_Category(category.id)}}},[_c('img',{attrs:{"alt":"","src":'/images/no-image.png'}}),_vm._v(" "),_c('div',{staticClass:"flex-grow-1 d-bock"},[_c('div',{staticClass:"card-body align-self-center d-flex flex-column justify-content-between align-items-lg-center"},[_c('div',{staticClass:"item-title"},[_vm._v(_vm._s(category.name))])])])])})],2)]),_vm._v(" "),_c('b-row',[_c('b-col',{staticClass:"mt-4",attrs:{"md":"12"}},[_c('b-pagination',{staticClass:"my-0 gull-pagination align-items-center",attrs:{"total-rows":_vm.category_totalRows,"per-page":_vm.category_perPage,"align":"center","first-text":"","last-text":""},on:{"change":_vm.Category_onPageChanged},model:{value:(_vm.category_currentPage),callback:function ($$v) {_vm.category_currentPage=$$v},expression:"category_currentPage"}},[_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"prev-text"},slot:"prev-text"},[_c('i',{staticClass:"i-Arrow-Left text-40"})]),_vm._v(" "),_c('p',{staticClass:"list-arrow m-0",attrs:{"slot":"next-text"},slot:"next-text"},[_c('i',{staticClass:"i-Arrow-Right text-40"})])])],1)],1)],1)]),_vm._v(" "),_c('b-modal',{attrs:{"hide-footer":"","size":"sm","scrollable":"","id":"Show_invoice","title":_vm.$t('Invoice_POS')}},[_c('div',{attrs:{"id":"invoice-POS"}},[_c('div',{staticStyle:{"max-width":"400px","margin":"0px auto"}},[_c('div',{staticClass:"info"},[_c('div',{staticClass:"invoice_logo text-center mb-2"},[_c('img',{attrs:{"src":'/images/'+_vm.invoice_pos.setting.logo,"alt":"","width":"60","height":"60"}})]),_vm._v(" "),_c('p',[_c('span',[_vm._v(_vm._s(_vm.$t('date'))+" : "+_vm._s(_vm.invoice_pos.sale.date)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_address),expression:"pos_settings.show_address"}]},[_vm._v(_vm._s(_vm.$t('Adress'))+" : "+_vm._s(_vm.invoice_pos.setting.CompanyAdress)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_email),expression:"pos_settings.show_email"}]},[_vm._v(_vm._s(_vm.$t('Email'))+" : "+_vm._s(_vm.invoice_pos.setting.email)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_phone),expression:"pos_settings.show_phone"}]},[_vm._v(_vm._s(_vm.$t('Phone'))+" : "+_vm._s(_vm.invoice_pos.setting.CompanyPhone)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_customer),expression:"pos_settings.show_customer"}]},[_vm._v(_vm._s(_vm.$t('Customer'))+" : "+_vm._s(_vm.invoice_pos.sale.client_name)+" "),_c('br')]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_Warehouse),expression:"pos_settings.show_Warehouse"}]},[_vm._v(_vm._s(_vm.$t('warehouse'))+" : "+_vm._s(_vm.invoice_pos.sale.warehouse_name)+" "),_c('br')])])]),_vm._v(" "),_c('table',{staticClass:"table_data"},[_c('tbody',[_vm._l((_vm.invoice_pos.details),function(detail_invoice){return _c('tr',[_c('td',{attrs:{"colspan":"3"}},[_vm._v("\n                    "+_vm._s(detail_invoice.name)+"\n                     "),_c('br',{directives:[{name:"show",rawName:"v-show",value:(detail_invoice.is_imei && detail_invoice.imei_number !==null),expression:"detail_invoice.is_imei && detail_invoice.imei_number !==null"}]}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(detail_invoice.is_imei && detail_invoice.imei_number !==null ),expression:"detail_invoice.is_imei && detail_invoice.imei_number !==null "}]},[_vm._v(_vm._s(_vm.$t('IMEI_SN'))+" : "+_vm._s(detail_invoice.imei_number))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.formatNumber(detail_invoice.quantity,2))+" "+_vm._s(detail_invoice.unit_sale)+" x "+_vm._s(_vm.formatNumber(detail_invoice.total/detail_invoice.quantity,2)))])]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right","vertical-align":"bottom"}},[_vm._v(_vm._s(_vm.formatNumber(detail_invoice.total,2)))])])}),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_discount),expression:"pos_settings.show_discount"}],staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('OrderTax')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.taxe ,2))+" ("+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.tax_rate,2))+" %)")])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_discount),expression:"pos_settings.show_discount"}],staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Discount')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.discount ,2)))])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_discount),expression:"pos_settings.show_discount"}],staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Shipping')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.shipping ,2)))])]),_vm._v(" "),_c('tr',{staticStyle:{"margin-top":"10px"}},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Total')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.GrandTotal ,2)))])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount < _vm.invoice_pos.sale.GrandTotal),expression:"invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal"}]},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Paid')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(_vm.formatNumber(_vm.invoice_pos.sale.paid_amount ,2)))])]),_vm._v(" "),_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount < _vm.invoice_pos.sale.GrandTotal),expression:"invoice_pos.sale.paid_amount < invoice_pos.sale.GrandTotal"}]},[_c('td',{staticClass:"total",attrs:{"colspan":"3"}},[_vm._v(_vm._s(_vm.$t('Due')))]),_vm._v(" "),_c('td',{staticClass:"total",staticStyle:{"text-align":"right"}},[_vm._v(_vm._s(_vm.invoice_pos.symbol)+" "+_vm._s(parseFloat(_vm.invoice_pos.sale.GrandTotal - _vm.invoice_pos.sale.paid_amount).toFixed(2)))])])],2)]),_vm._v(" "),_c('table',{directives:[{name:"show",rawName:"v-show",value:(_vm.invoice_pos.sale.paid_amount > 0),expression:"invoice_pos.sale.paid_amount > 0"}],staticClass:"change mt-3",staticStyle:{"font-size":"10px"}},[_c('thead',[_c('tr',{staticStyle:{"background":"#eee"}},[_c('th',{staticStyle:{"text-align":"left"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.$t('PayeBy'))+":")]),_vm._v(" "),_c('th',{staticStyle:{"text-align":"center"},attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.$t('Amount'))+":")]),_vm._v(" "),_c('th',{staticStyle:{"text-align":"right"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.$t('Change'))+":")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.payments),function(payment_pos){return _c('tr',[_c('td',{staticStyle:{"text-align":"left"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(payment_pos.payment_method?payment_pos.payment_method.name:'---'))]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"center"},attrs:{"colspan":"2"}},[_vm._v(_vm._s(_vm.formatNumber(payment_pos.montant ,2)))]),_vm._v(" "),_c('td',{staticStyle:{"text-align":"right"},attrs:{"colspan":"1"}},[_vm._v(_vm._s(_vm.formatNumber(payment_pos.change ,2)))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"ml-2",attrs:{"id":"legalcopy"}},[_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_note),expression:"pos_settings.show_note"}],staticClass:"legal"},[_c('strong',[_vm._v(_vm._s(_vm.pos_settings.note_customer))])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.pos_settings.show_barcode),expression:"pos_settings.show_barcode"}],attrs:{"id":"bar"}},[_c('barcode',{staticClass:"barcode",attrs:{"format":_vm.barcodeFormat,"value":_vm.invoice_pos.sale.Ref,"textmargin":"0","fontoptions":"bold","fontSize":"15","height":"25","width":"1"}})],1)])])]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-primary",on:{"click":function($event){return _vm.print_pos()}}},[_c('i',{staticClass:"i-Billing"}),_vm._v("\n          "+_vm._s(_vm.$t('print'))+"\n        ")])]),_vm._v(" "),_c('validation-observer',{ref:"Add_payment"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"Add_Payment","title":_vm.$t('AddPayment')}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Payment.apply(null, arguments)}}},[_c('h1',{staticClass:"text-center mt-3 mb-3"},[_vm._v(_vm._s(_vm.client_name))]),_vm._v(" "),_c('b-row',[_c('b-col',{attrs:{"md":"6"}},[_c('b-row',[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Received Amount","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Received_Amount') + ' ' + '*'}},[_c('b-form-input',{attrs:{"label":"Received_Amount","placeholder":_vm.$t('Received_Amount'),"state":_vm.getValidationState(validationContext),"aria-describedby":"Received_Amount-feedback"},on:{"keyup":function($event){return _vm.Verified_Received_Amount(_vm.payment.received_amount)}},model:{value:(_vm.payment.received_amount),callback:function ($$v) {_vm.$set(_vm.payment, "received_amount", _vm._n($$v))},expression:"payment.received_amount"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Received_Amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,4075423960)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Paying Amount","rules":{ required: true , regex: /^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('Paying_Amount') + ' ' + '*'}},[_c('b-form-input',{attrs:{"label":"Paying_Amount","placeholder":_vm.$t('Paying_Amount'),"state":_vm.getValidationState(validationContext),"aria-describedby":"Paying_Amount-feedback"},on:{"keyup":function($event){return _vm.Verified_paidAmount(_vm.payment.amount)}},model:{value:(_vm.payment.amount),callback:function ($$v) {_vm.$set(_vm.payment, "amount", _vm._n($$v))},expression:"payment.amount"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"Paying_Amount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,2524302515)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('label',[_vm._v(_vm._s(_vm.$t('Change'))+" :")]),_vm._v(" "),_c('p',{staticClass:"change_amount"},[_vm._v(_vm._s(parseFloat(_vm.payment.received_amount - _vm.payment.amount).toFixed(2)))])])],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6"}},[_c('b-card',[_c('b-list-group',[_c('b-list-group-item',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._v("\n                        "+_vm._s(_vm.$t('TotalProducts'))+"\n                        "),_c('b-badge',{attrs:{"variant":"primary","pill":""}},[_vm._v(_vm._s(_vm.details.length))])],1),_vm._v(" "),_c('b-list-group-item',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._v("\n                        "+_vm._s(_vm.$t('OrderTax'))+"\n                        "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.sale.TaxNet.toFixed(2))+" ("+_vm._s(_vm.sale.tax_rate)+" %)")])]),_vm._v(" "),_c('b-list-group-item',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._v("\n                        "+_vm._s(_vm.$t('Discount'))+"\n                        "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.sale.discount.toFixed(2)))])]),_vm._v(" "),_c('b-list-group-item',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._v("\n                        "+_vm._s(_vm.$t('Shipping'))+"\n                        "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.sale.shipping.toFixed(2)))])]),_vm._v(" "),_c('b-list-group-item',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._v("\n                        "+_vm._s(_vm.$t('Total_Payable'))+"\n                        "),_c('span',{staticClass:"font-weight-bold"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.GrandTotal.toFixed(2)))])])],1)],1)],1)],1),_vm._v(" "),_c('b-row',{staticClass:"mt-4"},[_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Payment choice","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                            var valid = ref.valid;
                            var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('Paymentchoice') + ' ' + '*'}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('PleaseSelect'),"options":_vm.payment_methods.map(function (payment_methods) { return ({label: payment_methods.name, value: payment_methods.id}); })},on:{"input":_vm.Selected_PaymentMethod},model:{value:(_vm.payment.payment_method_id),callback:function ($$v) {_vm.$set(_vm.payment, "payment_method_id", $$v)},expression:"payment.payment_method_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,3676891826)})],1),_vm._v(" "),_c('b-col',{attrs:{"lg":"6","md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Account"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                            var valid = ref.valid;
                            var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('Account')}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Account'),"options":_vm.accounts.map(function (accounts) { return ({label: accounts.account_name, value: accounts.id}); })},model:{value:(_vm.payment.account_id),callback:function ($$v) {_vm.$set(_vm.payment, "account_id", $$v)},expression:"payment.account_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,3079558950)})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-card',{directives:[{name:"show",rawName:"v-show",value:(_vm.payment.payment_method_id == '1' || _vm.payment.payment_method_id == 1),expression:"payment.payment_method_id == '1' || payment.payment_method_id == 1"}]},[(_vm.submit_showing_credit_card)?_vm._m(0):_vm._e(),_vm._v(" "),(_vm.displaySavedPaymentMethods && !_vm.submit_showing_credit_card)?_c('div',[_c('div',{staticClass:"mt-3"},[_c('span',{staticClass:"mr-3"},[_vm._v("Saved Credit Card Info For This Client ")]),_vm._v(" "),_c('b-button',{attrs:{"variant":"outline-info"},on:{"click":function($event){return _vm.show_new_credit_card()}}},[_c('span',[_c('i',{staticClass:"i-Two-Windows"}),_vm._v("\n                              New Credit Card\n                            ")])])],1),_vm._v(" "),_c('table',{staticClass:"table table-hover mt-3"},[_c('thead',[_c('tr',[_c('th',[_vm._v("Last 4 digits")]),_vm._v(" "),_c('th',[_vm._v("Type")]),_vm._v(" "),_c('th',[_vm._v("Exp")]),_vm._v(" "),_c('th',[_vm._v("Action")])])]),_vm._v(" "),_c('tbody',_vm._l((_vm.savedPaymentMethods),function(card){return _c('tr',{class:{ 'bg-selected-card': _vm.isSelectedCard(card) }},[_c('td',[_vm._v("**** "+_vm._s(card.last4))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(card.type))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(card.exp))]),_vm._v(" "),_c('td',[(!_vm.isSelectedCard(card) && _vm.card_id != card.card_id)?_c('b-button',{attrs:{"variant":"outline-primary"},on:{"click":function($event){return _vm.selectCard(card)}}},[_c('span',[_c('i',{staticClass:"i-Drag-Up"}),_vm._v(" \n                                      Use This\n                                    ")])]):_vm._e(),_vm._v(" "),(_vm.isSelectedCard(card) || _vm.card_id == card.card_id)?_c('i',{staticClass:"i-Yes",staticStyle:{"font-size":"20px"}}):_vm._e()],1)])}),0)])]):_vm._e(),_vm._v(" "),(_vm.displayFormNewCard && !_vm.submit_showing_credit_card)?_c('div',[_c('form',{attrs:{"id":"payment-form"}},[_c('label',{staticClass:"leading-7 text-sm text-gray-600",attrs:{"for":"card-element"}},[_vm._v("\n                            "+_vm._s(_vm.$t('Credit_Card_Info'))+"\n                            "),(_vm.savedPaymentMethods && _vm.savedPaymentMethods.length > 0)?_c('b-button',{attrs:{"variant":"outline-info"},on:{"click":function($event){return _vm.show_saved_credit_card()}}},[_c('span',[_c('i',{staticClass:"i-Two-Windows"}),_vm._v("\n                                    Use Saved Credit Card\n                                  ")])]):_vm._e()],1),_vm._v(" "),_c('div',{attrs:{"id":"card-element"}}),_vm._v(" "),_c('div',{staticClass:"is-invalid",attrs:{"id":"card-errors","role":"alert"}})])]):_vm._e()])],1),_vm._v(" "),_c('b-col',{staticClass:"mt-2",attrs:{"lg":"6","md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Payment_note')}},[_c('b-form-textarea',{attrs:{"id":"textarea","rows":"3","max-rows":"6"},model:{value:(_vm.payment.notes),callback:function ($$v) {_vm.$set(_vm.payment, "notes", $$v)},expression:"payment.notes"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mt-2",attrs:{"lg":"6","md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('sale_note')}},[_c('b-form-textarea',{attrs:{"id":"textarea","rows":"3","max-rows":"6"},model:{value:(_vm.sale.notes),callback:function ($$v) {_vm.$set(_vm.sale, "notes", $$v)},expression:"sale.notes"}})],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"md":"12"}},[_c('b-button',{attrs:{"variant":"primary","type":"submit","disabled":_vm.paymentProcessing}},[_c('i',{staticClass:"i-Yes me-2 font-weight-bold"}),_vm._v(" "+_vm._s(_vm.$t('submit')))]),_vm._v(" "),(_vm.paymentProcessing)?_vm._m(1):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c('validation-observer',{ref:"Create_Customer"},[_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"New_Customer","title":_vm.$t('Add')}},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Customer.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('validation-provider',{attrs:{"name":"Name Customer","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(validationContext){return [_c('b-form-group',{attrs:{"label":_vm.$t('CustomerName') + ' ' + '*'}},[_c('b-form-input',{attrs:{"state":_vm.getValidationState(validationContext),"aria-describedby":"name-feedback","label":"name","placeholder":_vm.$t('CustomerName')},model:{value:(_vm.client.name),callback:function ($$v) {_vm.$set(_vm.client, "name", $$v)},expression:"client.name"}}),_vm._v(" "),_c('b-form-invalid-feedback',{attrs:{"id":"name-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)]}}],null,false,1765869017)})],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Email')}},[_c('b-form-input',{attrs:{"label":"email","placeholder":_vm.$t('Email')},model:{value:(_vm.client.email),callback:function ($$v) {_vm.$set(_vm.client, "email", $$v)},expression:"client.email"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Phone')}},[_c('b-form-input',{attrs:{"label":"Phone","placeholder":_vm.$t('Phone')},model:{value:(_vm.client.phone),callback:function ($$v) {_vm.$set(_vm.client, "phone", $$v)},expression:"client.phone"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Country')}},[_c('b-form-input',{attrs:{"label":"Country","placeholder":_vm.$t('Country')},model:{value:(_vm.client.country),callback:function ($$v) {_vm.$set(_vm.client, "country", $$v)},expression:"client.country"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('City')}},[_c('b-form-input',{attrs:{"label":"City","placeholder":_vm.$t('City')},model:{value:(_vm.client.city),callback:function ($$v) {_vm.$set(_vm.client, "city", $$v)},expression:"client.city"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"6","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Tax_Number')}},[_c('b-form-input',{attrs:{"label":"Tax Number","placeholder":_vm.$t('Tax_Number')},model:{value:(_vm.client.tax_number),callback:function ($$v) {_vm.$set(_vm.client, "tax_number", $$v)},expression:"client.tax_number"}})],1)],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12","sm":"12"}},[_c('b-form-group',{attrs:{"label":_vm.$t('Adress')}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.client.adresse),expression:"client.adresse"}],staticClass:"form-control",attrs:{"label":"Adress","rows":"4","placeholder":_vm.$t('Adress')},domProps:{"value":(_vm.client.adresse)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.client, "adresse", $event.target.value)}}})])],1),_vm._v(" "),_c('b-col',{staticClass:"mt-3",attrs:{"md":"12"}},[_c('b-button',{attrs:{"variant":"primary","type":"submit"}},[_c('i',{staticClass:"i-Yes me-2 font-weight-bold"}),_vm._v(" "+_vm._s(_vm.$t('submit')))])],1)],1)],1)],1)],1),_vm._v(" "),_c('b-modal',{attrs:{"hide-footer":"","size":"lg","id":"show_draft_sales","title":"Draft Sales"}},[_c('vue-good-table',{attrs:{"mode":"remote","columns":_vm.columns_draft_sales,"totalRows":_vm.totalRows_draft_sales,"rows":_vm.draft_sales,"pagination-options":{
          enabled: true,
          mode: 'records',
          nextLabel: 'next',
          prevLabel: 'prev',
        },"styleClass":"tableOne table-hover vgt-table"},on:{"on-page-change":_vm.onPageChange,"on-per-page-change":_vm.onPerPageChange},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field == 'actions')?_c('span',[_c('router-link',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],attrs:{"title":"Edit","to":{ name:'pos_draft', params: { id: props.row.id } }}},[_c('i',{staticClass:"i-Edit text-25 text-success"})]),_vm._v(" "),_c('a',{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{"hover":true}}],staticClass:"cursor-pointer",attrs:{"title":"Delete"}},[_c('i',{staticClass:"i-Close-Window text-25 text-danger"})])],1):_vm._e()]}}],null,false,3749663031)})],1),_vm._v(" "),_c('div',{staticClass:"pos-button-actions",staticStyle:{"display":"flex","margin-top":"10px","bottom":"0px","margin-left":"29px","width":"100%","flex-wrap":"wrap"}},[_c('b-button',{staticStyle:{"width":"auto","margin-bottom":"8px"},attrs:{"variant":"success ripple mr-1 btn-rounded"},on:{"click":function($event){return _vm.Submit_Pos()}}},[_c('i',{staticClass:"i-Checkout"}),_vm._v("\n            "+_vm._s(_vm.$t("payNow"))+"\n          ")])],1)],1):_vm._e()],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ }),

/***/ "./resources/src/utils/index.js":
/*!**************************************!*\
  !*** ./resources/src/utils/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var toggleFullScreen = function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
  if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  } else {
    cancelFullScreen.call(doc);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  toggleFullScreen: toggleFullScreen
});

/***/ }),

/***/ "./resources/src/views/app/pages/pos_draft.vue":
/*!*****************************************************!*\
  !*** ./resources/src/views/app/pages/pos_draft.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos_draft.vue?vue&type=template&id=b00e3e2e */ "./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e");
/* harmony import */ var _pos_draft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos_draft.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js");
/* harmony import */ var _pos_draft_vue_vue_type_style_index_0_id_b00e3e2e_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css */ "./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pos_draft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__.render,
  _pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/pos_draft.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_draft.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_style_index_0_id_b00e3e2e_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-8.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=style&index=0&id=b00e3e2e&lang=css");


/***/ }),

/***/ "./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e":
/*!***********************************************************************************!*\
  !*** ./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pos_draft_vue_vue_type_template_id_b00e3e2e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./pos_draft.vue?vue&type=template&id=b00e3e2e */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/pos_draft.vue?vue&type=template&id=b00e3e2e");


/***/ })

}]);