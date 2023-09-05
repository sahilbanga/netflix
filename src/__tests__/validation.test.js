import {isEmailValid, isPasswordValid} from '../utils/validation';

describe('Test cases for isEmailValid', () => {
    it('should return Email Id is required for an empty email', function () {
        const result = isEmailValid('');
        expect(result).toBe('Email Id is required');
    });

    it('should return Email Id is not valid for an invalid email', function () {
        const result = isEmailValid('sahil45');
        expect(result).toBe('Email Id is not valid');
    });

    it('should return null for valid email', function () {
        const result = isEmailValid('sahilrs2008@gmail.com');
        expect(result).toBeNull();
    });
});

describe('Test cases for isPasswordValid', () => {
    it('should return Password is required for empty password', function () {
        const result = isPasswordValid('');
        expect(result).toBe('Password is required');
    });

    it('should return Password is not valid for invalid password', function () {
        const result = isPasswordValid('#245');
        expect(result).toBe('Password is not valid');
    });

    it('should return null for valid password', function () {
        const result = isPasswordValid('Sahil@12345');
        expect(result).toBeNull();
    });
})