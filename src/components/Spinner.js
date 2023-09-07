import React from 'react';

const Spinner = () => {
    return (
        <div className={'flex justify-center items-center h-screen'}>
            <div className="loader text-white">
                Loading...
            </div>
        </div>
    );
};

export default Spinner;