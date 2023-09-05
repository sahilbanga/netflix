import React from 'react';

const Header = () => {
    return (
        <header className={'w-full bg-gradient-to-b from-black text-white py-2 absolute'}>
            <div className={'max-w-7xl m-auto'}>
                <div className={'flex justify-between'}>
                    <div>
                        <img className={'w-44'} src={'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'}
                             alt={'logo'} />
                    </div>

                    <div className={'pt-4'}>
                        <button className={'bg-red-600 py-2 px-4 rounded-lg font-bold text-sm'}>Sign in</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;