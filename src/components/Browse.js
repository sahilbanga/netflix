import React, {useEffect} from 'react';
import {useGetNowPlayingMoviesQuery} from '../store/services/nowPlayingMoviesList';
import Spinner from './Spinner';
import FullMovieContainer from './FullMovieContainer';
import {useDispatch} from 'react-redux';
import {addNowPlayingMovies} from '../store/slices/nowPlayingMoviesSlice';

const Browse = () => {
    const dispatch = useDispatch();

    const {data, error, isLoading} = useGetNowPlayingMoviesQuery();

    useEffect(() => {
        dispatch(addNowPlayingMovies(data));
    }, [data]);

    if(isLoading) return <Spinner />;

    if(error) {
        return (
                <div>
                    {error.message}
                </div>
            );
    }

    return (
        <div className={'text-white'}>
            <FullMovieContainer />
        </div>
    );
};

export default Browse;