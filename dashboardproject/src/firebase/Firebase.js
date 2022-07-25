// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtZJcSqztwMNzGZC7Sl6oAym-olT-5LKM",
  authDomain: "dashboardproject-6c551.firebaseapp.com",
  projectId: "dashboardproject-6c551",
  storageBucket: "dashboardproject-6c551.appspot.com",
  messagingSenderId: "775367543322",
  appId: "1:775367543322:web:f981bd9180fb3b92029fa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth(app);

export {auth};
export const db = getFirestore(app);
export const storage = getStorage();