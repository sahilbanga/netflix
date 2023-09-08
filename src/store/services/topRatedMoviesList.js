import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BEARER_TOKEN} from '../../secretKey';

export const topRatedMoviesListApi = createApi({
    reducerPath: 'topRatedMoviesList',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Authorization', BEARER_TOKEN);
        }
    }),
    endpoints: (builder) => ({
        getTopRatedMoviesList: builder.query({
            query: () => {
                return 'top_rated?language=en-US&page=1';
            }
        })
    })
});

export const { useGetTopRatedMoviesListQuery } = topRatedMoviesListApi;