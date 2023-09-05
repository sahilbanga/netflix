import React from 'react';

const Signup = () => {
    return (
        <>
            <form onSubmit={(event) => event.preventDefault()} className={'flex justify-center'}>
                <input type={'email'} placeholder={'Email Address'} className={'rounded-lg px-4 py-3 w-80 bg-black bg-opacity-60 border border-gray-500'} />
                <button className={'bg-red-600 text-white font-bold text-2xl rounded-lg px-8 py-2 ml-2'}>Get Started</button>
            </form>

        </>
    );
};

export default Signup;