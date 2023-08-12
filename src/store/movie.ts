import { defineStore } from 'pinia';
import { Movies, MovieInfo } from '../types';
import { request } from '../service/apiRequest';

export const useMovieStore = defineStore('movie', {
  state: () => ({
    movies: [] as Movies,
    movie: {} as MovieInfo,
  }),
  getters: {
    isSelected(): number {
      return Object.keys(this.movie).length;
    },
  },
  actions: {
    async fetchMovies(title: string) {
      const { Search } = await request({ s: title });
      this.movies = Search;
    },
    async fetchMovie(id: string) {
      const movieDetail = await request({ i: id });
      this.movie = movieDetail;
    },
    initMovies() {
      this.movies = [] as Movies;
    },
    initMovie() {
      this.movie = {} as MovieInfo;
    },
  },
});
