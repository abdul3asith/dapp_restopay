import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXJa8XP1kT-1kS2u0SCWr4iuU0Dh6zL_o",
  authDomain: "otpauth-7db8b.firebaseapp.com",
  projectId: "otpauth-7db8b",
  storageBucket: "otpauth-7db8b.appspot.com",
  messagingSenderId: "1081625993294",
  appId: "1:1081625993294:web:eae7cb42c4490c41afe31f",
  measurementId: "G-5Y20JWGPKL"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app};