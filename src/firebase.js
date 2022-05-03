// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAP46UtEbRv7HekYln4718J2rM72TmQvk",
  authDomain: "mypage3-59637.firebaseapp.com",
  projectId: "mypage3-59637",
  storageBucket: "mypage3-59637.appspot.com",
  messagingSenderId: "632086564336",
  appId: "1:632086564336:web:c83daf9bfe2cbf3972e135",
  measurementId: "G-ZFN5WWDKS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;