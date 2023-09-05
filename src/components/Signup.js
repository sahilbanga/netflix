import React, {useRef, useState} from 'react';
import {isEmailValid} from '../utils/validation';

const Signup = () => {
    const email = useRef(null);
    const [isErrorMessage, setIsErrorMessage] = useState(null);

    const handleClick = () => {
        const errorMessage = isEmailValid(email?.current?.value);
        setIsErrorMessage(errorMessage);
    };

    return (
        <form onSubmit={(event) => event.preventDefault()} className={'flex justify-center'}>
            <div className={'relative'}>
                <input type={'text'} placeholder={'Email Address'} className={'rounded-lg px-4 py-3 w-80 bg-black bg-opacity-60 border border-gray-500'} ref={email} />
                <p className={'absolute text-red-600 text-sm -bottom-6'}>{isErrorMessage}</p>
            </div>
            <button className={'bg-red-600 text-white font-bold text-2xl rounded-lg px-8 py-2 ml-2 cursor-pointer'} onClick={handleClick}>Get Started</button>
        </form>
    );
};

export default Signup;