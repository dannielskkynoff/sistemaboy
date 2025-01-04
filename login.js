import { app } from './firebase-config.js'; // Importa o app inicializado
import * as firebase from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth-compat.js";

const auth = firebase.getAuth(app); // Inicializa o auth corretamente

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorMessage.textContent = ""; // Limpa mensagens de erro anteriores

    firebase.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login bem-sucedido
            console.log("Login bem-sucedido:", userCredential.user);
            window.location.href = "dashboard.html"; // Redireciona para o painel
        })
        .catch((error) => {
            // Tratamento de erros de login
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
                    message = `Erro de autenticação: ${error.message}`; // Mensagem de erro mais detalhada
            }
            errorMessage.textContent = message; // Exibe a mensagem de erro na tela
        });
});
