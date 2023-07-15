// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBIVCak-8jQHBwd-qkdzCsM6ora5GixCAI',
  authDomain: 'lorem-ipsum-676.firebaseapp.com',
  projectId: 'lorem-ipsum-676',
  storageBucket: 'lorem-ipsum-676.appspot.com',
  messagingSenderId: '835192308565',
  appId: '1:835192308565:web:656bba8775f9fe1a4fe5dc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
