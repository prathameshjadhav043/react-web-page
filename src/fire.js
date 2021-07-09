import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCGHlj8zS8kHKIHVTmkzJS96q8o-XFK1Ms",
    authDomain: "login-b0340.firebaseapp.com",
    projectId: "login-b0340",
    storageBucket: "login-b0340.appspot.com",
    messagingSenderId: "24222109658",
    appId: "1:24222109658:web:1f2892722f137e7d143ae3"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;