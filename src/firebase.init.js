import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
     apiKey: "AIzaSyAw2YoyY6RDy5mmvHdTiG7fpNkes2xj4bc",
     authDomain: "genius-cars-services.firebaseapp.com",
     projectId: "genius-cars-services",
     storageBucket: "genius-cars-services.appspot.com",
     messagingSenderId: "551802473",
     appId: "1:551802473:web:c3bcffbebfd93646c574f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;