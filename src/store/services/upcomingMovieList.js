import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BEARER_TOKEN} from '../../secretKey';

export const upcomingMovieListApi = createApi({
    reducerPath: 'upcomingMovieList',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/movie/',
        prepareHeaders: (headers) => {
            headers.set('accept', 'application/json');
            headers.set('Authorization', BEARER_TOKEN);
        }
    }),
    endpoints: (builder) => ({
        getUpcomingMoviesList: builder.query({
            query: () => {
                return 'upcoming?language=en-US&page=1';
            }
        })
    })
});

export const {useGetUpcomingMoviesListQuery} = upcomingMovieListApi;