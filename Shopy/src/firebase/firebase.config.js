
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyhfYIL_GlZbYNNm-sBE-hWnizwgig3Oo",
  authDomain: "shopy-c829f.firebaseapp.com",
  projectId: "shopy-c829f",
  storageBucket: "shopy-c829f.appspot.com",
  messagingSenderId: "197162486445",
  appId: "1:197162486445:web:c33bddec4817a9291f9424"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;