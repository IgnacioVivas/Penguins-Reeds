// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORAGE_APIKEY,
  authDomain: process.env.REACT_APP_FIRESTORAGE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIRESTORAGE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRESTORAGE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORAGE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIRESTORAGE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const str = getStorage(app);

export default str;