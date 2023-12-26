import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "fd-1-final-project-e0f43.firebaseapp.com",
    projectId: "fd-1-final-project-e0f43",
    storageBucket: "fd-1-final-project-e0f43.appspot.com",
    messagingSenderId: "443087492012",
    appId: "1:443087492012:web:a8d6aba4aaa63fdbbe2009"
};

export const firebaseApp = initializeApp(firebaseConfig);