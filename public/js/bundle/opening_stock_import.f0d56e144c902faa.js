"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["opening_stock_import"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Opening Stock Import"
  },
  data: function data() {
    return {
      isLoading: true,
      SubmitProcessing: false,
      Submit_Processing_detail: false,
      data: new FormData(),
      warehouses: [],
      import_products: "",
      warehouse_id: ""
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["currentUserPermissions", "currentUser"])),
  methods: {
    //------------------------------ Event Import Purchases -------------------------------\\
    onFileSelected: function onFileSelected(e) {
      this.import_products = "";
      var file = e.target.files[0];
      this.import_products = file;
    },
    //--- Submit Validate
    Submit_Stock: function Submit_Stock() {
      var _this = this;
      this.$refs.ref_Create_Stock.validate().then(function (success) {
        if (!success) {
          _this.makeToast("danger", _this.$t("Please_fill_the_form_correctly"), _this.$t("Failed"));
        } else {
          _this.Create_Stock();
        }
      });
    },
    //---Validate State Fields
    getValidationState: function getValidationState(_ref) {
      var dirty = _ref.dirty,
        validated = _ref.validated,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
      return dirty || validated ? valid : null;
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    //--------------------------------- Create stock -------------------------\\
    Create_Stock: function Create_Stock() {
      var _this2 = this;
      this.SubmitProcessing = true;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var self = this;
      self.data.append("warehouse_id", self.warehouse_id);
      self.data.append("products", self.import_products);
      axios.post("opening_stock_import", self.data).then(function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.makeToast("success", _this2.$t("Successfully_Imported"), _this2.$t("Success"));
        _this2.SubmitProcessing = false;
        _this2.$router.push({
          name: "index_products"
        });
      })["catch"](function (error) {
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        _this2.makeToast("danger", 'An error occurred while processing the CSV file.', _this2.$t("Failed"));
        _this2.SubmitProcessing = false;
      });
    },
    //---------------------------------------Get Elements ------------------------------\\
    GetElements: function GetElements() {
      var _this3 = this;
      axios.get("get_import_stock").then(function (response) {
        _this3.warehouses = response.data.warehouses;
        _this3.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this3.isLoading = false;
        }, 500);
      });
    }
  },
  //-----------------------------  Created function-------------------
  created: function created() {
    this.GetElements();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('Opening_Stock'),"folder":_vm.$t('Products')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('validation-observer',{ref:"ref_Create_Stock"},[_c('b-form',{on:{"submit":function($event){$event.preventDefault();return _vm.Submit_Stock.apply(null, arguments)}}},[_c('b-row',[_c('b-col',{attrs:{"lg":"12","md":"12","sm":"12"}},[_c('b-card',[_c('b-row',[_c('b-col',{staticClass:"mb-3",attrs:{"lg":"4","md":"4","sm":"12"}},[_c('validation-provider',{attrs:{"name":"warehouse","rules":{ required: true}},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var valid = ref.valid;
var errors = ref.errors;
return _c('b-form-group',{attrs:{"label":_vm.$t('warehouse') + ' ' + '*'}},[_c('v-select',{class:{'is-invalid': !!errors.length},attrs:{"state":errors[0] ? false : (valid ? true : null),"reduce":function (label) { return label.value; },"placeholder":_vm.$t('Choose_Warehouse'),"options":_vm.warehouses.map(function (warehouses) { return ({label: warehouses.name, value: warehouses.id}); })},model:{value:(_vm.warehouse_id),callback:function ($$v) {_vm.warehouse_id=$$v},expression:"warehouse_id"}}),_vm._v(" "),_c('b-form-invalid-feedback',[_vm._v(_vm._s(errors[0]))])],1)}}],null,false,3019504310)})],1),_vm._v(" "),_c('b-col',{staticClass:"mb-3",attrs:{"lg":"4","md":"4","sm":"12"}},[_c('b-form-group',{attrs:{"label":"Choose Csv File *"}},[_c('input',{attrs:{"type":"file","label":"Choose Csv File"},on:{"change":_vm.onFileSelected}}),_vm._v(" "),_c('b-form-invalid-feedback',{staticClass:"d-block",attrs:{"id":"File-feedback"}},[_vm._v(_vm._s(_vm.$t('field_must_be_in_csv_format')))])],1)],1),_vm._v(" "),_c('b-col',{staticClass:"mb-3",attrs:{"lg":"4","md":"4","sm":"12"}},[_c('b-button',{attrs:{"href":'/import/exemples/import_stock.csv',"variant":"info","size":"sm","block":""}},[_vm._v(_vm._s(_vm.$t("Download_exemple")))])],1),_vm._v(" "),_c('b-col',{attrs:{"md":"12"}},[_c('b-form-group',[_c('b-button',{attrs:{"variant":"primary","disabled":_vm.SubmitProcessing},on:{"click":_vm.Submit_Stock}},[_c('i',{staticClass:"i-Yes me-2 font-weight-bold"}),_vm._v(" "+_vm._s(_vm.$t('submit')))]),_vm._v(" "),(_vm.SubmitProcessing)?_vm._m(0):_vm._e()],1)],1)],1)],1)],1)],1)],1)],1):_vm._e()],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typo__p"},[_c('div',{staticClass:"spinner sm spinner-primary mt-3"})])}]
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue":
/*!*************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening_stock_import.vue?vue&type=template&id=6d0a9e9a */ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a");
/* harmony import */ var _opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opening_stock_import.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__.render,
  _opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/products/opening_stock_import.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a":
/*!*******************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_stock_import_vue_vue_type_template_id_6d0a9e9a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_stock_import.vue?vue&type=template&id=6d0a9e9a */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/opening_stock_import.vue?vue&type=template&id=6d0a9e9a");


/***/ })

}]);