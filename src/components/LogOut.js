import React from 'react';
import {signOut} from 'firebase/auth';
import {auth} from '../utils/firebase';
import {useNavigate} from 'react-router-dom';

const LogOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            console.log(error, 'error');
        });
    };

    return (
        <div className={'pt-4'}>
            <button className={'bg-red-600 py-2 px-4 rounded-lg font-bold text-sm cursor-pointer'} onClick={handleSignOut}>
                Sign out
            </button>
        </div>
    );
};

export default LogOut;