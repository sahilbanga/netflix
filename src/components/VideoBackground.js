import React from 'react';
import {useGetNowPlayingMoviesDetailsQuery} from '../store/services/nowPlayingMovieDetails';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

const VideoBackground = ({movieId}) => {
    const {data, isLoading, error} = useGetNowPlayingMoviesDetailsQuery(movieId);

    if(isLoading) return <Spinner />;

    if(error) {
        return (
            <div>
                {error.message}
            </div>
        );
    }

    const officialTrailer = data?.results?.filter((item) => item.type === 'Trailer');

    return (
        <>
            <iframe
                className={'w-screen aspect-video'}
                src={`https://www.youtube.com/embed/${officialTrailer?.[0]?.key}?autoplay=1&mute=1&controls=0&rel=0`}
                title="YouTube video player"
            />
        </>
    );
};

VideoBackground.propTypes = {
    movieId: PropTypes.number
};

export default VideoBackground;