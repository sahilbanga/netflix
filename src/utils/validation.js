export const isEmailValid = (email) => {
    const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    if(!email) return 'Email Id is required';
    if(!validEmail) return 'Email Id is not valid';
    return null;
};

export const isPasswordValid = (password) => {
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!password) return 'Password is required';
    if(!validPassword) return 'Password is not valid';
    return null;
};