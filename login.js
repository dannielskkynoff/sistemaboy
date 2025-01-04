import { app } from './firebase-config.js'; // Importa o app
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth-compat.js";

const auth = getAuth(app); // Inicializa o auth aqui

// Resto do código de login (igual ao anterior)
// ...
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorMessage.textContent = "";

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("Login bem-sucedido:", userCredential.user);
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Erro de login:", error);
            let message = "Erro de login.";
            switch (error.code) {
                case 'auth/invalid-email':
                    message = "Email inválido.";
                    break;
                case 'auth/user-not-found':
                    message = "Usuário não encontrado.";
                    break;
                case 'auth/wrong-password':
                    message = "Senha incorreta.";
                    break;
                case 'auth/missing-email':
                    message = "Por favor, insira um email.";
                    break;
                case 'auth/missing-password':
                    message = "Por favor, insira uma senha.";
                    break;
                default:
                  message = error.message;
            }
            errorMessage.textContent = message;
        });
});
