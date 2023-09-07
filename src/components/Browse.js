import React from 'react';
import {useGetNowPlayingMoviesQuery} from '../store/services/nowPlayingMoviesList';
import Spinner from './Spinner';

const Browse = () => {

    const {data, error, isLoading} = useGetNowPlayingMoviesQuery();

    if(isLoading) return <Spinner />;

    if(error) {
        return (
                <div>
                    {error.message}
                </div>
            );
    }
    console.log('data', data);

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         accept: 'application/json',
    //         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDgwNmVhY2JhMTM1ZWI4MzhlYjk3MDg3ZWU2ZWJjMCIsInN1YiI6IjY0Zjg4MzdhNWYyYjhkMDBhYmNjODJmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jWSTFdJegfA2DGrBr5eclfbSgVu_A-hVx3Jsggp4IWk'
    //     }
    // };
    //
    // const nowPlayingMoviesList =  async () => {
    //     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    //     const response = await data.json();
    //     console.log('response', response);
    // };
    //
    // useEffect(() => {
    //     nowPlayingMoviesList().then(() => {
    //         console.log('resolve');
    //     }).catch((error) => {
    //         console.log('error', error);
    //     });
    // }, []);

    return (
        <div>
            I am from browse page
        </div>
    );
};

export default Browse;