import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({title='', data=[], className =''}) => {
    return (
        <div>
            <h2 className={`font-bold text-2xl pb-2 ${className}`}>{title}</h2>
                <div className="overflow-x-auto">
                    <div className={'flex flex-nowrap gap-2'}>
                        {data.map((item) => {
                            return (
                                <div key={item.id} className={'flex-shrink-0'}>
                                    <img src={`https://image.tmdb.org/t/p/w200/${item?.poster_path}`} alt={item?.title} />
                                </div>
                            );
                        })}
                    </div>
                </div>
        </div>
    );
};

MovieCard.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
    className: PropTypes.string
};

export default MovieCard;