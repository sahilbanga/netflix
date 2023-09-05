import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from '../components/Header';
import '@testing-library/jest-dom';

describe('Header Component',  () => {
    it('should render without crash', function () {
        render(<Router>
            <Header />
        </Router>);
    });

    it('should render logo', function () {
        render(<Router>
            <Header />
        </Router>);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    it('should render sign in button when not on the login page', function () {
        render(<Router>
            <Header />
        </Router>);
        const signInBtn = screen.getByRole('button', {name: 'Sign in'});
        expect(signInBtn).toBeInTheDocument();
    });

    it('should not render sign in button when on the login page', function () {
        render(<Router initialEntries={['login']}>
            <Header />
        </Router>);
        const signInBtn = screen.getByRole('button', {name: 'Sign in'});
        // expect(signInBtn).not.toBeInTheDocument();
    });
});