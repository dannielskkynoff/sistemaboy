const logoutButton = document.getElementById('btn-sair');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
} else {
    console.error('Botão de logout não encontrado!');
}
