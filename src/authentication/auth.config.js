// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ovMCAZmsSRIB6H50CdiD015Hwd1WMcg",
  authDomain: "exporeactnative-ad499.firebaseapp.com",
  databaseURL: "https://exporeactnative-ad499-default-rtdb.firebaseio.com",
  projectId: "exporeactnative-ad499",
  storageBucket: "exporeactnative-ad499.appspot.com",
  messagingSenderId: "162971688372",
  appId: "1:162971688372:web:6128967c9402d2b82e66e1",
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

const Auth = getAuth(App);
export default Auth;
