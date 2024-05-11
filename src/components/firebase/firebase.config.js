// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApQY4uxYIr2OiD_rHgCMeWFPa_oHH2btw",
    authDomain: "job-portal-abrar.firebaseapp.com",
    projectId: "job-portal-abrar",
    storageBucket: "job-portal-abrar.appspot.com",
    messagingSenderId: "1055021685436",
    appId: "1:1055021685436:web:1699af8dfe7db6fc988eb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;