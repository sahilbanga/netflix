import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('/login');

    return (
        <header className={'w-full bg-gradient-to-b from-black text-white py-2 absolute z-10'}>
            <div className={'max-w-7xl m-auto'}>
                <div className={'flex justify-between'}>
                    <div>
                        <Link to={'/'}>
                            <img className={'w-44'} src={'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'}
                             alt={'logo'} />
                        </Link>
                    </div>

                    {!isLogin && (
                        <div className={'pt-4'}>
                            <Link to={'/login'}>
                                <button className={'bg-red-600 py-2 px-4 rounded-lg font-bold text-sm cursor-pointer'}>
                                    Sign in
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;