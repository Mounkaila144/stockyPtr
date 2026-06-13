import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    isAuthenticated: false,
    Permissions: null,
    allmodules: null,
    user: {},
    loading: false,
    error: null,
    notifs: 0,
    Default_Language: 'en',
    show_language: 1,
    availableLanguages: [],
    tenantFeatures: {},
};

const getters = {
    getallmodules: state => state.allmodules,
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    currentUserPermissions: state => state.Permissions,
    loading: state => state.loading,
    notifs_alert: state => state.notifs,
    DefaultLanguage: state => state.Default_Language,
    show_language: state => state.show_language,
    error: state => state.error,
    getAvailableLanguages: state => state.availableLanguages,
    tenantFeatures: state => state.tenantFeatures || {},
    hasTenantFeature: state => key => !!(state.tenantFeatures && state.tenantFeatures[key]),

};

const mutations = {
    setLoading(state, data) {
        state.loading = data;
        state.error = null;
    },
    setError(state, data) {
        state.error = data;
        state.loading = false;
    },
    clearError(state) {
        state.error = null;
    },
    setPermissions(state, Permissions) {
        state.Permissions = Permissions;
    },
    setallmodules(state, allmodules) {
        state.allmodules = allmodules;
    },
    setUser(state, user) {
        state.user = user;
    },

    SetDefaultLanguage(state, { i18n, Language }) {
        if (i18n) {
            i18n.locale = Language;
        }
        state.Default_Language = Language;
    },

    Notifs_alert(state, notifs) {
        state.notifs = notifs;
    },
    show_language(state, show_language) {
        state.show_language = show_language;
    },
    setAvailableLanguages(state, languages) {
        state.availableLanguages = languages;
    },
    setTenantFeatures(state, features) {
        state.tenantFeatures = features || {};
    },
    logout(state) {
        state.user = null;
        state.Permissions = null;
        state.allmodules = null;
        state.loading = false;
        state.error = null;
        state.tenantFeatures = {};
    },
};

const actions = {
    async refreshUserPermissions({ commit }, i18n) {
        try {
            const userAuth = await axios.get("get_user_auth");
            const { permissions, ModulesEnabled, user, notifs, tenantFeatures } = userAuth.data;

            commit('setPermissions', permissions);
            commit('setallmodules', ModulesEnabled);
            commit('setUser', user);
            commit('Notifs_alert', notifs);
            commit('show_language', user.show_language);
            commit('SetDefaultLanguage', { i18n, Language: user.default_language || 'en' });
            commit('setTenantFeatures', tenantFeatures || {});

        } catch (error) {
            commit('setPermissions', null);
            commit('setallmodules', null);
            commit('setUser', null);
            commit('Notifs_alert', null);
            commit('show_language', null);
            commit('SetDefaultLanguage', { i18n, Language: 'en' });
            commit('setTenantFeatures', {});
        }
    },

     async loadAvailableLanguages({ commit }) {
        try {
            const response = await axios.get("languages"); // must return: [{ name, locale, flag }]
            commit('setAvailableLanguages', response.data);
        } catch (error) {
            console.warn("⚠️ Failed to load languages:", error);
        }
    },

   logout({ commit }) {
    axios.post('/logout', {}, { baseURL: '' }) // override the baseURL here
        .then(() => {
            window.location.href = '/login';
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
