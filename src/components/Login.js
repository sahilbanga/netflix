import React, {useRef, useState} from 'react';
import HeroImage from './HeroImage';
import {Link} from 'react-router-dom';
import {isEmailValid, isPasswordValid} from '../utils/validation';

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);

    const [isErrorMessage, setIsErrorMessage] = useState('');

    const handleClick = () => {
        const errorMessage = isEmailValid(email?.current?.value) || isPasswordValid(password?.current?.value);
        setIsErrorMessage(errorMessage);
        console.log('errorMessage', errorMessage);
    };

    return (
        <div>
            <HeroImage />
            <div className={'absolute w-full h-full top-0 bg-gradient-to-t from-black bg-opacity-100'}>
                <div className={'flex flex-col justify-center'}>
                    <div className={'bg-black bg-opacity-80 text-white w-3/12 m-auto h-[400] p-10 mt-52'}>
                        <h2 className={'text-lg font-bold mb-4'}>Sign In</h2>
                        <form onSubmit={(event) => event.preventDefault()}>
                            <div className={'relative'}>
                                <input type={'text'} placeholder={'Email Address'} className={'w-full rounded-lg px-4 py-3 w-80 bg-black bg-opacity-60 border border-gray-500 mb-4'} ref={email} />
                                <input type={'password'} placeholder={'Password'} className={'w-full rounded-lg px-4 py-3 w-80 bg-black bg-opacity-60 border border-gray-500'} ref={password} />
                                <p className={'absolute text-red-600 text-sm -bottom-6'}>{isErrorMessage}</p>
                            </div>
                            <button className={'bg-red-600 text-white text-xl rounded-lg px-8 py-2 cursor-pointer w-full mt-10'} onClick={handleClick}>Sign in</button>
                        </form>
                        <p className={'text-sm mt-4'}>
                            <span className={'text-gray-500'}>New to Netflix?</span>
                            <Link className={'cursor-pointer'} to={'/'}> Sign up Now.</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;