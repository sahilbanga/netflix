import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import { nowPlayingMoviesListAPI } from './services/nowPlayingMoviesList';

const appstore = configureStore({
    reducer: {
        user: userReducer,
        [nowPlayingMoviesListAPI.reducerPath]: nowPlayingMoviesListAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nowPlayingMoviesListAPI.middleware)
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(postApi.middleware),
});

export default appstore;