import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';

const appstore = configureStore({
    reducer: {
        user: userReducer
    }
});

export default appstore;