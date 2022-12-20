import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX-igZvgRdZhe4qC7aJgonWzN1XI3XNm8",
  authDomain: "simpleform-ce2e0.firebaseapp.com",
  projectId: "simpleform-ce2e0",
  storageBucket: "simpleform-ce2e0.appspot.com",
  messagingSenderId: "1034395705732",
  appId: "1:1034395705732:web:f2edd5be516282f6fb3dd1",
  measurementId: "G-2PPT8BJSHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);