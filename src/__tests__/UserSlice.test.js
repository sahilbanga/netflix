// import { addUser, removeUser } from '../store/slices/userSlice';
//
// describe('userSlice', () => {
//     it('should create an action to add a user', () => {
//         const user = { /* User data */ };
//         const expectedAction = {
//             type: addUser.type,
//             payload: user,
//         };
//         expect(addUser(user)).toEqual(expectedAction);
//     });
//
//     it('should create an action to remove a user', () => {
//         const expectedAction = {
//             type: removeUser.type,
//         };
//         expect(removeUser()).toEqual(expectedAction);
//     });
// });


import userReducer, { addUser, removeUser } from '../store/slices/userSlice';

describe('userSlice Reducer', () => {
        it('should create an action to add a user', () => {
        const user = { /* User data */ };
        const expectedAction = {
            type: addUser.type,
            payload: user,
        };
        expect(addUser(user)).toEqual(expectedAction);
    });

    it('should create an action to remove a user', () => {
        const expectedAction = {
            type: removeUser.type,
        };
        expect(removeUser()).toEqual(expectedAction);
    });

    it('should return the initial state', () => {
        const initialState = null;
        expect(userReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle ADD_USER', () => {
        const user = { /* User data */ };
        const action = addUser(user);
        const newState = userReducer(null, action);
        expect(newState).toEqual(user);
    });

    it('should handle REMOVE_USER', () => {
        const prevState = { /* Previous user data */ };
        const action = removeUser();
        const newState = userReducer(prevState, action);
        expect(newState).toEqual(null);
    });
});

