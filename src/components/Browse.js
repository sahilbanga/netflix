import React, {useEffect} from 'react';
import {useGetNowPlayingMoviesQuery} from '../store/services/nowPlayingMoviesList';
import {useGetPopularMoviesListQuery} from '../store/services/popularMoviesList';
import {useGetTopRatedMoviesListQuery} from '../store/services/topRatedMoviesList';
import {useGetUpcomingMoviesListQuery} from '../store/services/upcomingMovieList';
import Spinner from './Spinner';
import FullMovieContainer from './FullMovieContainer';
import {useDispatch} from 'react-redux';
import {addNowPlayingMovies} from '../store/slices/nowPlayingMoviesSlice';
import MovieCard from './MovieCard';

const Browse = () => {
    const dispatch = useDispatch();

    const {data: nowPlayingMovies, error: nowPlayingError, isLoading: nowPlayingLoading} = useGetNowPlayingMoviesQuery();
    const {data: popularMoviesData} = useGetPopularMoviesListQuery();
    const {data: topRatedMoviesData} = useGetTopRatedMoviesListQuery();
    const {data: upcomingMovies} = useGetUpcomingMoviesListQuery();

    useEffect(() => {
        dispatch(addNowPlayingMovies(nowPlayingMovies));
    }, [nowPlayingMovies]);

    if(nowPlayingLoading) return <Spinner />;

    if(nowPlayingError) {
        return (
                <div>
                    {nowPlayingError?.message}
                </div>
            );
    }

    return (
        <div className={'text-white'}>
            <FullMovieContainer />
                <div className={'absolute -bottom-40 px-20'}>
                    <MovieCard title={'Now Playing'} data={nowPlayingMovies?.results} />
                </div>
                <div className={'px-20 pt-52'}>
                    <MovieCard title={'Top Rated'} data={topRatedMoviesData?.results} className={'mt-5'} />
                    <MovieCard title={'Upcoming'} data={upcomingMovies?.results} className={'mt-5'} />
                    <MovieCard title={'Popular'} data={popularMoviesData?.results} className={'mt-5'} />
                </div>
        </div>
    );
};

export default Browse;