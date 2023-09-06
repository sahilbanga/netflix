import React, {useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './utils/firebase';
import {useDispatch} from 'react-redux';
import {addUser, removeUser} from './store/slices/userSlice';

const AppLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const {uid, email} = user;
                dispatch(addUser({
                    uid,
                    email
                }));
                navigate('/browse');
                // ...
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, []);
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default AppLayout;