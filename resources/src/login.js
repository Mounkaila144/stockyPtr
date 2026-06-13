import store from "./store";
import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import * as rules from "vee-validate/dist/rules";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
Vue.use(BootstrapVue);
import "./assets/styles/sass/themes/lite-purple.scss";
import Meta from "vue-meta";

Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true
});

localize({
  en: {
    messages: {
      required: 'This field is required',
      required_if: 'This field is required',
      regex: 'This field must be a valid',
      mimes: `This field must have a valid file type.`,
      size: (_, { size }) => `This field size must be less than ${size}.`,
      min: 'This field must have no less than {length} characters',
      max: (_, { length }) => `This field must have no more than ${length} characters`
    }
  },
});
// Install VeeValidate rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

// Register it globally
Vue.component("ValidationObserver", ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

window.axios = require('axios');
window.axios.defaults.baseURL = '';

window.axios.defaults.withCredentials = true;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {

  return response;
}, (error) => {
  if (error.response && error.response.data) {
    if (error.response.status === 401 && window.location.pathname !== '/login') {
      window.location.href='/login';
    }

    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

window.Fire = new Vue();

Vue.component('login-component', require('./views/app/sessions/signIn.vue').default);
Vue.component('forgot-component', require('./views/app/sessions/forgot.vue').default);
Vue.component('reset-component', require('./views/app/sessions/reset.vue').default);

Vue.config.productionTip = true;
Vue.config.silent = true;
Vue.config.devtools = false;

import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import { loadI18n } from './plugins/i18n.loader';

function hideSpinner() {
  const el = document.getElementById('loading_wrap');
  if (el) el.style.display = 'none';
}

loadI18n().then(i18n => {
  store.commit('SetDefaultLanguage', { i18n, Language: i18n.locale });

  new Vue({
    el: '#login',
    store,
    i18n,
    mounted() { hideSpinner(); },
  });
}).catch(() => {
  hideSpinner();
});
