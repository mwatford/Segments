import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const moduleMocker = (module, name) => {
  return new Vuex.Store({
    modules: {
      [name]: module
    }
  });
};

export default new Vuex.Store({
  strict: true,
  modules: {}
});
