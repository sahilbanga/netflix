import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BEARER_TOKEN} from '../../secretKey';

export const nowPlayingMoviesListAPI = createApi({
    reducerPath: 'nowPlayingMoviesListAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Authorization', BEARER_TOKEN);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getNowPlayingMovies: builder.query({
            query: () => {
                return 'movie/now_playing?language=en-US&page=1';
            }
        })
    })
});

export const { useGetNowPlayingMoviesQuery } = nowPlayingMoviesListAPI;