// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCmwTJ9E9RSRCpYTldzf5TwZHIrgsrtwOE',
    authDomain: 'netflix-351d5.firebaseapp.com',
    projectId: 'netflix-351d5',
    storageBucket: 'netflix-351d5.appspot.com',
    messagingSenderId: '593036756218',
    appId: '1:593036756218:web:5a5f3208831bf984993543',
    measurementId: 'G-5SPHZ1TFLY'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();