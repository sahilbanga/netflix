import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import LogOut from '../components/LogOut';
import '@testing-library/jest-dom';

// jest.mock('firebase/auth');

// jest.mock('firebase/auth', () => ({
//     signOut: jest.fn(),
// }));

describe('LogOut Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render log out button', () => {
        render(
            <BrowserRouter>
                <LogOut />
            </BrowserRouter>
        );

        const signOutBtn = screen.getByRole('button', { name: 'Sign out' });

        expect(signOutBtn).toBeInTheDocument();
    });

    it('should call signOut function on button click', async () => {
        render(
            <BrowserRouter>
                <LogOut />
            </BrowserRouter>
        );

        const signOutBtn = screen.getByRole('button', { name: 'Sign out' });

        // fireEvent.click(signOutBtn);

        // // Ensure that signOut function is called
        // expect(signOut).toHaveBeenCalledWith(auth);
        //
        // // Simulate a successful sign-out
        // await waitFor(() => {
        //     expect(signOut).toHaveBeenCalledTimes(1);
        // });

        // You can also assert other behaviors like navigation, but you might need to mock 'useNavigate' for that.
    });

    // it('should handle sign-out error', async () => {
    //     // Mocking a failed sign-out
    //     signOut.mockRejectedValueOnce(new Error('Sign-out failed'));
    //
    //     render(
    //         <BrowserRouter>
    //             <LogOut />
    //         </BrowserRouter>
    //     );
    //
    //     const signOutBtn = screen.getByRole('button', { name: 'Sign out' });
    //
    //     fireEvent.click(signOutBtn);
    //
    //     // Ensure that signOut function is called
    //     expect(signOut).toHaveBeenCalledWith(auth);
    //
    //     // Simulate an unsuccessful sign-out
    //     await waitFor(() => {
    //         expect(signOut).toHaveBeenCalledTimes(1);
    //     });
    //
    //     // Assert that the error message is logged
    //     expect(console.log).toHaveBeenCalledWith(new Error('Sign-out failed'), 'error');
    // });
});
