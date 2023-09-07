import React from 'react';
import {useSelector} from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const FullMovieContainer = () => {
    const nowPlayingMovies = useSelector((state) => {
        return state?.getNowMovies?.nowPlayingMovies;
    });

    console.log('nowPlayingMovies', nowPlayingMovies)

    const movieDetail = nowPlayingMovies?.results?.[1];

    console.log('movieDetail', movieDetail)

    if(movieDetail) {
        return (
            <>
                <VideoTitle title={movieDetail?.title} description={movieDetail?.overview} />
                <VideoBackground movieId={movieDetail?.id} />
            </>
        );
    }

    return null;

};

export default FullMovieContainer;