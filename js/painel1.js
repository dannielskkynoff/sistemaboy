import { auth } from './firebase-config.js';
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Usuário não está logado, redireciona para a página de login
    window.location.href = "login.html";
  } else {
    // Usuário está logado, continua carregando o resto do script
    // (seu código JavaScript existente aqui)
    // ...
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const slidePanel = document.getElementById('slide-panel');
    const btnChamarEntregador = document.getElementById('btn-chamar-entregador');
    const spanClose = document.querySelector('.close-panel');
    const formEntrega = document.getElementById('form-entrega');
    const mainContent = document.querySelector('main');

    function openPanel() {
        slidePanel.classList.add('open');
        mainContent.classList.add('panel-open');
    }

    function closePanel() {
        slidePanel.classList.remove('open');
        formEntrega.reset();
        mainContent.classList.remove('panel-open');
    }

    btnChamarEntregador.addEventListener('click', (event) => {
        event.preventDefault();
        openPanel();
    });

    spanClose.addEventListener('click', closePanel);

    mainContent.addEventListener('click', (event) => {
        if (slidePanel.classList.contains('open') && !slidePanel.contains(event.target) && event.target !== btnChamarEntregador) {
            closePanel();
        }
    });

    formEntrega.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formEntrega);
        const dadosEntrega = {};
        formData.forEach((value, key) => dadosEntrega[key] = value);

        if (!dadosEntrega.nome || !dadosEntrega.contato || !dadosEntrega.bairro || !dadosEntrega.rua) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        console.log("Dados da Entrega:", dadosEntrega);
        alert("Solicitação de entrega enviada com sucesso!");

        closePanel();
    });
});