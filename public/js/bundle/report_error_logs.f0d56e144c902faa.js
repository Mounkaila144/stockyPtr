"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["report_error_logs"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      logs: [],
      totalRows: 0,
      isLoading: true,
      perPage: 10,
      currentPage: 1,
      columns: [
      // { label: "ID", field: "id", sortable: true },
      {
        label: this.$t("Context"),
        field: "context",
        sortable: true
      }, {
        label: this.$t("Message"),
        field: "message",
        sortable: false
      }, {
        label: this.$t("Details"),
        field: "details",
        sortable: false
      }, {
        label: this.$t("Occurred_At"),
        field: "occurred_at",
        sortable: true
      }]
    };
  },
  mounted: function mounted() {
    this.fetchLogs();
  },
  methods: {
    fetchLogs: function fetchLogs() {
      var _this = this;
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.isLoading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default().get("/error-logs", {
        params: {
          page: page,
          per_page: this.perPage
        }
      }).then(function (response) {
        _this.logs = response.data.logs;
        _this.totalRows = response.data.total;
      })["catch"](function (error) {})["finally"](function () {
        _this.isLoading = false;
      });
    },
    onPageChange: function onPageChange(params) {
      this.currentPage = params.currentPage;
      this.fetchLogs(this.currentPage);
    },
    onPerPageChange: function onPerPageChange(params) {
      this.perPage = params.currentPerPage;
      this.fetchLogs(this.currentPage);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94 ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('breadcumb',{attrs:{"page":_vm.$t('Error_Logs'),"folder":_vm.$t('Reports')}}),_vm._v(" "),(_vm.isLoading)?_c('div',{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),(!_vm.isLoading)?_c('vue-good-table',{attrs:{"mode":"remote","columns":_vm.columns,"totalRows":_vm.totalRows,"rows":_vm.logs,"pagination-options":{
      enabled: true,
      mode: 'records',
      perPage: _vm.perPage,
      nextLabel: 'Next',
      prevLabel: 'Prev',
    },"styleClass":"table-hover tableOne vgt-table"},on:{"on-page-change":_vm.onPageChange,"on-per-page-change":_vm.onPerPageChange},scopedSlots:_vm._u([{key:"table-row",fn:function(props){return [(props.column.field === 'details')?_c('div',[_c('pre',{staticStyle:{"max-height":"100px","overflow-y":"auto","white-space":"pre-wrap"}},[_vm._v(_vm._s(props.row.details))])]):_vm._e()]}}],null,false,245573088)},[_c('div',{staticClass:"mt-2 mb-3",attrs:{"slot":"table-actions"},slot:"table-actions"})]):_vm._e()],1)}
var staticRenderFns = []
render._withStripped = true


/***/ }),

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue":
/*!*********************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report_error_logs.vue?vue&type=template&id=1edc6a94 */ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94");
/* harmony import */ var _report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report_error_logs.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.render,
  _report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/reports/report_error_logs.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report_error_logs.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94 ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_report_error_logs_vue_vue_type_template_id_1edc6a94__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./report_error_logs.vue?vue&type=template&id=1edc6a94 */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/reports/report_error_logs.vue?vue&type=template&id=1edc6a94");


/***/ })

}]);