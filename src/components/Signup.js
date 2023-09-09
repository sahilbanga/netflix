import React, {useRef, useState} from 'react';
import {isEmailValid, isPasswordValid} from '../utils/validation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../utils/firebase';

const Signup = () => {
    const email = useRef(null);
    const password = useRef(null);
    const [isErrorMessage, setIsErrorMessage] = useState(null);

    const handleClick = () => {
        const errorMessage = isEmailValid(email?.current?.value) || isPasswordValid(password?.current?.value);
        setIsErrorMessage(errorMessage);

        if(!errorMessage) {
            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
    };

    return (
        <form onSubmit={(event) => event.preventDefault()} className={'flex justify-center'}>
            {/*<div className={'relative'}>*/}
            {/*    <input type={'text'} placeholder={'Email Address'} className={'rounded-lg px-4 py-3 w-60 bg-black bg-opacity-60 border border-gray-500 mr-2'} ref={email} />*/}
            {/*    <input type={'password'} placeholder={'Password'} className={'rounded-lg px-4 py-3 w-60 bg-black bg-opacity-60 border border-gray-500'} ref={password} />*/}
            {/*    <p className={'absolute text-red-600 text-sm'}>*/}
            {/*        {isErrorMessage}*/}
            {/*    </p>*/}
            {/*</div>*/}
            <button className={'bg-red-600 text-white font-bold text-2xl rounded-lg px-8 py-2 ml-2 cursor-pointer'} onClick={handleClick}>Get Started</button>
        </form>
    );
};

export default Signup;