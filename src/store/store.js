import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import getNowMoviesReducer from '../store/slices/nowPlayingMoviesSlice';
import { nowPlayingMoviesListAPI } from './services/nowPlayingMoviesList';
import { nowPlayingMovieDetailsApi } from './services/nowPlayingMovieDetails';
import {popularMoviesListApi} from './services/popularMoviesList';
import {topRatedMoviesListApi} from './services/topRatedMoviesList';
import {upcomingMovieListApi} from './services/upcomingMovieList';


const appstore = configureStore({
    reducer: {
        user: userReducer,
        getNowMovies: getNowMoviesReducer,
        [nowPlayingMoviesListAPI.reducerPath]: nowPlayingMoviesListAPI.reducer,
        [nowPlayingMovieDetailsApi.reducerPath]: nowPlayingMovieDetailsApi.reducer,
        [popularMoviesListApi.reducerPath]: popularMoviesListApi.reducer,
        [topRatedMoviesListApi.reducerPath]: topRatedMoviesListApi.reducer,
        [upcomingMovieListApi.reducerPath]: upcomingMovieListApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nowPlayingMoviesListAPI.middleware, nowPlayingMovieDetailsApi.middleware, popularMoviesListApi.middleware, topRatedMoviesListApi.middleware, upcomingMovieListApi.middleware)
});

export default appstore;