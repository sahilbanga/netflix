import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BEARER_TOKEN} from '../../secretKey';

export const nowPlayingMovieDetailsApi = createApi({
    reducerPath: 'nowPlayingMovieDetailsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Authorization', BEARER_TOKEN);
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getNowPlayingMoviesDetails: builder.query({
            query: (movieId) => `${movieId}/videos?language=en-US`
        })
    })
});

export const {useGetNowPlayingMoviesDetailsQuery} = nowPlayingMovieDetailsApi;