import React from 'react';
import Signup from './Signup';

const GetStarted = () => {
    return (
        <div className={'text-white'}>
            <img className={'w-full h-full'} src={'https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'}
                 alt={'bg image'} />
            <div className={'absolute w-full h-full top-0 bg-gradient-to-t from-black opacity-100'}>
                <div className={'max-w-7xl m-auto text-center flex h-full justify-center flex-col'}>
                    <h1 className={'font-bold text-5xl'}>Enjoy big movies, hit series and more from ₹ 149.</h1>
                    <p className={'text-2xl py-4'}>Join today. Cancel anytime.</p>
                    <p className={'text-xl'}>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className={'mt-8'}>
                        <Signup />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;