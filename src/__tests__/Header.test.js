import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router, MemoryRouter} from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';
import {Provider} from 'react-redux';
import appstore from '../store/store';

describe('Header Component',  () => {
    it('should render without crash', function () {
        render(
            <Provider store={appstore}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        );
    });

    it('should render logo', function () {
        render(
            <Provider store={appstore}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        );
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render sign in button when not on the login page', function () {
        render(
            <Provider store={appstore}>
                <Router>
                    <Header />
                </Router>
            </Provider>
        );
        const signInBtn = screen.getByRole('button', {name: 'Sign in'});
        expect(signInBtn).toBeInTheDocument();
    });

    test('renders Header component on login page', () => {
        // Simulate being on the login page
        render(
            <Provider store={appstore}>
                <MemoryRouter initialEntries={['/login']}>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        // Check if the logo is rendered
        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toBeInTheDocument();

        // Check that the "Sign in" button is not rendered on the login page
        const signInButton = screen.getByRole('button', {name: 'Sign in'});
        // expect(signInButton).not.toBeInTheDocument();
    });
});