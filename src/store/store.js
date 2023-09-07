import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import getNowMoviesReducer from '../store/slices/nowPlayingMoviesSlice';
import { nowPlayingMoviesListAPI } from './services/nowPlayingMoviesList';
import { nowPlayingMovieDetailsApi } from './services/nowPlayingMovieDetails';


const appstore = configureStore({
    reducer: {
        user: userReducer,
        getNowMovies: getNowMoviesReducer,
        [nowPlayingMoviesListAPI.reducerPath]: nowPlayingMoviesListAPI.reducer,
        [nowPlayingMovieDetailsApi.reducerPath]: nowPlayingMovieDetailsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nowPlayingMoviesListAPI.middleware, nowPlayingMovieDetailsApi.middleware)
});

export default appstore;