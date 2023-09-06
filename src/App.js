import React from 'react';
import ReactDOM from 'react-dom/client';
import GetStarted from './components/GetStarted';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import AppLayout from './AppLayout';
import Login from './components/Login';
import './styles/index.css';
import {Provider} from 'react-redux';
import appstore from './store/store';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <GetStarted />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={appstore}><RouterProvider router={appRouter}/></Provider>);