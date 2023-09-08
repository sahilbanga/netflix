import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BEARER_TOKEN} from '../../secretKey';

export const popularMoviesListApi = createApi({
    reducerPath: 'popularMoviesList',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Authorization', BEARER_TOKEN);
        }
    }),
    endpoints: (builder) => ({
        getPopularMoviesList: builder.query({
            query: () => {
                return 'popular?language=en-US&page=1';
            }
        })
    })
});

export const { useGetPopularMoviesListQuery } = popularMoviesListApi;