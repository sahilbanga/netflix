import React from 'react';
import PropTypes from 'prop-types';

const VideoTitle = ({title='', description=''}) => {
    return (
        <div className={'w-screen aspect-video absolute bg-gradient-to-b from-black'}>
            <div className={'max-w-2xl text-white pt-80 pl-80 text-lg'}>
                <h1 className={'font-bold text-4xl'}>{title}</h1>
                <p className={'my-5'}>{description}</p>
                <button className={'bg-white text-black rounded-sm px-6 py-1 mr-2 hover:bg-opacity-70'}>Play</button>
                <button className={'bg-gray-500 rounded-sm px-6 py-1 mr-2 hover:bg-opacity-70'}>More Info</button>
            </div>
        </div>
    );
};

VideoTitle.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default VideoTitle;