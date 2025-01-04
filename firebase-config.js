import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth-compat.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjDxtzK9ELCyxLNgmd0ZYDhB1o-bPLWr8",
    authDomain: "nuxpro-gestao-de-entregas.firebaseapp.com",
    projectId: "nuxpro-gestao-de-entregas",
    storageBucket: "nuxpro-gestao-de-entregas.firebasestorage.app",
    messagingSenderId: "483551326765",
    appId: "1:483551326765:web:e77ef1e29d69f58efa7ea4",
    measurementId: "G-FVR4EXZR93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
