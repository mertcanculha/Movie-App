import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchRes: [],
    favoriteMovies: [],
    imdbID: null,
    trendMovies: [],
  },
  mutations: {
    setSearchRes(state, payload) {
      state.searchRes = payload;
    },
    setFavoriteMovie(state, payload) {
      state.favoriteMovies.unshift(payload);
    },
    deleteFavoriteMovie(state, value) {
      state.favoriteMovies.splice(value, 1);
    },
    setImdbID(state, payload) {
      state.imdbID = payload;
    },
    setTrendMovies(state, payload) {
      state.trendMovies = payload;
    },
  },
});
