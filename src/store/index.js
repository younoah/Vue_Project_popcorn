import { createStore } from 'vuex';
import { API } from '~/api';

export default createStore({
  state: () => {
    return {
      isInit: true,
      keyword: '',
      movies: [],
      currentMovie: {},
      totalPage: 0,
      isShowModal: false,
      isLoading: false,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async getMovies({ state, commit }, payload) {
      const { keyword, pageNumber = 1 } = payload;
      const { Search: movies, totalResults } = await API.getMovies(
        keyword,
        pageNumber
      );
      if (!movies) {
        commit('assignState', {
          movies: [],
          totalPage: 0,
          keyword,
        });
      } else {
        commit('assignState', {
          isInit: false,
          movies,
          totalPage: Math.ceil(totalResults / 10),
          keyword,
        });
      }
      console.log('결과', state.movies);
    },
    async getMoreMovies({ state, commit }, payload) {
      const { keyword, pageNumber = 1 } = payload;
      const result = await API.getMovies(keyword, pageNumber);
      const movies = result.Search;
      commit('assignState', {
        movies: [...state.movies, ...movies],
        keyword,
      });
    },
    async getMovieDetail({ commit }, id) {
      const currentMovie = await API.getMovieDetail(id);
      commit('assignState', {
        currentMovie,
      });
    },
  },
});
